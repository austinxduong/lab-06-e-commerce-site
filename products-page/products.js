import { musicvibez } from '../productsData.js';
import { createMusicVibezli } from '../utils.js';



const ul = document.querySelector('.vibez-list');

for (let vibez of musicvibez) {

    const li = createMusicVibezli(vibez);
    ul.append(li);
}