setTimeout(function() {
    const imageLogo = document.getElementById('imageLogo');
    const content = document.getElementById('content');

    imageLogo.classList.add('reveal'); 
   
    setTimeout(function() {
        content.style.display = 'block';
    }, 1000); 
}, 3000);