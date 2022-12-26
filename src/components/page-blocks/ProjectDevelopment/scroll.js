


document.addEventListener('DOMContentLoaded', () => {
    try {

        ScrollReveal().reveal('[proj_dev_stage_scroll]', {
            reset: false, distance: '100%',
            origin: 'bottom', viewOffset: {
                top: -100,
                right: 0,
                bottom:  -200,
                left:0,
            },
        })

     
      


    } catch (e) {
        console.log(e);

    }

})