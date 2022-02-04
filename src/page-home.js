const homeDiv = document.createElement('div');
homeDiv.classList.add('homeDiv', 'menuMainDiv');

const titleDiv = document.createElement('div');
titleDiv.classList.add('titleDiv', 'cell')
titleDiv.textContent = 'Mighty Mushroom Mall';
homeDiv.appendChild(titleDiv);

const homeDiv1 = document.createElement('div');
homeDiv1.classList.add('cell');
homeDiv1.textContent = 'Mighty Mushroom Mall is the best place for all your mushroom need. We have all the varieties and kinds of mushroom that you will ever need so just ask away. Eat once and get addicted like never before and in good way. You will have the time of your life, its a once in a lifetime experience so better not miss it. See you in Mighty Mushroom Mall!'
homeDiv.appendChild(homeDiv1);

const homeDiv2 = document.createElement('div');
homeDiv2.classList.add('cell', 'homeDiv2');
homeDiv2.innerHTML = '<h2> Hours </h2> Sunday: 8am - 8pm <br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm'
homeDiv.appendChild(homeDiv2);

const homeDiv3 = document.createElement('div');
homeDiv3.classList.add('cell', 'homeDiv3');
homeDiv3.innerHTML = '<h2> Location </h2> Mycelium Plaza, Spore Kingdom, Central Fungi, 223366';
homeDiv.appendChild(homeDiv3);

console.log('-----------------page-home');
console.log({homeDiv});
export {homeDiv};
