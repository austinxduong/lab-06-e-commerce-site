import { musicvibez } from './productsData.js';
import { addItemToCart } from './addItemToCart.js';
import { cart } from './cart-page/cart-data.js';


export function findById(someArray, someId) {
    for (let item of someArray) {
        if (item.id === someId) {
            return item;
        }
    }
}

export function calcItemTotal(price, quantity) {
    return price * quantity;

}

export function calcOrderTotal(cart) {
    let counter = 0;

    for (let item of cart) {
        const itemPrice = findById(musicvibez, item.id).price;
        const musicTotal = calcItemTotal(itemPrice, item.quantity);
        counter += musicTotal;
    }
    return counter;
}


export function createMusicVibezli(musicvibez) {
    const li = document.createElement('li');

    li. classList.add('musicvibez');
    li. style.background = musicvibez.color;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = musicvibez.name;

    const pGenre = document.createElement('p');
    pGenre.classList.add('genre');

    pGenre.classList.add('Genre');
    pGenre.textContent = musicvibez.genre;

    const pAutograph = document.createElement('p');
    pAutograph.classList.add('autograph');

    pAutograph.textContent = musicvibez.hasAutograph ? 'Autographed Album' : 'This is the final form';

    const image = document.createElement('img');
    image.classList.add('image');

    image.src = musicvibez.image;

    const pPrice = document.createElement('p');

    pPrice.textContent = musicvibez.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const button = document.createElement('button');

    button.textContent = 'Secure the bag';
    button.value = musicvibez.id;
    button.addEventListener('click', () => {
        addItemToCart(musicvibez.id);


    });

    li.append(pName, pGenre, pAutograph, image, pPrice, button);

    return li;
    

}

// export function createTableRow(cartItem, musicvibez) {
//     const tr = document.createElement('tr');
//     const tdName = document.createElement('td');
//     const tdQuantity = document.createElement('td');
//     const tdPrice = document.createElement('td');
// //create submit button
// //add advent listner to submit button

// console.log(musicvibez);



//     tdName.textContent = musicvibez.name;
//     tdQuantity.textContent = cartItem.quantity;
//     const total = musicvibez.price * cartItem.quantity;

//     const config = {
//         currency: 'USD',
//         style: 'currency'
//     };

//     const totalAsUSD = total.toLocaleString('en-US', config);

//     tdPrice.textContent = totalAsUSD;

//     tr.append(tdName, tdQuantity, tdPrice);

//     return tr;

// }

export function createTotalRow(cartArray, musicArray) {
    let sum = 0;

    for (let cartItem of cartArray) {

        const matchingMusic = findById(musicArray, cartItem.id);
        
        const lineItem = matchingMusic.price * cartItem.quantity;

        sum = sum + lineItem;

        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td3.textContent = `$${sum}.00`;

        tr.append(td1, td2, td3);
        
        return tr;

    }




}