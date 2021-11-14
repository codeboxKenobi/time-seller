const menuButton = document.querySelector('#menu-button')
    .addEventListener('click', () => {
        const menuCheckType = document.querySelector(':checked')
        if (menuCheckType !== null) {
            document.body.style.overflow="hidden"
        } else {
            document.body.style.overflow="visible"
        }
    })





    