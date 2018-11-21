import { Controller } from 'stimulus';

class ProductDescription extends Controller {
    connect() {
        console.log(`Connected!`);
    }
    disconnect() {
        console.log(`Disconnected!!`);
    }
}

window.stimulusApp.register('productDescription', ProductDescription);

export default ProductDescription;