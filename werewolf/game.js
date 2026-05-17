// ── I18N ──
let wwLang = localStorage.getItem('ww_lang') || 'zh-TW';
const WW_T = {
'zh-TW':{
lang_btn:'简体',
villager_name:'平民',villager_desc:'白天投票放逐你最懷疑的人，幫助好人陣營獲勝。',
wolf_name:'狼人',wolf_desc:'夜晚與隊友一起選擇刀殺一名玩家，白天偽裝身份混淆視聽。',
seer_name:'預言家',seer_desc:'每晚查驗一名玩家身份，獲知對方是「好人」或「狼人」。',
witch_name:'女巫',witch_desc:'一瓶解藥可救一人（含自己），一瓶毒藥可毒死一人，每瓶限用一次。',
hunter_name:'獵人',hunter_desc:'被投票或被狼刀時可開槍帶走一名玩家（被毒藥毒死則無法開槍）。',
guard_name:'守衛',guard_desc:'每晚守護一人免於被狼刀，但不能連續兩晚守同一人。',
camp_evil:'狼人陣營',camp_good:'好人陣營',
home_title:'狼人殺',home_sub:'Werewolf · 6–12 人',
btn_create:'✦ 創建房間',btn_join:'→ 加入房間',
back_lobby:'← 返回大廳',no_download:'無需下載 · 即開即玩 · 配合外部語音通話',
modal_create_title:'創建房間',label_nickname:'你的暱稱',placeholder_nickname:'輸入暱稱',
label_max:'玩家人數上限',btn_create_submit:'創建房間',
modal_join_title:'加入房間',label_room_code:'房間碼',placeholder_code:'輸入 6 位房間碼',btn_join_submit:'加入房間',
waiting_title:'等待室',label_players:'玩家列表',label_config:'配置身份',label_preset:'預設模板',
preset_custom:'自定義',preset_6:'6 人標準（3狼3民+預言家）',preset_9:'9 人標準（3狼+預/巫/獵+4民）',preset_12:'12 人標準（4狼+預/巫/獵/守+5民）',
role_wolf_label:'🐺 狼人',role_villager_label:'👥 平民',role_seer_label:'🔮 預言家',role_witch_label:'🧪 女巫',role_hunter_label:'🏹 獵人',role_guard_label:'🛡️ 守衛',
btn_start:'開始遊戲 →',btn_dissolve:'解散房間',btn_ready:'✓ 準備好了',btn_already_ready:'✓ 已準備好',
badge_host:'房主',badge_you:'你',badge_ready:'準備',badge_not_ready:'未準備',
copy_link:'🔗 邀請連結',copy_code:'📋 房間碼',
your_identity:'你的身份',wolf_teammates:'🐺 你的狼人隊友',only_wolf:'你是唯一的狼人',
btn_confirm_role:'✓ 我已記住',waiting_others:'等待其他玩家確認…',
night_label:'第 {n} 夜',
guard_title:'守衛行動',guard_sub:'守衛請選擇要守護的玩家',
wolf_title:'狼人行動',wolf_sub:'狼人請選擇刀殺目標',
seer_title:'預言家行動',seer_sub:'預言家請選擇要查驗的玩家',
witch_title:'女巫行動',witch_sub:'女巫請決定是否使用藥水',
night_done_title:'夜晚結算中',night_done_sub:'即將天亮…',
dead_wait:'你已出局，等待夜晚結束…',night_end:'夜晚結束，正在天亮…',
eyes_closed:'請閉眼',eyes_closed_sub:'等待其他角色行動…',
guard_h:'🛡️ 選擇守護目標',guard_no_repeat:'不能連續兩晚守護同一人',
guard_last:'（昨晚守護：{name}）',guard_confirmed:'✓ 已確認守護 {name}',
guard_confirm_btn:'確認守護 {name}',guard_reselect:'確認前可重新選擇',guard_skip:'本晚不守護任何人',
wolf_h:'🐺 選擇刀殺目標',wolf_hint:'所有狼人確認後生效，確認前可更換',
wolf_split:'⚠️ 意見不一致！請在私聊中協商，或超時後系統隨機選擇',
wolf_chat_label:'🐺 狼人私聊（其他人看不到）',wolf_chat_placeholder:'只有狼人能看到…',
wolf_confirmed_kill:'✓ 已確認刀 {name}',wolf_confirm_btn:'確認刀 {name}',
wolf_select_first:'請選擇目標後確認',wolf_confirm_reselect:'確認前可重新選擇',wolf_not_selected:'未選',
seer_h:'🔮 查驗一名玩家身份',seer_hint:'查驗結果僅你可見',
seer_result_title:'🔮 第 {n} 夜查驗結果',seer_result_note:'結果僅你可見，等待夜晚結束…',
seer_history_title:'歷史查驗記錄',seer_history_btn:'🔮 查驗記錄 ({n})',
seer_history_modal_title:'🔮 查驗記錄',seer_close:'關閉',
seer_is_wolf:'🐺 狼人',seer_is_good:'👥 好人',
witch_h:'🧪 女巫行動',witch_wolf_killed:'今夜被狼刀的人是：',witch_no_kill:'今夜沒有人被狼刀',
witch_heal_used:'解藥已用完',witch_heal_btn:'💉 選擇使用解藥救活',witch_poison_h:'☠️ 選擇毒殺目標',
witch_skip:'不使用任何藥',witch_heal_action:'💉 使用解藥救活',witch_poison_action:'☠️ 使用毒藥',
witch_skip_action:'不使用任何藥',witch_confirm_btn:'確認',witch_cancel:'取消，重新選擇',
witch_pending_heal:'💉 使用解藥救活',witch_pending_poison:'☠️ 毒殺 {name}',
day_title:'☀️ 第 {n} 天',day_discuss:'討論時間',day_vote_phase:'投票階段',
btn_end_speech:'結束發言',btn_skip:'跳過',btn_enter_vote:'進入投票',
chat_placeholder:'發言或聊天…',dead_chat_placeholder:'你已出局，無法發言',
vote_hint:'選出你最懷疑的人，超時視為棄票',vote_status:'{voted} / {total} 人已投票',
vote_confirm_btn:'確認投給 {name}',vote_reselect:'確認前可重新選擇',
vote_confirmed:'✓ 已投給 {name}',vote_dead_msg:'你已出局，無法投票',
vote_reveal_all:'公布投票結果',vote_reveal_early:'提前公布（還有 {n} 人未投）',
vote_result_banished:'{name} 被放逐',vote_result_seat:'座位 {seat} · 票數最高',
vote_result_tie:'平票',vote_result_tie_sub:'{names} 票數相同 — 無人放逐',
vote_result_none:'無人投票',vote_result_none_sub:'無人放逐',vote_result_detail:'投票詳情',
vote_result_abstain:'棄票：{names}',vote_result_countdown:'{n} 秒後繼續…',vote_result_continuing:'繼續中…',
vote_banished_badge:'放逐',
last_words_title:'💬 放逐遺言',last_words_banished:'被放逐',last_words_speaking:'正在說遺言…',
last_words_placeholder:'說出你的遺言…',
hunter_banished:'你被放逐了',hunter_killed:'你被狼刀了',hunter_sub:'選擇一名玩家帶走，或放棄',hunter_skip:'放棄開槍',
gameover_title:'遊戲結束',gameover_all_ids:'所有玩家身份',
win_good:'好人陣營勝利！',win_good_sub:'所有狼人已被消滅',win_evil:'狼人陣營勝利！',win_evil_sub:'狼人成功屠邊',win_none:'遊戲結束',
badge_alive:'存活',badge_dead:'出局',btn_play_again:'🔄 再來一局',btn_back_home:'返回大廳',waiting_host:'等待房主決定是否再來一局…',
modal_leave_title:'離開房間？',modal_leave_desc:'確認後將離開當前房間',
btn_cancel:'取消',btn_confirm_leave:'確認離開',
modal_dissolve_title:'解散房間？',modal_dissolve_desc:'所有玩家將被踢出，遊戲進度清空',btn_confirm_dissolve:'確認解散',
toast_created:'房間 {code} 已創建',toast_joined:'已加入 {code}',
toast_enter_nickname:'請輸入暱稱',toast_room_not_found:'找不到房間',
toast_game_started:'遊戲已開始，無法加入',toast_room_full:'房間已滿',toast_nick_taken:'暱稱已被使用',
toast_min_players:'至少 4 名玩家',toast_not_ready:'還有玩家未準備好',
toast_role_mismatch:'身份數量({total})與玩家數({players})不符',
toast_kicked:'已踢出玩家',toast_room_dissolved:'房間已解散',toast_kicked_out:'你已被踢出房間',
toast_became_host:'你已成為房主',toast_guard_confirmed:'已確認守護',
toast_wolf_confirmed:'已確認',toast_witch_confirmed:'已確認',toast_vote_confirmed:'已確認投票',
toast_role_confirmed:'已確認，等待其他玩家…',toast_reset:'已重置房間，等待玩家準備',
toast_copied_link:'已複製邀請連結',toast_copied_code:'已複製房間碼：{code}',toast_select_target:'請先選擇目標',
log_day:'🌅 第 {n} 天 — 昨夜{deaths}',log_deaths:'死亡：{names}',log_peaceful:'是平安夜',
log_timeout:'{name} 發言時間結束',log_skipped:'{name} 被房主跳過',log_vote_phase:'⏰ 進入投票階段',
log_tie:'⚖️ 平票（{names}）— 無人放逐',log_banished:'⚒️ {name}（座位 {seat}）被放逐',
log_hunter_shot:'🏹 {shooter} 開槍帶走 {target}（座位 {seat}）',log_hunter_skip:'{name} 放棄開槍',
log_hunter_wait:'🏹 等待獵人開槍…',
seat:'座位 {n}',you:'你',host:'房主',night_n:'第{n}夜',
},
'zh-CN':{
lang_btn:'繁體',
villager_name:'平民',villager_desc:'白天投票放逐你最怀疑的人，帮助好人阵营获胜。',
wolf_name:'狼人',wolf_desc:'夜晚与队友一起选择刀杀一名玩家，白天伪装身份混淆视听。',
seer_name:'预言家',seer_desc:'每晚查验一名玩家身份，获知对方是「好人」或「狼人」。',
witch_name:'女巫',witch_desc:'一瓶解药可救一人（含自己），一瓶毒药可毒死一人，每瓶限用一次。',
hunter_name:'猎人',hunter_desc:'被投票或被狼刀时可开枪带走一名玩家（被毒药毒死则无法开枪）。',
guard_name:'守卫',guard_desc:'每晚守护一人免于被狼刀，但不能连续两晚守同一人。',
camp_evil:'狼人阵营',camp_good:'好人阵营',
home_title:'狼人杀',home_sub:'Werewolf · 6–12 人',
btn_create:'✦ 创建房间',btn_join:'→ 加入房间',
back_lobby:'← 返回大厅',no_download:'无需下载 · 即开即玩 · 配合外部语音通话',
modal_create_title:'创建房间',label_nickname:'你的昵称',placeholder_nickname:'输入昵称',
label_max:'玩家人数上限',btn_create_submit:'创建房间',
modal_join_title:'加入房间',label_room_code:'房间码',placeholder_code:'输入 6 位房间码',btn_join_submit:'加入房间',
waiting_title:'等待室',label_players:'玩家列表',label_config:'配置身份',label_preset:'预设模板',
preset_custom:'自定义',preset_6:'6 人标准（3狼3民+预言家）',preset_9:'9 人标准（3狼+预/巫/猎+4民）',preset_12:'12 人标准（4狼+预/巫/猎/守+5民）',
role_wolf_label:'🐺 狼人',role_villager_label:'👥 平民',role_seer_label:'🔮 预言家',role_witch_label:'🧪 女巫',role_hunter_label:'🏹 猎人',role_guard_label:'🛡️ 守卫',
btn_start:'开始游戏 →',btn_dissolve:'解散房间',btn_ready:'✓ 准备好了',btn_already_ready:'✓ 已准备好',
badge_host:'房主',badge_you:'你',badge_ready:'准备',badge_not_ready:'未准备',
copy_link:'🔗 邀请链接',copy_code:'📋 房间码',
your_identity:'你的身份',wolf_teammates:'🐺 你的狼人队友',only_wolf:'你是唯一的狼人',
btn_confirm_role:'✓ 我已记住',waiting_others:'等待其他玩家确认…',
night_label:'第 {n} 夜',
guard_title:'守卫行动',guard_sub:'守卫请选择要守护的玩家',
wolf_title:'狼人行动',wolf_sub:'狼人请选择刀杀目标',
seer_title:'预言家行动',seer_sub:'预言家请选择要查验的玩家',
witch_title:'女巫行动',witch_sub:'女巫请决定是否使用药水',
night_done_title:'夜晚结算中',night_done_sub:'即将天亮…',
dead_wait:'你已出局，等待夜晚结束…',night_end:'夜晚结束，正在天亮…',
eyes_closed:'请闭眼',eyes_closed_sub:'等待其他角色行动…',
guard_h:'🛡️ 选择守护目标',guard_no_repeat:'不能连续两晚守护同一人',
guard_last:'（昨晚守护：{name}）',guard_confirmed:'✓ 已确认守护 {name}',
guard_confirm_btn:'确认守护 {name}',guard_reselect:'确认前可重新选择',guard_skip:'本晚不守护任何人',
wolf_h:'🐺 选择刀杀目标',wolf_hint:'所有狼人确认后生效，确认前可更换',
wolf_split:'⚠️ 意见不一致！请在私聊中协商，或超时后系统随机选择',
wolf_chat_label:'🐺 狼人私聊（其他人看不到）',wolf_chat_placeholder:'只有狼人能看到…',
wolf_confirmed_kill:'✓ 已确认刀 {name}',wolf_confirm_btn:'确认刀 {name}',
wolf_select_first:'请选择目标后确认',wolf_confirm_reselect:'确认前可重新选择',wolf_not_selected:'未选',
seer_h:'🔮 查验一名玩家身份',seer_hint:'查验结果仅你可见',
seer_result_title:'🔮 第 {n} 夜查验结果',seer_result_note:'结果仅你可见，等待夜晚结束…',
seer_history_title:'历史查验记录',seer_history_btn:'🔮 查验记录 ({n})',
seer_history_modal_title:'🔮 查验记录',seer_close:'关闭',
seer_is_wolf:'🐺 狼人',seer_is_good:'👥 好人',
witch_h:'🧪 女巫行动',witch_wolf_killed:'今夜被狼刀的人是：',witch_no_kill:'今夜没有人被狼刀',
witch_heal_used:'解药已用完',witch_heal_btn:'💉 选择使用解药救活',witch_poison_h:'☠️ 选择毒杀目标',
witch_skip:'不使用任何药',witch_heal_action:'💉 使用解药救活',witch_poison_action:'☠️ 使用毒药',
witch_skip_action:'不使用任何药',witch_confirm_btn:'确认',witch_cancel:'取消，重新选择',
witch_pending_heal:'💉 使用解药救活',witch_pending_poison:'☠️ 毒杀 {name}',
day_title:'☀️ 第 {n} 天',day_discuss:'讨论时间',day_vote_phase:'投票阶段',
btn_end_speech:'结束发言',btn_skip:'跳过',btn_enter_vote:'进入投票',
chat_placeholder:'发言或聊天…',dead_chat_placeholder:'你已出局，无法发言',
vote_hint:'选出你最怀疑的人，超时视为弃票',vote_status:'{voted} / {total} 人已投票',
vote_confirm_btn:'确认投给 {name}',vote_reselect:'确认前可重新选择',
vote_confirmed:'✓ 已投给 {name}',vote_dead_msg:'你已出局，无法投票',
vote_reveal_all:'公布投票结果',vote_reveal_early:'提前公布（还有 {n} 人未投）',
vote_result_banished:'{name} 被放逐',vote_result_seat:'座位 {seat} · 票数最高',
vote_result_tie:'平票',vote_result_tie_sub:'{names} 票数相同 — 无人放逐',
vote_result_none:'无人投票',vote_result_none_sub:'无人放逐',vote_result_detail:'投票详情',
vote_result_abstain:'弃票：{names}',vote_result_countdown:'{n} 秒后继续…',vote_result_continuing:'继续中…',
vote_banished_badge:'放逐',
last_words_title:'💬 放逐遗言',last_words_banished:'被放逐',last_words_speaking:'正在说遗言…',
last_words_placeholder:'说出你的遗言…',
hunter_banished:'你被放逐了',hunter_killed:'你被狼刀了',hunter_sub:'选择一名玩家带走，或放弃',hunter_skip:'放弃开枪',
gameover_title:'游戏结束',gameover_all_ids:'所有玩家身份',
win_good:'好人阵营胜利！',win_good_sub:'所有狼人已被消灭',win_evil:'狼人阵营胜利！',win_evil_sub:'狼人成功屠边',win_none:'游戏结束',
badge_alive:'存活',badge_dead:'出局',btn_play_again:'🔄 再来一局',btn_back_home:'返回大厅',waiting_host:'等待房主决定是否再来一局…',
modal_leave_title:'离开房间？',modal_leave_desc:'确认后将离开当前房间',
btn_cancel:'取消',btn_confirm_leave:'确认离开',
modal_dissolve_title:'解散房间？',modal_dissolve_desc:'所有玩家将被踢出，游戏进度清空',btn_confirm_dissolve:'确认解散',
toast_created:'房间 {code} 已创建',toast_joined:'已加入 {code}',
toast_enter_nickname:'请输入昵称',toast_room_not_found:'找不到房间',
toast_game_started:'游戏已开始，无法加入',toast_room_full:'房间已满',toast_nick_taken:'昵称已被使用',
toast_min_players:'至少 4 名玩家',toast_not_ready:'还有玩家未准备好',
toast_role_mismatch:'身份数量({total})与玩家数({players})不符',
toast_kicked:'已踢出玩家',toast_room_dissolved:'房间已解散',toast_kicked_out:'你已被踢出房间',
toast_became_host:'你已成为房主',toast_guard_confirmed:'已确认守护',
toast_wolf_confirmed:'已确认',toast_witch_confirmed:'已确认',toast_vote_confirmed:'已确认投票',
toast_role_confirmed:'已确认，等待其他玩家…',toast_reset:'已重置房间，等待玩家准备',
toast_copied_link:'已复制邀请链接',toast_copied_code:'已复制房间码：{code}',toast_select_target:'请先选择目标',
log_day:'🌅 第 {n} 天 — 昨夜{deaths}',log_deaths:'死亡：{names}',log_peaceful:'是平安夜',
log_timeout:'{name} 发言时间结束',log_skipped:'{name} 被房主跳过',log_vote_phase:'⏰ 进入投票阶段',
log_tie:'⚖️ 平票（{names}）— 无人放逐',log_banished:'⚒️ {name}（座位 {seat}）被放逐',
log_hunter_shot:'🏹 {shooter} 开枪带走 {target}（座位 {seat}）',log_hunter_skip:'{name} 放弃开枪',
log_hunter_wait:'🏹 等待猎人开枪…',
seat:'座位 {n}',you:'你',host:'房主',night_n:'第{n}夜',
}
};
function t(key,vars){const d=WW_T[wwLang]||WW_T['zh-TW'];let s=d[key]||WW_T['zh-TW'][key]||key;if(vars)Object.entries(vars).forEach(([k,v])=>{s=s.replaceAll('{'+k+'}',v);});return s;}
function toggleWwLang(){wwLang=wwLang==='zh-TW'?'zh-CN':'zh-TW';localStorage.setItem('ww_lang',wwLang);applyWwLang();}
function applyWwLang(){
  const btn=document.getElementById('lang-btn');if(btn)btn.textContent=t('lang_btn');
  document.querySelectorAll('[data-ww-i18n]').forEach(el=>{el.textContent=t(el.getAttribute('data-ww-i18n'));});
  document.querySelectorAll('[data-ww-ph]').forEach(el=>{el.placeholder=t(el.getAttribute('data-ww-ph'));});
  document.title=t('home_title');
}
// ══════════════════════════════════════════════════════════════
// WEREWOLF — game logic (single-file, no backend)
// State machine, sync via localStorage + BroadcastChannel
// ══════════════════════════════════════════════════════════════

