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
}

document.addEventListener('contextmenu', (event) => {
    const target = event.target;
    if (isAdElement(target)) {
        lastRightClickedElement = target;
    }
    event.preventDefault();
}, true);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "hideElement" && lastRightClickedElement) {
        lastRightClickedElement.style.display = 'none';
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
});

let hiddenElements = [];
