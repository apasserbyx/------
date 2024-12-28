// popup.js
document.getElementById('resetButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'resetHiddenElements' }, response => {
        if (chrome.runtime.lastError) {
          console.error('Message sending failed: ', chrome.runtime.lastError.message)
        } else if (response && response.error) {
          console.error('Error response from content script: ', response.error)
        } else {
          console.log('Reset message sent successfully.')
        }
      })
    } else {
      console.error('No active tabs found.')
    }
  })
})

document.getElementById('addUrlButton').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value
  if (url) {
    chrome.storage.sync.get({ blockedUrls: [] }, data => {
      let blockedUrls = data.blockedUrls
      blockedUrls.push(url)
      chrome.storage.sync.set({ blockedUrls: blockedUrls }, () => {
        alert('URL added to block list.')
        console.log(`URL ${url} added to blockedUrls: `, blockedUrls)
        document.getElementById('urlInput').value = '' // 清空输入框
      })
    })
  } else {
    console.warn('No URL entered.')
  }
})

document.getElementById('showListButton').addEventListener('click', () => {
  chrome.storage.sync.get({ blockedUrls: [] }, data => {
    const blockedUrls = data.blockedUrls
    const listElement = document.getElementById('blockedList')
    listElement.innerHTML = '' // 清空列表
    blockedUrls.forEach((url, index) => {
      const listItem = document.createElement('li')
      listItem.textContent = url
      const deleteButton = document.createElement('button')
      deleteButton.textContent = '删除'
      deleteButton.addEventListener('click', () => {
        removeUrlFromList(index)
      })
      listItem.appendChild(deleteButton)
      listElement.appendChild(listItem)
    })
  })
})

function removeUrlFromList(index) {
  chrome.storage.sync.get({ blockedUrls: [] }, data => {
    let blockedUrls = data.blockedUrls
    blockedUrls.splice(index, 1)
    chrome.storage.sync.set({ blockedUrls: blockedUrls }, () => {
      console.log(`URL at index ${index} removed from blockedUrls: `, blockedUrls)
      document.getElementById('showListButton').click() // 刷新显示列表
    })
  })
}

document.getElementById('importButton').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput')
  const file = fileInput.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = function (event) {
      const fileContent = event.target.result
      const urls = fileContent
        .split('\n')
        .map(url => url.trim())
        .filter(url => url)
      chrome.storage.sync.get({ blockedUrls: [] }, data => {
        let blockedUrls = data.blockedUrls
        blockedUrls = blockedUrls.concat(urls)
        chrome.storage.sync.set({ blockedUrls: blockedUrls }, () => {
          alert(`${urls.length} URLs imported.`)
          console.log(`Imported URLs: `, urls)
        })
      })
    }
    reader.readAsText(file)
  } else {
    console.warn('No file selected.')
  }
})