// ── ROLE DEFINITIONS ──
const ROLES = {
  villager: { emoji: '👥', name: '平民',   camp: 'good', desc: '白天投票放逐你最懷疑的人，幫助好人陣營獲勝。' },
  wolf:     { emoji: '🐺', name: '狼人',   camp: 'evil', desc: '夜晚與隊友一起選擇刀殺一名玩家，白天偽裝身份混淆視聽。' },
  seer:     { emoji: '🔮', name: '預言家', camp: 'good', desc: '每晚查驗一名玩家身份，獲知對方是「好人」或「狼人」。' },
  witch:    { emoji: '🧪', name: '女巫',   camp: 'good', desc: '一瓶解藥可救一人（含自己），一瓶毒藥可毒死一人，每瓶限用一次。' },
  hunter:   { emoji: '🏹', name: '獵人',   camp: 'good', desc: '被投票或被狼刀時可開槍帶走一名玩家（被毒藥毒死則無法開槍）。' },
  guard:    { emoji: '🛡️', name: '守衛',   camp: 'good', desc: '每晚守護一人免於被狼刀，但不能連續兩晚守同一人。' },
};

// Night action order (only roles that act at night)
const NIGHT_ORDER = ['guard', 'wolf', 'seer', 'witch'];

// Role count presets
const PRESETS = {
  '6std':  { wolf: 2, villager: 3, seer: 1, witch: 0, hunter: 0, guard: 0 },
  '9std':  { wolf: 3, villager: 3, seer: 1, witch: 1, hunter: 1, guard: 0 },
  '12std': { wolf: 4, villager: 4, seer: 1, witch: 1, hunter: 1, guard: 1 },
};

// Avatar emoji pool
const EMOJIS = ['🦊','🐼','🐨','🦁','🐯','🐸','🐧','🦋','🐙','🦄','🐺','🦝','🐻','🐮','🐷','🐹','🐰','🦔','🐦','🦉'];
const COLOR_SELF = '#f59e0b';   // amber — matches theme accent
const COLOR_OTHER = '#334155';
const COLOR_WOLF = '#7f1d1d';

function getAvatar(name) {
  let h = 0; for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffffffff;
  return { emoji: EMOJIS[Math.abs(h) % EMOJIS.length] };
}
function avatarColor(playerId) { return playerId === myId ? COLOR_SELF : COLOR_OTHER; }
function escHtml(s) { if (!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

// Render avatar with optional host dot. `room` may be null (skips dot).
function renderAvatarHTML(player, sizeClass, room) {
  const { emoji } = getAvatar(player.nickname);
  const bg = avatarColor(player.id);
  const isHostP = room && player.id === room.hostId;
  const dot = isHostP ? '<span class="host-dot"></span>' : '';
  return `<div class="avatar ${sizeClass || 'avatar-sm'}" style="background:${bg};position:relative;">${emoji}${dot}</div>`;
}
// ══════════════════════════════════════════════════════════════
// GLOBAL STATE
// ══════════════════════════════════════════════════════════════
let myId = null;
let myNickname = null;
let currentRoomCode = null;
let isHost = false;
let bc = null;
let pollInterval = null;
let nightTimerInterval = null;
let voteTimerInterval = null;
let lastStreamCount = 0;
let myVoteSelection = null;
let lastViewedNight = -1;
let lastViewedDay = -1;
let guardPending = null;   // local pending guard choice before confirm
let witchPending = null;   // local pending witch action before confirm

// Configurable role counts (waiting room)
let roleCounts = { wolf: 2, villager: 3, seer: 1, witch: 0, hunter: 0, guard: 0 };

// ══════════════════════════════════════════════════════════════
// STORAGE + SYNC — Firebase Realtime DB
// ══════════════════════════════════════════════════════════════
// Local cache (kept in sync by Firebase listener)
let _roomCache = {};

function storeGet(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } }
function storeSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
function storeRemove(k) { try { localStorage.removeItem(k); } catch {} }

// Werewolf rooms live under werewolf_rooms/ to avoid collision with undercover
function getRoomKey(c) { return `werewolf_rooms/${c}`; }

function getRoom(c) {
  return _roomCache[c] || null;
}

function saveRoom(r) {
  _roomCache[r.code] = r;
  return db.ref(getRoomKey(r.code)).set(r);
}

// Firebase real-time listener (replaces BroadcastChannel + polling)
let _roomListener = null;
function initBC(code) {
  if (_roomListener) { _roomListener(); _roomListener = null; }
  const ref = db.ref(getRoomKey(code));
  const unsubscribe = ref.on('value', (snapshot) => {
    const room = snapshot.val();
    if (room) {
      _roomCache[code] = room;
      handleRoomUpdate(room);
    } else {
      // Room deleted
      toast('房間已解散');
      cleanupAndGoHome();
    }
  }, (error) => {
    console.error('Firebase error:', error);
    toast('連接失敗: ' + (error.message || '請檢查網絡'));
  });
  _roomListener = () => ref.off('value', unsubscribe);
}
function broadcastRoom(r) { /* no-op — Firebase handles sync */ }

// ══════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════
function genCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = ''; for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}
function genId() { return Math.random().toString(36).slice(2, 10); }

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}
function showModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function closeModalOutside(e, id) { if (e.target.id === id) closeModal(id); }

function toast(msg, dur = 2500) {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, dur);
}

// ══════════════════════════════════════════════════════════════
// HOME / ROOM CREATE / JOIN
// ══════════════════════════════════════════════════════════════
function stepCreateMax(d) {
  const el = document.getElementById('create-max-players');
  let v = parseInt(el.textContent) + d;
  v = Math.max(6, Math.min(12, v));
  el.textContent = v;
}

function stepRole(role, d) {
  roleCounts[role] = Math.max(0, (roleCounts[role] || 0) + d);
  document.getElementById('cnt-' + role).textContent = roleCounts[role];
  // Switch preset to "custom" when manually changed
  document.getElementById('set-preset').value = 'custom';
  updateRoleHint();
  syncRoleCountsToRoom();
}

function applyPreset() {
  const p = document.getElementById('set-preset').value;
  if (p === 'custom') return;
  const preset = PRESETS[p];
  if (!preset) return;
  Object.assign(roleCounts, preset);
  Object.keys(preset).forEach(k => {
    const el = document.getElementById('cnt-' + k);
    if (el) el.textContent = preset[k];
  });
  updateRoleHint();
  syncRoleCountsToRoom();
}

function updateRoleHint() {
  const total = Object.values(roleCounts).reduce((a, b) => a + b, 0);
  const room = currentRoomCode ? getRoom(currentRoomCode) : null;
  const playerCount = room ? room.players.length : 0;
  const hint = document.getElementById('role-total-hint');
  if (!hint) return;
  if (playerCount > 0) {
    hint.textContent = `身份合計 ${total} · 玩家 ${playerCount} 人 ${total === playerCount ? '✓' : '⚠️ 數量不符'}`;
    hint.style.color = total === playerCount ? 'var(--success)' : 'var(--warn)';
  } else {
    hint.textContent = `身份合計 ${total}`;
    hint.style.color = 'var(--text2)';
  }
}

function syncRoleCountsToRoom() {
  if (!currentRoomCode || !isHost) return;
  const room = getRoom(currentRoomCode);
  if (!room || room.status !== 'waiting') return;
  room.roleCounts = { ...roleCounts };
  saveRoom(room);
}

function createRoom() {
  const nick = document.getElementById('create-nickname').value.trim();
  if (!nick) { toast('請輸入暱稱'); return; }
  const max = parseInt(document.getElementById('create-max-players').textContent);
  const code = genCode();
  myId = genId();
  myNickname = nick;
  currentRoomCode = code;
  isHost = true;

  const room = {
    code,
    hostId: myId,
    maxPlayers: max,
    status: 'waiting',
    roleCounts: { ...roleCounts },
    players: [{
      id: myId, nickname: nick, online: true, alive: true,
      role: null, ready: true, roleConfirmed: false,
    }],
    nightNum: 0,
    dayNum: 0,
    log: [],
    chat: [],
    // Per-night state
    night: null,
    // Day state
    day: null,
    // Pending hunter shoot
    pendingHunter: null,
    // Witch potions
    witchHasHeal: true,
    witchHasPoison: true,
    // Last night protected by guard (to enforce no-repeat)
    lastGuardTarget: null,
    winner: null,
  };
  saveRoom(room);
  storeSet('ww_session', { playerId: myId, code, nickname: nick, isHost: true });
  initBC(code);
  closeModal('modal-create');
  startPolling();
  renderWaitingRoom(room);
  showView('view-waiting');
  toast(`房間 ${code} 已創建`);
}

async function joinRoom() {
  const nick = document.getElementById('join-nickname').value.trim();
  const code = document.getElementById('join-code').value.trim().toUpperCase();
  if (!nick) { toast(t('toast_enter_nickname')); return; }
  if (code.length !== 6) { toast(t('placeholder_code')); return; }
  let room;
  try {
    const snapshot = await db.ref(getRoomKey(code)).once('value');
    room = snapshot.val();
  } catch (e) { toast('連接失敗'); return; }
  if (!room) { toast(t('toast_room_not_found')); return; }
  if (room.status !== 'waiting') { toast(t('toast_game_started')); return; }
  if (room.players.length >= room.maxPlayers) { toast(t('toast_room_full')); return; }
  if (room.players.find(p => p.nickname === nick)) { toast(t('toast_nick_taken')); return; }

  myId = genId();
  myNickname = nick;
  currentRoomCode = code;
  isHost = false;

  room.players.push({
    id: myId, nickname: nick, online: true, alive: true,
    role: null, ready: false, roleConfirmed: false,
  });
  _roomCache[code] = room;
  saveRoom(room);
  storeSet('ww_session', { playerId: myId, code, nickname: nick, isHost: false });
  initBC(code);
  closeModal('modal-join');
  startPolling();
  renderWaitingRoom(room);
  showView('view-waiting');
  toast(t('toast_joined', {code}));
}

