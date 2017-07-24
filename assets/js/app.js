window.onload = function() {
    document.getElementById('hamburger').addEventListener('click', function(e) {
       e.preventDefault();

       alert(this);
    });
};
