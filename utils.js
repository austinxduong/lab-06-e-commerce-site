export function createMusicVibezli(musicvibez) {
    const li = document.createElement('li');

    li. classList.add('musicvibez');
    li. style.background = musicvibez.color;

    const pName = document.createElement('p');

    pName.classList.add('name');
    pName.textContent = musicvibez.name;

    const pGenre = document.createElement('p');

    pGenre.classList.add('Genre');
    pGenre.textContent = musicvibez.genre;

    const pAutograph = document.createElement('p');

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


    li.append(pName, pGenre, pAutograph, image, pPrice, button);

    return li;
    

}