// 为重置隐藏元素按钮添加点击事件监听器
document.getElementById('resetHiddenButton').addEventListener('click', () => {
    // 查询当前活动标签页
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // 检查是否找到了活动标签页
        if (tabs.length > 0) {
            // 获取活动标签页的ID
            const tabId = tabs[0].id;
            // 发送消息到内容脚本，要求重置隐藏元素
            chrome.tabs.sendMessage(tabId, { action: "resetHiddenElements" }, (response) => {
                // 检查是否发生错误
                if (chrome.runtime.lastError) {
                    // 如果运行时错误，输出错误信息
                    console.error("发送消息失败: ", chrome.runtime.lastError.message);
                } else if (response && response.error) {
                    // 如果内容脚本返回了错误信息，输出错误信息
                    console.error("内容脚本返回错误: ", response.error);
                } else {
                    // 如果没有错误，可以在这里添加成功处理的逻辑
                    console.log("重置隐藏元素成功");
                }
            });
        } else {
            // 如果没有找到活动标签页，输出错误信息
            console.error("未找到活动标签页。");
        }
    });
});

// 为重置显示元素按钮添加点击事件监听器
document.getElementById('resetShownButton').addEventListener('click', () => {
    // 查询当前活动标签页
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // 检查是否找到了活动标签页
        if (tabs.length > 0) {
            // 获取活动标签页的ID
            const tabId = tabs[0].id;
            // 发送消息到内容脚本，要求重置显示元素
            chrome.tabs.sendMessage(tabId, { action: "resetShownElements" }, (response) => {
                // 检查是否发生错误
                if (chrome.runtime.lastError) {
                    // 如果运行时错误，输出错误信息
                    console.error("发送消息失败: ", chrome.runtime.lastError.message);
                } else if (response && response.error) {
                    // 如果内容脚本返回了错误信息，输出错误信息
                    console.error("内容脚本返回错误: ", response.error);
                } else {
                    // 如果没有错误，可以在这里添加成功处理的逻辑
                    console.log("重置显示元素成功");
                }
            });
        } else {
            // 如果没有找到活动标签页，输出错误信息
            console.error("未找到活动标签页。");
        }
    });
});

// 注释：
// 这段代码为两个按钮（重置隐藏元素和重置显示元素）添加了点击事件监听器。
// 当用户点击这些按钮时，代码会查询当前活动的Chrome标签页，并向该标签页的内容脚本发送消息，
// 要求其执行相应的重置操作（重置隐藏元素或重置显示元素）。
// 如果在发送消息或处理响应时发生错误，代码会输出相应的错误信息。
// 如果没有找到活动标签页，也会输出相应的错误信息。
