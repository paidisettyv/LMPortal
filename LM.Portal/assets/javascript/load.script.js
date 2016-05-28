function loadExtScript(src, callback) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = callback;

    document.body.appendChild(s);
} 