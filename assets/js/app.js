window.onload = function() {
    document.getElementById('hamburger').addEventListener('click', function(e) {
       e.preventDefault();

       var menu = document.getElementById('menu');
       
       alert(menu.classList.contains('menu--on'));
       
       if (menu.classList.contains('menu--on')) {
           menu.classList.remove('menu--on');
       } else {
           menu.classList.add('menu--on');
       }
    });
};
