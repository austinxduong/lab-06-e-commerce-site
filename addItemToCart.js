import { getCart } from './get-cart.js';
import { findById } from './utils.js';


export function setCart(receivedCart) {
    const storedCart = JSON.stringify(receivedCart);

    localStorage.setItem('CART', storedCart);
}



export function addItemToCart(itemID) {

    const cart = getCart();
    const itemMatch = findById(cart, itemID);
    if (itemMatch) {
        itemMatch.quantity++;       
    } else {
        const newItem = {
            id: itemID, quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
}
