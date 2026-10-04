// ==========================================================================
// DUAL REDESIGN INTERACTIVE APPLICATION LOGIC
// BarterSkills (Creator & Video Platform) & QuickShow (Cinema & Ticketing)
// Designed for Divanshu Sharma
// ==========================================================================

import { OWNER_INFO, barterSkillsData, quickShowData } from './data.js';

// Application State
const state = {
  currentPlatform: 'barterskills', // 'barterskills' | 'quickshow'
  currentScreen: 'bs-discovery',
  currentDevice: 'full',
  
  // BarterSkills State
  bsActiveCategory: 'all',
  bsActiveVideo: barterSkillsData.videos[0],
  bsIsSubscribed: false,
  bsIsLiked: false,
  bsLikesCount: 12400,
  bsActiveWatchTab: 'ai', // 'ai' | 'comments' | 'upnext'
  bsAiView: 'summary', // 'summary' | 'transcript' | 'quiz'
  bsComments: [...barterSkillsData.videos[0].comments],
  bsUploadTitle: 'Advanced Distributed Caching with Consistent Hashing',
  bsUploadCategory: 'system-design',
  bsUploadMonetization: 'premium',
  bsMessages: [...barterSkillsData.chatMessages],

  // QuickShow State
  qsActiveMovie: quickShowData.movies[0],
  qsActiveDate: '04',
  qsActiveGenre: 'all',
  qsSelectedSeats: ['E7', 'E8'],
  qsSeatTierPrice: 18,
  qsBookingConfirmed: null,
  qsWatchTrailerUrl: null
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderHud();
  renderApp();
  setupEventListeners();
});

// ==========================================
// RENDER CONTROLLERS
// ==========================================
function renderHud() {
  const isBs = state.currentPlatform === 'barterskills';
  document.body.className = isBs ? 'bs-mode' : 'qs-mode';

  // Sub-HUD Screens
  const subNav = document.getElementById('sub-hud-nav');
  if (!subNav) return;

  if (isBs) {
    subNav.innerHTML = `
      <button class="screen-tab ${state.currentScreen === 'bs-discovery' ? 'active' : ''}" data-screen="bs-discovery">🎬 Discovery & Feed</button>
      <button class="screen-tab ${state.currentScreen === 'bs-watch' ? 'active' : ''}" data-screen="bs-watch">📺 Cinema Watch Experience</button>
      <button class="screen-tab ${state.currentScreen === 'bs-dashboard' ? 'active' : ''}" data-screen="bs-dashboard">📊 Creator Studio & Analytics</button>
      <button class="screen-tab ${state.currentScreen === 'bs-upload' ? 'active' : ''}" data-screen="bs-upload">🚀 Video Upload Studio</button>
      <button class="screen-tab ${state.currentScreen === 'bs-profile' ? 'active' : ''}" data-screen="bs-profile">👤 Creator Profile</button>
      <button class="screen-tab ${state.currentScreen === 'bs-messages' ? 'active' : ''}" data-screen="bs-messages">💬 Community & DMs</button>
      <button class="screen-tab ${state.currentScreen === 'bs-legal' ? 'active' : ''}" data-screen="bs-legal">⚖️ Owner & Legal</button>
    `;
  } else {
    subNav.innerHTML = `
      <button class="screen-tab ${state.currentScreen === 'qs-home' ? 'active' : ''}" data-screen="qs-home">🍿 Cinema Billboard</button>
      <button class="screen-tab ${state.currentScreen === 'qs-movies' ? 'active' : ''}" data-screen="qs-movies">🎞️ Browse Catalog</button>
      <button class="screen-tab ${state.currentScreen === 'qs-details' ? 'active' : ''}" data-screen="qs-details">⭐ Movie Details & Cast</button>
      <button class="screen-tab ${state.currentScreen === 'qs-seats' ? 'active' : ''}" data-screen="qs-seats">💺 Curved Screen Seat Selection</button>
      <button class="screen-tab ${state.currentScreen === 'qs-ticket' ? 'active' : ''}" data-screen="qs-ticket">🎟️ Digital Boarding Pass</button>
      <button class="screen-tab ${state.currentScreen === 'qs-admin' ? 'active' : ''}" data-screen="qs-admin">🛡️ Cinema Admin Command</button>
      <button class="screen-tab ${state.currentScreen === 'qs-footer' ? 'active' : ''}" data-screen="qs-footer">📍 Owner Info & Cinema Footer</button>
    `;
  }

  // Bind screen tabs
  subNav.querySelectorAll('.screen-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const scr = e.currentTarget.getAttribute('data-screen');
      switchScreen(scr);
    });
  });
}

function renderApp() {
  const container = document.getElementById('app-main-viewport');
  if (!container) return;

  if (state.currentPlatform === 'barterskills') {
    container.innerHTML = renderBarterSkillsApp();
    bindBarterSkillsEvents();
  } else {
    container.innerHTML = renderQuickShowApp();
    bindQuickShowEvents();
  }
}

// ==========================================
// BARTERSKILLS TEMPLATES
// ==========================================
function renderBarterSkillsApp() {
  return `
    <div class="bs-app">
      <!-- Top Navigation -->
      <nav class="bs-nav">
        <div class="bs-logo" onclick="window.switchScreen('bs-discovery')">
          <div class="bs-logo-icon">⚡</div>
          <span>BarterSkills</span>
        </div>
        <div class="bs-search-bar">
          <span class="bs-search-icon">🔍</span>
          <input type="text" class="bs-search-input" id="bs-search" placeholder="Search architecture, AI, system design videos...">
        </div>
        <div class="bs-actions">
          <button class="bs-btn bs-btn-primary" onclick="window.switchScreen('bs-upload')">
            <span>+</span> Upload
          </button>
          <button class="bs-btn bs-btn-ghost" onclick="window.switchScreen('bs-dashboard')">
            Dashboard
          </button>
          <div class="owner-pill" onclick="window.openOwnerModal()" title="Platform Architect">
            <div class="owner-avatar">DS</div>
            <div class="owner-meta">
              <span class="owner-name">${OWNER_INFO.name}</span>
              <span class="owner-label">Creator</span>
            </div>
          </div>
        </div>
      </nav>

      <!-- Dynamic Views -->
      <div id="bs-screen-outlet">
        ${renderBarterSkillsScreen()}
      </div>

      <!-- Footer with Owner Info -->
      ${renderPlatformFooter('barterskills')}
    </div>
  `;
}

function renderBarterSkillsScreen() {
  switch (state.currentScreen) {
    case 'bs-discovery':
      return renderBsDiscovery();
    case 'bs-watch':
      return renderBsWatch();
    case 'bs-dashboard':
      return renderBsDashboard();
    case 'bs-upload':
      return renderBsUpload();
    case 'bs-profile':
      return renderBsProfile();
    case 'bs-messages':
      return renderBsMessages();
    case 'bs-legal':
      return renderBsLegal();
    default:
      return renderBsDiscovery();
  }
}

