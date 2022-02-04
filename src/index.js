import './style.css';
import {homeDiv} from './page-home.js';
import {contactDiv} from './page-contact.js'
import {headerDiv, btnHome, btnContact} from './page-header.js';

const body = document.querySelector('body');
const contentDiv = document.querySelector('#content');

body.insertBefore(headerDiv, contentDiv)
contactDiv.style.display = 'none';
contentDiv.appendChild(homeDiv);
contentDiv.appendChild(contactDiv);

btnHome.onclick=()=>{
    homeDiv.style.display = 'flex';
    btnHome.classList.add('btnActive');
    contactDiv.style.display = 'none';
    btnContact.classList.remove('btnActive');
}
btnContact.onclick=()=>{
    homeDiv.style.display = 'none';
    btnHome.classList.remove('btnActive');
    contactDiv.style.display = 'flex';
    btnContact.classList.add('btnActive');
}

console.log('-----------index.js');
console.log({contentDiv});
