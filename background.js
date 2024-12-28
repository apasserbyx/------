// 定义常量
const MENU_ITEM_ID_HIDE = "hideElement";
const MENU_ITEM_ID_SHOW = "showElement";
const ACTION_HIDE_ELEMENT = "hideElement";
const ACTION_SHOW_ELEMENT = "showElement";
// 当扩展安装时，创建上下文菜单
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID_HIDE,
    title: "Hide this element",
    contexts: ["all"]
  });
  chrome.contextMenus.create({
    id: MENU_ITEM_ID_SHOW,
    title: "Show this element",
    contexts: ["all"]
  });
});
// 当上下文菜单被点击时，发送消息给标签页
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === MENU_ITEM_ID_HIDE) {
    chrome.tabs.sendMessage(tab.id, { action: ACTION_HIDE_ELEMENT });
  } else if (info.menuItemId === MENU_ITEM_ID_SHOW) {
    chrome.tabs.sendMessage(tab.id, { action: ACTION_SHOW_ELEMENT });
  }
});
