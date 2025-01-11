const wrapper = document.querySelector('.wrapper');
const loginLnik = document.querySelector('.login-link');
const registerLnik = document.querySelector('.register-link');
// const btnpopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');

registerLnik.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLnik.addEventListener('click', ()=> {
    console.log('login');
    wrapper.classList.remove('active');
});

// btnpopup.addEventListener('click', ()=> {
//     wrapper.classList.add('active-popup');
// });

// iconClose.addEventListener('click', ()=> {
//     wrapper.classList.remove('active-popup');
// });