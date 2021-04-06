//import { musicvibez } from './productsData.js';
//console.log(musicvibez);

export function createTableRow(cartItem, musicvibez) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');
//create submit button
//add advent listner to submit button



//

    tdName.textContent = musicvibez.name;
    tdQuantity.textContent = cartItem.quantity;
    const total = musicvibez.price * cartItem.quantity;

    const config = {
        currency: 'USD',
        style: 'currency'
    };

    const totalAsUSD = total.toLocaleString('en-US', config);

    tdPrice.textContent = totalAsUSD;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;

}