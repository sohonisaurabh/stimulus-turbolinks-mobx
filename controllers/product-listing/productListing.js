import { Controller } from 'stimulus';

class ProductListing extends Controller {
    connect() {
        console.log(`Product Listing Connected!!`);
    }
    disconnect() {
        console.log(`Product Listing Disconnected!!`);
    }
}

window.stimulusApp.register('productListing', ProductListing);

export default ProductListing;