import picMama from './img/pig-mama.png';
import picPapa from './img/pig-papa.png';
import picRudra from './img/pig-rudra.png';

const contactDiv = document.createElement('div');
contactDiv.classList.add('contactDiv', 'menuMainDiv');

const titleDiv = document.createElement('div');
titleDiv.classList.add('titleDiv', 'cell')
titleDiv.textContent = 'Contact Us';
contactDiv.appendChild(titleDiv);

let contactDivCell = document.createElement('div');
let contactDivText = document.createElement('div');
let contactDivTitle = document.createElement('div');
let contactDivDetails = document.createElement('div');
let contactDivImage = document.createElement('img');
contactDivTitle.classList.add('contactTitle');
contactDivDetails.classList.add('contactDetails');
contactDivCell.classList.add('cell');
contactDivTitle.textContent = 'Mama Pig';
contactDivImage.src = picMama;
contactDivDetails.innerHTML = `
Chef <br> 555-555-5555 <br> totallyREalEmail@notFake.com`;
contactDivText.appendChild(contactDivTitle);
contactDivTitle.appendChild(contactDivDetails);
contactDivCell.appendChild(contactDivText);
contactDivCell.appendChild(contactDivImage);
contactDiv.appendChild(contactDivCell);

contactDivCell = document.createElement('div');
contactDivText = document.createElement('div');
contactDivTitle = document.createElement('div');
contactDivDetails = document.createElement('div');
contactDivImage = document.createElement('img');
contactDivTitle.classList.add('contactTitle');
contactDivDetails.classList.add('contactDetails');
contactDivCell.classList.add('cell');
contactDivTitle.textContent = 'Papa Pig';
contactDivImage.src = picPapa;
contactDivDetails.innerHTML = `
Manager <br> 999-999-9999 <br> totallyREalEmail@notFake.com`;
contactDivText.appendChild(contactDivTitle);
contactDivTitle.appendChild(contactDivDetails);
contactDivCell.appendChild(contactDivText);
contactDivCell.appendChild(contactDivImage);
contactDiv.appendChild(contactDivCell);

contactDivCell = document.createElement('div');
contactDivText = document.createElement('div');
contactDivTitle = document.createElement('div');
contactDivDetails = document.createElement('div');
contactDivImage = document.createElement('img');
contactDivTitle.classList.add('contactTitle');
contactDivDetails.classList.add('contactDetails');
contactDivCell.classList.add('cell');
contactDivTitle.textContent = 'Rudra Pig';
contactDivImage.src = picRudra;
contactDivDetails.innerHTML = `
Waiter <br> 000-000-0000 <br> totallyREalEmail@notFake.com`;
contactDivText.appendChild(contactDivTitle);
contactDivTitle.appendChild(contactDivDetails);
contactDivCell.appendChild(contactDivText);
contactDivCell.appendChild(contactDivImage);
contactDiv.appendChild(contactDivCell);

console.log('-----------------page-contact');
console.log({homeDiv: contactDiv});
export {contactDiv};
