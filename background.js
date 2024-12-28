// 定义常量
const MENU_ITEM_ID = "hideElement";
const ACTION_HIDE_ELEMENT = "hideElement";
const MENU_ITEM_ID_BLOCK_SAME_TYPE = "blockSameTypeAd";
const ACTION_BLOCK_SAME_TYPE = "blockSameTypeAd";
const MENU_ITEM_ID_VIEW_STATS = "viewAdBlockingStats";
const ACTION_VIEW_STATS = "viewAdBlockingStats";
<<<<<<< HEAD

=======
>>>>>>> 08e31a299be7bf5dad747a0db3d002dd2d2fdedf
// 当扩展安装时，上下文菜单
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    title: "Hide this element",
    contexts: ["all"]
  });
});

// 当上下文菜单被点击时，发送消息给标签页
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === MENU_ITEM_ID) {
    chrome.tabs.sendMessage(tab.id, { action: ACTION_HIDE_ELEMENT });
  }
});chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    title: "Hide this element",
    tooltip: "隐藏当前右键点击的广告元素",
    contexts: ["all"]
});
  chrome.contextMenus.create({
    id: MENU_ITEM_ID_BLOCK_SAME_TYPE,
    title: "屏蔽此类广告",
    tooltip: "屏蔽与当前广告元素具有相同特征的所有广告",
    contexts: ["all"]
});
chrome.contextMenus.create({
    id: MENU_ITEM_ID_VIEW_STATS,
    title: "查看广告拦截统计",
    tooltip: "查看插件拦截广告的相关统计信息",
    contexts: ["all"]
<<<<<<< HEAD

=======
>>>>>>> 08e31a299be7bf5dad747a0db3d002dd2d2fdedf
});//为每个菜单选项添加提示文字，使用户清楚每个选项的功能
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "hideElement") {
    chrome.tabs.sendMessage(tab.id, { action: "hideElement" });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
      id: MENU_ITEM_ID,
      title: "Hide this element",
      contexts: ["all"]
  });
  chrome.contextMenus.create({
      id: MENU_ITEM_ID_BLOCK_SAME_TYPE,
      title: "屏蔽此类广告",
      contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === MENU_ITEM_ID) {
      chrome.tabs.sendMessage(tab.id, { action: ACTION_HIDE_ELEMENT });
  } else if (info.menuItemId === MENU_ITEM_ID_BLOCK_SAME_TYPE) {
      chrome.tabs.sendMessage(tab.id, { action: ACTION_BLOCK_SAME_TYPE });
  }
});//为右键菜单添加一键屏蔽具有相同特征的所有广告
<<<<<<< HEAD
=======

>>>>>>> 08e31a299be7bf5dad747a0db3d002dd2d2fdedf