function copyRoomLink() {
  const url = `${location.href.split('?')[0]}?room=${currentRoomCode}`;
  navigator.clipboard.writeText(url).then(() => toast('已複製邀請連結')).catch(() => toast(url));
}
function copyCodeOnly() {
  navigator.clipboard.writeText(currentRoomCode).then(() => toast('已複製房間碼：' + currentRoomCode)).catch(() => {});
}

// ══════════════════════════════════════════════════════════════
// SESSION RESTORE
// ══════════════════════════════════════════════════════════════
window.addEventListener('load', async () => {
  // Auto-fill room code from URL
  const urlCode = new URLSearchParams(location.search).get('room');
  if (urlCode) {
    document.getElementById('join-code').value = urlCode.toUpperCase();
    showModal('modal-join');
  }

  const session = storeGet('ww_session');
  if (session) {
    try {
      const snapshot = await db.ref(getRoomKey(session.code)).once('value');
      const room = snapshot.val();
      if (room && room.players.find(p => p.id === session.playerId)) {
        myId = session.playerId;
        myNickname = session.nickname;
        currentRoomCode = session.code;
        isHost = session.isHost;
        _roomCache[session.code] = room;
        initBC(currentRoomCode);
        const p = room.players.find(x => x.id === myId);
        if (p) { p.online = true; saveRoom(room); }
        startPolling();
        handleRoomUpdate(room);
        return;
      }
    } catch (e) {
      console.error('Session restore failed:', e);
    }
    storeRemove('ww_session');
  }
  showView('view-home');
});

window.addEventListener('beforeunload', () => {
  if (currentRoomCode) {
    const r = getRoom(currentRoomCode);
    if (r) {
      const p = r.players.find(x => x.id === myId);
      if (p) { p.online = false; saveRoom(r); }
    }
  }
});

// ══════════════════════════════════════════════════════════════
// POLLING (cross-tab/device sync)
// ══════════════════════════════════════════════════════════════
function startPolling() {
  if (pollInterval) clearInterval(pollInterval);
  // Firebase listener handles data sync; polling only drives host-side automation
  pollInterval = setInterval(() => {
    if (!currentRoomCode) return;
    const room = getRoom(currentRoomCode);
    if (!room) return; // Firebase listener will handle dissolution
    if (!room.players.find(p => p.id === myId)) return; // listener handles kick

    // Auto-transfer host if host left
    const hostP = room.players.find(p => p.id === room.hostId);
    if (!hostP) {
      const online = room.players.filter(p => p.online);
      if (online.length > 0) {
        const coord = [...online].sort((a, b) => a.id < b.id ? -1 : 1)[0];
        if (coord.id === myId) {
          const r = getRoom(currentRoomCode);
          if (r && !r.players.find(p => p.id === r.hostId)) {
            const newHost = r.players.find(p => p.online) || r.players[0];
            if (newHost) {
              r.hostId = newHost.id;
              newHost.ready = true;
              saveRoom(r);
            }
          }
        }
      }
    }

    // Host-side automation (advance phases)
    if (myId === room.hostId) {
      runHostAutomation(room);
    }
  }, 700);
}

function cleanupAndGoHome() {
  storeRemove('ww_session');
  if (_roomListener) { _roomListener(); _roomListener = null; }
  currentRoomCode = null; myId = null; myNickname = null;
  isHost = false;
  if (pollInterval) clearInterval(pollInterval);
  if (nightTimerInterval) clearInterval(nightTimerInterval);
  if (voteTimerInterval) clearInterval(voteTimerInterval);
  showView('view-home');
}

// ══════════════════════════════════════════════════════════════
// MAIN STATE ROUTER
// ══════════════════════════════════════════════════════════════
function handleRoomUpdate(room) {
  if (!room) return;
  const cur = document.querySelector('.view.active')?.id;

  // Detect host transfer
  if (room.hostId === myId && !isHost) {
    isHost = true;
    storeSet('ww_session', { playerId: myId, code: currentRoomCode, nickname: myNickname, isHost: true });
    toast('你已成為房主');
  }
  if (room.hostId !== myId && isHost) {
    isHost = false;
    storeSet('ww_session', { playerId: myId, code: currentRoomCode, nickname: myNickname, isHost: false });
  }

  switch (room.status) {
    case 'waiting':
      if (cur !== 'view-waiting') showView('view-waiting');
      renderWaitingRoom(room);
      break;
    case 'role':
      if (cur !== 'view-role') { renderRoleView(room); showView('view-role'); }
      else updateRoleConfirmList(room);
      break;
    case 'night':
      if (cur !== 'view-night-action') { renderNightView(room); showView('view-night-action'); }
      else updateNightView(room);
      break;
    case 'day':
      if (cur !== 'view-day') { renderDayView(room); showView('view-day'); }
      else updateDayView(room);
      break;
    case 'vote':
      if (cur !== 'view-vote') { renderVoteView(room); showView('view-vote'); }
      else updateVoteView(room);
      break;
    case 'vote-result':
      if (cur !== 'view-vote-result') { renderVoteResultView(room); showView('view-vote-result'); }
      else updateVoteResultView(room);
      break;
    case 'last-words':
      if (cur !== 'view-last-words') { renderLastWordsView(room); showView('view-last-words'); }
      else updateLastWordsView(room);
      break;
    case 'hunter':
      // Only the dying hunter sees the shoot view; others stay on day/vote view with banner
      if (room.pendingHunter && room.pendingHunter.shooterId === myId) {
        if (cur !== 'view-hunter-shoot') { renderHunterView(room); showView('view-hunter-shoot'); }
      } else {
        // Show waiting on whatever view they were on (use day stream)
        if (cur !== 'view-day') { renderDayView(room); showView('view-day'); }
        appendStreamSystemOnce(room, 'hunter-wait', '🏹 等待獵人開槍…');
      }
      break;
    case 'gameover':
      if (cur !== 'view-gameover') { renderGameOver(room); showView('view-gameover'); }
      break;
  }
}

// ══════════════════════════════════════════════════════════════
// WAITING ROOM
// ══════════════════════════════════════════════════════════════
function renderWaitingRoom(room) {
  document.getElementById('wait-room-code').textContent = room.code;
  document.getElementById('wait-title').textContent = `等待室 · ${room.code}`;
  document.getElementById('wait-player-count').textContent = `${room.players.length} / ${room.maxPlayers}`;

  const isHostUser = myId === room.hostId;
  const myP = room.players.find(p => p.id === myId);
  const allReady = room.players.every(p => p.ready);

  // Sync role counts FROM room (so non-host can see host's settings)
  if (room.roleCounts) {
    Object.assign(roleCounts, room.roleCounts);
    Object.keys(roleCounts).forEach(k => {
      const el = document.getElementById('cnt-' + k);
      if (el) el.textContent = roleCounts[k];
    });
  }

  // Player grid
  const grid = document.getElementById('wait-player-grid');
  grid.innerHTML = room.players.map(p => {
    const { emoji } = getAvatar(p.nickname);
    const isMe = p.id === myId;
    const isHostP = p.id === room.hostId;
    const bg = avatarColor(p.id);
    const tags = [];
    if (isHostP) tags.push('<span class="badge badge-accent" style="font-size:0.6rem;">房主</span>');
    if (isMe) tags.push('<span class="badge badge-success" style="font-size:0.6rem;">你</span>');
    if (!isHostP) tags.push(p.ready
      ? '<span class="badge badge-success" style="font-size:0.6rem;">準備</span>'
      : '<span class="badge badge-gray" style="font-size:0.6rem;">未準備</span>');
    const kickBtn = (isHostUser && !isMe)
      ? `<button onclick="kickPlayer('${p.id}')" style="position:absolute;top:4px;right:4px;width:18px;height:18px;border-radius:50%;background:var(--danger);border:none;color:#fff;font-size:0.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;">✕</button>`
      : '';
    return `<div class="player-grid-item">
      ${kickBtn}
      <div class="avatar" style="background:${bg};">${emoji}${isHostP ? '<span class="host-dot"></span>' : ''}${p.online ? '<span class="online-dot"></span>' : '<span class="offline-dot"></span>'}</div>
      <div class="name">${escHtml(p.nickname)}</div>
      <div class="tag">${tags.join('')}</div>
    </div>`;
  }).join('');

  // Host settings
  document.getElementById('wait-host-settings').classList.toggle('hidden', !isHostUser);
  document.getElementById('wait-host-actions').classList.toggle('hidden', !isHostUser);
  updateRoleHint();

  const startBtn = document.getElementById('btn-start-game');
  const total = Object.values(roleCounts).reduce((a, b) => a + b, 0);
  if (startBtn) {
    const ok = allReady && total === room.players.length && room.players.length >= 4;
    startBtn.disabled = !ok;
    startBtn.title = ok ? '' : '需要所有人準備好且身份數=玩家數';
  }

  // Ready button for non-host
  let readyArea = document.getElementById('wait-ready-area');
  if (!readyArea) {
    readyArea = document.createElement('div');
    readyArea.id = 'wait-ready-area';
    readyArea.style.marginTop = '20px';
    document.getElementById('wait-host-actions').parentNode.insertBefore(readyArea, document.getElementById('wait-host-actions'));
  }
  if (!isHostUser) {
    const amReady = myP?.ready || false;
    readyArea.innerHTML = amReady
      ? `<button class="btn btn-full" disabled style="background:var(--success);color:#fff;opacity:0.8;">✓ 已準備好</button>`
      : `<button class="btn btn-primary btn-full" onclick="setReady()">✓ 準備好了</button>`;
  } else {
    readyArea.innerHTML = '';
  }
}

function setReady() {
  const room = getRoom(currentRoomCode);
  const p = room.players.find(x => x.id === myId);
  if (p) { p.ready = true; saveRoom(room); }
}

function kickPlayer(pid) {
  const room = getRoom(currentRoomCode);
  if (myId !== room.hostId) return;
  room.players = room.players.filter(p => p.id !== pid);
  saveRoom(room);
  toast('已踢出玩家');
}

// ══════════════════════════════════════════════════════════════
// START GAME — assign roles
// ══════════════════════════════════════════════════════════════
function hostStartGame() {
  const room = getRoom(currentRoomCode);
  if (!room || myId !== room.hostId) return;
  if (room.players.length < 4) { toast('至少 4 名玩家'); return; }
  if (!room.players.every(p => p.ready)) { toast('還有玩家未準備好'); return; }
  const total = Object.values(roleCounts).reduce((a, b) => a + b, 0);
  if (total !== room.players.length) { toast(`身份數量(${total})與玩家數(${room.players.length})不符`); return; }

  // Build role pool
  const pool = [];
  Object.entries(roleCounts).forEach(([role, n]) => {
    for (let i = 0; i < n; i++) pool.push(role);
  });
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Shuffle players for assignment
  const playerIds = room.players.map(p => p.id);
  for (let i = playerIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playerIds[i], playerIds[j]] = [playerIds[j], playerIds[i]];
  }
  playerIds.forEach((pid, i) => {
    const p = room.players.find(x => x.id === pid);
    p.role = pool[i];
    p.alive = true;
    p.roleConfirmed = false;
  });

  // Assign seat numbers (1..N) for nicer reference
  room.players.forEach((p, i) => p.seat = i + 1);

  room.status = 'role';
  room.roleCounts = { ...roleCounts };
  room.witchHasHeal = roleCounts.witch > 0;
  room.witchHasPoison = roleCounts.witch > 0;
  saveRoom(room);
}

// ══════════════════════════════════════════════════════════════
// ROLE REVEAL
// ══════════════════════════════════════════════════════════════
function renderRoleView(room) {
  const me = room.players.find(p => p.id === myId);
  if (!me || !me.role) return;
  const r = ROLES[me.role];
  document.getElementById('role-emoji').textContent = r.emoji;
  document.getElementById('role-name').textContent = r.name;
  const camp = document.getElementById('role-camp');
  camp.textContent = r.camp === 'evil' ? '狼人陣營' : '好人陣營';
  camp.style.background = r.camp === 'evil' ? 'rgba(239,68,68,0.2)' : 'rgba(34,197,94,0.2)';
  camp.style.color = r.camp === 'evil' ? 'var(--danger)' : 'var(--success)';
  document.getElementById('role-desc').textContent = r.desc;

  // Show wolf teammates if I'm a wolf
  const extra = document.getElementById('role-extra');
  if (me.role === 'wolf') {
    const team = room.players.filter(p => p.role === 'wolf' && p.id !== myId);
    document.getElementById('role-wolf-team').innerHTML = team.length === 0
      ? '<p class="text-sm text-muted">你是唯一的狼人</p>'
      : team.map(p => {
        const { emoji } = getAvatar(p.nickname);
        const isHostP = p.id === room.hostId;
        return `<div class="flex items-center gap-12" style="padding:8px 0;">
          <div class="avatar avatar-sm" style="background:${COLOR_WOLF};position:relative;">${emoji}${isHostP ? '<span class="host-dot"></span>' : ''}</div>
          <div><div class="font-bold">${escHtml(p.nickname)}</div><div class="text-xs text-muted">座位 ${p.seat}${isHostP ? ' · 房主' : ''}</div></div>
        </div>`;
      }).join('');
    extra.classList.remove('hidden');
  } else {
    extra.classList.add('hidden');
  }

  // Reset confirm UI
  const btn = document.querySelector('#view-role .btn-primary');
  if (btn) { btn.style.display = ''; btn.disabled = false; }
  document.getElementById('role-waiting').classList.add('hidden');
  updateRoleConfirmList(room);
}

