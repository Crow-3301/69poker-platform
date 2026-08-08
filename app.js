const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const icons = {
  home: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3Z\'/></svg>',
  live: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><circle cx=\'12\' cy=\'12\' r=\'3\'/><path d=\'M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8\'/></svg>',
  trophy: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M8 4h8v5a4 4 0 0 1-8 0V4Zm4 9v5m-4 2h8\'/><path d=\'M8 6H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4\'/></svg>',
  diamond: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'m12 3 8 7-8 11-8-11 8-7Zm-8 7h16M8 4l4 17 4-17\'/></svg>',
  video: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><rect x=\'3\' y=\'6\' width=\'13\' height=\'12\' rx=\'2\'/><path d=\'m16 10 5-3v10l-5-3\'/></svg>',
  users: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><circle cx=\'9\' cy=\'8\' r=\'3\'/><path d=\'M3 20v-2a6 6 0 0 1 12 0v2m2-13a3 3 0 0 1 0 6m1 2a5 5 0 0 1 3 5\'/></svg>',
  chart: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M4 20V10m6 10V4m6 16v-7m4 7H2\'/></svg>',
  user: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><circle cx=\'12\' cy=\'8\' r=\'4\'/><path d=\'M4 21a8 8 0 0 1 16 0\'/></svg>',
  signal: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><circle cx=\'12\' cy=\'12\' r=\'2\'/><path d=\'M7.8 7.8a6 6 0 0 0 0 8.4m8.4-8.4a6 6 0 0 1 0 8.4M4.5 4.5a10.6 10.6 0 0 0 0 15m15-15a10.6 10.6 0 0 1 0 15\'/></svg>',
  settings: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><circle cx=\'12\' cy=\'12\' r=\'3\'/><path d=\'M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z\'/></svg>',
  search: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><circle cx=\'11\' cy=\'11\' r=\'7\'/><path d=\'m20 20-4-4\'/></svg>',
  bell: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Zm-8 12h4\'/></svg>',
  shield: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M12 3 4 6v5c0 5 3.3 8.5 8 10 4.7-1.5 8-5 8-10V6l-8-3Z\'/><path d=\'m9 12 2 2 4-5\'/></svg>',
  play: '<svg viewBox=\'0 0 24 24\' fill=\'currentColor\'><path d=\'m8 5 11 7-11 7Z\'/></svg>',
  eye: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z\'/><circle cx=\'12\' cy=\'12\' r=\'2.5\'/></svg>',
  clock: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><circle cx=\'12\' cy=\'12\' r=\'9\'/><path d=\'M12 7v5l3 2\'/></svg>',
  bookmark: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M6 3h12v18l-6-4-6 4Z\'/></svg>',
  heart: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M20.8 5.7a5.2 5.2 0 0 0-7.4 0L12 7.1l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 22l8.8-8.9a5.2 5.2 0 0 0 0-7.4Z\'/></svg>',
  message: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z\'/></svg>',
  upload: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><path d=\'M12 16V4m-5 5 5-5 5 5M4 15v5h16v-5\'/></svg>',
  lock: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><rect x=\'4\' y=\'10\' width=\'16\' height=\'11\' rx=\'2\'/><path d=\'M8 10V7a4 4 0 0 1 8 0v3\'/></svg>',
  mail: '<svg viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.7\'><rect x=\'3\' y=\'5\' width=\'18\' height=\'14\' rx=\'2\'/><path d=\'m3 7 9 6 9-6\'/></svg>'
};

const routeMeta = {
  '/': ['01', '首頁', 'PREMIUM BROADCAST', 'home'],
  '/login': ['02', '會員登入', 'MEMBER ACCESS', 'member'],
  '/signup': ['03', '會員註冊', 'CREATE ACCOUNT', 'member'],
  '/live': ['04', '直播大廳', 'LIVE DIRECTORY', 'live'],
  '/tournaments': ['05', '撲克賽事', 'TOURNAMENTS', 'tournaments'],
  '/tournaments/event': ['06', '賽事詳情', 'EVENT CONTROL', 'tournaments'],
  '/live/official': ['07', '官方直播', 'OFFICIAL FEED', 'live'],
  '/live/high-stakes': ['08', '高額桌', 'HIGH STAKES', 'high-stakes'],
  '/live/creators': ['09', '會員直播', 'CREATOR DIRECTORY', 'creators'],
  '/channel/member': ['10', '會員頻道', 'CREATOR CHANNEL', 'creators'],
  '/creator/apply': ['11', '實況主申請', 'CREATOR APPLICATION', 'studio'],
  '/creator/live': ['12', '直播中心', 'CREATOR STUDIO', 'studio'],
  '/community': ['13', '社群短片', 'COMMUNITY FEED', 'community'],
  '/rankings': ['14', '積分榜', 'LEADERBOARD', 'rankings'],
  '/member': ['15', '會員中心', 'MEMBER DASHBOARD', 'member'],
  '/settings': ['16', '偏好設定', 'ACCOUNT SETTINGS', 'settings']
};

const routeSequence = Object.keys(routeMeta);

const streamData = [
  ['official', 'WSOP 2026 主賽事決賽桌', '69Poker Official', '12,984', '/live/official', 'WSOP'],
  ['high', 'Hustler Casino 高額桌之夜', 'High Stakes Desk', '5,274', '/live/high-stakes', 'HCL'],
  ['high', 'Triton Monte-Carlo $100K', 'Triton Poker', '4,126', '/live/high-stakes', 'TRITON'],
  ['creator', 'RiverMan｜現金桌實戰覆盤', 'RiverMan', '2,411', '/channel/member', 'RIVER'],
  ['creator', 'LuckyFish69｜新手錦標賽教室', 'LuckyFish69', '1,882', '/channel/member', 'LF69'],
  ['official', 'WPT Championship Day 2', '69Poker Official', '3,781', '/live/official', 'WPT'],
  ['creator', 'AceLuna｜晚間短牌挑戰', 'AceLuna', '1,521', '/channel/member', 'AL'],
  ['high', 'No Gamble, No Future', 'High Stakes Desk', '2,948', '/live/high-stakes', 'NGNF']
];

const events = [
  ['05.15', '21:00', 'WPT SHRPO Championship', '$3,500 Main Event · Day 2', '$3.5M', '直播中', 'live'],
  ['05.16', '22:00', 'Triton Monte-Carlo', '$100K Short Deck', '$8.0M', '即將開始', 'upcoming'],
  ['05.17', '20:00', 'GG High Roller Championship', '$25,500 High Roller', '$2.5M', '即將開始', 'upcoming'],
  ['05.19', '19:30', '69Poker Creator Cup', '會員實況主邀請賽', '$250K', '開放追蹤', 'upcoming'],
  ['05.12', '20:00', 'WSOP Europe Qualifier', 'Final Table', '$1.2M', '已結束', 'complete']
];

const searchIndex = [
  ['WSOP 2026 主賽事決賽桌', '官方直播', '/live/official', 'live'],
  ['Triton Monte-Carlo', '撲克賽事', '/tournaments/event', 'trophy'],
  ['Hustler Casino 高額桌之夜', '高額桌', '/live/high-stakes', 'diamond'],
  ['RiverMan', '會員頻道', '/channel/member', 'video'],
  ['實況主申請', '開啟你的頻道', '/creator/apply', 'signal'],
  ['本週積分榜', '會員排名', '/rankings', 'chart']
];

function hydrateIcons(context = document) {
  $$('[data-icon]', context).forEach(node => {
    const name = node.dataset.icon;
    if (icons[name]) node.innerHTML = icons[name];
  });
}

