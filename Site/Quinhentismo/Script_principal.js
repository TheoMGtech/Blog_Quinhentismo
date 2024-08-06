document.addEventListener('scroll', function(){
    const titulo = document.querySelectorAll('.title')
    const parg = document.querySelectorAll('.transicao')

    titulo.forEach(titulo => {
        const react = titulo.getBoundingClientRect();
        if(react.top < window.innerHeight - 5 && react.bottom > 0){
            titulo.classList.add('visible');
        }
    })

    parg.forEach(parg => {
        const react = parg.getBoundingClientRect();
        if(react.top < window.innerHeight - 5 && react.bottom > 0){
            parg.classList.add('visible');
        }
    })
})