function updateRoleConfirmList(room) {
  const list = document.getElementById('role-confirmed-list');
  list.innerHTML = room.players.map(p => {
    const { emoji } = getAvatar(p.nickname);
    const done = p.roleConfirmed;
    const isHostP = p.id === room.hostId;
    return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;opacity:${done ? 1 : 0.3};">
      <div class="avatar avatar-sm" style="background:${avatarColor(p.id)};position:relative;">${emoji}${isHostP ? '<span class="host-dot"></span>' : ''}</div>
      <span style="font-size:0.65rem;color:var(--text3);">${done ? '✓' : ''}</span>
    </div>`;
  }).join('');
}

function confirmRole() {
  const room = getRoom(currentRoomCode);
  const p = room.players.find(x => x.id === myId);
  if (p) { p.roleConfirmed = true; saveRoom(room); }
  // Hide role info
  document.getElementById('role-emoji').textContent = '🌙';
  document.getElementById('role-name').textContent = '已隱藏';
  document.getElementById('role-desc').textContent = '等待其他玩家確認…';
  document.getElementById('role-extra').classList.add('hidden');
  const btn = document.querySelector('#view-role .btn-primary');
  if (btn) btn.style.display = 'none';
  document.getElementById('role-waiting').classList.remove('hidden');
  toast('已確認，等待其他玩家…');
}

// ══════════════════════════════════════════════════════════════
// NIGHT VIEW — sequential role actions
// Night state shape:
// room.night = {
//   step: 'guard'|'wolf'|'seer'|'witch'|'done',
//   guardTarget: pid|null,
//   wolfVotes: { wolfId: targetId },
//   wolfKill: pid|null,         // computed when all wolves voted
//   seerCheck: { target, isWolf },
//   witchAction: { type:'heal'|'poison'|'skip', target },
//   timerStart: ms,
// }
// ══════════════════════════════════════════════════════════════
function startNight(room) {
  room.nightNum++;
  room.status = 'night';
  room.roleConfirmStart = null;
  room.night = {
    step: NIGHT_ORDER.find(r => roleCounts[r] > 0 || (room.roleCounts && room.roleCounts[r] > 0)) || 'done',
    guardTarget: null,
    wolfVotes: {},
    wolfConfirmed: false,   // wolf must confirm before kill is locked
    wolfKill: null,
    seerCheck: null,
    witchAction: null,
    timerStart: Date.now(),
    deaths: [],
    wolfChat: [],
  };
  // Skip to first role that exists in this game
  room.night.step = nextNightStep(room, null);
  if (!room.night.step || room.night.step === 'done') {
    finishNight(room);
    return;
  }
  saveRoom(room);
}

function nextNightStep(room, current) {
  const startIdx = current === null ? -1 : NIGHT_ORDER.indexOf(current);
  for (let i = startIdx + 1; i < NIGHT_ORDER.length; i++) {
    const role = NIGHT_ORDER[i];
    const has = room.players.some(p => p.role === role && p.alive);
    if (has) {
      // Witch on night 1 always acts; later nights only if has potions
      if (role === 'witch' && !room.witchHasHeal && !room.witchHasPoison) continue;
      return role;
    }
  }
  return 'done';
}

function renderNightView(room) {
  document.getElementById('night-num').textContent = room.nightNum;
  updateNightView(room);
  startNightTimer(room);
}

function updateNightView(room) {
  const n = room.night;
  if (!n) return;
  const me = room.players.find(p => p.id === myId);
  const content = document.getElementById('night-action-content');
  const phaseEmoji = document.getElementById('night-phase-emoji');
  const phaseTitle = document.getElementById('night-phase-title');
  const phaseSub = document.getElementById('night-phase-sub');

  // Phase banner reflects current step
  const stepLabels = {
    guard:  { emoji: '🛡️', title: '守衛行動', sub: '守衛請選擇要守護的玩家' },
    wolf:   { emoji: '🐺', title: '狼人行動', sub: '狼人請選擇刀殺目標' },
    seer:   { emoji: '🔮', title: '預言家行動', sub: '預言家請選擇要查驗的玩家' },
    witch:  { emoji: '🧪', title: '女巫行動', sub: '女巫請決定是否使用藥水' },
    done:   { emoji: '🌙', title: '夜晚結算中', sub: '即將天亮…' },
  };
  const lbl = stepLabels[n.step] || stepLabels.done;
  phaseEmoji.textContent = lbl.emoji;
  phaseTitle.textContent = lbl.title;
  phaseSub.textContent = lbl.sub;

  // Render content based on whether I'm acting
  if (!me || !me.alive) {
    content.innerHTML = `<div class="card text-center">
      <p class="text-muted">你已出局，等待夜晚結束…</p>
    </div>`;
    return;
  }

  if (n.step === 'done') {
    content.innerHTML = `<div class="card text-center">
      <div style="font-size:2rem;margin-bottom:8px;">🌅</div>
      <p class="text-muted">夜晚結束，正在天亮…</p>
    </div>`;
    return;
  }

  if (n.step === me.role) {
    // I'm the one acting
    // For wolf step: only rebuild if wolf votes changed (avoid clearing chat stream)
    if (n.step === 'wolf' && document.getElementById('wolf-chat-box')) {
      // Just refresh wolf chat and vote status without full rebuild
      renderWolfChatAndVotes(room, n, me);
    } else {
      renderMyNightAction(room, n, me, content);
    }
  } else {
    // Check if I'm a seer who already checked this night — show result regardless of current step
    const mySeerResult = me.role === 'seer'
      ? (room.seerHistory || []).find(r => r.seerId === myId && r.night === room.nightNum)
      : null;
    if (mySeerResult) {
      if (!content.querySelector('[data-seer-result]')) {
        renderSeerResult(room, mySeerResult, content);
      }
      return;
    }
    // Wait
    content.innerHTML = `<div class="card text-center">
      <div style="font-size:2.4rem;margin-bottom:8px;">😴</div>
      <p class="font-bold mb-8">請閉眼</p>
      <p class="text-muted text-sm">等待其他角色行動…</p>
    </div>`;
  }
  // If wolf step but I'm wolf and chat box exists, refresh chat
  if (n.step === 'wolf' && me.role === 'wolf') {
    renderWolfChat(room);
  }
}

function renderMyNightAction(room, n, me, content) {
  const aliveTargets = room.players.filter(p => p.alive);

  if (n.step === 'guard') {
    // Cannot guard same target two nights in a row
    const last = room.lastGuardTarget;
    const guardDone = n.guardTarget !== null;
    content.innerHTML = `<div class="card mb-12">
      <h3 class="mb-8">🛡️ 選擇守護目標</h3>
      <p class="text-xs text-muted mb-12">不能連續兩晚守護同一人${last ? `（昨晚守護：${escHtml(room.players.find(p=>p.id===last)?.nickname||'')}）` : ''}</p>
      ${aliveTargets.map(p => {
        const disabled = p.id === last;
        const isPending = guardPending === p.id;
        const isConfirmed = guardDone && n.guardTarget === p.id;
        const selected = isPending || isConfirmed;
        return `<div class="target-card ${disabled ? 'disabled' : ''} ${selected ? 'selected night-select' : ''}"
                onclick="${disabled || guardDone ? '' : `guardChoose('${p.id}')`}">
          ${renderAvatarHTML(p, 'avatar-sm', room)}
          <div><div class="name">${escHtml(p.nickname)}</div><div class="sub">座位 ${p.seat}${p.id === myId ? ' · 你' : ''}</div></div>
          ${selected ? '<div class="right" style="color:var(--night2);">← 選中</div>' : ''}
        </div>`;
      }).join('')}
      <div style="margin-top:12px;">
        ${guardDone
          ? `<div class="text-center"><span class="badge badge-success" style="padding:8px 16px;font-size:0.85rem;">✓ 已確認守護 ${escHtml(n.guardTarget === 'skip' ? '無' : room.players.find(p=>p.id===n.guardTarget)?.nickname||'')}</span></div>`
          : guardPending
            ? `<button class="btn btn-night btn-full" onclick="guardConfirm()">確認守護 ${escHtml(room.players.find(p=>p.id===guardPending)?.nickname||'')}</button>
               <p class="text-center text-xs text-muted mt-8">確認前可重新選擇</p>`
            : `<button class="btn btn-ghost btn-full" onclick="guardSkip()">本晚不守護任何人</button>`
        }
      </div>
    </div>`;
    return;
  }

  if (n.step === 'wolf') {
    const wolves = room.players.filter(p => p.role === 'wolf' && p.alive);
    const myVote = n.wolfVotes[myId];
    // Show all wolves' picks for transparency
    const teamStatus = wolves.map(w => {
      const v = n.wolfVotes[w.id];
      const confirmed = (n.wolfConfirmedBy || {})[w.id];
      const targetName = v ? room.players.find(p => p.id === v)?.nickname : '未選';
      return `<div class="flex items-center gap-8" style="padding:6px 0;font-size:0.85rem;">
        <span class="badge badge-danger" style="font-size:0.7rem;">🐺 ${escHtml(w.nickname)}</span>
        <span style="color:var(--text2);">→ ${escHtml(targetName)}</span>
        ${confirmed ? '<span class="badge badge-success" style="font-size:0.6rem;margin-left:auto;">✓ 確認</span>' : ''}
      </div>`;
    }).join('');

    // Detect split vote (all wolves voted but targets differ)
    const allVoted = wolves.every(w => n.wolfVotes[w.id]);
    const targets = wolves.map(w => n.wolfVotes[w.id]).filter(Boolean);
    const uniqueTargets = [...new Set(targets)];
    const isSplit = allVoted && uniqueTargets.length > 1;
    const splitWarning = isSplit
      ? `<div style="margin-bottom:10px;padding:8px 12px;background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.3);border-radius:8px;font-size:0.82rem;color:var(--warn);">
          ⚠️ 意見不一致！請在私聊中協商，或超時後系統隨機選擇
        </div>`
      : '';
    content.innerHTML = `<div class="card mb-12">
      <h3 class="mb-8">🐺 選擇刀殺目標</h3>
      <p class="text-xs text-muted mb-12">所有狼人確認後生效，確認前可更換</p>
      ${splitWarning}
      <div id="wolf-team-status" style="background:var(--surface3);padding:10px 12px;border-radius:8px;margin-bottom:12px;">${teamStatus}</div>
      ${aliveTargets.filter(p => p.role !== 'wolf').map(p => {
        const selected = myVote === p.id;
        const cnt = Object.values(n.wolfVotes).filter(t => t === p.id).length;
        const iConfirmed = (n.wolfConfirmedBy || {})[myId];
        return `<div class="target-card ${selected ? 'selected' : ''}" data-wolf-target="${p.id}"
          onclick="${iConfirmed ? '' : `wolfVote('${p.id}')`}" style="${iConfirmed ? 'pointer-events:none;' : ''}">
          ${renderAvatarHTML(p, 'avatar-sm', room)}
          <div><div class="name">${escHtml(p.nickname)}</div><div class="sub">座位 ${p.seat}</div></div>
          <div class="right">${cnt > 0 ? `<span class="badge badge-danger">${cnt}票</span>` : ''}</div>
        </div>`;
      }).join('')}
      <div id="wolf-confirm-area" style="margin-top:12px;"></div>
    </div>
    <div class="card" id="wolf-chat-box">
      <div style="font-size:0.78rem;font-weight:700;color:#fca5a5;letter-spacing:0.5px;margin-bottom:8px;">🐺 狼人私聊（其他人看不到）</div>
      <div id="wolf-chat-stream" style="max-height:130px;overflow-y:auto;margin-bottom:8px;display:flex;flex-direction:column;gap:3px;"></div>
      <div style="display:flex;gap:8px;">
        <input id="wolf-chat-input" class="input" placeholder="只有狼人能看到…" maxlength="100" style="padding:8px 12px;font-size:0.85rem;border-radius:20px;">
        <button onclick="sendWolfChat()" style="width:34px;height:34px;border-radius:50%;background:var(--wolf);border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.9rem;">↑</button>
      </div>
    </div>`;
    renderWolfChat(room);
    renderWolfConfirmArea(room, n);
    const wci = document.getElementById('wolf-chat-input');
    if (wci) wci.onkeydown = e => { if (e.key === 'Enter') sendWolfChat(); };
    return;
  }

  if (n.step === 'seer') {
    const isSeer = me.role === 'seer';
    if (!isSeer) return;
    const mySeerResult = (room.seerHistory || []).find(r => r.seerId === myId && r.night === room.nightNum);
    if (mySeerResult) {
      if (!content.querySelector('[data-seer-result]')) {
        renderSeerResult(room, mySeerResult, content);
      }
      return;
    }
    content.innerHTML = `<div class="card mb-12">
      <h3 class="mb-8">🔮 查驗一名玩家身份</h3>
      <p class="text-xs text-muted mb-12">查驗結果僅你可見</p>
      ${aliveTargets.filter(p => p.id !== myId).map(p => {
        return `<div class="target-card" onclick="seerCheck('${p.id}')">
          ${renderAvatarHTML(p, 'avatar-sm', room)}
          <div><div class="name">${escHtml(p.nickname)}</div><div class="sub">座位 ${p.seat}</div></div>
        </div>`;
      }).join('')}
    </div>`;
    return;
  }

  if (n.step === 'witch') {
    const wolfTarget = n.wolfKill ? room.players.find(p => p.id === n.wolfKill) : null;
    const done = n.witchAction !== null;
    const pending = witchPending;

    let html = `<div class="card mb-12">
      <h3 class="mb-8">🧪 女巫行動</h3>`;

    if (done) {
      // Show confirmed action
      const actionDesc = n.witchAction.type === 'heal' ? '💉 使用解藥救活' : n.witchAction.type === 'poison' ? '☠️ 使用毒藥' : '不使用任何藥';
      const targetP = n.witchAction.target ? room.players.find(p => p.id === n.witchAction.target) : null;
      html += `<div class="text-center" style="padding:16px 0;">
        <span class="badge badge-success" style="padding:10px 18px;font-size:0.9rem;">✓ ${actionDesc}${targetP ? ' ' + escHtml(targetP.nickname) : ''}</span>
      </div>`;
    } else if (pending) {
      // Show pending confirmation
      const targetP = pending.target ? room.players.find(p => p.id === pending.target) : null;
      const actionDesc = pending.type === 'heal' ? '💉 使用解藥救活' : `☠️ 毒殺 ${escHtml(targetP?.nickname || '')}`;
      html += `<div style="padding:12px;background:var(--surface3);border-radius:8px;margin-bottom:12px;text-align:center;">
        <div style="font-size:0.9rem;font-weight:600;margin-bottom:12px;">${actionDesc}</div>
        <button class="btn btn-primary btn-full" onclick="witchConfirm()">確認</button>
        <button class="btn btn-ghost btn-full mt-8" onclick="witchCancelPending()">取消，重新選擇</button>
      </div>`;
    } else {
      // Show selection UI
      if (wolfTarget && room.witchHasHeal) {
        const { emoji } = getAvatar(wolfTarget.nickname);
        const isHostP = wolfTarget.id === room.hostId;
        html += `<p class="text-sm mb-12">今夜被狼刀的人是：</p>
          <div class="flex items-center gap-12 mb-12" style="padding:10px;background:var(--surface3);border-radius:8px;">
            <div class="avatar avatar-sm" style="background:${avatarColor(wolfTarget.id)};position:relative;">${emoji}${isHostP ? '<span class="host-dot"></span>' : ''}</div>
            <div class="font-bold">${escHtml(wolfTarget.nickname)} (座位 ${wolfTarget.seat})</div>
          </div>
          <button class="btn btn-success btn-full mb-8" onclick="witchHeal()">💉 選擇使用解藥救活</button>`;
      } else if (!wolfTarget) {
        html += `<p class="text-xs text-muted mb-12">今夜沒有人被狼刀</p>`;
      } else if (!room.witchHasHeal) {
        html += `<p class="text-xs text-muted mb-12">解藥已用完</p>`;
      }

      if (room.witchHasPoison) {
        html += `<div class="divider"></div>
          <h3 class="mb-8" style="font-size:0.9rem;">☠️ 選擇毒殺目標</h3>`;
        html += aliveTargets.filter(p => p.id !== myId).map(p => {
          return `<div class="target-card" onclick="witchPoison('${p.id}')">
            ${renderAvatarHTML(p, 'avatar-sm', room)}
            <div><div class="name">${escHtml(p.nickname)}</div><div class="sub">座位 ${p.seat}</div></div>
          </div>`;
        }).join('');
      }

      html += `<button class="btn btn-ghost btn-full mt-12" onclick="witchSkip()">不使用任何藥</button>`;
    }

    html += `</div>`;
    content.innerHTML = html;
    return;
  }
}

// ── Night action submitters (player side) ──
function guardChoose(targetId) {
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'guard') return;
  if (room.lastGuardTarget === targetId) { toast('不能連續兩晚守護同一人'); return; }
  if (room.night.guardTarget !== null) return; // already confirmed
  guardPending = targetId;
  // Re-render to show confirm button (lightweight: just update the action content)
  const content = document.getElementById('night-action-content');
  const me = room.players.find(p => p.id === myId);
  renderMyNightAction(room, room.night, me, content);
}
function guardSkip() {
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'guard') return;
  if (room.night.guardTarget !== null) return;
  room.night.guardTarget = 'skip';
  guardPending = null;
  saveRoom(room);
}
function guardConfirm() {
  if (!guardPending) return;
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'guard') return;
  if (room.lastGuardTarget === guardPending) { toast('不能連續兩晚守護同一人'); return; }
  room.night.guardTarget = guardPending;
  guardPending = null;
  saveRoom(room);
  toast('已確認守護');
}

// ── Wolf private chat ──
function sendWolfChat() {
  const input = document.getElementById('wolf-chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  const room = getRoom(currentRoomCode);
  const me = room.players.find(p => p.id === myId);
  if (!me || me.role !== 'wolf') return;
  room.night.wolfChat = room.night.wolfChat || [];
  room.night.wolfChat.push({ senderId: myId, senderName: myNickname, text, ts: Date.now() });
  saveRoom(room);
  input.value = '';
}

// Lightweight update for wolf step: refresh vote tally + team status without rebuilding chat
function renderWolfChatAndVotes(room, n, me) {
  const wolves = room.players.filter(p => p.role === 'wolf' && p.alive);
  const myVote = n.wolfVotes[myId];
  const aliveTargets = room.players.filter(p => p.alive);

  // Update team status
  const teamStatusEl = document.getElementById('wolf-team-status');
  if (teamStatusEl) {
    teamStatusEl.innerHTML = wolves.map(w => {
      const v = n.wolfVotes[w.id];
      const confirmed = (n.wolfConfirmedBy || {})[w.id];
      const targetName = v ? room.players.find(p => p.id === v)?.nickname : '未選';
      return `<div class="flex items-center gap-8" style="padding:6px 0;font-size:0.85rem;">
        <span class="badge badge-danger" style="font-size:0.7rem;">🐺 ${escHtml(w.nickname)}</span>
        <span style="color:var(--text2);">→ ${escHtml(targetName)}</span>
        ${confirmed ? '<span class="badge badge-success" style="font-size:0.6rem;margin-left:auto;">✓ 確認</span>' : ''}
      </div>`;
    }).join('');
  }

  // Show/update split warning
  const allVotedNow = wolves.every(w => n.wolfVotes[w.id]);
  const targetsNow = wolves.map(w => n.wolfVotes[w.id]).filter(Boolean);
  const isSplitNow = allVotedNow && [...new Set(targetsNow)].length > 1;
  let splitEl = document.getElementById('wolf-split-warning');
  if (isSplitNow) {
    if (!splitEl) {
      splitEl = document.createElement('div');
      splitEl.id = 'wolf-split-warning';
      splitEl.style.cssText = 'margin-bottom:10px;padding:8px 12px;background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.3);border-radius:8px;font-size:0.82rem;color:var(--warn);';
      splitEl.textContent = '⚠️ 意見不一致！請在私聊中協商，或超時後系統隨機選擇';
      teamStatusEl?.parentNode?.insertBefore(splitEl, teamStatusEl);
    }
  } else if (splitEl) {
    splitEl.remove();
  }

  // Update target cards selection state
  aliveTargets.filter(p => p.role !== 'wolf').forEach(p => {
    const card = document.querySelector(`[data-wolf-target="${p.id}"]`);
    if (!card) return;
    const selected = myVote === p.id;
    const cnt = Object.values(n.wolfVotes).filter(t => t === p.id).length;
    const iConfirmed = (n.wolfConfirmedBy || {})[myId];
    card.className = `target-card ${selected ? 'selected' : ''}`;
    card.style.pointerEvents = iConfirmed ? 'none' : '';
    const right = card.querySelector('.right');
    if (right) right.innerHTML = cnt > 0 ? `<span class="badge badge-danger">${cnt}票</span>` : '';
  });

  renderWolfConfirmArea(room, n);
  renderWolfChat(room);
}

function renderWolfConfirmArea(room, n) {
  const area = document.getElementById('wolf-confirm-area');
  if (!area) return;
  const iConfirmed = (n.wolfConfirmedBy || {})[myId];
  const myVote = n.wolfVotes[myId];
  const target = myVote ? room.players.find(p => p.id === myVote) : null;
  if (iConfirmed) {
    area.innerHTML = `<div class="text-center"><span class="badge badge-success" style="padding:8px 16px;font-size:0.85rem;">✓ 已確認刀 ${escHtml(target?.nickname || '?')}</span></div>`;
  } else if (myVote) {
    area.innerHTML = `<button class="btn btn-danger btn-full" onclick="wolfConfirm()">確認刀 ${escHtml(target?.nickname || '?')}</button>
      <p class="text-center text-xs text-muted mt-8">確認前可重新選擇</p>`;
  } else {
    area.innerHTML = `<p class="text-center text-xs text-muted">請選擇目標後確認</p>`;
  }
}

function renderWolfChat(room) {  const stream = document.getElementById('wolf-chat-stream');
  if (!stream) return;
  const msgs = room.night?.wolfChat || [];
  // Stable-key render
  const rendered = new Set();
  stream.querySelectorAll('[data-wc-key]').forEach(el => rendered.add(el.getAttribute('data-wc-key')));
  msgs.forEach((msg, i) => {
    const k = `wc-${i}`;
    if (rendered.has(k)) return;
    const div = document.createElement('div');
    div.setAttribute('data-wc-key', k);
    div.style.cssText = 'font-size:0.82rem;line-height:1.45;padding:2px 0;';
    const isMe = msg.senderId === myId;
    div.innerHTML = `<span style="font-weight:700;color:${isMe ? '#fca5a5' : '#f87171'};margin-right:4px;">${escHtml(msg.senderName)}</span><span style="color:var(--text2);">${escHtml(msg.text)}</span>`;
    stream.appendChild(div);
  });
  stream.scrollTop = stream.scrollHeight;
}

function wolfVote(targetId) {
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'wolf') return;
  const me = room.players.find(p => p.id === myId);
  if (!me || me.role !== 'wolf' || !me.alive) return;
  // Can't change vote after confirming
  if ((room.night.wolfConfirmedBy || {})[myId]) return;
  room.night.wolfVotes[myId] = targetId;
  saveRoom(room);
}

function wolfConfirm() {
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'wolf') return;
  const me = room.players.find(p => p.id === myId);
  if (!me || me.role !== 'wolf' || !me.alive) return;
  if (!room.night.wolfVotes[myId]) { toast('請先選擇目標'); return; }
  room.night.wolfConfirmedBy = room.night.wolfConfirmedBy || {};
  room.night.wolfConfirmedBy[myId] = true;
  saveRoom(room);
  toast('已確認');
}

function toggleSeerHistory() {
  const room = getRoom(currentRoomCode);
  const history = (room.seerHistory || []).filter(r => r.seerId === myId).sort((a, b) => a.night - b.night);
  let modal = document.getElementById('seer-history-modal');
  if (modal) { modal.remove(); return; }
  modal = document.createElement('div');
  modal.id = 'seer-history-modal';
  modal.style.cssText = 'position:fixed;bottom:100px;right:14px;z-index:100;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:16px;min-width:220px;max-width:280px;box-shadow:var(--shadow);';
  modal.innerHTML = `<div style="font-size:0.85rem;font-weight:700;color:var(--accent2);margin-bottom:10px;">🔮 查驗記錄</div>
    ${history.map(h => {
      const hp = room.players.find(p => p.id === h.target);
      if (!hp) return '';
      const { emoji } = getAvatar(hp.nickname);
      return `<div class="flex items-center gap-8" style="padding:6px 0;border-bottom:1px solid var(--border);">
        <div class="avatar avatar-sm" style="background:${avatarColor(hp.id)};position:relative;">${emoji}${hp.id === room.hostId ? '<span class="host-dot"></span>' : ''}</div>
        <div style="flex:1;">
          <div style="font-size:0.85rem;font-weight:600;">${escHtml(hp.nickname)}</div>
          <div style="font-size:0.7rem;color:var(--text3);">第${h.night}夜 · 座位${hp.seat}</div>
        </div>
        <span style="font-weight:700;font-size:0.85rem;color:${h.isWolf ? 'var(--danger)' : 'var(--success)'};">${h.isWolf ? '🐺' : '👥'}</span>
      </div>`;
    }).join('')}
    <button onclick="document.getElementById('seer-history-modal').remove()" style="width:100%;margin-top:10px;padding:7px;background:var(--surface3);border:none;color:var(--text2);border-radius:8px;cursor:pointer;font-size:0.82rem;">關閉</button>`;
  document.getElementById('view-day').appendChild(modal);
}

function renderSeerResult(room, result, container) {
  const targetPlayer = room.players.find(p => p.id === result.target);
  if (!targetPlayer) return;
  const { emoji } = getAvatar(targetPlayer.nickname);
  const isHostP = targetPlayer.id === room.hostId;
  const isWolf = result.isWolf;

  // Build history list (all past checks this seer has done)
  const history = (room.seerHistory || []).filter(r => r.seerId === result.seerId).sort((a, b) => a.night - b.night);
  const historyHtml = history.length > 1 ? `
    <div style="margin-top:16px;border-top:1px solid var(--border);padding-top:12px;">
      <div style="font-size:0.72rem;font-weight:700;color:var(--text3);letter-spacing:0.5px;margin-bottom:8px;">歷史查驗記錄</div>
      ${history.map(h => {
        const hp = room.players.find(p => p.id === h.target);
        if (!hp) return '';
        return `<div class="flex items-center gap-8" style="padding:4px 0;font-size:0.82rem;">
          <span style="color:var(--text3);min-width:36px;">第${h.night}夜</span>
          <span style="font-weight:600;">${escHtml(hp.nickname)}</span>
          <span style="margin-left:auto;font-weight:700;color:${h.isWolf ? 'var(--danger)' : 'var(--success)'};">${h.isWolf ? '🐺 狼人' : '👥 好人'}</span>
        </div>`;
      }).join('')}
    </div>` : '';

  container.innerHTML = `<div class="card text-center anim-pop" data-seer-result="1">
    <h3 class="mb-12">🔮 第 ${result.night} 夜查驗結果</h3>
    <div class="avatar avatar-lg" style="background:${avatarColor(t.id)};margin:0 auto 12px;position:relative;">${emoji}${isHostP ? '<span class="host-dot"></span>' : ''}</div>
    <div class="font-bold" style="font-size:1.1rem;margin-bottom:4px;">${escHtml(t.nickname)}</div>
    <div class="text-xs text-muted mb-16">座位 ${t.seat}</div>
    <div style="font-size:2rem;font-weight:900;padding:14px 24px;border-radius:12px;display:inline-block;
      background:${isWolf ? 'rgba(239,68,68,0.15)' : 'rgba(34,197,94,0.15)'};
      color:${isWolf ? 'var(--danger)' : 'var(--success)'};">
      ${isWolf ? '🐺 狼人' : '👥 好人'}
    </div>
    <p class="text-xs text-muted mt-16">結果僅你可見，等待夜晚結束…</p>
    ${historyHtml}
  </div>`;
}

function seerCheck(targetId) {
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'seer') return;
  if (room.night.seerCheck) return;
  const target = room.players.find(p => p.id === targetId);
  if (!target) return;
  const result = { target: targetId, isWolf: target.role === 'wolf', seerId: myId, night: room.nightNum };
  room.night.seerCheck = { target: targetId, isWolf: target.role === 'wolf' };
  room.night.seerResult = result;
  // Persist across nights in seerHistory (only readable by the seer client-side)
  room.seerHistory = room.seerHistory || [];
  room.seerHistory = room.seerHistory.filter(r => r.night !== room.nightNum);
  room.seerHistory.push(result);
  saveRoom(room);
}

function witchHeal() {
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'witch') return;
  if (!room.witchHasHeal || !room.night.wolfKill) return;
  if (room.night.witchAction !== null) return;
  witchPending = { type: 'heal', target: room.night.wolfKill };
  const content = document.getElementById('night-action-content');
  const me = room.players.find(p => p.id === myId);
  renderMyNightAction(room, room.night, me, content);
}
function witchPoison(targetId) {
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'witch') return;
  if (!room.witchHasPoison) return;
  if (room.night.witchAction !== null) return;
  witchPending = { type: 'poison', target: targetId };
  const content = document.getElementById('night-action-content');
  const me = room.players.find(p => p.id === myId);
  renderMyNightAction(room, room.night, me, content);
}
function witchSkip() {
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'witch') return;
  if (room.night.witchAction !== null) return;
  room.night.witchAction = { type: 'skip', target: null };
  witchPending = null;
  saveRoom(room);
}
function witchConfirm() {
  if (!witchPending) return;
  const room = getRoom(currentRoomCode);
  if (!room.night || room.night.step !== 'witch') return;
  room.night.witchAction = witchPending;
  witchPending = null;
  saveRoom(room);
  toast('已確認');
}
function witchCancelPending() {
  witchPending = null;
  const room = getRoom(currentRoomCode);
  const content = document.getElementById('night-action-content');
  const me = room.players.find(p => p.id === myId);
  renderMyNightAction(room, room.night, me, content);
}

// ══════════════════════════════════════════════════════════════
// HOST AUTOMATION — advances night/day phases
// ══════════════════════════════════════════════════════════════
function runHostAutomation(room) {
  if (room.status === 'role') {
    // All confirmed → start night 1
    if (room.players.every(p => p.roleConfirmed)) {
      startNight(room);
      return;
    }
    // Auto-confirm offline players after 30s, so the game doesn't stall
    if (!room.roleConfirmStart) {
      room.roleConfirmStart = Date.now();
      saveRoom(room);
      return;
    }
    if (Date.now() - room.roleConfirmStart > 60000) {
      room.players.forEach(p => { if (!p.roleConfirmed) p.roleConfirmed = true; });
      saveRoom(room);
    }
    return;
  }

  if (room.status === 'night' && room.night) {
    advanceNightStep(room);
    return;
  }

  if (room.status === 'day' && room.day) {
    advanceDayStep(room);
    return;
  }

  if (room.status === 'vote' && room.day?.voteState) {
    checkVoteCompletion(room);
    return;
  }

  if (room.status === 'vote-result' && room.voteResult) {
    if (Date.now() >= room.voteResult.deadlineToContinue) {
      continueAfterVote(room);
    }
    return;
  }

  if (room.status === 'last-words' && room.lastWords) {
    if (Date.now() >= room.lastWords.deadline) {
      finishLastWords(room);
    }
    return;
  }

  if (room.status === 'hunter' && room.pendingHunter) {
    // Auto-skip if hunter offline > 30s? For MVP: just rely on hunter or timeout
    if (room.pendingHunter.deadline && Date.now() > room.pendingHunter.deadline) {
      processHunterShoot(room, null);
    }
    return;
  }
}

const NIGHT_STEP_TIMEOUT = {
  guard: 25,
  wolf: 35,
  seer: 25,
  witch: 30,
};

function advanceNightStep(room) {
  const n = room.night;
  if (!n) return;
  const step = n.step;
  if (step === 'done') { finishNight(room); return; }

  const elapsed = Math.floor((Date.now() - (n.timerStart || Date.now())) / 1000);
  const limit = NIGHT_STEP_TIMEOUT[step] || 30;

  let stepDone = false;

  if (step === 'guard') {
    const guards = room.players.filter(p => p.role === 'guard' && p.alive);
    if (guards.length === 0 || n.guardTarget !== null) stepDone = true;
    if (!stepDone && elapsed >= limit) { n.guardTarget = 'skip'; stepDone = true; }
  } else if (step === 'wolf') {
    const wolves = room.players.filter(p => p.role === 'wolf' && p.alive);
    if (wolves.length === 0) stepDone = true;
    else {
      const confirmedBy = n.wolfConfirmedBy || {};
      const allConfirmed = wolves.every(w => confirmedBy[w.id]);
      if (allConfirmed) {
        // All wolves confirmed — compute consensus kill
        const votes = wolves.map(w => n.wolfVotes[w.id]).filter(Boolean);
        const tally = {};
        votes.forEach(v => { tally[v] = (tally[v] || 0) + 1; });
        const max = Math.max(0, ...Object.values(tally));
        const top = Object.entries(tally).filter(([, c]) => c === max).map(([t]) => t);
        n.wolfKill = top.length === 1 ? top[0] : top[Math.floor(Math.random() * top.length)];
        stepDone = true;
      }
      if (!stepDone && elapsed >= limit) {
        // Timeout: use whatever votes exist
        const allVotes = Object.values(n.wolfVotes);
        if (allVotes.length > 0) {
          const tally = {};
          allVotes.forEach(v => { tally[v] = (tally[v] || 0) + 1; });
          const max = Math.max(...Object.values(tally));
          const top = Object.entries(tally).filter(([, c]) => c === max).map(([t]) => t);
          n.wolfKill = top[Math.floor(Math.random() * top.length)];
        } else {
          n.wolfKill = null;
        }
        stepDone = true;
      }
    }
  } else if (step === 'seer') {
    const seers = room.players.filter(p => p.role === 'seer' && p.alive);
    if (seers.length === 0 || n.seerCheck !== null) stepDone = true;
    if (!stepDone && elapsed >= limit) {
      // Auto-skip if seer doesn't act (rare; mark as null check)
      stepDone = true;
    }
  } else if (step === 'witch') {
    const witches = room.players.filter(p => p.role === 'witch' && p.alive);
    if (witches.length === 0) stepDone = true;
    else if (n.witchAction !== null) stepDone = true;
    if (!stepDone && elapsed >= limit) {
      n.witchAction = { type: 'skip', target: null };
      stepDone = true;
    }
  }

  if (stepDone) {
    n.step = nextNightStep(room, step);
    n.timerStart = Date.now();
    saveRoom(room);
    if (n.step === 'done') {
      // Resolve night and transition to day
      setTimeout(() => {
        const r2 = getRoom(currentRoomCode);
        if (r2 && r2.status === 'night') finishNight(r2);
      }, 800);
    }
  }
}

function finishNight(room) {
  const n = room.night;
  const deaths = []; // [{id, cause}]

  // Wolf kill, considering guard + witch heal
  if (n && n.wolfKill) {
    const guardSaved = n.guardTarget && n.guardTarget !== 'skip' && n.guardTarget === n.wolfKill;
    const witchSaved = n.witchAction && n.witchAction.type === 'heal' && n.witchAction.target === n.wolfKill;
    // Special rule: if guard AND witch both protect same target, they cancel out (target dies)
    const bothProtect = guardSaved && witchSaved;
    if (!guardSaved && !witchSaved) {
      deaths.push({ id: n.wolfKill, cause: 'wolf' });
    } else if (bothProtect) {
      deaths.push({ id: n.wolfKill, cause: 'wolf' });
    }
  }

  // Witch poison
  if (n && n.witchAction && n.witchAction.type === 'poison' && n.witchAction.target) {
    if (!deaths.find(d => d.id === n.witchAction.target)) {
      deaths.push({ id: n.witchAction.target, cause: 'poison' });
    }
  }

  // Update potion availability
  if (n && n.witchAction) {
    if (n.witchAction.type === 'heal') room.witchHasHeal = false;
    if (n.witchAction.type === 'poison') room.witchHasPoison = false;
  }

  // Save guard target for next night
  room.lastGuardTarget = (n && n.guardTarget && n.guardTarget !== 'skip') ? n.guardTarget : null;

  // Apply deaths
  deaths.forEach(d => {
    const p = room.players.find(x => x.id === d.id);
    if (p) p.alive = false;
  });

  room.night.deaths = deaths;

  // Check win condition
  const winner = checkWinCondition(room);
  if (winner) {
    room.winner = winner;
    room.status = 'gameover';
    saveRoom(room);
    return;
  }

  // Check if hunter died (and not by poison)
  const hunterDeath = deaths.find(d => {
    const p = room.players.find(x => x.id === d.id);
    return p && p.role === 'hunter' && d.cause !== 'poison';
  });
  if (hunterDeath) {
    room.pendingHunter = {
      shooterId: hunterDeath.id,
      returnTo: 'day',
      deadline: Date.now() + 30000,
    };
    room.status = 'hunter';
    saveRoom(room);
    return;
  }

  startDay(room);
}

// ══════════════════════════════════════════════════════════════
// DAY PHASE
// ══════════════════════════════════════════════════════════════
function startDay(room) {
  room.dayNum++;
  room.status = 'day';
  // Speak order: ALL players by seat (fixed), dead players are skipped during speech
  const allBySeat = [...room.players].sort((a, b) => a.seat - b.seat);
  room.day = {
    phase: 'announce',
    speakOrder: allBySeat.map(p => p.id),  // includes dead — advanceSpeaker skips them
    speakerIdx: 0,
    speakerStart: null,
    speakLimit: 180,
    voteState: null,
    deaths: room.night?.deaths || [],
  };
  // Add log entry
  const deathNames = room.day.deaths.length > 0
    ? room.day.deaths.map(d => {
        const p = room.players.find(x => x.id === d.id);
        return p ? `${p.nickname}（座位 ${p.seat}）` : '?';
      }).join('、')
    : '無人死亡';
  room.log = room.log || [];
  room.log.push({ type: 'system-night', text: `🌅 第 ${room.dayNum} 天 — 昨夜${room.day.deaths.length > 0 ? `死亡：${deathNames}` : '是平安夜'}`, ts: Date.now() });
  saveRoom(room);
}

function advanceDayStep(room) {
  const d = room.day;
  if (!d) return;

  if (d.phase === 'announce') {
    d.phase = 'speech';
    d.speakerIdx = 0;
    d.speakerStart = Date.now();
    // Skip dead players at the start
    while (d.speakerIdx < d.speakOrder.length) {
      const p = room.players.find(x => x.id === d.speakOrder[d.speakerIdx]);
      if (p && p.alive) break;
      d.speakerIdx++;
    }
    saveRoom(room);
    return;
  }

  if (d.phase === 'speech') {
    // Auto-advance speaker on timeout
    if (d.speakerStart && Date.now() - d.speakerStart > d.speakLimit * 1000) {
      const cur = room.players.find(x => x.id === d.speakOrder[d.speakerIdx]);
      if (cur) room.log.push({ type: 'system', text: `${cur.nickname} 發言時間結束`, ts: Date.now() });
      advanceSpeaker(room);
    }
    // Auto-advance if speaker is offline
    const cur = room.players.find(x => x.id === d.speakOrder[d.speakerIdx]);
    if (cur && (!cur.online || !cur.alive)) {
      if (d.speakerStart && Date.now() - d.speakerStart > 8000) {
        // Skip offline/dead speaker after 8s grace period
        advanceSpeaker(room);
      }
    }
    return;
  }
}

function advanceSpeaker(room) {
  const d = room.day;
  if (!d || d.phase !== 'speech') return;
  d.speakerIdx++;
  // Skip dead/offline players
  while (d.speakerIdx < d.speakOrder.length) {
    const p = room.players.find(x => x.id === d.speakOrder[d.speakerIdx]);
    if (p && p.alive) break;
    d.speakerIdx++;
  }
  if (d.speakerIdx >= d.speakOrder.length) {
    // All done → vote phase
    enterVotePhase(room);
  } else {
    d.speakerStart = Date.now();
    saveRoom(room);
  }
}

function endMySpeech() {
  const room = getRoom(currentRoomCode);
  if (!room || room.status !== 'day' || room.day?.phase !== 'speech') return;
  const cur = room.day.speakOrder[room.day.speakerIdx];
  if (cur !== myId) return;
  advanceSpeaker(room);
}

function hostSkipSpeaker() {
  const room = getRoom(currentRoomCode);
  if (!room || myId !== room.hostId) return;
  if (room.status !== 'day' || room.day?.phase !== 'speech') return;
  const cur = room.players.find(x => x.id === room.day.speakOrder[room.day.speakerIdx]);
  if (cur) room.log.push({ type: 'system', text: `${cur.nickname} 被房主跳過`, ts: Date.now() });
  advanceSpeaker(room);
}

function hostEndSpeechPhase() {
  const room = getRoom(currentRoomCode);
  if (!room || myId !== room.hostId) return;
  if (room.status !== 'day' || room.day?.phase !== 'speech') return;
  enterVotePhase(room);
}

function enterVotePhase(room) {
  room.status = 'vote';
  room.day.phase = 'vote';
  room.day.voteState = {
    votes: {},      // voterId -> targetId
    confirmed: {},  // voterId -> true
    timerStart: Date.now(),
    duration: 60,
  };
  room.log.push({ type: 'system-warn', text: '⏰ 進入投票階段', ts: Date.now() });
  saveRoom(room);
}

function renderDayView(room) {
  const d = room.day;
  if (!d) return;
  document.getElementById('day-title').textContent = `☀️ 第 ${room.dayNum} 天`;
  const phaseBadge = document.getElementById('day-phase-badge');
  phaseBadge.textContent = d.phase === 'speech' ? '討論時間' : d.phase === 'vote' ? '投票階段' : '討論時間';

  // Banner: hide entirely — death info is visible from player avatars in the strip
  const dayBanner = document.getElementById('day-banner');
  if (dayBanner) dayBanner.style.display = 'none';

  // Force re-render stream
  document.getElementById('day-stream').innerHTML = '';
  updateDayView(room);
}

function updateDayView(room) {
  const d = room.day;
  if (!d) return;
  const me = room.players.find(p => p.id === myId);

  // Order strip during speech phase
  const orderWrap = document.getElementById('day-order-wrap');
  if (d.phase === 'speech') {
    orderWrap.style.display = 'block';
    renderSpeakerStrip(room);
    runSpeakerTimerTick(room);
  } else {
    orderWrap.style.display = 'none';
  }

  // Host & speaker controls in input bar
  const isHostUser = myId === room.hostId;
  const isMyTurn = d.phase === 'speech' && d.speakOrder[d.speakerIdx] === myId && me?.alive;
  const isCurSpeaker = d.phase === 'speech' && d.speakOrder[d.speakerIdx] === myId;
  document.getElementById('day-end-mine').classList.toggle('hidden', !isMyTurn);
  document.getElementById('day-skip-other').classList.toggle('hidden', !(isHostUser && d.phase === 'speech' && !isCurSpeaker));
  document.getElementById('day-end-speech-host').classList.toggle('hidden', !(isHostUser && d.phase === 'speech'));

  // Update stream
  updateDayStream(room);

  // Disable input if I'm dead
  const inputEl = document.getElementById('day-chat-input');
  if (inputEl) {
    if (!me?.alive) {
      inputEl.placeholder = '你已出局，無法發言';
      inputEl.disabled = true;
    } else {
      inputEl.disabled = false;
      inputEl.placeholder = isMyTurn ? '請發言…' : '聊天…';
    }
  }

  // Seer: show history button in stream if I'm seer and have history
  if (me?.role === 'seer') {
    const history = (room.seerHistory || []).filter(r => r.seerId === myId);
    if (history.length > 0 && !document.getElementById('seer-history-btn')) {
      const btn = document.createElement('div');
      btn.id = 'seer-history-btn';
      btn.style.cssText = 'position:fixed;bottom:60px;right:14px;z-index:50;';
      btn.innerHTML = `<button onclick="toggleSeerHistory()" style="background:var(--surface);border:1px solid var(--border);color:var(--accent2);padding:7px 12px;border-radius:20px;font-size:0.78rem;font-weight:700;cursor:pointer;box-shadow:var(--shadow);">🔮 查驗記錄 (${history.length})</button>`;
      document.getElementById('view-day').appendChild(btn);
    }
  }
}

function runSpeakerTimerTick(room) {
  const d = room.day;
  if (!d || d.phase !== 'speech' || !d.speakerStart) return;
  const limit = d.speakLimit || 180;
  const elapsed = Math.floor((Date.now() - d.speakerStart) / 1000);
  const remaining = Math.max(0, limit - elapsed);
  const prog = document.getElementById('at-progress');
  if (prog) {
    const CIRC = 2 * Math.PI * 19;
    const offset = CIRC * (remaining / limit);
    prog.style.transition = 'none';
    prog.style.strokeDashoffset = offset;
    if (remaining <= 30) prog.classList.add('blink');
    else prog.classList.remove('blink');
    // Always red — distinct from amber self-avatar background
    prog.style.stroke = remaining <= 30 ? 'var(--danger)' : 'var(--wolf)';
  }
}

function renderSpeakerStrip(room) {
  const d = room.day;
  const strip = document.getElementById('day-order-strip');
  const prevIdx = parseInt(strip.dataset.speakerIdx ?? '-999');
  if (prevIdx === d.speakerIdx) return;
  strip.dataset.speakerIdx = d.speakerIdx;

  const CIRC = 2 * Math.PI * 19;
  strip.innerHTML = d.speakOrder.map((id, i) => {
    const p = room.players.find(x => x.id === id);
    if (!p) return '';
    const { emoji } = getAvatar(p.nickname);
    const dead = !p.alive;
    const isHostP = p.id === room.hostId;
    const hostDot = isHostP ? '<span class="host-dot"></span>' : '';
    const bg = avatarColor(p.id);
    const isCurrent = i === d.speakerIdx && !dead;
    const isDone = i < d.speakerIdx || (dead && i <= d.speakerIdx);
    const cls = isCurrent ? 'current' : isDone ? 'done' : '';

    if (isCurrent) {
      return `<div class="order-chip ${cls}">
        <div class="avatar-timer-wrap">
          <svg width="44" height="44" viewBox="0 0 44 44">
            <circle class="at-track" cx="22" cy="22" r="19"/>
            <circle class="at-progress" id="at-progress" cx="22" cy="22" r="19"
              stroke-dasharray="${CIRC.toFixed(1)}" stroke-dashoffset="0"/>
          </svg>
          <div class="avatar-inner" style="background:${bg};position:relative;">${emoji}${hostDot}</div>
        </div>
        <span class="chip-name" style="color:var(--text);font-weight:700;">${escHtml(p.nickname)}</span>
      </div>`;
    }
    const deadOverlay = dead
      ? `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:0.85rem;color:rgba(255,255,255,0.7);font-weight:900;background:rgba(0,0,0,0.55);border-radius:50%;">✕</div>`
      : '';
    return `<div class="order-chip ${cls}">
      <div class="avatar avatar-sm" style="background:${bg};position:relative;opacity:${dead ? 0.45 : 1};">${emoji}${hostDot}${deadOverlay}</div>
      <span class="chip-name" style="${dead ? 'color:var(--text3);' : ''}">${escHtml(p.nickname)}${dead ? ' <span style="font-size:0.58rem;background:rgba(90,90,114,0.35);color:var(--text3);padding:1px 4px;border-radius:3px;font-weight:700;vertical-align:middle;">出局</span>' : ''}</span>
    </div>`;
  }).join('');
}

