const wrapper = document.querySelector('.wrapper');
const loginLnik = document.querySelector('.login-link');
const registerLnik = document.querySelector('.register-link');
// const btnpopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');

registerLnik.addEventListener('click', ()=> {
    wrapper.classList.add('activer');
    wrapper.classList.remove('activel');
});

loginLnik.addEventListener('click', ()=> {
    wrapper.classList.remove('activer');
    wrapper.classList.add('activel');
    // wrapper.classList.add('otp');
});

// btnpopup.addEventListener('click', ()=> {
//     wrapper.classList.add('active-popup');
// });

// iconClose.addEventListener('click', ()=> {
//     wrapper.classList.remove('active-popup');
// });