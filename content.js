let lastRightClickedElement = null;

function isAdElement(element) {
  const commonAdClassNames = ['ad', 'advertisement', 'banner-ad'];
  for (const className of commonAdClassNames) {
      if (element.classList.contains(className)) {
          return true;
      }
  }
  if (element.hasAttribute('data-ad-id')) {
      return true;
  }
  return false;
}//定义函数判断元素是否为广告元素

<<<<<<< HEAD

=======
>>>>>>> 08e31a299be7bf5dad747a0db3d002dd2d2fdedf
document.addEventListener('contextmenu', (event) => {
  lastRightClickedElement = event.target;
}, true);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "hideElement" && lastRightClickedElement) {
    lastRightClickedElement.style.display = 'none';
    lastRightClickedElement = null;
  }
});

let hiddenElements = [];


document.addEventListener('contextmenu', (event) => {
  const target = event.target;
  if (isAdElement(target)) {
      lastRightClickedElement = target;
  }
  event.preventDefault();
}, true);//将事件监听器设置为仅当右键点击的元素是广告元素时才记录该元素
<<<<<<< HEAD

=======
>>>>>>> 08e31a299be7bf5dad747a0db3d002dd2d2fdedf

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "hideElement" && lastRightClickedElement) {
    lastRightClickedElement.style.display = 'none';
    hiddenElements.push(lastRightClickedElement);
    lastRightClickedElement = null;
  } else if (request.action === "blockSameTypeAd") {
    if (lastRightClickedElement) {
        const adClassName = lastRightClickedElement.className;
        const allAds = document.querySelectorAll(`.${adClassName}`);
        allAds.forEach(ad => {
            ad.style.display = 'none';
        });
    }
} else if (request.action === "resetHiddenElements") {
    hiddenElements.forEach(element => {
        element.style.display = '';
    });
    hiddenElements = [];
}
<<<<<<< HEAD
});
=======
});
>>>>>>> 08e31a299be7bf5dad747a0db3d002dd2d2fdedf