function updateDayStream(room) {
  // Combined stream: log + chat, both items have ts. Use a stable key per item
  // to detect new ones rather than slicing by sort-order index.
  const stream = document.getElementById('day-stream');
  if (!stream) return;
  const items = [];
  (room.log || []).forEach((e, i) => items.push({ kind: 'log', idx: i, ts: e.ts || 0, ...e }));
  (room.chat || []).forEach((e, i) => items.push({ kind: 'chat', idx: i, ...e }));
  items.sort((a, b) => (a.ts || 0) - (b.ts || 0));

  // Build a stable key for each item
  const keyOf = it => it.kind === 'log' ? `log-${it.idx}` : `chat-${it.idx}`;

  // Remember which keys are already rendered on the DOM
  const renderedKeys = new Set();
  stream.querySelectorAll('[data-stream-key]').forEach(el => renderedKeys.add(el.getAttribute('data-stream-key')));

  // Drop DOM nodes whose underlying item disappeared (e.g. game reset)
  const itemKeys = new Set(items.map(keyOf));
  stream.querySelectorAll('[data-stream-key]').forEach(el => {
    if (!itemKeys.has(el.getAttribute('data-stream-key'))) el.remove();
  });

  // Append items that aren't in the DOM yet
  items.forEach(it => {
    const k = keyOf(it);
    if (renderedKeys.has(k)) return;
    const div = document.createElement('div');
    div.setAttribute('data-stream-key', k);
    if (it.kind === 'log') {
      div.className = 'chat-line ' + (it.type || 'system');
      div.textContent = it.text;
    } else {
      const isMe = it.senderId === myId;
      const sender = room.players.find(p => p.id === it.senderId);
      const dead = sender && !sender.alive;
      div.className = 'chat-line';
      const nameColor = isMe ? 'var(--success)' : 'var(--accent2)';
      const deadTag = dead ? ' <span style="font-size:0.62rem;background:rgba(90,90,114,0.35);color:var(--text3);padding:1px 5px;border-radius:4px;font-weight:700;">出局</span>' : '';
      div.innerHTML = `<span class="cl-name" style="color:${nameColor};">${escHtml(it.senderName)}${deadTag}</span><span class="cl-text">${escHtml(it.text)}</span>`;
    }
    stream.appendChild(div);
  });
  stream.scrollTop = stream.scrollHeight;
}