function getRoute() {
  const value = location.hash.replace(/^#/, '').split('?')[0] || '/';
  return routeMeta[value] ? value : '/';
}

function link(route, label, classes = 'button primary') {
  return `<a class='route-link ${classes}' href='#${route}' data-route='${route}'>${label}</a>`;
}

function pageHeader(eyebrow, title, description, actions = '') {
  return `<header class='page-header'><div><p class='eyebrow'>${eyebrow}</p><h1 class='page-title'>${title}</h1><p class='page-subtitle'>${description}</p></div>${actions ? `<div class='page-actions'>${actions}</div>` : ''}</header>`;
}

function streamCard(item, index = 0) {
  const [category, title, channel, viewers, route, mark] = item;
  const image = index % 2 ? 'assets/reference-dashboard.png' : 'assets/reference-home.png';
  return `<article class='stream-card' data-category='${category}'><a class='route-link' href='#${route}' data-route='${route}' aria-label='觀看 ${title}'><div class='card-media'><img src='${image}' alt='' loading='lazy'><span class='media-badge'>LIVE</span><span class='viewer-count'><span data-icon='eye'></span>${viewers}</span><b class='card-logo'>${mark}</b></div><div class='card-copy'><h3>${title}</h3><p>${channel}</p><div class='card-foot'><b>${category === 'creator' ? '會員頻道' : category === 'high' ? '$100 / $200 NLH' : '官方轉播'}</b><span>立即觀看 →</span></div></div></a></article>`;
}

function eventCard(item, index = 0) {
  const image = index % 2 ? 'assets/reference-dashboard.png' : 'assets/reference-home.png';
  return `<article class='event-card'><a class='route-link' href='#/tournaments/event' data-route='/tournaments/event'><div class='card-media'><img src='${image}' alt='' loading='lazy'><span class='media-badge'>${item[5]}</span><b class='card-logo'>${item[2].split(' ')[0]}</b></div><div class='card-copy'><h3>${item[2]}</h3><p>${item[3]}</p><div class='card-foot'><b>${item[0]} · ${item[1]}</b><span>${item[4]}</span></div></div></a></article>`;
}

function renderHome() {
  return `<div class='page home-page'><div class='home-grid'><section class='hero-stage'><img class='hero-image' src='assets/reference-home.png' alt='69Poker 撲克直播主舞台概念畫面'><div class='hero-scan'></div><div class='hero-copy'><div class='status-line'><i class='pulse'></i> WSOP 2026 · FINAL TABLE</div><h1>THIS IS<span>69POKER</span></h1><p>從世界級錦標賽到會員自播頻道，用一個控制台掌握直播、賽程、排名與社群討論。</p><div class='hero-meta'><div><small>CHAMPION</small><b>LUCAS JUMALON</b></div><div><small>PRIZE</small><b>$10,000,000</b></div><div><small>LIVE VIEWERS</small><b>12,984</b></div></div><div class='hero-buttons'>${link('/live/official', `<span data-icon='play'></span> 觀看直播`)}${link('/tournaments/event', '賽事控制台', 'button ghost')}</div></div><span class='edge-code'>LIVE THE GAME · FEEL THE RUSH</span><span class='hero-watermark'>GLOBAL POKER BROADCAST / 2026</span></section><aside class='home-rail'><section class='panel match-card'><div class='panel-head'><h2>LIVE MATCH</h2><span class='live-badge'>LIVE</span></div><div class='panel-body'><div class='match-title'><div><h2>WSOP MAIN EVENT 2026</h2><p>最終桌 / FINAL TABLE</p></div></div><div class='stat-row'><div class='stat-box'><small>BLINDS</small><b>750K / 1.5M</b></div><div class='stat-box'><small>PLAYERS</small><b>5 / 9</b></div><div class='stat-box'><small>NEXT LEVEL</small><b>08:42</b></div></div><div class='player-strip'>${['LJ','JH','MM','AB','KM'].map((n,i)=>`<div class='player-mini'><span class='player-face'>${n}</span><small>${['JUMALON','HAMMOUD','MIZRACHI','BARAKAT','MALOULIS'][i]}</small><b>${[194,79.5,55,37,29.5][i]}M</b></div>`).join('')}</div>${link('/live/official', `<span data-icon='play'></span> 進入轉播`, 'button primary full')}</div></section><section class='panel'><div class='panel-head'><h2>69 LEADERBOARD</h2><a class='route-link line-link' href='#/rankings' data-route='/rankings'>完整榜單 →</a></div><div class='panel-body'><ol class='rank-list'>${['PokerKing_69','AllInDream','LuckyGG','ShortDeckMaster','Tasly_69'].map((name,i)=>`<li><span class='rank-number'>${String(i+1).padStart(2,'0')}</span><span class='rank-name'>${name}<small>${i < 2 ? '菁英會員' : '競技會員'}</small></span><b class='rank-points'>${['2,890,139','2,450,888','1,980,652','1,620,771','1,250,320'][i]}</b></li>`).join('')}</ol></div></section></aside></div><section class='content-section'><div class='section-title'><div><h2>UPCOMING <span>EVENTS</span></h2><p>即將開賽 · 追蹤後可接收開播提醒</p></div><a class='route-link line-link' href='#/tournaments' data-route='/tournaments'>查看完整賽事 →</a></div><div class='card-grid'>${events.slice(0,4).map(eventCard).join('')}</div></section><section class='content-section'><div class='section-title'><div><h2>LIVE <span>TABLES</span></h2><p>官方轉播與會員頻道同步更新</p></div><a class='route-link line-link' href='#/live' data-route='/live'>瀏覽直播大廳 →</a></div><div class='card-grid'>${streamData.slice(1,5).map(streamCard).join('')}</div></section><div class='ticker'><b class='ticker-label'>HOT NEWS</b><div class='ticker-track'><span>WSOP 2026 主賽事決賽桌直播中</span><span>Creator Cup 開放會員實況主報名</span><span>本週積分榜已更新</span><span>所有賽事時間均以平台顯示時區為準</span></div></div></div>`;
}

function renderAuth(mode) {
  const signup = mode === 'signup';
  return `<div class='page'><section class='auth-page'><div class='auth-visual'><img src='assets/reference-dashboard.png' alt='69Poker 電競式撲克直播控制台'><div class='auth-promise'><p class='eyebrow'>MEMBER ACCESS</p><h1>YOUR SEAT.<br><span>YOUR STORY.</span></h1><p>登入後即可追蹤賽事、收藏精彩片段、參與聊天室，並申請開設自己的會員直播頻道。</p></div></div><div class='auth-form-side'><form class='auth-form' id='${signup ? 'signup-form' : 'login-form'}' novalidate><div class='auth-brand'><span class='brand-mark'><img src='assets/six-nine-club-logo.png' alt=''></span><b><span>69</span>POKER</b></div><h2>${signup ? '建立會員帳戶' : '歡迎回來'}</h2><p>${signup ? '完成基本資料後，即可開始建立你的觀看清單。' : '登入你的會員控制台，繼續上次觀看進度。'}</p><div class='form-grid'>${signup ? `<div class='form-row'><div class='field'><label for='display-name'>顯示名稱</label><input id='display-name' name='displayName' autocomplete='nickname' placeholder='例如 River69' required><span class='field-error'></span></div><div class='field'><label for='region'>所在地區</label><select id='region' name='region'><option>台灣</option><option>香港</option><option>新加坡</option><option>其他地區</option></select><span class='field-error'></span></div></div>` : ''}<div class='field'><label for='account'>電子郵件或手機號碼</label><input id='account' name='account' type='text' autocomplete='username' placeholder='member@69poker.demo' required><span class='field-error'></span></div>${signup ? `<div class='field'><label for='verify-code'>驗證碼</label><div class='input-action'><input id='verify-code' name='code' inputmode='numeric' maxlength='6' placeholder='輸入 6 位數驗證碼' required><button type='button' data-action='send-code'>取得驗證碼</button></div><span class='field-error'></span></div>` : ''}<div class='field'><label for='password'>密碼</label><input id='password' name='password' type='password' autocomplete='${signup ? 'new-password' : 'current-password'}' placeholder='至少 8 個字元' required minlength='8'><span class='field-error'></span></div>${signup ? `<label class='check-row'><input name='terms' type='checkbox' required><span>我已閱讀並同意會員條款、隱私政策與社群內容規範。</span></label>` : `<div class='form-between'><label class='check-row'><input type='checkbox' name='remember'><span>記住我</span></label><a class='text-link' href='#/settings'>忘記密碼？</a></div>`}<button class='button primary full' type='submit'>${signup ? '建立帳戶' : '登入控制台'} <span>→</span></button></div><div class='form-note'>展示模式：資料只會儲存在此瀏覽器，不會傳送到伺服器；正式上線時需串接會員與驗證服務。</div><p class='form-switch'>${signup ? '已經是會員？' : '還沒有帳戶？'} <a class='route-link' href='#/${signup ? 'login' : 'signup'}' data-route='/${signup ? 'login' : 'signup'}'>${signup ? '前往登入' : '免費註冊'}</a></p></form></div></section></div>`;
}

function renderLive() {
  const filters = `<div class='filters' data-filter-group><button class='filter-button active' data-filter='all'>全部直播</button><button class='filter-button' data-filter='official'>官方賽事</button><button class='filter-button' data-filter='high'>高額桌</button><button class='filter-button' data-filter='creator'>會員頻道</button></div>`;
  return `<div class='page'>${pageHeader('LIVE DIRECTORY', '直播<em>大廳</em>', '一個入口瀏覽官方賽事、高額桌與會員自播頻道；可依內容類型即時篩選。', filters)}<section class='featured-live'><div class='featured-video'><img src='assets/reference-home.png' alt='WSOP 主賽事決賽桌直播'><div class='featured-caption'><div><span class='live-badge'>FEATURED LIVE</span><h2>WSOP MAIN EVENT 2026 · FINAL TABLE</h2><p>官方中文訊號 · 目前 12,984 人觀看</p></div><a class='route-link play-orbit' href='#/live/official' data-route='/live/official' aria-label='觀看焦點直播'><span data-icon='play'></span></a></div></div><aside class='featured-side'><div class='metric-tile'><small>LIVE CHANNELS</small><strong class='red'>08</strong><span>2 個官方訊號 · 6 個會員頻道</span></div><div class='metric-tile'><small>VIEWERS ONLINE</small><strong>32,416</strong><span>過去一小時 +12.8%</span></div><div class='metric-tile'><small>NEXT OFFICIAL EVENT</small><strong>00:42:18</strong><span>Triton Monte-Carlo</span></div></aside></section><section><div class='section-title'><div><h2>ALL <span>STREAMS</span></h2><p>依即時熱度排序</p></div></div><div class='card-grid' id='stream-grid'>${streamData.map(streamCard).join('')}</div></section></div>`;
}

function renderTournaments() {
  return `<div class='page'>${pageHeader('GLOBAL EVENT CALENDAR', '撲克<em>賽事</em>', '查看直播中、即將開始與已結束賽事；每一站都有賽程、盲注、選手與重播資料。', `<div class='filters'><button class='filter-button active'>全部</button><button class='filter-button'>直播中</button><button class='filter-button'>即將開始</button><button class='filter-button'>已結束</button></div>`)}<section class='card-grid'>${events.slice(0,4).map(eventCard).join('')}</section><section class='content-section panel'><div class='panel-head'><h2>完整賽程</h2><span>顯示時區 GMT+8</span></div><div class='panel-body'><div class='event-list'>${events.map(item=>`<article class='event-row'><div class='event-date'><b>${item[0]}</b><small>${item[1]} GMT+8</small></div><div class='event-name'><h3>${item[2]}</h3><p>${item[3]}</p></div><div class='event-cell'><small>PRIZE POOL</small><b>${item[4]}</b></div><div class='event-cell'><small>FORMAT</small><b>${item[3].includes('Short') ? 'SHORT DECK' : 'NLH'}</b></div><div class='status ${item[6]}'>${item[5]}</div>${link('/tournaments/event', '賽事詳情', 'button ghost small')}</article>`).join('')}</div></div></section></div>`;
}

function renderTournamentDetail() {
  return `<div class='page'><section class='event-hero'><img src='assets/reference-home.png' alt='WSOP 2026 賽事主視覺'><div class='event-hero-copy'><span class='live-badge'>LIVE EVENT · DAY 7</span><h1>WSOP 2026<br><span>MAIN EVENT</span></h1><p>總決賽控制台整合賽程、盲注級別、剩餘選手、獎金結構與官方直播。所有數據為概念展示資料。</p><div class='hero-meta'><div><small>BUY-IN</small><b>$10,000</b></div><div><small>ENTRIES</small><b>8,642</b></div><div><small>PRIZE POOL</small><b>$86.4M</b></div></div><div class='hero-buttons'>${link('/live/official', `<span data-icon='play'></span> 觀看最終桌`)}<button class='button ghost' data-action='favorite'><span data-icon='bookmark'></span> 追蹤賽事</button></div></div></section><div class='detail-grid'><section class='panel'><div class='panel-head'><h2>今日賽程</h2><span>FINAL TABLE</span></div><div class='panel-body'><ul class='schedule-list'><li><time>18:30</time><span><b>直播前導節目</b><small>選手狀態與籌碼分析</small></span><span class='status complete'>已完成</span></li><li><time>19:00</time><span><b>最終桌開賽</b><small>Level 36 · 750K / 1.5M</small></span><span class='status live'>直播中</span></li><li><time>21:10</time><span><b>決勝階段</b><small>預估時間，依現場進度調整</small></span><span class='status upcoming'>待開始</span></li><li><time>—</time><span><b>冠軍訪談</b><small>比賽結束後立即播出</small></span><span class='status'>待確認</span></li></ul></div></section><aside class='panel'><div class='panel-head'><h2>賽事狀態</h2><span class='live-badge'>LIVE</span></div><div class='panel-body'><div class='stat-row'><div class='stat-box'><small>PLAYERS LEFT</small><b>5 / 9</b></div><div class='stat-box'><small>AVG STACK</small><b>79.2M</b></div><div class='stat-box'><small>NEXT LEVEL</small><b>08:42</b></div></div><ol class='rank-list'>${['Lucas Jumalon','J. Hammoud','M. Mizrachi','A. Barakat','K. Maloulis'].map((n,i)=>`<li><span class='rank-number'>${i+1}</span><span class='rank-name'>${n}<small>${['PH','LB','US','MA','FR'][i]}</small></span><b class='rank-points'>${[194,79.5,55,37,29.5][i]}M</b></li>`).join('')}</ol></div></aside></div></div>`;
}

function chatMarkup() {
  return `<aside class='panel chat-panel'><div class='chat-tabs'><button class='active'>即時聊天</button><button>賽事資料</button></div><div class='chat-feed' id='chat-feed'><div class='system-message'>請尊重其他觀眾。禁止張貼下注導流、私人金流與攻擊性內容。</div>${[['PK','PokerKing_69','這個河牌太關鍵了。'],['AL','AllInDream','ICM 壓力已經非常明顯。'],['LF','LuckyFish69','導播可以重播上一手嗎？'],['RM','RiverMan','Jumalon 現在籌碼領先接近 2.5 倍。']].map(m=>`<div class='chat-message'><span class='avatar'>${m[0]}</span><p><b>${m[1]}</b>${m[2]}</p></div>`).join('')}</div><form class='chat-form' id='chat-form'><input name='message' maxlength='120' placeholder='輸入訊息…' aria-label='聊天室訊息'><button class='button primary small' type='submit'>送出</button></form></aside>`;
}

function renderWatch(type) {
  const member = type === 'member';
  const high = type === 'high';
  const title = member ? 'RIVERMAN · 現金桌實戰覆盤' : high ? 'HUSTLER CASINO · HIGH STAKES' : 'WSOP 2026 · MAIN EVENT FINAL TABLE';
  const channel = member ? 'RiverMan' : high ? 'High Stakes Desk' : '69Poker Official';
  const viewers = member ? '2,411' : high ? '5,274' : '12,984';
  const image = member || high ? 'assets/reference-dashboard.png' : 'assets/reference-home.png';
  const kicker = member ? 'MEMBER CHANNEL' : high ? 'HIGH STAKES FEED' : 'OFFICIAL BROADCAST';
  return `<div class='page'>${pageHeader(kicker, member ? '會員<em>頻道</em>' : high ? '高額桌<em>直播</em>' : '官方<em>直播</em>', member ? '觀看會員實況主的教學、覆盤與娛樂內容，並可追蹤頻道。' : '同步賽事影像、數據與聊天室，掌握每一個關鍵時刻。')}<div class='watch-layout'><div><section class='video-player'><img src='${image}' alt='${title} 直播畫面'><div class='video-overlay'><div class='video-top'><span class='live-badge'>LIVE · ${viewers}</span><span class='status'>1080P · AUTO</span></div><div><div class='video-bottom'><div class='video-title'><p class='eyebrow'>${kicker}</p><h1>${title}</h1></div><div class='controls'><button class='control-button' data-action='play' aria-label='播放或暫停'><span data-icon='play'></span></button><button class='control-button' data-action='volume' aria-label='音量'>VOL</button><button class='control-button' data-action='fullscreen' aria-label='全螢幕'>⛶</button></div></div><div class='progress'><i></i></div></div></div></section><section class='panel watch-info'><div class='panel-body'><div class='channel-line'><span class='avatar'>${member ? 'RM' : high ? 'HS' : '69'}</span><div><h2>${channel}</h2><p>${member ? '24.8K 追蹤者 · 撲克教學 / 牌局覆盤' : '官方認證頻道 · 賽事資料同步'}</p></div></div><div class='interaction-buttons'><button class='button ghost small' data-action='favorite'><span data-icon='bookmark'></span> 收藏</button><button class='button primary small' data-action='follow'>${member ? '追蹤頻道' : '追蹤賽事'}</button></div></div></section><section class='content-section'><div class='section-title'><div><h2>KEY <span>MOMENTS</span></h2><p>${member ? '實況主標記的教學段落' : '賽事時間軸與精彩重播'}</p></div></div><div class='timeline'><div class='timeline-item'><time>19:42:18</time><p>${member ? '翻牌圈尺度選擇：為何不做持續下注' : 'Lucas Jumalon 贏下 92M 關鍵底池'}</p><span>重播 02:14</span></div><div class='timeline-item'><time>19:31:06</time><p>${high ? '河牌全下，底池超過 $420K' : 'Level 36 開始 · 盲注升至 750K / 1.5M'}</p><span>數據卡</span></div><div class='timeline-item'><time>19:18:44</time><p>${member ? '觀眾提問：短碼情境的範圍調整' : '第五名選手淘汰，賽事剩餘五人'}</p><span>重播 01:08</span></div></div></section></div>${chatMarkup()}</div></div>`;
}

function renderCreators() {
  const creatorStreams = streamData.filter(item=>item[0] === 'creator');
  return `<div class='page'>${pageHeader('CREATOR NETWORK', '會員<em>直播</em>', '從實戰覆盤、新手教學到賽事陪看，探索平台會員建立的原創頻道。', link('/creator/apply', '申請成為實況主', 'button primary'))}<section class='creator-hero'><div class='creator-copy'><p class='eyebrow'>STREAM YOUR GAME</p><h1>YOUR TABLE.<br><span>YOUR STORY.</span></h1><p>會員直播提供內容分類、追蹤、聊天室與精彩片段工具。頻道需完成身分與內容審查，禁止下注導流、私人金流與未授權轉播。</p><div class='hero-buttons'>${link('/creator/apply', '開設我的頻道')}${link('/creator/live', '進入直播中心', 'button ghost')}</div></div><div class='creator-visual'><img src='assets/reference-dashboard.png' alt='會員直播頻道控制台'></div></section><section class='content-section'><div class='section-title'><div><h2>CREATOR <span>CHANNELS</span></h2><p>正在直播的會員頻道</p></div><div class='filters' data-filter-group><button class='filter-button active' data-filter='all'>全部</button><button class='filter-button'>德州撲克</button><button class='filter-button'>教學</button><button class='filter-button'>牌局覆盤</button></div></div><div class='card-grid'>${[...creatorStreams, ...creatorStreams, streamData[6]].map(streamCard).join('')}</div></section></div>`;
}

function renderCreatorApply() {
  return `<div class='page'>${pageHeader('CREATOR APPLICATION', '實況主<em>申請</em>', '完成基本資料、頻道計畫與內容規範確認。展示版只會把草稿保存在此瀏覽器。')}<div class='application-layout'><aside class='panel step-nav'><button class='active'><span>01</span><b>基本資料<small>身分與聯絡方式</small></b></button><button><span>02</span><b>頻道計畫<small>內容分類與簡介</small></b></button><button><span>03</span><b>設備檢查<small>影像、收音與網路</small></b></button><button><span>04</span><b>規範確認<small>內容安全與版權</small></b></button></aside><form class='panel application-form' id='creator-apply-form'><div class='panel-head'><h2>CHANNEL ONBOARDING</h2><span>DRAFT MODE</span></div><div class='panel-body'><h2>建立你的直播頻道</h2><p>請先填寫申請草稿；正式版需由營運團隊審核後才能開播。</p><div class='form-grid'><div class='form-row'><div class='field'><label for='creator-name'>頻道名稱</label><input id='creator-name' name='channelName' required placeholder='例如 RiverMan Poker'></div><div class='field'><label for='creator-category'>主要內容</label><select id='creator-category' name='category'><option>牌局覆盤</option><option>新手教學</option><option>賽事陪看</option><option>撲克娛樂</option></select></div></div><div class='field'><label for='creator-intro'>頻道介紹</label><textarea id='creator-intro' name='intro' required placeholder='說明你的直播內容、更新頻率與希望服務的觀眾。'></textarea></div><div class='field'><label>頻道封面與身分資料</label><label class='upload-zone'><input type='file' hidden accept='image/*'><span><span data-icon='upload'></span><b>選擇圖片或拖放檔案</b><small>JPG / PNG，展示版不會上傳檔案</small></span></label></div><label class='check-row'><input name='rules' type='checkbox' required><span>我同意遵守社群與直播規範，包括禁止下注導流、私人金流、侵權轉播與騷擾內容。</span></label><div class='form-between'><span class='form-note'>此頁不會真的提交審核；只儲存本機草稿。</span><button class='button primary' type='submit'>儲存申請草稿 →</button></div></div></div></form></div></div>`;
}

function renderStudio() {
  return `<div class='page'>${pageHeader('CREATOR STUDIO', '直播<em>中心</em>', '設定頻道標題、內容分類、影像來源與串流品質；完成檢查後即可啟動展示狀態。', `<button class='button ghost' data-action='test-stream'>重新檢測</button>`)}<div class='studio-grid'><section><div class='preview-screen' id='preview-screen'><span class='status preview-badge' id='stream-status'>PREVIEW OFFLINE</span><div class='preview-corners'></div><div class='preview-placeholder'><span class='brand-mark'><img src='assets/six-nine-club-logo.png' alt=''></span><h2>69POKER CREATOR PREVIEW</h2><p>選擇影像來源後，預覽將顯示在此處</p></div></div><div class='panel content-section'><div class='panel-head'><h2>直播資訊</h2><span>AUTO SAVE</span></div><form class='panel-body form-grid' id='stream-setup-form'><div class='form-row'><div class='field'><label for='stream-title'>直播標題</label><input id='stream-title' name='title' value='晚間牌局覆盤｜觀眾提問場'></div><div class='field'><label for='stream-category'>分類</label><select id='stream-category' name='category'><option>牌局覆盤</option><option>新手教學</option><option>賽事陪看</option></select></div></div><button class='button muted' type='submit'>儲存直播設定</button></form></div></section><aside class='studio-controls'><section class='panel'><div class='panel-head'><h2>訊號檢查</h2><span id='test-time'>尚未檢測</span></div><div class='panel-body network-check' id='network-check'><div class='check-item'><span class='check-icon'>✓</span><span><b>網路連線</b><small>建議上傳 8 Mbps 以上</small></span><span>READY</span></div><div class='check-item'><span class='check-icon'>✓</span><span><b>影像來源</b><small>1920 × 1080 · 60 FPS</small></span><span>READY</span></div><div class='check-item'><span class='check-icon'>✓</span><span><b>音訊輸入</b><small>峰值 -12 dB</small></span><span>READY</span></div></div></section><section class='panel'><div class='panel-head'><h2>串流金鑰</h2><span>RTMP</span></div><div class='panel-body'><div class='stream-key'>rtmp://live.69poker.demo/member/••••••••••••</div><p class='form-note'>展示用位址，沒有真實串流服務。切勿分享正式環境的串流金鑰。</p></div></section><button class='button primary full' id='go-live-button' data-action='go-live'><span data-icon='signal'></span> 啟動展示直播</button>${link('/channel/member', '查看我的公開頻道', 'button ghost full')}</aside></div></div>`;
}

function renderCommunity() {
  const titles = ['決賽桌 92M 關鍵底池','三分鐘看懂 ICM 壓力','河牌該不該抓詐唬？','新手常見的三個尺度錯誤','Triton 短牌精彩片段','RiverMan 本週牌局回顧','WSOP 冠軍訪談精華','會員挑戰賽預告','高額桌最冷靜的一手','直播幕後：導播台一天'];
  return `<div class='page'>${pageHeader('COMMUNITY FEED', '社群<em>短片</em>', '賽事精華、教學片段、頻道動態與社群討論集中在同一個內容流。', `<div class='filters'><button class='filter-button active'>推薦</button><button class='filter-button'>精華</button><button class='filter-button'>教學</button><button class='filter-button'>追蹤中</button></div>`)}<section class='short-grid'>${titles.map((title,i)=>`<article class='short-card' data-action='play'><img src='${i%2 ? 'assets/reference-dashboard.png' : 'assets/reference-home.png'}' alt='' loading='lazy'><div class='short-actions'><span data-icon='heart'></span><span data-icon='message'></span></div><div class='short-copy'><h3>${title}</h3><p>@${['69PokerOfficial','RiverMan','LuckyFish69'][i%3]} · ${[24,18,32,15][i%4]}K 次觀看</p></div></article>`).join('')}</section></div>`;
}

function renderRankings() {
  const players = ['PokerKing_69','AllInDream','LuckyGG','ShortDeckMaster','Tasly_69','RiverMan','AceLuna','PocketRocket','TheDealer','FinalTable88'];
  return `<div class='page'>${pageHeader('69 LEADERBOARD', '會員<em>積分榜</em>', '依官方賽事參與、內容貢獻與社群互動形成的展示排行；不代表現金價值。', `<div class='filters'><button class='filter-button active'>本週</button><button class='filter-button'>本月</button><button class='filter-button'>總排行</button></div>`)}<div class='ranking-hero'><section class='panel podium'><div class='podium-member second'><span class='podium-rank'>2</span><span class='avatar'>AI</span><b>AllInDream</b><strong>2,450,888</strong></div><div class='podium-member first'><span class='podium-rank'>1</span><span class='avatar'>PK</span><b>PokerKing_69</b><strong>2,890,139</strong></div><div class='podium-member third'><span class='podium-rank'>3</span><span class='avatar'>LG</span><b>LuckyGG</b><strong>1,980,652</strong></div></section><aside class='panel'><div class='panel-head'><h2>本週數據</h2><span>WEEK 19</span></div><div class='panel-body'><div class='stat-row'><div class='stat-box'><small>ACTIVE MEMBERS</small><b>24,698</b></div><div class='stat-box'><small>POINTS ISSUED</small><b>8.2M</b></div><div class='stat-box'><small>TOP RISE</small><b>+18</b></div></div><p class='form-note'>積分僅作為平台活躍度與榮譽展示，不可兌換現金或作為下注籌碼。</p></div></aside></div><section class='panel'><div class='panel-head'><h2>完整排名</h2><span>最後更新 20:10</span></div><div class='panel-body' style='padding:0;overflow:auto'><table class='ranking-table'><thead><tr><th>RANK</th><th>PLAYER</th><th>LEVEL</th><th>WEEKLY</th><th>TOTAL POINTS</th><th>CHANGE</th></tr></thead><tbody>${players.map((n,i)=>`<tr><td>${String(i+1).padStart(2,'0')}</td><td><span class='player-cell'><span class='avatar'>${n.slice(0,2).toUpperCase()}</span>${n}</span></td><td>${i<3?'ELITE':'PRO'}</td><td>+${[128,114,96,87,74,68,61,55,49,43][i]}K</td><td>${(2890139-i*214583).toLocaleString()}</td><td class='delta ${i%3===2?'down':'up'}'>${i%3===2?'↓ 2':'↑ '+(i+1)}</td></tr>`).join('')}</tbody></table></div></section></div>`;
}

function renderMember() {
  return `<div class='page'>${pageHeader('MEMBER DASHBOARD', '會員<em>中心</em>', '集中管理追蹤頻道、收藏片段、觀看紀錄、開播資格與通知。', `<button class='button ghost' data-action='logout'>登出展示帳戶</button>`)}<div class='profile-hero'><section class='profile-card'><div class='profile-info'><span class='avatar' id='profile-avatar'>69</span><div><h1 id='profile-name'>69Poker Guest</h1><p>MEMBER ID · 69002618 · 展示會員</p><div class='profile-stats'><span><b>12</b><small>追蹤頻道</small></span><span><b>38</b><small>收藏片段</small></span><span><b>126h</b><small>觀看時間</small></span></div></div></div></section><aside class='panel'><div class='panel-head'><h2>MEMBER LEVEL</h2><span>PRO</span></div><div class='panel-body'><p class='eyebrow'>NEXT LEVEL · ELITE</p><h2 style='font:700 36px/1 var(--display);margin:14px 0 7px'>7,860 / 10,000</h2><div class='progress'><i style='width:78.6%'></i></div><p style='color:#6d6d74;font-size:9px;margin:15px 0 0'>完成內容互動與觀看任務可累積展示積分。</p></div></aside></div><section class='member-modules'><article class='panel member-module'><span class='module-icon' data-icon='live'></span><h3>追蹤中的頻道</h3><p>12 個頻道 · 其中 3 個正在直播</p><a class='route-link' href='#/live/creators' data-route='/live/creators'>查看頻道 →</a></article><article class='panel member-module'><span class='module-icon' data-icon='bookmark'></span><h3>收藏與稍後觀看</h3><p>38 個片段 · 6 個尚未觀看</p><a class='route-link' href='#/community' data-route='/community'>查看收藏 →</a></article><article class='panel member-module'><span class='module-icon' data-icon='clock'></span><h3>觀看紀錄</h3><p>最近觀看：WSOP 2026 最終桌</p><a class='route-link' href='#/live/official' data-route='/live/official'>繼續播放 →</a></article><article class='panel member-module'><span class='module-icon' data-icon='signal'></span><h3>我的直播頻道</h3><p>申請草稿或進入直播中心</p><a class='route-link' href='#/creator/live' data-route='/creator/live'>管理頻道 →</a></article><article class='panel member-module'><span class='module-icon' data-icon='bell'></span><h3>通知中心</h3><p>2 個賽事提醒 · 1 則頻道通知</p><a href='javascript:void(0)' data-action='notifications'>查看通知 →</a></article><article class='panel member-module'><span class='module-icon' data-icon='settings'></span><h3>偏好與安全</h3><p>個人資料、密碼、隱私及內容設定</p><a class='route-link' href='#/settings' data-route='/settings'>開啟設定 →</a></article></section></div>`;
}

function renderSettings() {
  return `<div class='page'>${pageHeader('ACCOUNT SETTINGS', '偏好<em>設定</em>', '管理會員資料、通知方式、帳戶安全與內容隱私。所有操作僅在展示版瀏覽器內生效。')}<div class='settings-layout'><aside class='panel settings-nav'><a class='active' href='javascript:void(0)'><span data-icon='user'></span>個人資料</a><a href='javascript:void(0)'><span data-icon='bell'></span>通知設定</a><a href='javascript:void(0)'><span data-icon='lock'></span>密碼與安全</a><a href='javascript:void(0)'><span data-icon='shield'></span>隱私與內容</a></aside><form class='panel settings-content' id='settings-form'><div class='panel-head'><h2>PROFILE & PREFERENCES</h2><span>LOCAL DEMO</span></div><div class='panel-body'><section class='setting-group'><h3>公開資料</h3><p>頻道留言與排行榜上顯示的基本資訊。</p><div class='form-row'><div class='field'><label for='setting-name'>顯示名稱</label><input id='setting-name' name='displayName' value='69Poker Guest'></div><div class='field'><label for='setting-language'>介面語言</label><select id='setting-language' name='language'><option>繁體中文</option><option>简体中文</option><option>English</option></select></div></div></section><section class='setting-group'><h3>通知</h3><p>選擇希望收到的提醒類型。</p><div class='setting-row'><span><b>追蹤賽事開播提醒</b><small>賽事開始前與正式開播時通知</small></span><button class='switch' type='button' role='switch' aria-checked='true'></button></div><div class='setting-row'><span><b>追蹤頻道動態</b><small>會員實況主開播與發布新片段時通知</small></span><button class='switch' type='button' role='switch' aria-checked='true'></button></div><div class='setting-row'><span><b>平台活動與電子報</b><small>每週精選內容與產品更新</small></span><button class='switch' type='button' role='switch' aria-checked='false'></button></div></section><section class='setting-group'><h3>隱私與安全</h3><p>控制觀看紀錄與個人頁面的可見範圍。</p><div class='setting-row'><span><b>公開我的追蹤清單</b><small>其他會員可以看到你追蹤的實況主</small></span><button class='switch' type='button' role='switch' aria-checked='false'></button></div><div class='setting-row'><span><b>儲存觀看紀錄</b><small>跨裝置同步需要正式會員後台</small></span><button class='switch' type='button' role='switch' aria-checked='true'></button></div></section><button class='button primary' type='submit'>儲存展示設定</button></div></form></div></div>`;
}

const renderers = {
  '/': renderHome,
  '/login': () => renderAuth('login'),
  '/signup': () => renderAuth('signup'),
  '/live': renderLive,
  '/tournaments': renderTournaments,
  '/tournaments/event': renderTournamentDetail,
  '/live/official': () => renderWatch('official'),
  '/live/high-stakes': () => renderWatch('high'),
  '/live/creators': renderCreators,
  '/channel/member': () => renderWatch('member'),
  '/creator/apply': renderCreatorApply,
  '/creator/live': renderStudio,
  '/community': renderCommunity,
  '/rankings': renderRankings,
  '/member': renderMember,
  '/settings': renderSettings
};

function render() {
  const route = getRoute();
  const meta = routeMeta[route];
  document.title = `${meta[1]} · 69Poker Premium Platform`;
  $('#page-content').innerHTML = renderers[route]();
  const page = $('#page-content .page');
  if (page) page.insertAdjacentHTML('beforeend', renderSequenceNav(route));
  hydrateIcons($('#page-content'));
  updateNavigation(route, meta[3]);
  updateAuthUI();
  restorePageState(route);
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.body.classList.remove('nav-open');
  $('.menu-toggle').setAttribute('aria-expanded', 'false');
}

function renderSequenceNav(route) {
  const index = routeSequence.indexOf(route);
  const previous = routeMeta[routeSequence[index - 1]];
  const next = routeMeta[routeSequence[index + 1]];
  return `<nav class='sequence-nav' aria-label='全站逐頁瀏覽'><div class='sequence-progress'><span>PLATFORM WALKTHROUGH</span><b>${String(index + 1).padStart(2,'0')} / ${String(routeSequence.length).padStart(2,'0')}</b><i style='--progress:${((index + 1) / routeSequence.length) * 100}%'></i></div><div class='sequence-links'>${previous ? `<a class='route-link sequence-link previous' href='#${routeSequence[index - 1]}' data-route='${routeSequence[index - 1]}'><small>← PREVIOUS</small><b>${previous[1]}</b></a>` : `<span class='sequence-link disabled'><small>START OF TOUR</small><b>首頁</b></span>`}${next ? `<a class='route-link sequence-link next' href='#${routeSequence[index + 1]}' data-route='${routeSequence[index + 1]}'><small>NEXT →</small><b>${next[1]}</b></a>` : `<a class='route-link sequence-link next' href='#/' data-route='/'><small>BACK TO START ↗</small><b>返回首頁</b></a>`}</div></nav>`;
}

function updateNavigation(route, navKey) {
  $$('[data-nav]').forEach(node => node.classList.toggle('active', node.dataset.nav === navKey));
  $$('.side-nav a').forEach(node => node.removeAttribute('aria-current'));
  const current = $(`.side-nav [data-route='${route}']`);
  if (current) current.setAttribute('aria-current', 'page');
}

function getUser() {
  try { return JSON.parse(localStorage.getItem('69poker_user')); } catch { return null; }
}

function updateAuthUI() {
  const user = getUser();
  const box = $('#auth-actions');
  if (!box) return;
  box.innerHTML = user ? `<a class='route-link member-chip' href='#/member' data-route='/member'><span class='avatar'>${(user.displayName || '69').slice(0,2).toUpperCase()}</span><span><b>${user.displayName || '69Poker Member'}</b><small>展示會員</small></span></a>` : `<a class='route-link button ghost compact' href='#/login' data-route='/login'>登入</a><a class='route-link button primary compact' href='#/signup' data-route='/signup'>註冊</a>`;
}

function restorePageState(route) {
  if (route === '/member' || route === '/settings') {
    const user = getUser();
    if (user) {
      if ($('#profile-name')) $('#profile-name').textContent = user.displayName || '69Poker Member';
      if ($('#profile-avatar')) $('#profile-avatar').textContent = (user.displayName || '69').slice(0,2).toUpperCase();
      if ($('#setting-name')) $('#setting-name').value = user.displayName || '';
    }
  }
  if (route === '/creator/apply') {
    try {
      const draft = JSON.parse(localStorage.getItem('69poker_creator_draft'));
      if (draft) Object.entries(draft).forEach(([key,value]) => { const input = $(`[name='${key}']`); if (input && input.type !== 'checkbox') input.value = value; });
    } catch {}
  }
}

function toast(message, type = '') {
  const node = document.createElement('div');
  node.className = `toast ${type}`;
  node.textContent = message;
  $('#toast-region').append(node);
  setTimeout(() => node.remove(), 3400);
}

function openNotifications() {
  const backdrop = $('#dialog-backdrop');
  backdrop.hidden = false;
  backdrop.innerHTML = `<section class='dialog' role='dialog' aria-modal='true' aria-labelledby='dialog-title'><div class='dialog-head'><h2 id='dialog-title'>通知中心</h2><button class='dialog-close' data-action='close-dialog' aria-label='關閉'>×</button></div><div class='dialog-body'><div class='notification-list'><div class='notification-item'><span data-icon='live'></span><p><b>WSOP 最終桌正在直播</b>你追蹤的官方賽事已進入 Level 36。</p></div><div class='notification-item'><span data-icon='video'></span><p><b>RiverMan 已開播</b>今晚主題：現金桌實戰覆盤。</p></div><div class='notification-item'><span data-icon='trophy'></span><p><b>Creator Cup 開放追蹤</b>會員實況主邀請賽將於 05.19 登場。</p></div></div></div></section>`;
  hydrateIcons(backdrop);
  $('.dialog-close', backdrop).focus();
}

function closeDialog() {
  $('#dialog-backdrop').hidden = true;
  $('#dialog-backdrop').innerHTML = '';
}

function validateForm(form) {
  let valid = true;
  $$('input[required], textarea[required]', form).forEach(input => {
    let message = '';
    if (input.type === 'checkbox' && !input.checked) message = '請先勾選同意。';
    else if (!input.value.trim()) message = '此欄位不能留空。';
    else if (input.minLength > 0 && input.value.length < input.minLength) message = `至少需要 ${input.minLength} 個字元。`;
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    const error = input.closest('.field')?.querySelector('.field-error');
    if (error) error.textContent = message;
    if (message) valid = false;
  });
  return valid;
}

function handleSubmit(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault();
  if (!validateForm(form)) {
    toast('請檢查尚未完成的必填欄位。');
    form.querySelector('[aria-invalid=true]')?.focus();
    return;
  }
  const data = Object.fromEntries(new FormData(form).entries());
  if (form.id === 'login-form') {
    const displayName = data.account.includes('@') ? data.account.split('@')[0] : `Member ${data.account.slice(-4)}`;
    localStorage.setItem('69poker_user', JSON.stringify({ displayName, account: data.account, mode: 'demo' }));
    toast('展示模式登入成功，正在開啟會員中心。', 'success');
    setTimeout(() => { location.hash = '#/member'; }, 350);
  } else if (form.id === 'signup-form') {
    localStorage.setItem('69poker_user', JSON.stringify({ displayName: data.displayName, account: data.account, region: data.region, mode: 'demo' }));
    toast('展示帳戶已建立在此瀏覽器。', 'success');
    setTimeout(() => { location.hash = '#/member'; }, 350);
  } else if (form.id === 'chat-form') {
    if (!data.message?.trim()) return;
    const feed = $('#chat-feed');
    const user = getUser();
    feed.insertAdjacentHTML('beforeend', `<div class='chat-message'><span class='avatar'>${(user?.displayName || 'ME').slice(0,2).toUpperCase()}</span><p><b>${user?.displayName || 'DemoGuest'}</b>${escapeHtml(data.message)}</p></div>`);
    form.reset();
    feed.scrollTop = feed.scrollHeight;
  } else if (form.id === 'creator-apply-form') {
    localStorage.setItem('69poker_creator_draft', JSON.stringify(data));
    toast('申請草稿已儲存在此瀏覽器，尚未送出審核。', 'success');
  } else if (form.id === 'stream-setup-form') {
    localStorage.setItem('69poker_stream_setup', JSON.stringify(data));
    toast('直播設定已儲存在此瀏覽器。', 'success');
  } else if (form.id === 'settings-form') {
    const user = getUser() || { mode: 'demo' };
    user.displayName = data.displayName || '69Poker Guest';
    localStorage.setItem('69poker_user', JSON.stringify(user));
    updateAuthUI();
    toast('展示設定已儲存。', 'success');
  }
}

function escapeHtml(value) {
  const div = document.createElement('div');
  div.textContent = value;
  return div.innerHTML;
}

function handleAction(button) {
  const action = button.dataset.action;
  if (action === 'notifications') openNotifications();
  if (action === 'close-dialog') closeDialog();
  if (action === 'send-code') {
    button.disabled = true;
    let seconds = 20;
    button.textContent = `${seconds}s 後重試`;
    const timer = setInterval(() => {
      seconds -= 1;
      button.textContent = seconds ? `${seconds}s 後重試` : '取得驗證碼';
      if (!seconds) { clearInterval(timer); button.disabled = false; }
    }, 1000);
    toast('展示驗證碼：696969（未發送簡訊）', 'success');
  }
  if (action === 'follow' || action === 'favorite') {
    const active = button.classList.toggle('success');
    const label = action === 'follow' ? '追蹤' : '收藏';
    button.innerHTML = active ? `✓ 已${label}` : `${action === 'favorite' ? icons.bookmark : ''} ${label}`;
    toast(active ? `已加入${label}清單。` : `已取消${label}。`, active ? 'success' : '');
  }
  if (action === 'play') toast('展示播放器：此概念網站未接入真實影音訊號。');
  if (action === 'volume') toast('音量控制為展示狀態。');
  if (action === 'fullscreen') $('.video-player')?.requestFullscreen?.();
  if (action === 'logout') {
    localStorage.removeItem('69poker_user');
    updateAuthUI();
    toast('已登出展示帳戶。');
    setTimeout(() => { location.hash = '#/'; }, 250);
  }
  if (action === 'test-stream') {
    const timeNode = $('#test-time');
    if (timeNode) timeNode.textContent = 'CHECKING…';
    setTimeout(() => {
      if (!timeNode?.isConnected) return;
      timeNode.textContent = new Date().toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit'});
      toast('展示檢測完成：三項訊號皆為就緒。', 'success');
    }, 650);
  }
  if (action === 'go-live') {
    const live = button.dataset.live === 'true';
    button.dataset.live = live ? 'false' : 'true';
    button.classList.toggle('success', !live);
    button.classList.toggle('primary', live);
    button.innerHTML = !live ? `${icons.signal} 停止展示直播` : `${icons.signal} 啟動展示直播`;
    const status = $('#stream-status');
    if (status) { status.textContent = !live ? 'DEMO LIVE' : 'PREVIEW OFFLINE'; status.classList.toggle('live', !live); }
    toast(!live ? '展示直播已啟動，沒有對外傳送影音。' : '展示直播已停止。', !live ? 'success' : '');
  }
}

function runSearch(query) {
  const box = $('#search-results');
  const value = query.trim().toLowerCase();
  if (!value) { box.hidden = true; box.innerHTML = ''; return; }
  const results = searchIndex.filter(item => `${item[0]} ${item[1]}`.toLowerCase().includes(value));
  box.innerHTML = results.length ? results.map(item=>`<a class='route-link search-result' href='#${item[2]}' data-route='${item[2]}'><span class='thumb' data-icon='${item[3]}'></span><span><b>${item[0]}</b><small>${item[1]}</small></span><span>→</span></a>`).join('') : `<div class='search-result'><span class='thumb' data-icon='search'></span><span><b>找不到相符內容</b><small>請嘗試搜尋 WSOP、RiverMan 或高額桌</small></span></div>`;
  hydrateIcons(box);
  box.hidden = false;
}

function initKineticHeader() {
  const stage = $('[data-kinetic-header]');
  if (!stage || stage.dataset.initialized === 'true') return;

  const word = $('.kinetic-word', stage);
  const art = $('.kinetic-art', stage);
  const glyph = $('.kinetic-glyph', stage);
  const split = $('.kinetic-split', stage);
  const splitHalves = $$('.kinetic-split-half', stage);
  const canvas = $('.kinetic-particles', stage);
  const context = canvas?.getContext('2d');
  if (!word || !art || !glyph || !split || !splitHalves.length || !context) return;

  stage.dataset.initialized = 'true';
  const phrases = ['SIX & NINE CLUB', 'POKER LIVE GAME'];
  const titleAssets = {
    'SIX & NINE CLUB': 'assets/kinetic-title-six-nine-v2.webp',
    'POKER LIVE GAME': 'assets/kinetic-title-poker-live-v2.webp'
  };
  Object.values(titleAssets).forEach(source => { const image = new Image(); image.src = source; });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const timers = new Set();
  const particlePalette = ['#d8d4cd', '#8e9094', '#55575c', '#ff4d43', '#f7a05b'];
  let phraseIndex = 0;
  let particles = [];
  let frameId = 0;
  let dissolveLayer = null;
  let dissolveCells = [];
  let dissolveCursor = 0;
  let dissolveStartedAt = 0;
  let stageBounds = { width: 0, height: 0 };
  let dpr = 1;

  const randomBetween = (min, max) => min + Math.random() * (max - min);
  const schedule = (callback, delay) => {
    const timer = window.setTimeout(() => {
      timers.delete(timer);
      callback();
    }, delay);
    timers.add(timer);
  };
  const markPhase = (phase) => {
    stage.dataset.phase = phase;
    stage.dataset.phaseStartedAt = `${performance.now()}`;
  };

  function clearTimers() {
    timers.forEach(timer => window.clearTimeout(timer));
    timers.clear();
  }

  function resizeCanvas() {
    const rect = stage.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    stageBounds = { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
    canvas.width = Math.round(stageBounds.width * dpr);
    canvas.height = Math.round(stageBounds.height * dpr);
    canvas.style.width = `${stageBounds.width}px`;
    canvas.style.height = `${stageBounds.height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = [];
    dissolveLayer = null;
    dissolveCells = [];
    dissolveCursor = 0;
  }

  function relativeGlyphRect() {
    const stageRect = stage.getBoundingClientRect();
    const artRect = art.getBoundingClientRect();
    const naturalWidth = art.naturalWidth || artRect.width;
    const naturalHeight = art.naturalHeight || artRect.height;
    const scale = Math.min(artRect.width / naturalWidth, artRect.height / naturalHeight);
    const width = naturalWidth * scale;
    const height = naturalHeight * scale;
    const left = artRect.left + (artRect.width - width) * .5;
    const top = artRect.top + (artRect.height - height) * .5;
    return {
      left: left - stageRect.left,
      top: top - stageRect.top,
      right: left + width - stageRect.left,
      bottom: top + height - stageRect.top,
      width,
      height
    };
  }

  function drawParticles(now) {
    context.clearRect(0, 0, stageBounds.width, stageBounds.height);
    const active = [];

    if (dissolveLayer) {
      const elapsed = now - dissolveStartedAt;
      const layerContext = dissolveLayer.getContext('2d');
      while (dissolveCursor < dissolveCells.length && dissolveCells[dissolveCursor].eraseAt <= elapsed) {
        const cell = dissolveCells[dissolveCursor];
        layerContext.clearRect(cell.x, cell.y, cell.size, cell.size);
        dissolveCursor += 1;
      }
      if (elapsed < 1540) {
        context.save();
        context.globalCompositeOperation = 'screen';
        context.drawImage(dissolveLayer, 0, 0, stageBounds.width, stageBounds.height);
        context.restore();
      } else {
        dissolveLayer = null;
        dissolveCells = [];
        dissolveCursor = 0;
      }
    }

    particles.forEach(particle => {
      if (now < particle.birth) {
        active.push(particle);
        return;
      }

      const age = (now - particle.birth) / 1000;
      const progress = (now - particle.birth) / particle.life;
      if (progress >= 1) return;

      const fade = Math.pow(1 - progress, particle.fadePower);
      const x = particle.x + particle.vx * age;
      const y = particle.y + particle.vy * age + particle.gravity * age * age * .5;
      context.save();
      context.globalAlpha = fade * particle.opacity;
      context.translate(x, y);
      context.rotate(particle.rotation + particle.spin * age);
      context.fillStyle = particle.color;
      if (particle.glow) {
        context.shadowBlur = particle.glow;
        context.shadowColor = particle.color;
      }
      if (particle.soft) {
        context.filter = `blur(${particle.blur}px)`;
        context.beginPath();
        context.arc(0, 0, particle.size, 0, Math.PI * 2);
        context.fill();
      } else {
        context.fillRect(-particle.size * .5, -particle.size * .5, particle.size, particle.size);
      }
      context.restore();
      active.push(particle);
    });

    particles = active;
    if (particles.length || dissolveLayer) {
      frameId = window.requestAnimationFrame(drawParticles);
    } else {
      frameId = 0;
      context.clearRect(0, 0, stageBounds.width, stageBounds.height);
    }
  }

  function addParticles(nextParticles) {
    particles.push(...nextParticles);
    if (!frameId) frameId = window.requestAnimationFrame(drawParticles);
  }

  function spawnImpactDust() {
    const rect = relativeGlyphRect();
    const now = performance.now();
    const centerX = rect.left + rect.width * .5;
    const baseY = rect.bottom + 2;
    const count = stageBounds.width < 340 ? 38 : 62;
    const burst = Array.from({ length: count }, (_, index) => {
      const spread = randomBetween(-.48, .48);
      const isAccent = index % 11 === 0;
      return {
        x: centerX + rect.width * spread,
        y: baseY + randomBetween(-2, 3),
        vx: spread * randomBetween(28, 68) + randomBetween(-7, 7),
        vy: randomBetween(-48, -13),
        gravity: randomBetween(48, 78),
        birth: now + randomBetween(0, 90),
        life: randomBetween(520, 980),
        size: randomBetween(.8, isAccent ? 3.2 : 2.4),
        rotation: randomBetween(0, Math.PI),
        spin: randomBetween(-5.8, 5.8),
        color: isAccent ? '#ff5044' : particlePalette[Math.floor(randomBetween(0, 3))],
        opacity: randomBetween(.45, .94),
        fadePower: 1.35,
        glow: isAccent ? 5 : 0
      };
    });
    addParticles(burst);
  }

  function spawnLaserSparks() {
    const rect = relativeGlyphRect();
    const now = performance.now();
    const count = stageBounds.width < 340 ? 24 : 42;
    const sparks = Array.from({ length: count }, (_, index) => {
      const position = randomBetween(.08, .92);
      const x = rect.left + rect.width * position;
      const y = rect.top + rect.height * .52 + randomBetween(-1.5, 1.5);
      const hot = index % 5 === 0;
      return {
        x,
        y,
        vx: randomBetween(16, 74) * (Math.random() > .18 ? 1 : -1),
        vy: randomBetween(-62, 48),
        gravity: randomBetween(4, 24),
        birth: now + position * 380 + randomBetween(-35, 65),
        life: randomBetween(360, 760),
        size: randomBetween(.8, hot ? 3.1 : 2.1),
        rotation: randomBetween(-.8, .8),
        spin: randomBetween(-8, 8),
        color: hot ? '#fff4e9' : (index % 3 ? '#ff483d' : '#f39b55'),
        opacity: randomBetween(.62, 1),
        fadePower: 1.7,
        glow: hot ? 7 : 4
      };
    });
    addParticles(sparks);
  }

  function spawnTextDust() {
    const rect = relativeGlyphRect();
    if (rect.width < 2 || rect.height < 2) return;

    const sampleCanvas = document.createElement('canvas');
    const sampleWidth = Math.max(1, Math.ceil(rect.width));
    const sampleHeight = Math.max(1, Math.ceil(rect.height));
    sampleCanvas.width = sampleWidth;
    sampleCanvas.height = sampleHeight;
    const sampleContext = sampleCanvas.getContext('2d', { willReadFrequently: true });
    sampleContext.clearRect(0, 0, sampleWidth, sampleHeight);
    sampleContext.drawImage(art, 0, 0, sampleWidth, sampleHeight);

    const pixels = sampleContext.getImageData(0, 0, sampleWidth, sampleHeight).data;
    const now = performance.now();
    const step = stageBounds.width < 340 ? 2.4 : 2;
    const maxParticles = stageBounds.width < 340 ? 1050 : 2300;
    const dust = [];
    let eligiblePixels = 0;

    dissolveLayer = document.createElement('canvas');
    dissolveLayer.width = Math.ceil(stageBounds.width);
    dissolveLayer.height = Math.ceil(stageBounds.height);
    const layerContext = dissolveLayer.getContext('2d');
    const splitY = rect.top + rect.height * .5;
    layerContext.save();
    layerContext.beginPath();
    layerContext.rect(rect.left, rect.top - 2, rect.width, rect.height * .5 + 2);
    layerContext.clip();
    layerContext.drawImage(art, rect.left, rect.top - 2, rect.width, rect.height);
    layerContext.restore();
    layerContext.save();
    layerContext.beginPath();
    layerContext.rect(rect.left, splitY + 2, rect.width, rect.height * .5);
    layerContext.clip();
    layerContext.drawImage(art, rect.left, rect.top + 2, rect.width, rect.height);
    layerContext.restore();

    dissolveCells = [];
    const erodeStep = stageBounds.width < 340 ? 2.8 : 2.4;
    for (let y = 0; y < sampleHeight; y += erodeStep) {
      for (let x = 0; x < sampleWidth; x += erodeStep) {
        const sampleX = Math.min(sampleWidth - 1, Math.round(x));
        const sampleY = Math.min(sampleHeight - 1, Math.round(y));
        const offset = (sampleY * sampleWidth + sampleX) * 4;
        const brightness = Math.max(pixels[offset], pixels[offset + 1], pixels[offset + 2]);
        if (brightness < 22) continue;
        const centerDistance = Math.abs(y / sampleHeight - .5) * 2;
        const cellSize = randomBetween(erodeStep * .82, erodeStep * 1.48);
        dissolveCells.push({
          x: rect.left + x - cellSize * .5,
          y: rect.top + y + (y < sampleHeight * .5 ? -2 : 2) - cellSize * .5,
          size: cellSize,
          eraseAt: randomBetween(280, 1250) + centerDistance * 120
        });
      }
    }
    dissolveCells.sort((a, b) => a.eraseAt - b.eraseAt);
    dissolveCursor = 0;
    dissolveStartedAt = now;

    for (let y = 0; y < sampleHeight; y += step) {
      for (let x = 0; x < sampleWidth; x += step) {
        const sampleX = Math.min(sampleWidth - 1, Math.round(x));
        const sampleY = Math.min(sampleHeight - 1, Math.round(y));
        const offset = (sampleY * sampleWidth + sampleX) * 4;
        const red = pixels[offset];
        const green = pixels[offset + 1];
        const blue = pixels[offset + 2];
        const brightness = Math.max(red, green, blue);
        if (brightness < 24 || Math.random() > .64) continue;
        eligiblePixels += 1;
        const centerDistance = Math.abs(y / sampleHeight - .5) * 2;
        const chunk = eligiblePixels % 11 === 0;
        const splitOffset = y < sampleHeight * .5 ? -2 : 2;
        const particle = {
          x: rect.left + x,
          y: rect.top + y + splitOffset,
          vx: randomBetween(chunk ? -18 : -10, chunk ? 18 : 10),
          vy: randomBetween(chunk ? -29 : -20, chunk ? 10 : 6),
          gravity: randomBetween(-7, 5),
          birth: now + randomBetween(90, 760) + centerDistance * 210,
          life: randomBetween(960, 1720),
          size: chunk ? randomBetween(2.5, 4.8) : randomBetween(.75, 2.2),
          rotation: randomBetween(0, Math.PI),
          spin: randomBetween(-5.2, 5.2),
          color: `rgb(${red},${green},${blue})`,
          opacity: chunk ? randomBetween(.76, .98) : randomBetween(.56, .9),
          fadePower: randomBetween(1.08, 1.82),
          glow: 0
        };

        if (dust.length < maxParticles) {
          dust.push(particle);
        } else {
          const replacement = Math.floor(Math.random() * eligiblePixels);
          if (replacement < maxParticles) dust[replacement] = particle;
        }
      }
    }

    const smokeCount = stageBounds.width < 340 ? 34 : 64;
    for (let index = 0; index < smokeCount; index += 1) {
      const along = randomBetween(.02, .98);
      dust.push({
        x: rect.left + rect.width * along,
        y: rect.top + rect.height * randomBetween(.18, .82),
        vx: randomBetween(-9, 9),
        vy: randomBetween(-21, -7),
        gravity: randomBetween(-5, 0),
        birth: now + randomBetween(360, 1160),
        life: randomBetween(1050, 1880),
        size: randomBetween(4.4, 10.5),
        rotation: 0,
        spin: 0,
        color: Math.random() > .86 ? '#7d2526' : '#77777a',
        opacity: randomBetween(.07, .17),
        fadePower: randomBetween(.8, 1.25),
        glow: 0,
        soft: true,
        blur: randomBetween(2.5, 4.6)
      });
    }

    const emberCount = stageBounds.width < 340 ? 18 : 34;
    for (let index = 0; index < emberCount; index += 1) {
      dust.push({
        x: rect.left + rect.width * randomBetween(.04, .96),
        y: rect.top + rect.height * .5 + randomBetween(-2, 2),
        vx: randomBetween(-15, 15),
        vy: randomBetween(-28, 18),
        gravity: randomBetween(2, 14),
        birth: now + randomBetween(70, 640),
        life: randomBetween(680, 1180),
        size: randomBetween(.7, 2),
        rotation: randomBetween(0, Math.PI),
        spin: randomBetween(-7, 7),
        color: Math.random() > .32 ? '#ff4438' : '#f6b078',
        opacity: randomBetween(.52, .9),
        fadePower: 1.7,
        glow: 4
      });
    }

    addParticles(dust);
  }

  function setPhrase(text) {
    const source = titleAssets[text];
    word.dataset.text = text;
    glyph.dataset.text = text;
    glyph.textContent = text;
    art.src = source;
    splitHalves.forEach(half => { half.src = source; });
    stage.dataset.phrase = text;
  }

  function stopSequence() {
    clearTimers();
    if (frameId) window.cancelAnimationFrame(frameId);
    frameId = 0;
    particles = [];
    dissolveLayer = null;
    dissolveCells = [];
    dissolveCursor = 0;
    context.clearRect(0, 0, stageBounds.width, stageBounds.height);
    stage.classList.remove('is-entering', 'is-impacting', 'is-laser', 'is-split', 'is-dissolving');
  }

  function runCycle() {
    if (document.hidden || reducedMotion.matches) return;
    clearTimers();
    particles = [];
    dissolveLayer = null;
    dissolveCells = [];
    dissolveCursor = 0;
    context.clearRect(0, 0, stageBounds.width, stageBounds.height);
    stage.classList.remove('is-reduced', 'is-entering', 'is-impacting', 'is-laser', 'is-split', 'is-dissolving');
    setPhrase(phrases[phraseIndex]);
    markPhase('drop');
    void stage.offsetWidth;
    stage.classList.add('is-entering');

    schedule(() => {
      markPhase('impact');
      stage.classList.add('is-impacting');
      spawnImpactDust();
      schedule(() => stage.classList.remove('is-impacting'), 720);
    }, 700);

    schedule(() => {
      markPhase('laser');
      stage.classList.add('is-laser');
      spawnLaserSparks();
      schedule(() => stage.classList.remove('is-laser'), 900);
    }, 1600);

    schedule(() => {
      markPhase('split');
      stage.classList.add('is-split');
    }, 2600);

    schedule(() => {
      markPhase('dust');
      spawnTextDust();
      stage.classList.remove('is-entering');
      stage.classList.add('is-dissolving');
    }, 3420);

    schedule(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      runCycle();
    }, 6350);
  }

  function syncMotionPreference() {
    stopSequence();
    if (reducedMotion.matches) {
      setPhrase(phrases[0]);
      markPhase('static');
      stage.classList.add('is-reduced');
      return;
    }
    stage.classList.remove('is-reduced');
    runCycle();
  }

  const observer = new ResizeObserver(resizeCanvas);
  observer.observe(stage);
  resizeCanvas();
  reducedMotion.addEventListener?.('change', syncMotionPreference);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopSequence();
    else syncMotionPreference();
  });
  (document.fonts?.ready || Promise.resolve()).then(syncMotionPreference);
}

document.addEventListener('submit', handleSubmit);
document.addEventListener('click', event => {
  const routeLink = event.target.closest('.route-link');
  if (routeLink) {
    document.body.classList.remove('nav-open');
    $('#search-results').hidden = true;
  }
  const action = event.target.closest('[data-action]');
  if (action) handleAction(action);
  const filter = event.target.closest('[data-filter]');
  if (filter) {
    const group = filter.closest('[data-filter-group]');
    $$('[data-filter]', group).forEach(node=>node.classList.toggle('active', node === filter));
    const category = filter.dataset.filter;
    $$('#stream-grid [data-category]').forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  }
  const switchButton = event.target.closest('.switch');
  if (switchButton) switchButton.setAttribute('aria-checked', switchButton.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  if (event.target === $('#dialog-backdrop')) closeDialog();
});

$('.menu-toggle').addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  $('.menu-toggle').setAttribute('aria-expanded', String(open));
});

$('#global-search').addEventListener('input', event => runSearch(event.target.value));
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#global-search').focus(); }
  if (event.key === 'Escape') { closeDialog(); $('#search-results').hidden = true; document.body.classList.remove('nav-open'); }
});

window.addEventListener('hashchange', render);
hydrateIcons();
initKineticHeader();
if (!location.hash) history.replaceState(null, '', '#/');
render();
