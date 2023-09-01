const iframeContainer = document.querySelector('.iframe-wrapper');

function addIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = "https://getapro.lv/tradesman/catalogue/feedbacks/135386";
    iframe.height = "600";
    iframe.width = "100%";
    iframe.title = "Atsauksmes";
    iframe.classList.add("custom-iframe");
    iframeContainer.appendChild(iframe);
}

window.addEventListener('hashchange', function() {
    if (window.location.hash === '#Atsauksmes') {
        if (!iframeContainer.hasChildNodes()) {
            addIframe();
        }
    }
});

if (window.location.hash === '#Atsauksmes') {
    if (!iframeContainer.hasChildNodes()) {
        addIframe();
    }
}