function appendStreamSystemOnce(room, key, text) {
  // Helper to append a system message without duplicating
  if (!room.log) room.log = [];
  if (room.log.find(e => e.key === key)) return;
  if (myId === room.hostId) {
    const r = getRoom(currentRoomCode);
    if (r && !(r.log || []).find(e => e.key === key)) {
      r.log = r.log || [];
      r.log.push({ type: 'system-warn', key, text, ts: Date.now() });
      saveRoom(r);
    }
  }
}

function sendDayChat() {
  const input = document.getElementById('day-chat-input');
  const text = input.value.trim();
  if (!text) return;
  const room = getRoom(currentRoomCode);
  const me = room.players.find(p => p.id === myId);
  if (!me?.alive) return;
  room.chat = room.chat || [];
  room.chat.push({ senderId: myId, senderName: myNickname, text, ts: Date.now() });
  if (room.chat.length > 300) room.chat = room.chat.slice(-300);
  saveRoom(room);
  input.value = '';
}
document.getElementById('day-chat-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') sendDayChat();
});

// Last words input Enter key
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('view-last-words')?.classList.contains('active')) {
    const input = document.getElementById('lw-input');
    if (input && document.activeElement === input) sendLastWords();
  }
});

// ══════════════════════════════════════════════════════════════
// VOTE PHASE
// ══════════════════════════════════════════════════════════════
function renderVoteView(room) {
  myVoteSelection = null;
  updateVoteView(room);
  startVoteTimer(room);
}

