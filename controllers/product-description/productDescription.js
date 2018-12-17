import { Controller } from 'stimulus';
import inventory from "./../../data/inventory.js";

class ProductDescription extends Controller {
    connect() {
        
    }
    addToCart() {
        let productId = 1;
        window.appCartStore.addToCart(inventory.products.filter((product) => {
            return product.id === productId;
        })[0]);
    }
}

window.stimulusApp.register('productDescription', ProductDescription);

export default ProductDescription;