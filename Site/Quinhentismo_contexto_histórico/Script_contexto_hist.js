document.addEventListener('scroll', function(){
    const titulo = document.querySelectorAll('.title')
    const parag = document.querySelectorAll('.pgfo')

    titulo.forEach(titulo => {
        const react = titulo.getBoundingClientRect();
        if(react.top < window.innerHeight && react.bottom > 0){
            titulo.classList.add('visible')
        }
    })

    parag.forEach(parag => {
        const react = parag.getBoundingClientRect();
        if(react.top < window.innerHeight -10 && react.bottom > 0){
            parag.classList.add('visible')
        }
    })
})