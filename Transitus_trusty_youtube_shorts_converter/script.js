document.querySelector('.close-button').onclick = function() {
    window.close();
};

document.querySelector('.same-window-button').onclick = function(event) {
    event.stopPropagation();
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var url = tabs[0].url;
        if (url.includes('youtube.com/shorts/')) {
            var newUrl = url.replace('/shorts/', '/watch?v=');
            chrome.tabs.executeScript(tabs[0].id, {
                code: `history.pushState(null, '', '${newUrl}'); window.location.href = '${newUrl}';`
            });
        } else {
            alert('This is not a YouTube Shorts URL.');
        }
    });
};

document.querySelector('.new-window-button').onclick = function(event) {
    event.stopPropagation();
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var url = tabs[0].url;
        if (url.includes('youtube.com/shorts/')) {
            var newUrl = url.replace('/shorts/', '/watch?v=');
            chrome.tabs.create({ url: newUrl });
        } else {
            alert('This is not a YouTube Shorts URL.');
        }
    });
};