function updateVoteView(room) {
  const v = room.day?.voteState;
  if (!v) return;
  const me = room.players.find(p => p.id === myId);
  const alive = room.players.filter(p => p.alive);
  const confirmed = v.confirmed[myId];
  const myVote = v.votes[myId];
  const allVoted = alive.every(p => v.confirmed[p.id]);

  // Tally (only show after all voted)
  const tally = {};
  Object.values(v.votes).forEach(t => { tally[t] = (tally[t] || 0) + 1; });

  const list = document.getElementById('vote-list');
  list.innerHTML = alive.map(p => {
    const { emoji } = getAvatar(p.nickname);
    const isMe = p.id === myId;
    const selected = myVoteSelection === p.id;
    const isHostP = p.id === room.hostId;
    const cnt = tally[p.id] || 0;
    const clickable = me?.alive && !confirmed && !isMe;
    return `<div class="target-card ${selected ? 'selected' : ''}"
      style="${isMe ? 'opacity:0.5;cursor:not-allowed;' : ''}"
      onclick="${clickable ? `selectVote('${p.id}')` : ''}">
      <div class="avatar avatar-sm" style="background:${avatarColor(p.id)};position:relative;">${emoji}${isHostP ? '<span class="host-dot"></span>' : ''}</div>
      <div><div class="name">${escHtml(p.nickname)} ${isMe ? '(你)' : ''}</div><div class="sub">座位 ${p.seat}${isHostP ? ' · 房主' : ''}</div></div>
      <div class="right">${allVoted && cnt > 0 ? `<span class="badge badge-warn">${cnt}票</span>` : selected && !confirmed ? '<span style="color:var(--accent2);font-size:0.85rem;">← 選中</span>' : confirmed && myVote === p.id ? '<span class="badge badge-success">✓ 已投</span>' : ''}</div>
    </div>`;
  }).join('');

  // Confirm / waiting
  const conf = document.getElementById('vote-confirm-area');
  if (!me?.alive) {
    conf.innerHTML = `<p class="text-center text-muted text-sm mt-12">你已出局，無法投票</p>`;
  } else if (confirmed) {
    const target = room.players.find(p => p.id === myVote);
    conf.innerHTML = `<div class="text-center mt-12"><span class="badge badge-success" style="padding:8px 16px;font-size:0.85rem;">✓ 已投給 ${escHtml(target?.nickname || '?')}</span></div>`;
  } else if (myVoteSelection) {
    const target = room.players.find(p => p.id === myVoteSelection);
    conf.innerHTML = `<button class="btn btn-primary btn-full mt-12" onclick="confirmVote()">確認投給 ${escHtml(target?.nickname || '?')}</button>
      <p class="text-center text-xs text-muted mt-8">確認前可重新選擇</p>`;
  } else {
    conf.innerHTML = '';
  }

  const votedCount = alive.filter(p => v.confirmed[p.id]).length;
  document.getElementById('vote-status').textContent = `${votedCount} / ${alive.length} 人已投票`;

  // Host force-reveal button
  const hostActions = document.getElementById('vote-host-actions');
  const isHostUser = myId === room.hostId;
  if (isHostUser) {
    hostActions.classList.remove('hidden');
    const remaining = alive.length - votedCount;
    hostActions.innerHTML = `<button class="btn ${allVoted ? 'btn-success' : 'btn-danger'} btn-full" onclick="hostForceReveal()">
      ${allVoted ? '公布投票結果' : `提前公布（還有 ${remaining} 人未投）`}
    </button>`;
  } else {
    hostActions.classList.add('hidden');
  }
}

function selectVote(targetId) {
  if (targetId === myId) return;
  const room = getRoom(currentRoomCode);
  const v = room.day?.voteState;
  if (!v || v.confirmed[myId]) return;
  myVoteSelection = targetId;
  updateVoteView(room);
}

function confirmVote() {
  if (!myVoteSelection) return;
  const room = getRoom(currentRoomCode);
  const v = room.day?.voteState;
  if (!v || v.confirmed[myId]) return;
  v.votes[myId] = myVoteSelection;
  v.confirmed[myId] = true;
  saveRoom(room);
  toast('已確認投票');
}

function hostForceReveal() {
  const room = getRoom(currentRoomCode);
  if (myId !== room.hostId) return;
  resolveVote(room);
}

function startVoteTimer(room) {
  if (voteTimerInterval) clearInterval(voteTimerInterval);
  function tick() {
    const r = getRoom(currentRoomCode);
    if (!r || r.status !== 'vote') { clearInterval(voteTimerInterval); return; }
    const v = r.day?.voteState;
    if (!v) return;
    const elapsed = Math.floor((Date.now() - v.timerStart) / 1000);
    const remaining = Math.max(0, v.duration - elapsed);
    const lbl = document.getElementById('vote-timer-label');
    const prog = document.getElementById('vote-timer-progress');
    if (lbl) lbl.textContent = remaining;
    if (prog) {
      const circ = 113.1;
      prog.style.strokeDashoffset = circ * (1 - remaining / v.duration);
      prog.style.stroke = remaining < 15 ? 'var(--danger)' : remaining < 30 ? 'var(--warn)' : 'var(--accent)';
    }
    if (remaining === 0 && myId === r.hostId) {
      clearInterval(voteTimerInterval);
      resolveVote(r);
    }
  }
  voteTimerInterval = setInterval(tick, 1000);
  tick();
}

function checkVoteCompletion(room) {
  const v = room.day?.voteState;
  if (!v) return;
  const alive = room.players.filter(p => p.alive);
  if (alive.every(p => v.confirmed[p.id])) {
    resolveVote(room);
  }
}

function resolveVote(room) {
  // Idempotency: only resolve once per vote
  if (room.day?.voteState?.resolved) return;
  const v = room.day?.voteState;
  if (!v) return;
  v.resolved = true;

  const tally = {};
  Object.values(v.votes).forEach(t => { tally[t] = (tally[t] || 0) + 1; });

  let banishedId = null;
  if (Object.keys(tally).length > 0) {
    const max = Math.max(...Object.values(tally));
    const top = Object.entries(tally).filter(([, c]) => c === max).map(([t]) => t);
    if (top.length === 1) {
      banishedId = top[0];
    }
  }

  // Build per-player vote breakdown for the result screen
  const breakdown = {};
  Object.entries(v.votes).forEach(([voter, target]) => {
    if (!breakdown[target]) breakdown[target] = [];
    breakdown[target].push(voter);
  });

  // Save vote result for the post-vote view
  room.voteResult = {
    breakdown,
    banishedId,
    tied: !banishedId && Object.keys(tally).length > 0,
    tieIds: !banishedId ? Object.entries(tally).filter(([, c]) => c === Math.max(...Object.values(tally))).map(([t]) => t) : [],
    abstained: room.players.filter(p => p.alive && !v.confirmed[p.id]).map(p => p.id),
    deadlineToContinue: Date.now() + 5000,  // 5s pause to view result
  };
  room.status = 'vote-result';
  saveRoom(room);
}

function continueAfterVote(room) {
  const vr = room.voteResult;
  if (!vr) { startNight(room); return; }
  const banishedId = vr.banishedId;

  if (vr.tied) {
    const tieNames = vr.tieIds.map(id => room.players.find(p => p.id === id)?.nickname).join('、');
    room.log.push({ type: 'system-warn', text: `⚖️ 平票（${tieNames}）— 無人放逐`, ts: Date.now() });
  }

  if (banishedId) {
    const banished = room.players.find(p => p.id === banishedId);
    banished.alive = false;
    room.log.push({ type: 'system-warn', text: `⚒️ ${banished.nickname}（座位 ${banished.seat}）被放逐`, ts: Date.now() });

    const winner = checkWinCondition(room);
    if (winner) {
      room.winner = winner;
      room.status = 'gameover';
      room.voteResult = null;
      saveRoom(room);
      return;
    }

    // Enter last words phase before hunter or next night
    room.lastWords = {
      playerId: banishedId,
      messages: [],
      deadline: Date.now() + 60000,
      returnTo: banished.role === 'hunter' ? 'hunter' : 'night',
    };
    if (banished.role === 'hunter') {
      room.pendingHunter = {
        shooterId: banishedId,
        returnTo: 'next-night',
        deadline: Date.now() + 90000, // hunter deadline starts after last words
      };
    }
    room.status = 'last-words';
    room.voteResult = null;
    saveRoom(room);
    return;
  }

  room.voteResult = null;
  startNight(room);
}

// ══════════════════════════════════════════════════════════════
// LAST WORDS VIEW
// ══════════════════════════════════════════════════════════════
let lwTimerInterval = null;

