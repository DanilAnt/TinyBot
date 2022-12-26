


document.addEventListener('DOMContentLoaded', () => {
    try {

        ScrollReveal().reveal('[robot_view_left_scroll]', {
            reset: true, distance: '100%',
            origin: 'left', viewOffset: {
                top: -400,
                right: 0,
                bottom: -400,
                left: 0,
            },
            
        })

        ScrollReveal().reveal('[robot_view_right_scroll]', {
            reset: true, distance: '100%',
            origin: 'right', viewOffset: {
                top: -400,
                right: 0,
                bottom: -400,
                left: 0,
            },
        })        
      


    } catch (e) {
        console.log(e);

    }

})