function renderBsDiscovery() {
  const filteredVideos = state.bsActiveCategory === 'all'
    ? barterSkillsData.videos
    : barterSkillsData.videos.filter(v => v.category === state.bsActiveCategory || (state.bsActiveCategory === 'premium' && v.isPremium));

  return `
    <!-- Hero Spotlight -->
    <div class="bs-hero">
      <div class="bs-hero-card">
        <div class="bs-hero-glow"></div>
        <div>
          <div class="bs-hero-tag">🔥 Featured Masterclass</div>
          <h1 class="bs-hero-title">Building Distributed Real-Time Systems at Scale with WebSockets & Redis</h1>
          <p class="bs-hero-desc">Learn how top engineering teams handle millions of persistent concurrent socket connections with Redis pub/sub clusters and zero-packet drop backpressure.</p>
          <div style="display:flex; gap:12px; align-items:center;">
            <button class="bs-btn bs-btn-primary" onclick="window.watchVideo('${barterSkillsData.videos[0].id}')">
              ▶ Watch Video (34:12)
            </button>
            <button class="bs-btn bs-btn-ghost" onclick="window.showToast('Added to Study Queue')">
              + Save to Queue
            </button>
          </div>
        </div>
        <div>
          <img src="${barterSkillsData.videos[0].thumbnail}" class="bs-hero-preview-img" onclick="window.watchVideo('${barterSkillsData.videos[0].id}')" alt="Spotlight Video">
        </div>
      </div>
    </div>

    <!-- Category Filter Row -->
    <div class="bs-categories">
      ${barterSkillsData.categories.map(cat => `
        <button class="bs-cat-pill ${state.bsActiveCategory === cat.id ? 'active' : ''}" onclick="window.setBsCategory('${cat.id}')">
          <span>${cat.icon}</span> ${cat.label}
        </button>
      `).join('')}
    </div>

    <!-- Video Feed Grid -->
    <div class="bs-content-section">
      <div class="bs-section-header">
        <h2 class="bs-section-title">Trending Engineering & Creator Content</h2>
        <span style="font-size:0.85rem; color:#94A3B8;">${filteredVideos.length} Curated Videos</span>
      </div>
      <div class="bs-video-grid">
        ${filteredVideos.map(v => `
          <div class="bs-video-card" onclick="window.watchVideo('${v.id}')">
            <div class="bs-thumb-wrapper">
              <img src="${v.thumbnail}" class="bs-thumb-img" alt="${v.title}">
              <div class="bs-duration-badge">${v.duration}</div>
              ${v.isPremium ? '<div class="bs-premium-badge">⭐ Premium</div>' : ''}
            </div>
            <div class="bs-card-body">
              <div class="bs-creator-row">
                <img src="${v.creator.avatar}" class="bs-creator-avatar" alt="${v.creator.name}">
                <div>
                  <div style="font-size:0.8rem; font-weight:700; color:#F1F5F9;">${v.creator.name} ${v.creator.verified ? '✓' : ''}</div>
                  <div style="font-size:0.7rem; color:#94A3B8;">${v.creator.handle}</div>
                </div>
              </div>
              <h3 class="bs-card-title">${v.title}</h3>
              <div class="bs-card-meta">
                <span>👁️ ${v.views} views</span>
                <span>•</span>
                <span>${v.publishedAt}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderBsWatch() {
  const v = state.bsActiveVideo;
  return `
    <div class="bs-watch-layout">
      <!-- Main Player & Details -->
      <div>
        <div class="bs-player-box">
          <img src="${v.thumbnail}" class="bs-player-screen" alt="${v.title}">
          <div class="bs-player-overlay">
            <div class="bs-progress-bar">
              <div class="bs-progress-filled"></div>
            </div>
            <div class="bs-player-controls">
              <div style="display:flex; align-items:center; gap:14px;">
                <button style="background:transparent; color:#FFF; font-size:1.2rem;" onclick="window.showToast('Playing stream...')">⏸</button>
                <span style="font-size:0.8rem; color:#CBD5E1;">12:45 / ${v.duration}</span>
                <span style="padding:2px 8px; border-radius:4px; background:rgba(255,255,255,0.15); font-size:0.7rem; font-weight:700;">4K HDR</span>
              </div>
              <div style="display:flex; align-items:center; gap:12px;">
                <button style="background:transparent; color:#FFF;" title="Audio">🔊</button>
                <button style="background:transparent; color:#FFF;" title="Theater Mode" onclick="window.showToast('Cinema Mode Enabled')">⛶</button>
              </div>
            </div>
          </div>
        </div>

        <div class="bs-watch-info">
          <h1 class="bs-watch-title">${v.title}</h1>
          <div class="bs-watch-actions-bar">
            <div class="bs-channel-block">
              <img src="${v.creator.avatar}" style="width:44px; height:44px; border-radius:50%; border:2px solid rgba(99,102,241,0.4);" alt="${v.creator.name}">
              <div>
                <div style="font-weight:700; font-size:0.95rem;">${v.creator.name} ${v.creator.verified ? '✓' : ''}</div>
                <div style="font-size:0.75rem; color:#94A3B8;">128K Subscribers</div>
              </div>
              <button class="bs-subscribe-btn ${state.bsIsSubscribed ? 'subscribed' : ''}" onclick="window.toggleSubscribe()">
                ${state.bsIsSubscribed ? '✓ Subscribed' : '🔔 Subscribe'}
              </button>
            </div>

            <div class="bs-interactive-pills">
              <button class="bs-action-pill ${state.bsIsLiked ? 'active' : ''}" onclick="window.toggleLike()">
                👍 <span>${state.bsLikesCount}</span>
              </button>
              <button class="bs-action-pill" onclick="window.showToast('Link copied to clipboard!')">
                🔗 Share
              </button>
              <button class="bs-action-pill" onclick="window.showToast('Saved to your playlist')">
                💾 Save
              </button>
            </div>
          </div>
        </div>

        <!-- Video Description -->
        <div style="background:var(--bs-surface); border:1px solid var(--bs-border); border-radius:var(--radius-lg); padding:20px; margin-top:20px;">
          <div style="font-size:0.85rem; color:#94A3B8; margin-bottom:8px;">${v.views} views • Uploaded ${v.publishedAt}</div>
          <p style="font-size:0.92rem; line-height:1.6; color:#E2E8F0;">${v.description}</p>
          <div style="display:flex; gap:8px; margin-top:14px; flex-wrap:wrap;">
            ${(v.tags || []).map(t => `<span style="padding:4px 10px; border-radius:12px; background:rgba(99,102,241,0.12); color:#A5B4FC; font-size:0.75rem; font-weight:600;">#${t}</span>`).join('')}
          </div>
        </div>

        <!-- Tabbed Section: AI Insights vs Comments -->
        <div class="bs-watch-tabs">
          <button class="bs-watch-tab-btn ${state.bsActiveWatchTab === 'ai' ? 'active' : ''}" onclick="window.setWatchTab('ai')">
            🤖 AI Video Assistant
          </button>
          <button class="bs-watch-tab-btn ${state.bsActiveWatchTab === 'comments' ? 'active' : ''}" onclick="window.setWatchTab('comments')">
            💬 Discussion (${state.bsComments.length})
          </button>
        </div>

        <!-- Tab 1: AI Insights Panel -->
        <div class="bs-tab-panel ${state.bsActiveWatchTab === 'ai' ? 'active' : ''}">
          <div class="bs-ai-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <div class="bs-ai-header">
                <span>✨</span>
                <span>Antigravity AI Video Intelligence</span>
              </div>
              <div style="display:flex; gap:6px;">
                <button class="screen-tab ${state.bsAiView === 'summary' ? 'active' : ''}" onclick="window.setAiView('summary')">Summary</button>
                <button class="screen-tab ${state.bsAiView === 'transcript' ? 'active' : ''}" onclick="window.setAiView('transcript')">Transcript</button>
                <button class="screen-tab ${state.bsAiView === 'quiz' ? 'active' : ''}" onclick="window.setAiView('quiz')">Q&A Quiz</button>
              </div>
            </div>

            ${state.bsAiView === 'summary' ? `
              <div style="margin-bottom:12px; font-weight:700; color:#A5B4FC; font-size:0.85rem;">EXECUTIVE HIGHLIGHTS</div>
              ${(v.aiSummary?.highlights || [
                "Detailed architecture breakdown for distributed horizontal scaling.",
                "WebSocket socket descriptor lifecycle & redis backpressure mechanisms.",
                "Benchmark metrics under 100k simulated clients with k6."
              ]).map(h => `<div class="bs-ai-bullet"><span>⚡</span><span>${h}</span></div>`).join('')}
            ` : state.bsAiView === 'transcript' ? `
              <div style="background:rgba(0,0,0,0.3); border-radius:8px; padding:16px; font-family:var(--font-mono); font-size:0.8rem; line-height:1.7; color:#CBD5E1; max-height:220px; overflow-y:auto;">
                ${(v.aiSummary?.transcriptPreview || "[00:00] Overview of distributed real-time patterns...\n[04:20] Initializing worker nodes with shared Redis channel...\n[12:15] Benchmarking connection throughput...").replace(/\n/g, '<br>')}
              </div>
            ` : `
              <div style="background:rgba(0,0,0,0.25); border-radius:8px; padding:16px;">
                <div style="font-weight:700; margin-bottom:8px; color:#FBBF24;">Knowledge Check:</div>
                <div style="font-size:0.9rem; margin-bottom:10px;">Why is Redis pub/sub critical when clustering WebSockets?</div>
                <div style="padding:10px 14px; background:rgba(16,185,129,0.15); border:1px solid rgba(16,185,129,0.3); border-radius:6px; font-size:0.85rem; color:#34D399;">
                  Correct: It enables distinct Node server instances to broadcast packet frames across shared subscribers.
                </div>
              </div>
            `}
          </div>
        </div>

        <!-- Tab 2: Comments Section -->
        <div class="bs-tab-panel ${state.bsActiveWatchTab === 'comments' ? 'active' : ''}">
          <div style="display:flex; gap:12px; margin-bottom:24px;">
            <img src="${OWNER_INFO.name ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80' : ''}" style="width:40px; height:40px; border-radius:50%;" alt="${OWNER_INFO.name}">
            <div style="flex:1;">
              <input type="text" id="new-comment-input" class="bs-form-input" placeholder="Join the discussion as ${OWNER_INFO.name}..." onkeydown="if(event.key==='Enter') window.addComment()">
              <div style="display:flex; justify-content:flex-end; margin-top:8px;">
                <button class="bs-btn bs-btn-primary" style="padding:6px 14px; font-size:0.8rem;" onclick="window.addComment()">Post Comment</button>
              </div>
            </div>
          </div>

          <div id="comments-thread" style="display:flex; flex-direction:column; gap:16px;">
            ${state.bsComments.map(c => `
              <div style="display:flex; gap:12px; background:var(--bs-surface); border:1px solid var(--bs-border); padding:16px; border-radius:var(--radius-md);">
                <img src="${c.avatar}" style="width:36px; height:36px; border-radius:50%;" alt="${c.author}">
                <div style="flex:1;">
                  <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                    <span style="font-size:0.85rem; font-weight:700;">${c.author}</span>
                    <span style="font-size:0.75rem; color:#94A3B8;">${c.time}</span>
                  </div>
                  <p style="font-size:0.88rem; color:#E2E8F0; line-height:1.5;">${c.text}</p>
                  <div style="display:flex; align-items:center; gap:12px; margin-top:8px; font-size:0.78rem; color:#94A3B8;">
                    <span style="cursor:pointer;" onclick="window.showToast('Liked comment')">👍 ${c.likes || 1}</span>
                    <span style="cursor:pointer;" onclick="window.showToast('Reply field opened')">Reply</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Watch Page Sidebar (Up Next) -->
      <div class="bs-watch-sidebar">
        <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:12px;">Up Next in Platform</h3>
        ${barterSkillsData.videos.filter(vItem => vItem.id !== v.id).map(nextV => `
          <div class="bs-sidebar-video-item" onclick="window.watchVideo('${nextV.id}')">
            <img src="${nextV.thumbnail}" class="bs-sidebar-thumb" alt="${nextV.title}">
            <div style="flex:1; overflow:hidden;">
              <h4 style="font-size:0.82rem; font-weight:700; line-height:1.3; margin-bottom:4px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                ${nextV.title}
              </h4>
              <div style="font-size:0.72rem; color:#94A3B8;">${nextV.creator.name}</div>
              <div style="font-size:0.7rem; color:#64748B;">${nextV.views} views • ${nextV.duration}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderBsDashboard() {
  const stats = barterSkillsData.dashboardStats;
  return `
    <div class="bs-dashboard">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:28px;">
        <div>
          <h1 style="font-size:1.8rem; font-weight:800; letter-spacing:-0.02em;">Creator Studio & Analytics</h1>
          <p style="color:#94A3B8; font-size:0.9rem;">Overview for ${OWNER_INFO.name}'s Channel</p>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="bs-btn bs-btn-primary" onclick="window.switchScreen('bs-upload')">
            + Upload New Video
          </button>
        </div>
      </div>

      <!-- Metric Cards -->
      <div class="bs-dash-metrics">
        <div class="bs-metric-card">
          <div class="bs-metric-label">Total Views</div>
          <div class="bs-metric-value">${stats.views}</div>
          <div class="bs-metric-growth">▲ ${stats.viewsGrowth} this month</div>
        </div>
        <div class="bs-metric-card">
          <div class="bs-metric-label">Watch Time (Hours)</div>
          <div class="bs-metric-value">${stats.watchTimeHours}</div>
          <div class="bs-metric-growth">▲ ${stats.watchGrowth} vs last cycle</div>
        </div>
        <div class="bs-metric-card">
          <div class="bs-metric-label">Subscribers Gained</div>
          <div class="bs-metric-value">${stats.subscribersGained}</div>
          <div class="bs-metric-growth">▲ ${stats.subGrowth} net new</div>
        </div>
        <div class="bs-metric-card">
          <div class="bs-metric-label">Estimated Revenue</div>
          <div class="bs-metric-value">${stats.estimatedEarnings}</div>
          <div class="bs-metric-growth">▲ ${stats.earningsGrowth} platform payout</div>
        </div>
      </div>

      <!-- Video Management Table -->
      <div class="bs-table-card">
        <div style="padding:20px 24px; border-bottom:1px solid var(--bs-border); display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:1.1rem; font-weight:700;">Uploaded Channel Content (${stats.recentVideos.length})</h3>
          <span style="font-size:0.8rem; color:#94A3B8;">Sorted by latest release</span>
        </div>
        <table class="bs-table">
          <thead>
            <tr>
              <th>Video Details</th>
              <th>Status</th>
              <th>Views</th>
              <th>Likes</th>
              <th>Uploaded Date</th>
              <th>Monetization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${stats.recentVideos.map(rv => `
              <tr>
                <td style="font-weight:600; color:#FFF; max-width:320px;">
                  <div style="display:flex; align-items:center; gap:10px;">
                    <span>🎥</span>
                    <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${rv.title}</span>
                  </div>
                </td>
                <td>
                  <span class="status-badge ${rv.status === 'Published' ? 'status-published' : 'status-draft'}">${rv.status}</span>
                </td>
                <td>${rv.views}</td>
                <td>${rv.likes}</td>
                <td>${rv.date}</td>
                <td>${rv.monetization ? '🟢 Active (RevShare)' : '⚪ Off'}</td>
                <td>
                  <button style="padding:4px 10px; background:rgba(255,255,255,0.06); border-radius:4px; color:#A5B4FC; font-size:0.75rem; font-weight:600;" onclick="window.showToast('Analytics opened for ${rv.title}')">
                    Inspect
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderBsUpload() {
  return `
    <div class="bs-upload-flow">
      <div style="text-align:center; margin-bottom:28px;">
        <h1 style="font-size:1.8rem; font-weight:800; margin-bottom:8px;">Creator Video Upload Studio</h1>
        <p style="color:#94A3B8; font-size:0.9rem;">Publish high-fidelity technical masterclasses to the BarterSkills network</p>
      </div>

      <!-- Drag and Drop Dropzone -->
      <div class="bs-upload-dropzone" onclick="window.simulateFileUpload()">
        <div style="font-size:2.5rem; margin-bottom:12px;">📁</div>
        <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;">Select or Drag & Drop Video File</h3>
        <p style="color:#94A3B8; font-size:0.85rem; margin-bottom:16px;">Supports MP4, WebM, ProRes up to 4K 60fps (Max 10GB)</p>
        <button class="bs-btn bs-btn-primary" style="pointer-events:none;">Choose Local File</button>
      </div>

      <!-- Metadata Form -->
      <div style="background:var(--bs-surface); border:1px solid var(--bs-border); border-radius:var(--radius-xl); padding:28px;">
        <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:20px;">Video Metadata & Publishing Details</h3>

        <div class="bs-form-group">
          <label class="bs-form-label">Video Title</label>
          <input type="text" class="bs-form-input" id="upload-title" value="${state.bsUploadTitle}" oninput="window.updateUploadPreview(this.value, 'title')">
        </div>

        <div class="bs-form-group">
          <label class="bs-form-label">Category</label>
          <select class="bs-form-select" onchange="window.updateUploadPreview(this.value, 'category')">
            <option value="system-design" ${state.bsUploadCategory === 'system-design' ? 'selected' : ''}>System Design</option>
            <option value="ai" ${state.bsUploadCategory === 'ai' ? 'selected' : ''}>AI & Neural Networks</option>
            <option value="fullstack" ${state.bsUploadCategory === 'fullstack' ? 'selected' : ''}>Fullstack Architecture</option>
            <option value="algorithms" ${state.bsUploadCategory === 'algorithms' ? 'selected' : ''}>Algorithms & DSA</option>
          </select>
        </div>

        <div class="bs-form-group">
          <label class="bs-form-label">Description & Timestamps</label>
          <textarea class="bs-form-textarea" rows="4">In this comprehensive session, we break down high-performance cache invalidation strategies, consistent hashing rings, and partition tolerance under network splits.</textarea>
        </div>

        <div class="bs-form-group">
          <label class="bs-form-label">Monetization & Tier Access</label>
          <div style="display:flex; gap:16px; margin-top:8px;">
            <label style="display:flex; align-items:center; gap:8px; font-size:0.88rem; cursor:pointer;">
              <input type="radio" name="tier" value="free" ${state.bsUploadMonetization === 'free' ? 'checked' : ''} onchange="window.updateUploadPreview('free', 'tier')"> Free for All Users
            </label>
            <label style="display:flex; align-items:center; gap:8px; font-size:0.88rem; cursor:pointer;">
              <input type="radio" name="tier" value="premium" ${state.bsUploadMonetization === 'premium' ? 'checked' : ''} onchange="window.updateUploadPreview('premium', 'tier')"> ⭐ BarterSkills Premium Subscribers
            </label>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:28px; padding-top:20px; border-top:1px solid var(--bs-border);">
          <div style="font-size:0.85rem; color:#34D399; font-weight:600;">✓ Ready for transcoding & AI index generation</div>
          <button class="bs-btn bs-btn-primary" onclick="window.confirmUpload()">Publish to BarterSkills</button>
        </div>
      </div>
    </div>
  `;
}

function renderBsProfile() {
  const creator = barterSkillsData.currentCreator;
  return `
    <div>
      <!-- Banner -->
      <div style="height:220px; background-image:url('${creator.banner}'); background-size:cover; background-position:center; position:relative;">
        <div style="position:absolute; inset:0; background:linear-gradient(to top, var(--bs-bg-deep) 0%, transparent 60%);"></div>
      </div>

      <div style="padding:0 32px; position:relative; transform:translateY(-50px);">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
          <div style="display:flex; align-items:flex-end; gap:20px;">
            <img src="${creator.avatar}" style="width:100px; height:100px; border-radius:50%; border:4px solid var(--bs-bg-deep); box-shadow:0 8px 24px rgba(0,0,0,0.6);" alt="${creator.name}">
            <div>
              <h1 style="font-size:1.8rem; font-weight:800; display:flex; align-items:center; gap:8px;">
                ${creator.name} <span style="font-size:1rem; color:#818CF8;">✓</span>
              </h1>
              <div style="color:#94A3B8; font-size:0.88rem;">${creator.handle} • ${creator.subscribers} Subscribers • ${creator.videosCount} Videos</div>
            </div>
          </div>

          <div style="display:flex; gap:10px;">
            <button class="bs-btn bs-btn-primary" onclick="window.showToast('Subscribed to ${creator.name}')">🔔 Subscribe</button>
            <button class="bs-btn bs-btn-ghost" onclick="window.switchScreen('bs-messages')">💬 Message</button>
          </div>
        </div>

        <!-- Bio & Channel Tabs -->
        <div style="margin-top:24px; padding-bottom:16px; border-bottom:1px solid var(--bs-border);">
          <div style="display:flex; gap:20px; font-size:0.9rem; font-weight:600;">
            <span style="color:#FFF; border-bottom:2px solid var(--bs-primary); padding-bottom:10px; cursor:pointer;">Videos</span>
            <span style="color:#94A3B8; cursor:pointer;" onclick="window.showToast('Playlists tab')">Playlists</span>
            <span style="color:#94A3B8; cursor:pointer;" onclick="window.showToast('Community tab')">Community</span>
            <span style="color:#94A3B8; cursor:pointer;" onclick="window.openOwnerModal()">About & Creator Stack</span>
          </div>
        </div>

        <!-- Creator Video Grid -->
        <div style="margin-top:24px;">
          <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:16px;">Uploads by ${creator.name}</h3>
          <div class="bs-video-grid">
            ${barterSkillsData.videos.map(v => `
              <div class="bs-video-card" onclick="window.watchVideo('${v.id}')">
                <div class="bs-thumb-wrapper">
                  <img src="${v.thumbnail}" class="bs-thumb-img" alt="${v.title}">
                  <div class="bs-duration-badge">${v.duration}</div>
                </div>
                <div class="bs-card-body">
                  <h3 class="bs-card-title">${v.title}</h3>
                  <div class="bs-card-meta">
                    <span>${v.views} views</span> • <span>${v.publishedAt}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderBsMessages() {
  return `
    <div style="padding:24px 32px; max-width:1100px; margin:0 auto;">
      <h1 style="font-size:1.6rem; font-weight:800; margin-bottom:20px;">Direct Community Messages</h1>
      
      <div style="display:grid; grid-template-columns:300px 1fr; background:var(--bs-surface); border:1px solid var(--bs-border); border-radius:var(--radius-xl); overflow:hidden; min-height:500px;">
        <!-- Left Contact List -->
        <div style="border-right:1px solid var(--bs-border); padding:16px; background:rgba(0,0,0,0.2);">
          <div style="font-size:0.75rem; font-weight:700; color:#94A3B8; text-transform:uppercase; margin-bottom:12px;">Active Discussions</div>
          <div style="display:flex; align-items:center; gap:10px; padding:12px; background:rgba(99,102,241,0.15); border-radius:var(--radius-md); border:1px solid rgba(99,102,241,0.3); cursor:pointer;">
            <img src="${barterSkillsData.chatMessages[0].avatar}" style="width:36px; height:36px; border-radius:50%;" alt="User">
            <div>
              <div style="font-size:0.85rem; font-weight:700; color:#FFF;">${barterSkillsData.chatMessages[0].sender}</div>
              <div style="font-size:0.75rem; color:#A5B4FC;">Online • Masterclass Lead</div>
            </div>
          </div>
        </div>

        <!-- Right Chat Window -->
        <div style="display:flex; flex-direction:column; justify-content:space-between; padding:20px;">
          <div id="bs-chat-thread" style="display:flex; flex-direction:column; gap:14px; overflow-y:auto; max-height:360px;">
            ${state.bsMessages.map(m => `
              <div style="display:flex; gap:10px; align-self:${m.isMe ? 'flex-end' : 'flex-start'}; max-width:70%;">
                ${!m.isMe ? `<img src="${m.avatar}" style="width:32px; height:32px; border-radius:50%;" alt="${m.sender}">` : ''}
                <div style="background:${m.isMe ? 'linear-gradient(135deg, #6366F1, #8B5CF6)' : 'rgba(255,255,255,0.08)'}; color:#FFF; padding:10px 14px; border-radius:14px; font-size:0.88rem; line-height:1.4;">
                  <div style="font-size:0.7rem; font-weight:700; opacity:0.8; margin-bottom:2px;">${m.sender}</div>
                  <div>${m.text}</div>
                  <div style="font-size:0.65rem; opacity:0.7; text-align:right; margin-top:4px;">${m.time}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Message Input -->
          <div style="display:flex; gap:10px; margin-top:20px; padding-top:16px; border-top:1px solid var(--bs-border);">
            <input type="text" id="bs-msg-input" class="bs-form-input" placeholder="Type message as ${OWNER_INFO.name}..." onkeydown="if(event.key==='Enter') window.sendDirectMessage()">
            <button class="bs-btn bs-btn-primary" onclick="window.sendDirectMessage()">Send</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderBsLegal() {
  return `
    <div style="max-width:850px; margin:32px auto; padding:0 24px;">
      <div style="background:var(--bs-surface); border:1px solid var(--bs-border); border-radius:var(--radius-xl); padding:36px;">
        <h1 style="font-size:1.8rem; font-weight:800; margin-bottom:12px;">Platform Terms & Architect Credentials</h1>
        <p style="color:#94A3B8; font-size:0.9rem; line-height:1.6; margin-bottom:28px;">
          BarterSkills is an enterprise-grade creator video and knowledge platform designed and developed by <strong>${OWNER_INFO.name}</strong>.
        </p>

        <div style="background:rgba(99,102,241,0.08); border:1px solid rgba(99,102,241,0.3); border-radius:var(--radius-lg); padding:24px; margin-bottom:28px;">
          <h3 style="font-size:1.1rem; font-weight:700; color:#A5B4FC; margin-bottom:12px;">Verified Owner & Contact Information</h3>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; font-size:0.9rem;">
            <div><strong>Name:</strong> ${OWNER_INFO.name}</div>
            <div><strong>Email:</strong> <a href="mailto:${OWNER_INFO.email}" style="color:#818CF8;">${OWNER_INFO.email}</a></div>
            <div><strong>Phone:</strong> <a href="tel:${OWNER_INFO.phone}" style="color:#818CF8;">${OWNER_INFO.phone}</a></div>
            <div><strong>GitHub:</strong> <a href="${OWNER_INFO.github}" target="_blank" style="color:#818CF8;">github.com/Typisch-Div</a></div>
            <div><strong>LinkedIn:</strong> <a href="${OWNER_INFO.linkedin}" target="_blank" style="color:#818CF8;">linkedin.com/in/divanshusharma-dev</a></div>
            <div><strong>LeetCode:</strong> <a href="${OWNER_INFO.leetcode}" target="_blank" style="color:#818CF8;">leetcode.com/u/TypischDiv</a></div>
          </div>
        </div>

        <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:12px;">Content Licensing & Intellectual Property</h3>
        <p style="font-size:0.9rem; color:#CBD5E1; line-height:1.7; margin-bottom:16px;">
          All intellectual property, system architecture schemas, video streaming pipelines, and user-generated media hosted on BarterSkills are licensed under standard digital creator rights. Unauthorized mirroring or distributed scraping is prohibited without express consent of ${OWNER_INFO.name}.
        </p>
      </div>
    </div>
  `;
}

// ==========================================
// QUICKSHOW TEMPLATES
// ==========================================
function renderQuickShowApp() {
  return `
    <div class="qs-app">
      <!-- Cinema Navigation -->
      <nav class="qs-nav">
        <div class="qs-logo" onclick="window.switchScreen('qs-home')">
          <span>QUICK<span class="qs-logo-red">SHOW</span></span>
        </div>
        <div class="qs-nav-links">
          <a class="qs-nav-link ${state.currentScreen === 'qs-home' ? 'active' : ''}" onclick="window.switchScreen('qs-home')">Billboard</a>
          <a class="qs-nav-link ${state.currentScreen === 'qs-movies' ? 'active' : ''}" onclick="window.switchScreen('qs-movies')">Movies</a>
          <a class="qs-nav-link ${state.currentScreen === 'qs-seats' ? 'active' : ''}" onclick="window.switchScreen('qs-seats')">Book Seats</a>
          <a class="qs-nav-link ${state.currentScreen === 'qs-ticket' ? 'active' : ''}" onclick="window.switchScreen('qs-ticket')">My Passes</a>
          <a class="qs-nav-link ${state.currentScreen === 'qs-admin' ? 'active' : ''}" onclick="window.switchScreen('qs-admin')">Admin Hub</a>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="owner-pill" onclick="window.openOwnerModal()" title="Cinema Architect">
            <div class="owner-avatar" style="background:linear-gradient(135deg, #E50914, #FF3366);">DS</div>
            <div class="owner-meta">
              <span class="owner-name">${OWNER_INFO.name}</span>
              <span class="owner-label">Owner</span>
            </div>
          </div>
          <button class="qs-btn qs-btn-primary" onclick="window.bookCurrentMovie('${quickShowData.movies[0].id}')">
            🎟️ Quick Book
          </button>
        </div>
      </nav>

      <!-- Dynamic Views -->
      <div id="qs-screen-outlet">
        ${renderQuickShowScreen()}
      </div>

      <!-- Footer with Owner Info -->
      ${renderPlatformFooter('quickshow')}
    </div>
  `;
}

function renderQuickShowScreen() {
  switch (state.currentScreen) {
    case 'qs-home':
      return renderQsHome();
    case 'qs-movies':
      return renderQsMovies();
    case 'qs-details':
      return renderQsDetails();
    case 'qs-seats':
      return renderQsSeats();
    case 'qs-ticket':
      return renderQsTicket();
    case 'qs-admin':
      return renderQsAdmin();
    case 'qs-footer':
      return renderQsFooterScreen();
    default:
      return renderQsHome();
  }
}

function renderQsHome() {
  const hero = quickShowData.activeHero;
  return `
    <!-- Billboard Hero -->
    <div class="qs-billboard" style="background-image:url('${hero.backdrop}');">
      <div class="qs-billboard-content">
        <div class="qs-rating-badge">★ ${hero.rating} / 10 (${hero.votes} Ratings)</div>
        <h1 class="qs-billboard-title">${hero.title}</h1>
        <div class="qs-billboard-genres">
          ${hero.genres.map(g => `<span class="qs-genre-chip">${g}</span>`).join('')}
          <span class="qs-genre-chip" style="background:rgba(229,9,20,0.25); border-color:var(--qs-primary);">${hero.hall}</span>
        </div>
        <p class="qs-billboard-overview">${hero.overview}</p>
        <div style="display:flex; gap:14px; align-items:center;">
          <button class="qs-btn qs-btn-primary" onclick="window.bookCurrentMovie('${hero.id}')">
            🎟️ Book Tickets Now
          </button>
          <button class="qs-btn qs-btn-secondary" onclick="window.openTrailerModal('${hero.title}')">
            ▶ Watch 4K Trailer
          </button>
        </div>
      </div>
    </div>

    <!-- Date Scroller Ribbon -->
    <div class="qs-date-ribbon">
      <span style="font-size:0.8rem; font-weight:700; color:#A1A1AA; text-transform:uppercase; margin-right:8px;">Show Date:</span>
      ${quickShowData.dates.map(d => `
        <div class="qs-date-pill ${state.qsActiveDate === d.date ? 'active' : ''}" onclick="window.setQsDate('${d.date}')">
          <span class="qs-date-day">${d.day}</span>
          <span class="qs-date-num">${d.date}</span>
        </div>
      `).join('')}
    </div>

    <!-- Now Showing Cinema Reel -->
    <div class="qs-catalog-section">
      <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:24px;">
        <div>
          <h2 style="font-family:var(--font-cinema); font-size:1.8rem; font-weight:800; color:#FFF;">Now Showing in Theaters</h2>
          <p style="font-size:0.85rem; color:#A1A1AA;">Experience in Dolby Atmos & IMAX with reserved luxury seating</p>
        </div>
        <button class="screen-tab active" onclick="window.switchScreen('qs-movies')">View All Movies →</button>
      </div>

      <div class="qs-poster-grid">
        ${quickShowData.movies.map(m => `
          <div class="qs-movie-card" onclick="window.viewMovieDetails('${m.id}')">
            <div class="qs-poster-wrap">
              <img src="${m.poster}" class="qs-poster-img" alt="${m.title}">
              <div class="qs-movie-card-overlay">
                <h3 class="qs-card-title">${m.title}</h3>
                <div class="qs-card-sub">
                  <span>★ ${m.rating}</span>
                  <span>${m.runtime}</span>
                </div>
                <button class="qs-btn qs-btn-primary" style="margin-top:10px; width:100%; justify-content:center; padding:6px 12px; font-size:0.8rem;" onclick="event.stopPropagation(); window.bookCurrentMovie('${m.id}')">
                  Book • $${m.price}
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderQsMovies() {
  const filtered = state.qsActiveGenre === 'all'
    ? quickShowData.movies
    : quickShowData.movies.filter(m => m.genres.some(g => g.toLowerCase() === state.qsActiveGenre));

  return `
    <div class="qs-catalog-section">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:28px;">
        <div>
          <h1 style="font-family:var(--font-cinema); font-size:2rem; font-weight:800;">Cinema Movie Catalog</h1>
          <p style="font-size:0.85rem; color:#A1A1AA;">Browse current theatrical runs and premiere screenings</p>
        </div>

        <div style="display:flex; gap:8px; overflow-x:auto;">
          ${['all', 'action', 'sci-fi', 'horror', 'family', 'adventure', 'thriller'].map(genre => `
            <button class="screen-tab ${state.qsActiveGenre === genre ? 'active' : ''}" onclick="window.setQsGenre('${genre}')">
              ${genre.toUpperCase()}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="qs-poster-grid">
        ${filtered.map(m => `
          <div class="qs-movie-card" onclick="window.viewMovieDetails('${m.id}')">
            <div class="qs-poster-wrap">
              <img src="${m.poster}" class="qs-poster-img" alt="${m.title}">
              <div class="qs-movie-card-overlay">
                <h3 class="qs-card-title">${m.title}</h3>
                <div class="qs-card-sub">
                  <span>★ ${m.rating}</span>
                  <span>${m.runtime}</span>
                </div>
                <button class="qs-btn qs-btn-primary" style="margin-top:10px; width:100%; justify-content:center; padding:6px 12px; font-size:0.8rem;" onclick="event.stopPropagation(); window.bookCurrentMovie('${m.id}')">
                  Select Seats • $${m.price}
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderQsDetails() {
  const m = state.qsActiveMovie;
  return `
    <div>
      <!-- Movie Hero Header -->
      <div style="height:360px; background-image:url('${m.backdrop}'); background-size:cover; background-position:center; position:relative;">
        <div style="position:absolute; inset:0; background:linear-gradient(to top, var(--qs-bg-deep) 0%, rgba(7,8,12,0.6) 100%);"></div>
      </div>

      <div style="padding:0 48px; position:relative; transform:translateY(-80px); max-width:1200px; margin:0 auto;">
        <div style="display:grid; grid-template-columns:240px 1fr; gap:36px;">
          <!-- Left Poster -->
          <div>
            <img src="${m.poster}" style="width:100%; border-radius:var(--radius-lg); border:2px solid rgba(255,255,255,0.18); box-shadow:0 20px 40px rgba(0,0,0,0.8);" alt="${m.title}">
            <button class="qs-btn qs-btn-primary" style="width:100%; justify-content:center; margin-top:16px;" onclick="window.bookCurrentMovie('${m.id}')">
              🎟️ Reserve Seats
            </button>
            <button class="qs-btn qs-btn-secondary" style="width:100%; justify-content:center; margin-top:10px;" onclick="window.openTrailerModal('${m.title}')">
              ▶ Official Trailer
            </button>
          </div>

          <!-- Right Details -->
          <div>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <span class="qs-rating-badge">★ ${m.rating} TMDB</span>
              <span style="font-size:0.85rem; color:#A1A1AA;">${m.runtime}</span>
              <span style="font-size:0.85rem; color:#A1A1AA;">• Released ${m.releaseDate}</span>
            </div>
            <h1 style="font-family:var(--font-cinema); font-size:2.8rem; font-weight:800; line-height:1.15; margin-bottom:10px;">${m.title}</h1>
            <p style="font-style:italic; color:#F59E0B; font-size:1.1rem; margin-bottom:16px;">"${m.tagline}"</p>
            <div style="display:flex; gap:8px; margin-bottom:20px;">
              ${m.genres.map(g => `<span class="qs-genre-chip">${g}</span>`).join('')}
            </div>
            <p style="font-size:0.95rem; line-height:1.7; color:#D4D4D8; margin-bottom:28px;">${m.overview}</p>

            <!-- Cast Carousel -->
            <h3 style="font-family:var(--font-cinema); font-size:1.2rem; font-weight:700; margin-bottom:14px;">Starring Cast</h3>
            <div style="display:flex; gap:16px; overflow-x:auto; padding-bottom:8px;">
              ${m.casts.map(c => `
                <div style="display:flex; flex-direction:column; align-items:center; text-align:center; min-width:90px;">
                  <img src="${c.image}" style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,0.15); margin-bottom:6px;" alt="${c.name}">
                  <span style="font-size:0.78rem; font-weight:700; color:#FFF; line-height:1.2;">${c.name}</span>
                  <span style="font-size:0.7rem; color:#A1A1AA;">${c.role}</span>
                </div>
              `).join('')}
            </div>

            <!-- Available Showtimes -->
            <div style="margin-top:32px; padding:20px; background:var(--qs-surface); border:1px solid var(--qs-border); border-radius:var(--radius-lg);">
              <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:12px;">Select Theater & Showtime for Today</h4>
              <div style="display:flex; gap:10px; flex-wrap:wrap;">
                ${['11:00 AM', '02:30 PM', '06:15 PM', '09:45 PM'].map(time => `
                  <button class="screen-tab active" onclick="window.bookCurrentMovie('${m.id}')">
                    ${time} (IMAX 4D)
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderQsSeats() {
  const m = state.qsActiveMovie;
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cols = 12;
  const occupiedSet = new Set(['B3', 'B4', 'C6', 'C7', 'F2', 'F3', 'G8', 'G9']);

  const subtotal = state.qsSelectedSeats.length * state.qsSeatTierPrice;
  const bookingFee = state.qsSelectedSeats.length * 1.5;
  const grandTotal = subtotal + bookingFee;

  return `
    <div class="qs-seating-container">
      <div style="text-align:center; margin-bottom:28px;">
        <h1 style="font-family:var(--font-cinema); font-size:2rem; font-weight:800; margin-bottom:4px;">${m.title}</h1>
        <p style="color:#A1A1AA; font-size:0.85rem;">Starlight Prime Cinema • Screen 1 (Dolby Atmos) • Today 06:15 PM</p>
      </div>

      <!-- Realistic Curved Movie Screen -->
      <div class="qs-screen-visualizer">
        <div class="qs-screen-curve"></div>
        <div class="qs-screen-projection">ALL EYES THIS WAY • CINEMA SCREEN</div>
      </div>

      <!-- Seating Matrix -->
      <div class="qs-seat-grid">
        ${rows.map(row => {
          const isVip = row === 'A' || row === 'B';
          return `
            <div class="qs-seat-row">
              <span class="qs-row-label">${row}</span>
              ${Array.from({ length: cols }).map((_, idx) => {
                const seatId = `${row}${idx + 1}`;
                const isOccupied = occupiedSet.has(seatId);
                const isSelected = state.qsSelectedSeats.includes(seatId);
                const isAisle = idx === 3 || idx === 8;

                return `
                  ${isAisle ? '<div class="qs-seat-aisle"></div>' : ''}
                  <div 
                    class="qs-seat ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''} ${isVip ? 'vip' : ''}" 
                    data-seat="${seatId}"
                    title="${seatId} (${isVip ? 'VIP Recliner $25' : 'Classic $18'})"
                    onclick="window.toggleSeat('${seatId}', ${isOccupied})"
                  >
                    ${isSelected ? '✓' : ''}
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Legend -->
      <div class="qs-seat-legend">
        <div class="qs-legend-item">
          <div class="qs-seat" style="width:20px; height:20px; cursor:default;"></div>
          <span>Available ($18)</span>
        </div>
        <div class="qs-legend-item">
          <div class="qs-seat vip" style="width:20px; height:20px; cursor:default;"></div>
          <span>VIP Recliner ($25)</span>
        </div>
        <div class="qs-legend-item">
          <div class="qs-seat selected" style="width:20px; height:20px; cursor:default;">✓</div>
          <span>Selected</span>
        </div>
        <div class="qs-legend-item">
          <div class="qs-seat occupied" style="width:20px; height:20px; cursor:default;"></div>
          <span>Reserved</span>
        </div>
      </div>

      <!-- Interactive Checkout Dock -->
      <div class="qs-checkout-dock">
        <div>
          <div style="font-size:0.75rem; color:#A1A1AA; text-transform:uppercase; font-weight:700;">Selected Seats (${state.qsSelectedSeats.length})</div>
          <div class="qs-seats-badge-list">
            ${state.qsSelectedSeats.length > 0
              ? state.qsSelectedSeats.map(s => `<span class="qs-seat-pill">${s}</span>`).join('')
              : '<span style="color:#71717A; font-size:0.85rem;">No seats picked yet</span>'
            }
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:24px;">
          <div style="text-align:right;">
            <div style="font-size:0.75rem; color:#A1A1AA;">Subtotal + Taxes</div>
            <div style="font-size:1.6rem; font-weight:800; color:#FFF; font-family:var(--font-cinema);">$${grandTotal.toFixed(2)}</div>
          </div>
          <button class="qs-btn qs-btn-primary" ${state.qsSelectedSeats.length === 0 ? 'disabled style="opacity:0.5;"' : ''} onclick="window.confirmBookingPass()">
            Proceed to Payment →
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderQsTicket() {
  const b = quickShowData.sampleBookings[0];
  return `
    <div style="padding:32px 24px;">
      <div style="text-align:center; margin-bottom:20px;">
        <h1 style="font-family:var(--font-cinema); font-size:1.8rem; font-weight:800;">Digital Boarding Pass</h1>
        <p style="color:#A1A1AA; font-size:0.85rem;">Scan this pass at the theater turnstile scanner</p>
      </div>

      <!-- Cinema Pass Card -->
      <div class="qs-ticket-card">
        <div class="qs-ticket-notch-left"></div>
        <div class="qs-ticket-notch-right"></div>

        <div class="qs-ticket-header">
          <div>
            <div style="font-size:0.7rem; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; opacity:0.85;">QUICKSHOW CINEMA PASS</div>
            <div style="font-family:var(--font-cinema); font-size:1.4rem; font-weight:800;">${b.movie}</div>
          </div>
          <div style="font-size:1.5rem;">🍿</div>
        </div>

        <div class="qs-ticket-body">
          <div>
            <div style="margin-bottom:12px;">
              <div style="font-size:0.7rem; color:#71717A; text-transform:uppercase;">THEATER & HALL</div>
              <div style="font-size:0.88rem; font-weight:700; color:#FFF;">${b.theater}</div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
              <div>
                <div style="font-size:0.7rem; color:#71717A; text-transform:uppercase;">SHOWTIME</div>
                <div style="font-size:0.88rem; font-weight:700; color:#FFF;">${b.showTime}</div>
              </div>
              <div>
                <div style="font-size:0.7rem; color:#71717A; text-transform:uppercase;">SEATS</div>
                <div style="font-size:0.95rem; font-weight:800; color:#FF3366;">${b.seats.join(', ')}</div>
              </div>
            </div>
            <div>
              <div style="font-size:0.7rem; color:#71717A; text-transform:uppercase;">PASS HOLDER</div>
              <div style="font-size:0.85rem; font-weight:700; color:#F59E0B;">${OWNER_INFO.name}</div>
            </div>
          </div>

          <!-- QR Box -->
          <div style="text-align:center;">
            <div class="qs-qr-box">
              <svg viewBox="0 0 100 100" style="width:100%; height:100%;">
                <rect width="100" height="100" fill="#FFF"/>
                <!-- Corner squares -->
                <rect x="10" y="10" width="25" height="25" fill="#000"/>
                <rect x="15" y="15" width="15" height="15" fill="#FFF"/>
                <rect x="18" y="18" width="9" height="9" fill="#000"/>
                
                <rect x="65" y="10" width="25" height="25" fill="#000"/>
                <rect x="70" y="15" width="15" height="15" fill="#FFF"/>
                <rect x="73" y="18" width="9" height="9" fill="#000"/>

                <rect x="10" y="65" width="25" height="25" fill="#000"/>
                <rect x="15" y="70" width="15" height="15" fill="#FFF"/>
                <rect x="18" y="73" width="9" height="9" fill="#000"/>

                <!-- Random QR matrix pattern dots -->
                <rect x="42" y="15" width="6" height="6" fill="#000"/>
                <rect x="52" y="25" width="6" height="6" fill="#000"/>
                <rect x="42" y="35" width="6" height="6" fill="#000"/>
                <rect x="48" y="48" width="12" height="12" fill="#E50914"/>
                <rect x="65" y="55" width="6" height="6" fill="#000"/>
                <rect x="75" y="75" width="12" height="6" fill="#000"/>
              </svg>
            </div>
            <div style="font-size:0.65rem; color:#A1A1AA; font-family:var(--font-mono); margin-top:6px;">${b.id}</div>
          </div>
        </div>

        <div style="padding:14px 28px; background:rgba(0,0,0,0.4); border-top:1px dashed rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.75rem; color:#34D399; font-weight:700;">● Confirmed & Active</span>
          <button class="qs-btn qs-btn-secondary" style="padding:6px 12px; font-size:0.78rem;" onclick="window.showToast('Pass downloaded to Apple Wallet')">
            Download Pass 📥
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderQsAdmin() {
  const admin = quickShowData.adminData;
  return `
    <div style="padding:32px 48px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:28px;">
        <div>
          <h1 style="font-family:var(--font-cinema); font-size:1.8rem; font-weight:800;">Cinema Command Center</h1>
          <p style="color:#A1A1AA; font-size:0.85rem;">Administrative Console for ${OWNER_INFO.name}</p>
        </div>
        <button class="qs-btn qs-btn-primary" onclick="window.openAddShowModal()">
          + Schedule New Screening
        </button>
      </div>

      <!-- Admin Stat Cards -->
      <div class="bs-dash-metrics">
        <div class="bs-metric-card" style="border-color:rgba(229,9,20,0.3);">
          <div class="bs-metric-label">Gross Box Office Revenue</div>
          <div class="bs-metric-value" style="color:#FF3366;">${admin.totalRevenue}</div>
          <div class="bs-metric-growth" style="color:#34D399;">▲ +34.2% vs previous run</div>
        </div>
        <div class="bs-metric-card" style="border-color:rgba(229,9,20,0.3);">
          <div class="bs-metric-label">Total Reserved Tickets</div>
          <div class="bs-metric-value">${admin.totalBookings}</div>
          <div class="bs-metric-growth">▲ 92% occupancy average</div>
        </div>
        <div class="bs-metric-card" style="border-color:rgba(229,9,20,0.3);">
          <div class="bs-metric-label">Active Theaters & Screens</div>
          <div class="bs-metric-value">${admin.activeTheaters}</div>
          <div class="bs-metric-growth" style="color:#A1A1AA;">Dolby Atmos & IMAX 3D</div>
        </div>
      </div>

      <!-- Active Screenings Table -->
      <div class="bs-table-card">
        <div style="padding:20px 24px; border-bottom:1px solid var(--qs-border); display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-family:var(--font-cinema); font-size:1.15rem; font-weight:700;">Live Screenings & Seat Occupancy</h3>
          <span style="font-size:0.8rem; color:#A1A1AA;">Real-time ticketing engine</span>
        </div>
        <table class="bs-table">
          <thead>
            <tr>
              <th>Movie Feature</th>
              <th>Auditorium</th>
              <th>Showtime</th>
              <th>Price Tier</th>
              <th>Seat Occupancy</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${admin.activeShows.map(s => `
              <tr>
                <td style="font-weight:700; color:#FFF;">${s.movie}</td>
                <td>${s.screen}</td>
                <td>${s.time}</td>
                <td>${s.price}</td>
                <td>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <div style="flex:1; height:6px; background:rgba(255,255,255,0.1); border-radius:4px; max-width:100px; overflow:hidden;">
                      <div style="height:100%; width:${s.occupancy}; background:var(--qs-primary);"></div>
                    </div>
                    <span style="font-size:0.78rem;">${s.occupancy}</span>
                  </div>
                </td>
                <td>
                  <span class="status-badge status-published">${s.status}</span>
                </td>
                <td>
                  <button style="padding:4px 8px; background:rgba(255,255,255,0.06); border-radius:4px; color:#FFA4A8; font-size:0.75rem;" onclick="window.showToast('Editing ${s.movie}')">
                    Modify
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderQsFooterScreen() {
  return `
    <div style="max-width:850px; margin:40px auto; padding:0 24px;">
      <div style="background:var(--qs-surface); border:1px solid var(--qs-border); border-radius:var(--radius-xl); padding:36px;">
        <h1 style="font-family:var(--font-cinema); font-size:2rem; font-weight:800; margin-bottom:12px;">QuickShow Cinema Management & Credits</h1>
        <p style="color:#A1A1AA; font-size:0.9rem; line-height:1.6; margin-bottom:28px;">
          QuickShow is an ultra-premium movie discovery and real-time cinema ticket reservation platform engineered by <strong>${OWNER_INFO.name}</strong>.
        </p>

        <div style="background:rgba(229,9,20,0.08); border:1px solid rgba(229,9,20,0.3); border-radius:var(--radius-lg); padding:24px;">
          <h3 style="font-family:var(--font-cinema); font-size:1.15rem; font-weight:700; color:#FFA4A8; margin-bottom:12px;">Owner & Platform Lead Contact</h3>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; font-size:0.9rem;">
            <div><strong>Owner Name:</strong> ${OWNER_INFO.name}</div>
            <div><strong>Direct Email:</strong> <a href="mailto:${OWNER_INFO.email}" style="color:#FF3366;">${OWNER_INFO.email}</a></div>
            <div><strong>Direct Phone:</strong> <a href="tel:${OWNER_INFO.phone}" style="color:#FF3366;">${OWNER_INFO.phone}</a></div>
            <div><strong>GitHub:</strong> <a href="${OWNER_INFO.github}" target="_blank" style="color:#FF3366;">${OWNER_INFO.github}</a></div>
            <div><strong>LinkedIn:</strong> <a href="${OWNER_INFO.linkedin}" target="_blank" style="color:#FF3366;">${OWNER_INFO.linkedin}</a></div>
            <div><strong>LeetCode:</strong> <a href="${OWNER_INFO.leetcode}" target="_blank" style="color:#FF3366;">${OWNER_INFO.leetcode}</a></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// SHARED FOOTER
// ==========================================
function renderPlatformFooter(platform) {
  const isBs = platform === 'barterskills';
  return `
    <footer class="app-footer">
      <div class="footer-content">
        <div>
          <div style="display:flex; align-items:center; gap:8px; font-size:1.2rem; font-weight:800; margin-bottom:12px; color:#FFF;">
            <span>${isBs ? '⚡ BarterSkills' : '🍿 QUICKSHOW'}</span>
          </div>
          <p style="font-size:0.85rem; color:#94A3B8; line-height:1.6; max-width:380px;">
            ${isBs
              ? 'Empowering creators and engineers to share high-performance video masterclasses, build engaged technical communities, and advance knowledge.'
              : 'Discover, explore, and book your favorite cinema blockbusters with real-time showtimes, interactive seat selection, and instant digital passes.'
            }
          </p>
          <div class="footer-socials">
            <a href="${OWNER_INFO.github}" target="_blank" class="social-circle-btn" title="GitHub">🐙</a>
            <a href="${OWNER_INFO.linkedin}" target="_blank" class="social-circle-btn" title="LinkedIn">💼</a>
            <a href="${OWNER_INFO.leetcode}" target="_blank" class="social-circle-btn" title="LeetCode">🧩</a>
            <a href="mailto:${OWNER_INFO.email}" class="social-circle-btn" title="Email">✉️</a>
            <a href="tel:${OWNER_INFO.phone}" class="social-circle-btn" title="Phone">📞</a>
          </div>
        </div>

        <div>
          <h4 style="font-size:0.85rem; font-weight:700; text-transform:uppercase; color:#FFF; margin-bottom:14px;">Platform Architecture</h4>
          <ul style="list-style:none; font-size:0.82rem; color:#94A3B8; display:flex; flex-direction:column; gap:8px;">
            <li>Owner: <strong>${OWNER_INFO.name}</strong></li>
            <li>Email: <a href="mailto:${OWNER_INFO.email}">${OWNER_INFO.email}</a></li>
            <li>Phone: <a href="tel:${OWNER_INFO.phone}">${OWNER_INFO.phone}</a></li>
            <li><a href="${OWNER_INFO.github}" target="_blank">Typisch-Div on GitHub</a></li>
          </ul>
        </div>

        <div>
          <h4 style="font-size:0.85rem; font-weight:700; text-transform:uppercase; color:#FFF; margin-bottom:14px;">Navigation</h4>
          <ul style="list-style:none; font-size:0.82rem; color:#94A3B8; display:flex; flex-direction:column; gap:8px;">
            <li style="cursor:pointer;" onclick="window.switchScreen('${isBs ? 'bs-discovery' : 'qs-home'}')">Home & Discovery</li>
            <li style="cursor:pointer;" onclick="window.switchScreen('${isBs ? 'bs-dashboard' : 'qs-seats'}')">${isBs ? 'Creator Dashboard' : 'Seat Booking'}</li>
            <li style="cursor:pointer;" onclick="window.openOwnerModal()">Verified Owner Profile</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>Copyright © ${new Date().getFullYear()} ${OWNER_INFO.name}. All Rights Reserved.</div>
        <div style="display:flex; gap:16px;">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Contact Us</span>
        </div>
      </div>
    </footer>
  `;
}

// ==========================================
// INTERACTIVE EVENT HANDLERS
// ==========================================
function setupEventListeners() {
  // Global Platform Switcher
  const bsBtn = document.getElementById('switch-bs');
  const qsBtn = document.getElementById('switch-qs');

  if (bsBtn) {
    bsBtn.addEventListener('click', () => {
      bsBtn.className = 'platform-btn active bs-active';
      qsBtn.className = 'platform-btn';
      state.currentPlatform = 'barterskills';
      state.currentScreen = 'bs-discovery';
      renderHud();
      renderApp();
    });
  }

  if (qsBtn) {
    qsBtn.addEventListener('click', () => {
      qsBtn.className = 'platform-btn active qs-active';
      bsBtn.className = 'platform-btn';
      state.currentPlatform = 'quickshow';
      state.currentScreen = 'qs-home';
      renderHud();
      renderApp();
    });
  }

  // Device Frame Viewport Selectors
  document.querySelectorAll('.device-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const dev = e.currentTarget.getAttribute('data-device');
      setDeviceView(dev);
    });
  });
}

function bindBarterSkillsEvents() {
  const searchInput = document.getElementById('bs-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      // realtime visual filter feedback
    });
  }
}

function bindQuickShowEvents() {
  // Bind dynamic cinema events if needed
}

// Global window exposed functions for inline event triggers
window.switchPlatform = (platform) => {
  state.currentPlatform = platform;
  state.currentScreen = platform === 'barterskills' ? 'bs-discovery' : 'qs-home';
  renderHud();
  renderApp();
};

window.switchScreen = (scr) => {
  state.currentScreen = scr;
  renderHud();
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.setDeviceView = (dev) => {
  state.currentDevice = dev;
  const frame = document.getElementById('device-frame');
  if (!frame) return;

  frame.className = 'device-frame';
  if (dev === 'desktop') frame.classList.add('desktop-view');
  else if (dev === 'tablet') frame.classList.add('tablet-view');
  else if (dev === 'mobile') frame.classList.add('mobile-view');
};

// BarterSkills Interactive Actions
window.setBsCategory = (catId) => {
  state.bsActiveCategory = catId;
  renderApp();
};

window.watchVideo = (vidId) => {
  const found = barterSkillsData.videos.find(v => v.id === vidId);
  if (found) {
    state.bsActiveVideo = found;
    state.bsComments = [...(found.comments || [])];
    state.currentScreen = 'bs-watch';
    renderHud();
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.toggleSubscribe = () => {
  state.bsIsSubscribed = !state.bsIsSubscribed;
  showToast(state.bsIsSubscribed ? 'Subscribed to channel with notifications!' : 'Unsubscribed from channel');
  renderApp();
};

window.toggleLike = () => {
  state.bsIsLiked = !state.bsIsLiked;
  state.bsLikesCount += state.bsIsLiked ? 1 : -1;
  showToast(state.bsIsLiked ? 'Added to liked videos 👍' : 'Removed like');
  renderApp();
};

window.setWatchTab = (tab) => {
  state.bsActiveWatchTab = tab;
  renderApp();
};

window.setAiView = (view) => {
  state.bsAiView = view;
  renderApp();
};

window.addComment = () => {
  const input = document.getElementById('new-comment-input');
  if (!input || !input.value.trim()) return;

  const newC = {
    id: 'c-' + Date.now(),
    author: OWNER_INFO.name,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80',
    time: 'Just now',
    text: input.value.trim(),
    likes: 1
  };
  state.bsComments.unshift(newC);
  input.value = '';
  showToast('Comment posted successfully!');
  renderApp();
};

window.updateUploadPreview = (val, field) => {
  if (field === 'title') state.bsUploadTitle = val;
  if (field === 'category') state.bsUploadCategory = val;
  if (field === 'tier') state.bsUploadMonetization = val;
};

window.simulateFileUpload = () => {
  showToast('Sample file selected: Distributed_Cache_Architecture.mp4 (4.2 GB)');
};

window.confirmUpload = () => {
  showToast('Video published to BarterSkills! Transcoding initiated.');
  setTimeout(() => {
    switchScreen('bs-dashboard');
  }, 1000);
};

window.sendDirectMessage = () => {
  const input = document.getElementById('bs-msg-input');
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  state.bsMessages.push({
    id: Date.now(),
    sender: OWNER_INFO.name,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80',
    text: text,
    time: 'Just now',
    isMe: true
  });
  input.value = '';
  renderApp();

  // Simulated instant bot reply
  setTimeout(() => {
    state.bsMessages.push({
      id: Date.now() + 1,
      sender: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=80',
      text: 'Got it! Reviewing the distributed system traces right away.',
      time: 'Just now',
      isMe: false
    });
    renderApp();
  }, 1000);
};

// QuickShow Interactive Actions
window.setQsDate = (date) => {
  state.qsActiveDate = date;
  renderApp();
};

window.setQsGenre = (genre) => {
  state.qsActiveGenre = genre;
  renderApp();
};

window.viewMovieDetails = (movieId) => {
  const m = quickShowData.movies.find(item => item.id === movieId);
  if (m) {
    state.qsActiveMovie = m;
    state.currentScreen = 'qs-details';
    renderHud();
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.bookCurrentMovie = (movieId) => {
  const m = quickShowData.movies.find(item => item.id === movieId);
  if (m) {
    state.qsActiveMovie = m;
    state.qsSeatTierPrice = m.price || 18;
  }
  state.currentScreen = 'qs-seats';
  renderHud();
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.toggleSeat = (seatId, isOccupied) => {
  if (isOccupied) {
    showToast('Seat ' + seatId + ' is already occupied');
    return;
  }
  if (state.qsSelectedSeats.includes(seatId)) {
    state.qsSelectedSeats = state.qsSelectedSeats.filter(s => s !== seatId);
  } else {
    state.qsSelectedSeats.push(seatId);
  }
  renderApp();
};

window.confirmBookingPass = () => {
  showToast('Booking confirmed! Generating digital cinema pass...');
  setTimeout(() => {
    switchScreen('qs-ticket');
  }, 600);
};

window.openTrailerModal = (title) => {
  const modal = document.getElementById('trailer-modal');
  if (modal) {
    modal.classList.add('open');
  }
};

window.closeTrailerModal = () => {
  const modal = document.getElementById('trailer-modal');
  if (modal) modal.classList.remove('open');
};

window.openAddShowModal = () => {
  showToast('Add New Screening Modal: Enabled for ' + OWNER_INFO.name);
};

// Owner Profile Modal
window.openOwnerModal = () => {
  const modal = document.getElementById('owner-modal');
  if (modal) modal.classList.add('open');
};

window.closeOwnerModal = () => {
  const modal = document.getElementById('owner-modal');
  if (modal) modal.classList.remove('open');
};

// Toast notification helper
export function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✨</span><span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
window.showToast = showToast;
