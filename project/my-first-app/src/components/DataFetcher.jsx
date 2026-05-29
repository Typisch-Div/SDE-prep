import { useState, useEffect } from 'react';
import './DataFetcher.css';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    console.log('Component mounted - fetching data');

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch posts from JSONPlaceholder API
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();
        setPosts(jsonData);
        setData('Data fetched successfully');
      } catch (err) {
        setError(err.message);
        console.error('Error fetching:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function (called on unmount)
    return () => {
      console.log('Component unmounting - cleanup');
    };
  }, []); // Empty dependency array = run once on mount

  // Another useEffect that runs when data changes
  useEffect(() => {
    if (posts.length > 0) {
      console.log('Posts updated:', posts.length);
    }
  }, [posts]); // Runs when posts changes

  if (loading) {
    return (
      <div className="data-fetcher-card">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="data-fetcher-card">
        <div className="error">
          <p>❌ Error: {error}</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="data-fetcher-card">
      <h2>API Data Fetcher (useEffect Demo)</h2>
      <p className="success">✅ {data}</p>

      <div className="posts-container">
        <h3>Latest Posts ({posts.length})</h3>

        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h4>Post #{post.id}</h4>
            <p className="post-title">{post.title}</p>
            <p className="post-body">{post.body.substring(0, 100)}...</p>
            <a href={`#post-${post.id}`} className="read-more">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataFetcher;