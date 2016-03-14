const getTicketButton = document.getElementById('getTicketButton')
getTicketButton.addEventListener('click', () => {
  chrome.tabs.executeScript(null, {
    file: 'content.js'
  })
})
