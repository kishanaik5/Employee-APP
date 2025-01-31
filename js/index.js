document.addEventListener('DOMContentLoaded', function() {
    // Redirect to the main website
    window.location.href = "https://productivity-management.onrender.com";

    // Ensure desktop mode by modifying viewport
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
        metaViewport.setAttribute('content', 'width=1280, initial-scale=1.0');
    }

    // Trick the website into thinking it's a desktop browser
    Object.defineProperty(navigator, 'userAgent', {
        get: function () { return navigator.userAgent.replace("Android", "Windows"); }
    });
});
