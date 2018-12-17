import { observable, action } from "mobx";

class CartStore {
    @observable.shallow productsList;
    @observable cartLength;

    constructor () {
        this.productsList = [];
        this.cartLength = 0;
    }
    @action 
    addToCart(product) {
        this.productsList.push(product);
        this.cartLength += 1;
    }
}

//const cartStoreInstance = new CartStore();

window.appCartStore = new CartStore();

//export default cartStoreInstance;