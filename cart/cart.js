import { musicvibez} from '../products.js';
import { cart } from './cart-data';
import { createTableRow } from '/..utils.js';

for (let cartItem of cart) {

    const tr = createTableRow(cartItem, matchMusic);

    table.append(tr);

}