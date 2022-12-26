


document.addEventListener('DOMContentLoaded', () => {
    try {

        ScrollReveal().reveal('[initial_card_scroll]', {
            reset: true, distance: '100%',
            origin: 'right', viewOffset: {
                top: -100,
                right: 0,
                bottom: -150,
                left: 0,
            },
        })

      


    } catch (e) {
        console.log(e);

    }

})