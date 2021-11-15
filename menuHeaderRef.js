

const headerNav = document.querySelector('#headerNav')

// const like = document.querySelector('#like');
// const lk = document.querySelector('#lk');
// const set = document.querySelector('#set');


const objectRef = `                            
    <li><a class="menu__item" href="#">ПOНРАВИЛOСЬ</a></li>
    <li><a class="menu__item" href="#">ЛИЧНЫЙ КАБИНЕТ</a></li>
    <li><a class="menu__item" href="#">НАСТРOЙКИ</a></li>
    `


if (window.screen.width < 1121) {
    console.log(window.screen.width);
    const box_m = document.querySelector('#insertInBox')
        .insertAdjacentHTML('afterend', objectRef);
};


   
