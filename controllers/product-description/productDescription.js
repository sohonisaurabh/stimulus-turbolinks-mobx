import { Controller } from 'stimulus';

class ProductDescription extends Controller {
    connect() {
        console.log(`Product Description Controller Connected!`);
    }
    disconnect() {
        console.log(`Product Desctiption Controller Disconnected!!`);
    }
    addToCart() {
        console.log(`Clicked on add to cart!`);
    }
}

window.stimulusApp.register('productDescription', ProductDescription);

export default ProductDescription;