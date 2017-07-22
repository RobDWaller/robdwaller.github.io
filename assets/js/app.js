window.onLoad = function() {
    document.getElementById('hamburger').addEventListener('click', function(e) {
       e.preventDefault();

       alert(this);
    });
};
