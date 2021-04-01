// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById } from '../utils.js'

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = { 

        id: 1,
        name: 'Dua Lipa',
        genre: 'Pop',
        hasAutograph: 'true',
        color: '#E3BC9A',
        image: '../assets/Dua.png',
        price: 7
    };
    const productData = [
        {
            id: 1,
            name: 'Dua Lipa',
            genre: 'Pop',
            hasAutograph: 'true',
            color: '#E3BC9A',
            image: '../assets/Dua.png',
            price: 7
        },
        {   
            id: 2,
            name: 'Brockhampton',
            genre: 'Hip-hop',
            hasAutograph: 'true',
            color: '#E3BC9A',
            image: '../assets/brockhampton.jpeg',
            price: 6
        },
        {
            id: 3,
            name: 'Kings of Leon',
            genre: 'Rock',
            hasAutograph: 'true',
            color: '#E3BC9A',
            image: '../assets/kingsofleon.jpeg',
            price: 5
        },
        {
            id: 4,
            name: 'Thomas Rhett',
            genre: 'Country',
            hasAutograph: 'true',
            color: '#E3BC9A',
            image: '../assets/thomas.jpeg',
            price: 4

        },


]
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(productData, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
