import { getCart } from '../getCart.js';
import { musicvibez } from '../productsData.js';
//import { cart } from './cart-data.js';
import { createTotalRow, findById } from '../utils.js';
import { createTableRow } from '../createTable.js';

const table = document.querySelector('table');
const button = document.getElementById('submit');
const cartList = getCart();


for (let cartItem of cartList) {

    const matchingMusic = findById(musicvibez, cartItem.id);

    const tr = createTableRow(cartItem, matchingMusic);
    


    table.append(tr);



}

const totalRow = createTotalRow(cartList, musicvibez);

table.append(totalRow);

button.addEventListener('click', () => {
    //console.log(cart;)
    localStorage.clear();

    alert(JSON.stringify(cartList, null));

    window.location.href = '../index.html';
});