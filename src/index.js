import './style.css';
import {homeDiv} from './page-home.js';

const contentDiv = document.querySelector('#content');


contentDiv.appendChild(homeDiv);
console.log('-----------index.js');
console.log({contentDiv});
