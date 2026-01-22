javascript:(function() {
    var uiDiv = document.createElement('div');
    uiDiv.style.position = 'fixed';
    uiDiv.style.top = '10px';
    uiDiv.style.right = '10px';
    uiDiv.style.zIndex = '10000';
    uiDiv.style.padding = '10px';
    uiDiv.style.backgroundColor = '#f9f9f9';
    uiDiv.style.border = '1px solid #ccc';

    var closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.float = 'right';
    closeButton.onclick = function() {
        document.body.removeChild(uiDiv);
    };
    uiDiv.appendChild(closeButton);

    var title = document.createElement('h1');
    title.textContent = 'YouTube Shorts Redirect';
    uiDiv.appendChild(title);

    var sameWindowButton = document.createElement('button');
    sameWindowButton.textContent = 'Redirect in Same Window';
    sameWindowButton.style.fontSize = '17px';
    sameWindowButton.style.padding = '10px';
    sameWindowButton.style.backgroundColor = '#259BFF';
    sameWindowButton.style.color = 'white';
    sameWindowButton.onclick = function(event) {
        event.stopPropagation();
        var url = window.location.href;
        if (url.includes('youtube.com/shorts/')) {
            var newUrl = url.replace('/shorts/', '/watch?v=');
            window.location.href = newUrl;
        } else {
            alert('This is not a YouTube Shorts URL.');
        }
    };
    uiDiv.appendChild(sameWindowButton);

    uiDiv.appendChild(document.createElement('br'));

    var newWindowButton = document.createElement('button');
    newWindowButton.textContent = 'Redirect in New Window';
    newWindowButton.style.fontSize = '17px';
    newWindowButton.style.padding = '10px';
    newWindowButton.onclick = function(event) {
        event.stopPropagation();
        var url = window.location.href;
        if (url.includes('youtube.com/shorts/')) {
            var newUrl = url.replace('/shorts/', '/watch?v=');
            window.open(newUrl, '_blank');
        } else {
            alert('This is not a YouTube Shorts URL.');
        }
    };
    uiDiv.appendChild(newWindowButton);

    document.body.appendChild(uiDiv);

    document.addEventListener('click', function(event) {
        if (!uiDiv.contains(event.target)) {
            document.body.removeChild(uiDiv);
        }
    });

    // Stop event propagation within the popup
    uiDiv.addEventListener('click', function(event) {
        event.stopPropagation();
    });
})();