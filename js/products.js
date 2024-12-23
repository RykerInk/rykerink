export function getProduct(productId) {
    let matchingProduct;
    
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    return matchingProduct; 
}

export const products = [
{
    id: '1',
    image: 'images/1.jpeg',
},
{
    id: '2',
    image: 'images/2.jpeg',
},
{
    id: '3',
    image: 'images/3.jpeg',
},
{
    id: '4',
    image: 'images/4.jpeg',
},
{
    id: '5',
    image: 'images/5.jpeg',
},
{
    id: '6',
    image: 'images/6.jpeg',
},
{
    id: '7',
    image: 'images/7.jpeg',
},
{
    id: '8',
    image: 'images/8.jpeg',
},
{
    id: '9',
    image: 'images/9.jpeg',
},
{
    id: '10',
    image: 'images/10.jpeg',
},
{
    id: '11',
    image: 'images/11.jpeg',
},
{
    id: '12',
    image: 'images/12.jpeg',
},
{
    id: '13',
    image: 'images/13.jpeg',
},
{
    id: '14',
    image: 'images/14.jpeg',
},
{
    id: '15',
    image: 'images/15.jpeg',
},
{
    id: '16',
    image: 'images/16.jpeg',
},
];