function renderLastWordsView(room) {
  const lw = room.lastWords;
  if (!lw) return;
  const banished = room.players.find(p => p.id === lw.playerId);
  if (!banished) return;

  // Banner
  const banner = document.getElementById('lw-banner');
  const { emoji } = getAvatar(banished.nickname);
  const isHostP = banished.id === room.hostId;
  banner.innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;">
      <div class="avatar avatar-lg" style="background:${avatarColor(banished.id)};position:relative;">${emoji}${isHostP ? '<span class="host-dot"></span>' : ''}</div>
      <div>
        <div style="font-size:1.1rem;font-weight:800;">${escHtml(banished.nickname)}</div>
        <div class="text-xs text-muted">座位 ${banished.seat} · 被放逐</div>
        <div class="text-xs" style="color:var(--accent2);margin-top:4px;">正在說遺言…</div>
      </div>
    </div>`;

  // Show input bar only for the banished player
  const inputBar = document.getElementById('lw-input-bar');
  if (inputBar) inputBar.style.display = lw.playerId === myId ? 'flex' : 'none';

  // Render existing messages
  document.getElementById('lw-stream').innerHTML = '';
  updateLastWordsView(room);
  startLwTimer(room);
}

function updateLastWordsView(room) {
  const lw = room.lastWords;
  if (!lw) return;
  const stream = document.getElementById('lw-stream');
  if (!stream) return;

  // Stable-key render for messages
  const rendered = new Set();
  stream.querySelectorAll('[data-lw-key]').forEach(el => rendered.add(el.getAttribute('data-lw-key')));
  (lw.messages || []).forEach((msg, i) => {
    const k = `lw-${i}`;
    if (rendered.has(k)) return;
    const div = document.createElement('div');
    div.setAttribute('data-lw-key', k);
    div.className = 'chat-line';
    const nameColor = msg.senderId === myId ? 'var(--success)' : 'var(--accent2)';
    div.innerHTML = `<span class="cl-name" style="color:${nameColor};">${escHtml(msg.senderName)}</span><span class="cl-text">${escHtml(msg.text)}</span>`;
    stream.appendChild(div);
  });
  stream.scrollTop = stream.scrollHeight;
}

function sendLastWords() {
  const input = document.getElementById('lw-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  const room = getRoom(currentRoomCode);
  if (!room.lastWords || room.lastWords.playerId !== myId) return;
  room.lastWords.messages = room.lastWords.messages || [];
  room.lastWords.messages.push({ senderId: myId, senderName: myNickname, text, ts: Date.now() });
  saveRoom(room);
  input.value = '';
}

function startLwTimer(room) {
  if (lwTimerInterval) clearInterval(lwTimerInterval);
  const DURATION = 60;
  function tick() {
    const r = getRoom(currentRoomCode);
    if (!r || r.status !== 'last-words') { clearInterval(lwTimerInterval); return; }
    const elapsed = Math.floor((Date.now() - (r.lastWords?.deadline - DURATION * 1000)) / 1000);
    const remaining = Math.max(0, DURATION - elapsed);
    const lbl = document.getElementById('lw-timer-label');
    const prog = document.getElementById('lw-timer-progress');
    if (lbl) lbl.textContent = remaining;
    if (prog) {
      const circ = 113.1;
      prog.style.strokeDashoffset = circ * (1 - remaining / DURATION);
      prog.style.stroke = remaining < 15 ? 'var(--danger)' : remaining < 30 ? 'var(--warn)' : 'var(--accent)';
    }
  }
  lwTimerInterval = setInterval(tick, 1000);
  tick();
}

function finishLastWords(room) {
  const lw = room.lastWords;
  if (!lw) return;
  const returnTo = lw.returnTo;
  room.lastWords = null;
  if (returnTo === 'hunter') {
    // pendingHunter already set in continueAfterVote
    room.status = 'hunter';
    saveRoom(room);
  } else {
    startNight(room);
  }
}

// ══════════════════════════════════════════════════════════════
// VOTE RESULT VIEW
// ══════════════════════════════════════════════════════════════
function renderVoteResultView(room) {
  if (voteTimerInterval) { clearInterval(voteTimerInterval); voteTimerInterval = null; }
  updateVoteResultView(room);
  // Update countdown every second
  if (window.voteResultCountdownTimer) clearInterval(window.voteResultCountdownTimer);
  window.voteResultCountdownTimer = setInterval(() => {
    const r = getRoom(currentRoomCode);
    if (!r || r.status !== 'vote-result') {
      clearInterval(window.voteResultCountdownTimer);
      window.voteResultCountdownTimer = null;
      return;
    }
    const cd = document.getElementById('vote-result-countdown');
    if (cd) {
      const remaining = Math.max(0, Math.ceil((r.voteResult.deadlineToContinue - Date.now()) / 1000));
      cd.textContent = remaining > 0 ? `${remaining} 秒後繼續…` : '繼續中…';
    }
  }, 1000);
}

function updateVoteResultView(room) {
  const vr = room.voteResult;
  if (!vr) return;
  const banner = document.getElementById('vote-result-banner');
  const detail = document.getElementById('vote-result-detail');
  const countdown = document.getElementById('vote-result-countdown');

  if (vr.banishedId) {
    const p = room.players.find(x => x.id === vr.banishedId);
    const { emoji } = getAvatar(p.nickname);
    banner.innerHTML = `
      <div class="phase-emoji">⚒️</div>
      <div class="phase-title">${escHtml(p.nickname)} 被放逐</div>
      <div class="phase-sub">座位 ${p.seat} · 票數最高</div>`;
  } else if (vr.tied) {
    const tieNames = vr.tieIds.map(id => escHtml(room.players.find(p => p.id === id)?.nickname || '')).join('、');
    banner.innerHTML = `
      <div class="phase-emoji">⚖️</div>
      <div class="phase-title">平票</div>
      <div class="phase-sub">${tieNames} 票數相同 — 無人放逐</div>`;
  } else {
    banner.innerHTML = `
      <div class="phase-emoji">🏳️</div>
      <div class="phase-title">無人投票</div>
      <div class="phase-sub">無人放逐</div>`;
  }

  // Show breakdown: who voted whom
  const alive = room.players.filter(p => p.alive || p.id === vr.banishedId);
  const sorted = [...alive].sort((a, b) => {
    const ca = vr.breakdown[a.id]?.length || 0;
    const cb = vr.breakdown[b.id]?.length || 0;
    return cb - ca;
  });
  detail.innerHTML = `<div class="card">
    <h3 class="mb-12" style="font-size:0.9rem;">投票詳情</h3>
    ${sorted.map(p => {
      const { emoji } = getAvatar(p.nickname);
      const isHostP = p.id === room.hostId;
      const voters = (vr.breakdown[p.id] || []).map(vid => {
        const v = room.players.find(x => x.id === vid);
        return v ? escHtml(v.nickname) : '';
      }).filter(Boolean);
      const cnt = voters.length;
      return `<div class="flex items-center gap-12" style="padding:8px 0;border-bottom:1px solid var(--border);">
        <div class="avatar avatar-sm" style="background:${avatarColor(p.id)};${p.id === vr.banishedId ? 'opacity:0.4;' : ''}position:relative;">${emoji}${isHostP ? '<span class="host-dot"></span>' : ''}</div>
        <div style="flex:1;">
          <div class="font-bold">${escHtml(p.nickname)}${p.id === vr.banishedId ? ' <span class="badge badge-danger">放逐</span>' : ''}</div>
          <div class="text-xs text-muted">${cnt > 0 ? voters.join('、') : '無人投票'}</div>
        </div>
        <div style="font-size:1rem;font-weight:900;color:var(--accent2);">${cnt}<span style="font-size:0.7rem;font-weight:600;color:var(--text3);"> 票</span></div>
      </div>`;
    }).join('')}
    ${vr.abstained.length > 0 ? `<p class="text-xs text-muted mt-12">棄票：${vr.abstained.map(id => escHtml(room.players.find(p => p.id === id)?.nickname || '')).join('、')}</p>` : ''}
  </div>`;

  const remaining = Math.max(0, Math.ceil((vr.deadlineToContinue - Date.now()) / 1000));
  countdown.textContent = remaining > 0 ? `${remaining} 秒後繼續…` : '繼續中…';
}

// ══════════════════════════════════════════════════════════════
// HUNTER SHOOT
// ══════════════════════════════════════════════════════════════
function renderHunterView(room) {
  const me = room.players.find(p => p.id === myId);
  if (!me) return;
  document.getElementById('hunter-banner-title').textContent =
    room.pendingHunter.returnTo === 'next-night' ? '你被放逐了' : '你被狼刀了';
  const list = document.getElementById('hunter-target-list');
  const targets = room.players.filter(p => p.alive && p.id !== myId);
  list.innerHTML = targets.map(p => {
    return `<div class="target-card" onclick="hunterShoot('${p.id}')">
      ${renderAvatarHTML(p, 'avatar-sm', room)}
      <div><div class="name">${escHtml(p.nickname)}</div><div class="sub">座位 ${p.seat}</div></div>
    </div>`;
  }).join('');
}

function hunterShoot(targetId) {
  const room = getRoom(currentRoomCode);
  processHunterShoot(room, targetId);
}
function hunterSkip() {
  const room = getRoom(currentRoomCode);
  processHunterShoot(room, null);
}
function processHunterShoot(room, targetId) {
  if (!room.pendingHunter) return;
  const shooter = room.players.find(p => p.id === room.pendingHunter.shooterId);
  if (targetId) {
    const target = room.players.find(p => p.id === targetId);
    if (target && target.alive) {
      target.alive = false;
      room.log = room.log || [];
      room.log.push({ type: 'system-warn', text: `�� ${shooter?.nickname || '獵人'} 開槍帶走 ${target.nickname}（座位 ${target.seat}）`, ts: Date.now() });
    }
  } else {
    room.log = room.log || [];
    room.log.push({ type: 'system', text: `${shooter?.nickname || '獵人'} 放棄開槍`, ts: Date.now() });
  }
  const returnTo = room.pendingHunter.returnTo;
  room.pendingHunter = null;

  // Check win again
  const winner = checkWinCondition(room);
  if (winner) {
    room.winner = winner;
    room.status = 'gameover';
    saveRoom(room);
    return;
  }

  // Continue flow
  if (returnTo === 'next-night') {
    startNight(room);
  } else {
    // returnTo === 'day' — resume into day phase (skip the dead announce since it's already been shown)
    startDay(room);
  }
}

// ══════════════════════════════════════════════════════════════
// WIN CONDITION
// ══════════════════════════════════════════════════════════════
function checkWinCondition(room) {
  const alive = room.players.filter(p => p.alive);
  const wolves = alive.filter(p => p.role === 'wolf');
  const goods = alive.filter(p => p.role !== 'wolf');
  if (wolves.length === 0) return 'good';
  if (wolves.length >= goods.length) return 'evil';
  return null;
}

// ══════════════════════════════════════════════════════════════
// GAME OVER
// ══════════════════════════════════════════════════════════════
function renderGameOver(room) {
  if (nightTimerInterval) clearInterval(nightTimerInterval);
  if (voteTimerInterval) clearInterval(voteTimerInterval);

  const w = room.winner;
  const map = {
    good:  { emoji: '🎉', title: '好人陣營勝利！', color: 'var(--success)', sub: '所有狼人已被消滅' },
    evil:  { emoji: '🐺', title: '狼人陣營勝利！', color: 'var(--danger)',  sub: '狼人成功屠邊' },
    none:  { emoji: '🏳️', title: '遊戲結束',       color: 'var(--text2)',   sub: '' },
  };
  const info = map[w] || map.none;
  document.getElementById('gameover-content').innerHTML = `
    <div class="anim-pop" style="padding:24px 0;">
      <div style="font-size:4rem;margin-bottom:8px;">${info.emoji}</div>
      <div style="font-size:1.8rem;font-weight:900;color:${info.color};margin-bottom:6px;">${info.title}</div>
      <p class="text-muted">${info.sub}</p>
    </div>`;

  document.getElementById('gameover-players').innerHTML = room.players.map(p => {
    const { emoji } = getAvatar(p.nickname);
    const r = ROLES[p.role] || { emoji: '?', name: '?', camp: 'good' };
    const campColor = r.camp === 'evil' ? 'var(--danger)' : 'var(--success)';
    const isHostP = p.id === room.hostId;
    return `<div class="flex items-center gap-12" style="padding:10px 14px;background:var(--surface2);border-radius:10px;margin-bottom:8px;">
      <div class="avatar avatar-sm" style="background:${avatarColor(p.id)};position:relative;">${emoji}${isHostP ? '<span class="host-dot"></span>' : ''}</div>
      <div style="flex:1;">
        <div class="font-bold">${escHtml(p.nickname)} <span class="text-xs text-muted">座位 ${p.seat || '?'}${isHostP ? ' · 房主' : ''}</span></div>
        <div class="text-xs" style="color:${campColor};">${r.emoji} ${r.name}</div>
      </div>
      ${p.alive ? '<span class="badge badge-success">存活</span>' : '<span style="font-size:0.72rem;background:rgba(90,90,114,0.35);color:var(--text3);padding:3px 9px;border-radius:20px;font-weight:700;">出局</span>'}
    </div>`;
  }).join('');

  const actions = document.getElementById('gameover-actions');
  const isHostUser = myId === room.hostId;
  if (isHostUser) {
    actions.innerHTML = `<button class="btn btn-primary btn-full" onclick="hostPlayAgain()">🔄 再來一局</button>
      <button class="btn btn-ghost btn-full mt-8" onclick="backToHome()">返回大廳</button>`;
  } else {
    actions.innerHTML = `<p class="text-center text-muted text-sm mb-12">等待房主決定是否再來一局…</p>
      <button class="btn btn-ghost btn-full" onclick="backToHome()">返回大廳</button>`;
  }
}

function hostPlayAgain() {
  const room = getRoom(currentRoomCode);
  if (!room || myId !== room.hostId) return;
  // Reset
  room.players.forEach(p => {
    p.alive = true;
    p.role = null;
    p.roleConfirmed = false;
    p.ready = (p.id === room.hostId);
    delete p.seat;
  });
  room.status = 'waiting';
  room.nightNum = 0;
  room.dayNum = 0;
  room.log = [];
  room.chat = [];
  room.night = null;
  room.day = null;
  room.pendingHunter = null;
  room.lastGuardTarget = null;
  room.winner = null;
  room.witchHasHeal = (room.roleCounts?.witch || 0) > 0;
  room.witchHasPoison = (room.roleCounts?.witch || 0) > 0;
  saveRoom(room);
  toast('已重置房間，等待玩家準備');
}

function backToHome() {
  if (currentRoomCode) {
    const room = getRoom(currentRoomCode);
    if (room) {
      if (myId === room.hostId) {
        const others = room.players.filter(p => p.id !== myId);
        if (others.length > 0) {
          const newHost = others.find(p => p.online) || others[0];
          newHost.ready = true;
          room.hostId = newHost.id;
        }
      }
      room.players = room.players.filter(p => p.id !== myId);
      if (room.players.length === 0) {
        db.ref(getRoomKey(currentRoomCode)).remove();
      } else {
        saveRoom(room);
      }
    }
  }
  cleanupAndGoHome();
}

// ══════════════════════════════════════════════════════════════
// LEAVE / FORCE END
// ══════════════════════════════════════════════════════════════
function confirmLeave() { showModal('modal-leave'); }
function confirmForceEnd() { showModal('modal-force-end'); closeModal('modal-leave'); }

function leaveRoom() {
  closeModal('modal-leave');
  backToHome();
}

function forceEndGame() {
  closeModal('modal-force-end');
  const room = getRoom(currentRoomCode);
  if (room && myId === room.hostId) {
    db.ref(getRoomKey(currentRoomCode)).remove();
  }
  cleanupAndGoHome();
}

// ══════════════════════════════════════════════════════════════
// NIGHT TIMER (visual countdown)
// ══════════════════════════════════════════════════════════════
function startNightTimer(room) {
  if (nightTimerInterval) clearInterval(nightTimerInterval);
  function tick() {
    const r = getRoom(currentRoomCode);
    if (!r || r.status !== 'night' || !r.night) { clearInterval(nightTimerInterval); return; }
    const limit = NIGHT_STEP_TIMEOUT[r.night.step] || 30;
    const elapsed = Math.floor((Date.now() - (r.night.timerStart || Date.now())) / 1000);
    const remaining = Math.max(0, limit - elapsed);
    const lbl = document.getElementById('night-timer-label');
    const prog = document.getElementById('night-timer-progress');
    if (lbl) lbl.textContent = remaining;
    if (prog) {
      const circ = 106.8;
      prog.style.strokeDashoffset = circ * (1 - remaining / limit);
      prog.style.stroke = remaining < 8 ? 'var(--danger)' : remaining < 15 ? 'var(--warn)' : 'var(--night2)';
    }
  }
  nightTimerInterval = setInterval(tick, 1000);
  tick();
}
