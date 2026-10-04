// Representative Data for BarterSkills and QuickShow Redesigns

export const OWNER_INFO = {
  name: "Divanshu Sharma",
  email: "sdivanshu558@gmail.com",
  phone: "7888321184",
  github: "https://github.com/Typisch-Div",
  linkedin: "https://www.linkedin.com/in/divanshusharma-dev/",
  leetcode: "https://leetcode.com/u/TypischDiv/"
};

// ==========================================
// BARTERSKILLS DATA
// ==========================================
export const barterSkillsData = {
  currentCreator: {
    name: "Divanshu Sharma",
    handle: "@divanshu_dev",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    banner: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    subscribers: "128K",
    videosCount: 42,
    totalViews: "1.4M",
    isVerified: true,
    isPremium: true
  },
  categories: [
    { id: "all", label: "All", icon: "✨" },
    { id: "ai", label: "AI & Neural Networks", icon: "🤖" },
    { id: "fullstack", label: "Fullstack Architecture", icon: "💻" },
    { id: "system-design", label: "System Design", icon: "⚡" },
    { id: "algorithms", label: "Algorithms & DSA", icon: "🧩" },
    { id: "devops", label: "Cloud & DevOps", icon: "☁️" },
    { id: "premium", label: "Premium Masterclasses", icon: "⭐" }
  ],
  videos: [
    {
      id: "bs-1",
      title: "Building Distributed Real-Time Systems at Scale with WebSockets & Redis",
      category: "system-design",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      duration: "34:12",
      views: "184.2K",
      publishedAt: "2 days ago",
      creator: {
        name: "Divanshu Sharma",
        handle: "@divanshu_dev",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80",
        verified: true
      },
      isPremium: true,
      likes: "12.4K",
      description: "A deep dive into building horizontally scalable real-time architectures. We explore Redis Pub/Sub, Socket clusters, memory optimization, and zero-downtime deployment strategies.",
      tags: ["System Design", "Redis", "WebSockets", "Node.js", "Scale"],
      aiSummary: {
        highlights: [
          "Understanding the limits of single-node WebSocket connections (max file descriptors & memory usage)",
          "Setting up Redis Streams and Pub/Sub adapters for cross-node broadcast",
          "Implementing heartbeat ping-pongs and automatic reconnect exponential backoffs",
          "Benchmarking 100,000 concurrent client connections with k6 and Grafana"
        ],
        transcriptPreview: "[00:00] Welcome back engineers! Today we are tackling high-concurrency real-time engines...\n[05:20] Here is how the Redis pub/sub broker dispatches packet frames across worker nodes...\n[18:45] Notice how socket heartbeat prevents half-open connection zombie states...",
        quiz: [
          { question: "Why is Redis pub/sub critical when clustering WebSockets?", answer: "It allows distinct Node server instances to broadcast messages across shared subscribers." }
        ]
      },
      comments: [
        {
          id: "c1",
          author: "Alex Rivera",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&q=80",
          time: "1 day ago",
          text: "The diagram showing Redis cluster backpressure handling completely solved our team's sync issue. Incredible production insights!",
          likes: 248
        },
        {
          id: "c2",
          author: "Sophia Chen",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80",
          time: "18 hours ago",
          text: "The AI summary feature on BarterSkills is a game changer for skimming through complex 30+ min architecture breakdowns.",
          likes: 95
        }
      ]
    },
    {
      id: "bs-2",
      title: "Mastering Large Language Model Fine-Tuning with LoRA and QLoRA",
      category: "ai",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      duration: "48:05",
      views: "249.8K",
      publishedAt: "5 days ago",
      creator: {
        name: "Elena Rostova",
        handle: "@elena_ai",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=80",
        verified: true
      },
      isPremium: true,
      likes: "19.1K",
      description: "Train open weights models on consumer hardware using 4-bit quantization and Parameter-Efficient Fine-Tuning. Step-by-step notebook included.",
      tags: ["AI", "LLMs", "PyTorch", "HuggingFace", "LoRA"]
    },
    {
      id: "bs-3",
      title: "Clean Architecture in React 19: Fullstack Server Components & Actions",
      category: "fullstack",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      duration: "26:40",
      views: "112.5K",
      publishedAt: "1 week ago",
      creator: {
        name: "Marcus Vance",
        handle: "@marcus_v",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=128&q=80",
        verified: false
      },
      isPremium: false,
      likes: "8.7K",
      description: "Stop cluttering your React components with ad-hoc fetchers. Learn how to structure clean business domains, server actions, and optimistic UI mutations.",
      tags: ["React 19", "JavaScript", "Frontend", "Clean Code"]
    },
    {
      id: "bs-4",
      title: "Graph Algorithms Visualized: Dijkstra, A*, and Tarjan's SCC in Practice",
      category: "algorithms",
      thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
      duration: "41:15",
      views: "93.4K",
      publishedAt: "2 weeks ago",
      creator: {
        name: "Divanshu Sharma",
        handle: "@divanshu_dev",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80",
        verified: true
      },
      isPremium: false,
      likes: "7.2K",
      description: "Interactive visual proof and C++/Python implementations of core graph algorithms frequently asked in FAANG technical interviews.",
      tags: ["DSA", "LeetCode", "Graphs", "Algorithms"]
    },
    {
      id: "bs-5",
      title: "Kubernetes Production Blueprint: GitOps with ArgoCD & Cilium eBPF",
      category: "devops",
      thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
      duration: "52:30",
      views: "64.1K",
      publishedAt: "3 weeks ago",
      creator: {
        name: "Tariq Al-Mansoor",
        handle: "@tariq_cloud",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80",
        verified: true
      },
      isPremium: true,
      likes: "5.4K",
      description: "Zero-trust service mesh networking with Cilium eBPF and automated multi-environment GitOps deployments via ArgoCD.",
      tags: ["DevOps", "Kubernetes", "GitOps", "eBPF", "Docker"]
    },
    {
      id: "bs-6",
      title: "End-to-End Type-Safe Microservices with gRPC and Protocol Buffers",
      category: "system-design",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      duration: "38:44",
      views: "81.9K",
      publishedAt: "1 month ago",
      creator: {
        name: "Divanshu Sharma",
        handle: "@divanshu_dev",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80",
        verified: true
      },
      isPremium: true,
      likes: "6.9K",
      description: "High throughput service-to-service communication replacing REST with binary HTTP/2 gRPC streaming.",
      tags: ["gRPC", "Protobuf", "Go", "Microservices"]
    }
  ],
  dashboardStats: {
    views: "248.5K",
    viewsGrowth: "+24.8%",
    watchTimeHours: "14,820",
    watchGrowth: "+19.2%",
    subscribersGained: "3,420",
    subGrowth: "+31.4%",
    estimatedEarnings: "$4,290.00",
    earningsGrowth: "+18.5%",
    recentVideos: [
      { id: "bs-1", title: "Building Distributed Real-Time Systems at Scale", status: "Published", views: "184,200", likes: "12,400", date: "Oct 2, 2026", monetization: true },
      { id: "bs-4", title: "Graph Algorithms Visualized: Dijkstra & A*", status: "Published", views: "93,400", likes: "7,200", date: "Sep 20, 2026", monetization: true },
      { id: "bs-6", title: "End-to-End Type-Safe Microservices with gRPC", status: "Published", views: "81,900", likes: "6,900", date: "Sep 4, 2026", monetization: true },
      { id: "draft-1", title: "High-Performance Vector Databases from Scratch", status: "Draft", views: "—", likes: "—", date: "Oct 4, 2026", monetization: false }
    ]
  },
  chatMessages: [
    { id: 1, sender: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=80", text: "Hey Divanshu! Loved your latest distributed systems breakdown.", time: "10:14 AM", isMe: false },
    { id: 2, sender: "Divanshu Sharma", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80", text: "Thanks Elena! Are we still collaborating on the multi-agent LLM workflow next week?", time: "10:16 AM", isMe: true },
    { id: 3, sender: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=80", text: "Absolutely! I have the benchmark notebooks ready for our community upload.", time: "10:18 AM", isMe: false }
  ]
};

// ==========================================
// QUICKSHOW DATA
// ==========================================
export const quickShowData = {
  activeHero: {
    id: "324544",
    title: "In the Lost Lands",
    tagline: "She seeks the power to free her people.",
    overview: "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide Boyce must outwit and outfight both man and demon.",
    backdrop: "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
    poster: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    rating: 8.4,
    votes: "15.2K",
    runtime: "102 min",
    releaseDate: "2025-02-27",
    genres: ["Action", "Fantasy", "Adventure"],
    trailerUrl: "https://www.youtube.com/watch?v=WpW36ldAqnM",
    hall: "IMAX Laser 4K 3D",
    showtimes: ["11:00 AM", "02:30 PM", "06:15 PM", "09:45 PM"]
  },
  movies: [
    {
      id: "324544",
      title: "In the Lost Lands",
      tagline: "She seeks the power to free her people.",
      overview: "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power.",
      poster: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
      rating: 8.4,
      runtime: "102 min",
      genres: ["Action", "Fantasy", "Adventure"],
      releaseDate: "Feb 27, 2025",
      isFeatured: true,
      price: 18,
      casts: [
        { name: "Milla Jovovich", role: "Gray Alys", image: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
        { name: "Dave Bautista", role: "Boyce", image: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
        { name: "Arly Jover", role: "Ash", image: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
        { name: "Amara Okereke", role: "Melisandre", image: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" }
      ]
    },
    {
      id: "1232546",
      title: "Until Dawn",
      tagline: "Every night a different nightmare.",
      overview: "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers.",
      poster: "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
      rating: 7.8,
      runtime: "103 min",
      genres: ["Horror", "Mystery", "Thriller"],
      releaseDate: "Apr 23, 2025",
      isFeatured: true,
      price: 16,
      casts: [
        { name: "Amara Okereke", role: "Clover", image: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" },
        { name: "Dave Bautista", role: "The Ranger", image: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
        { name: "Simon Lööf", role: "Sam", image: "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg" }
      ]
    },
    {
      id: "552524",
      title: "Lilo & Stitch",
      tagline: "Hold on to your coconuts.",
      overview: "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
      poster: "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
      rating: 8.9,
      runtime: "108 min",
      genres: ["Family", "Comedy", "Sci-Fi"],
      releaseDate: "May 17, 2025",
      isFeatured: true,
      price: 15,
      casts: [
        { name: "Caoilinn Springall", role: "Lilo", image: "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg" },
        { name: "Dave Bautista", role: "Jumba", image: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" }
      ]
    },
    {
      id: "668489",
      title: "Havoc",
      tagline: "No law. Only disorder.",
      overview: "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
      poster: "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
      rating: 7.9,
      runtime: "107 min",
      genres: ["Action", "Crime", "Thriller"],
      releaseDate: "Apr 25, 2025",
      isFeatured: false,
      price: 17,
      casts: [
        { name: "Tom Hardy", role: "Walker", image: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
        { name: "Dave Bautista", role: "Chief", image: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" }
      ]
    },
    {
      id: "575265",
      title: "Mission: Impossible - The Final Reckoning",
      tagline: "Our lives are the sum of our choices.",
      overview: "Ethan Hunt and team continue their search for the terrifying AI known as the Entity with the world's governments on their trail.",
      poster: "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
      rating: 9.1,
      runtime: "170 min",
      genres: ["Action", "Adventure", "Thriller"],
      releaseDate: "May 23, 2025",
      isFeatured: true,
      price: 22,
      casts: [
        { name: "Tom Cruise", role: "Ethan Hunt", image: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
        { name: "Hayley Atwell", role: "Grace", image: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" }
      ]
    },
    {
      id: "986056",
      title: "Thunderbolts*",
      tagline: "Everyone deserves a second shot.",
      overview: "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission.",
      poster: "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
      rating: 8.6,
      runtime: "127 min",
      genres: ["Action", "Sci-Fi", "Adventure"],
      releaseDate: "Apr 30, 2025",
      isFeatured: false,
      price: 19,
      casts: [
        { name: "Florence Pugh", role: "Yelena Belova", image: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
        { name: "Sebastian Stan", role: "Bucky Barnes", image: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" }
      ]
    }
  ],
  dates: [
    { day: "TODAY", date: "04", month: "OCT", active: true },
    { day: "SUN", date: "05", month: "OCT", active: false },
    { day: "MON", date: "06", month: "OCT", active: false },
    { day: "TUE", date: "07", month: "OCT", active: false },
    { day: "WED", date: "08", month: "OCT", active: false },
    { day: "THU", date: "09", month: "OCT", active: false }
  ],
  sampleBookings: [
    {
      id: "QS-892401",
      movie: "In the Lost Lands",
      theater: "Starlight Prime Cinema, Screen 1 (Dolby Atmos)",
      showTime: "Today at 06:15 PM",
      seats: ["E7", "E8"],
      seatTier: "Premium Lounger",
      totalPrice: "$36.00",
      qrCodeData: "QS-BOOKING-892401-DIVANSHU-SHARMA",
      status: "Confirmed",
      poster: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg"
    }
  ],
  adminData: {
    totalRevenue: "$24,580",
    totalBookings: 842,
    activeTheaters: 12,
    activeShows: [
      { id: "S-101", movie: "In the Lost Lands", screen: "Screen 1 (IMAX)", time: "06:15 PM", price: "$18.00", occupancy: "92%", status: "Selling Fast" },
      { id: "S-102", movie: "Until Dawn", screen: "Screen 3 (Dolby)", time: "08:30 PM", price: "$16.00", occupancy: "78%", status: "Open" },
      { id: "S-103", movie: "Mission: Impossible", screen: "Screen 2 (VIP)", time: "09:00 PM", price: "$22.00", occupancy: "96%", status: "Almost Full" },
      { id: "S-104", movie: "Lilo & Stitch", screen: "Screen 4 (Family)", time: "04:00 PM", price: "$15.00", occupancy: "65%", status: "Open" }
    ]
  }
};
