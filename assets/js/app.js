window.onload = function() {

alert('test');
    document.getElementById('hamburger').addEventListener('click', function(e) {
       e.preventDefault();

       alert(this);
    });
};
