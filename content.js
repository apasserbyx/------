let lastRightClickedElement = null;
let hiddenElements = [];
let shownElements = [];
document.addEventListener('contextmenu', (event) => {
  lastRightClickedElement = event.target;
}, true);
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "hideElement" && lastRightClickedElement) {
    lastRightClickedElement.style.display = 'none';
    hiddenElements.push(lastRightClickedElement);
    lastRightClickedElement = null;
  } else if (request.action === "showElement" && lastRightClickedElement) {
    lastRightClickedElement.style.display = '';
    shownElements.push(lastRightClickedElement);
    lastRightClickedElement = null;
  } else if (request.action === "resetHiddenElements") {
    hiddenElements.forEach(element => {
      element.style.display = '';
    });
    hiddenElements = [];
  } else if (request.action === "resetShownElements") {
    shownElements.forEach(element => {
      element.style.display = '';
    });
    shownElements = [];
  }
});
