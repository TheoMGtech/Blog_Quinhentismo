document.addEventListener('scroll', function(){
    const autor = document.querySelectorAll('.autor');
    const obras = document.querySelectorAll('.obras');

    autor.forEach(autor => {
        const react = autor.getBoundingClientRect();
        if(react.top < window.innerHeight -10 && react.bottom > 0){
            autor.classList.add('visible');
        }
        else{
            autor.classList.remove('visible');
        }
    })

    obras.forEach(obras => {
        const react = obras.getBoundingClientRect();
        if(react.top < window.innerHeight -10 && react.bottom > 0){
            obras.classList.add('visible');
        }
        else{
            obras.classList.remove('visible')
        }
    })

})