const fs = require('fs');
const path = 'c:/Users/tangp/Documents/undercover/werewolf/game.js';
let content = fs.readFileSync(path, 'utf8');

// toast replacements
content = content.replace(/toast\('請輸入暱稱'\)/g, "toast(t('toast_enter_nickname'))");
content = content.replace(/toast\('找不到房間'\)/g, "toast(t('toast_room_not_found'))");
content = content.replace(/toast\('遊戲已開始，無法加入'\)/g, "toast(t('toast_game_started'))");
content = content.replace(/toast\('房間已滿'\)/g, "toast(t('toast_room_full'))");
content = content.replace(/toast\('暱稱已被使用'\)/g, "toast(t('toast_nick_taken'))");
content = content.replace(/toast\(`房間 \$\{code\} 已創建`\)/g, "toast(t('toast_created', {code}))");
content = content.replace(/toast\(`已加入 \$\{code\}`\)/g, "toast(t('toast_joined', {code}))");
content = content.replace(/toast\('至少 4 名玩家'\)/g, "toast(t('toast_min_players'))");
content = content.replace(/toast\('還有玩家未準備好'\)/g, "toast(t('toast_not_ready'))");
content = content.replace(/toast\(`身份數量\(\$\{total\}\)與玩家數\(\$\{room\.players\.length\}\)不符`\)/g, "toast(t('toast_role_mismatch', {total, players: room.players.length}))");
content = content.replace(/toast\('已踢出玩家'\)/g, "toast(t('toast_kicked'))");
content = content.replace(/toast\('房間已解散'\)/g, "toast(t('toast_room_dissolved'))");
content = content.replace(/toast\('你已被踢出房間'\)/g, "toast(t('toast_kicked_out'))");
content = content.replace(/toast\('你已成為房主'\)/g, "toast(t('toast_became_host'))");
content = content.replace(/toast\('已確認守護'\)/g, "toast(t('toast_guard_confirmed'))");
content = content.replace(/toast\('已確認投票'\)/g, "toast(t('toast_vote_confirmed'))");
content = content.replace(/toast\('已確認，等待其他玩家…'\)/g, "toast(t('toast_role_confirmed'))");
content = content.replace(/toast\('已重置房間，等待玩家準備'\)/g, "toast(t('toast_reset'))");
content = content.replace(/navigator\.clipboard\.writeText\(url\)\.then\(\(\) => toast\('已複製邀請連結'\)\)/g, "navigator.clipboard.writeText(url).then(() => toast(t('toast_copied_link')))");
content = content.replace(/navigator\.clipboard\.writeText\(currentRoomCode\)\.then\(\(\) => toast\('已複製房間碼：' \+ currentRoomCode\)\)/g, "navigator.clipboard.writeText(currentRoomCode).then(() => toast(t('toast_copied_code', {code: currentRoomCode})))");
content = content.replace(/toast\('請先選擇目標'\)/g, "toast(t('toast_select_target'))");

// The two 已確認 toasts with context
content = content.replace(/(room\.night\.wolfConfirmedBy\[myId\] = true;\s+saveRoom\(room\);\s+)toast\('已確認'\)/g, "$1toast(t('toast_wolf_confirmed'))");
content = content.replace(/(witchPending = null;\s+saveRoom\(room\);\s+)toast\('已確認'\)/g, "$1toast(t('toast_witch_confirmed'))");

// Also handle toast('請輸入 6 位房間碼') in joinRoom
content = content.replace(/toast\('請輸入 6 位房間碼'\)/g, "toast(t('toast_enter_code'))");

fs.writeFileSync(path, content, 'utf8');
console.log('Done');

// Verify remaining Chinese toasts
const remaining = content.match(/toast\('[^)]*[\u4e00-\u9fff][^)]*'\)/g) || [];
console.log('Remaining Chinese toasts:', remaining.length);
remaining.forEach(m => console.log(' ', m));
