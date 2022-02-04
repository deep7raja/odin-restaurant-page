import './style.css';
import {homeDiv} from './page-home.js';
import {contactDiv} from './page-contact.js'
import {headerDiv} from './page-header.js';

const body = document.querySelector('body');
const contentDiv = document.querySelector('#content');

body.insertBefore(headerDiv, contentDiv)
contentDiv.appendChild(homeDiv);
contentDiv.appendChild(contactDiv);
console.log('-----------index.js');
console.log({contentDiv});
