const headerDiv = document.createElement('div');
headerDiv.classList.add('header');

const btnHome = document.createElement('button');
btnHome.textContent = 'Home'

headerDiv.appendChild(btnHome);


const btnContact = document.createElement('button');
btnContact.textContent = 'Contact'

headerDiv.appendChild(btnContact);



export {headerDiv, btnHome, btnContact};