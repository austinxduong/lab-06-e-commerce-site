import { musicvibez } from '../productsData.js';
import { cart } from './cart-data';
import { createTableRow, createTotalRow, findById } from '/..utils.js';

const table = document.querySelector('table');

for (let cartItem of cart) {

    const matchingMusic = findById(musicvibez, cartItem.id);

    const tr = createTableRow(cartItem, matchingMusic);

    table.append(tr);

}

const totalRow = createTotalRow(cart, musicvibez);

table.append(totalRow);