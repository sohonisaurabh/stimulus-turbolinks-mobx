import { Controller } from 'stimulus';
import { reaction, observe } from "mobx";

class Header extends Controller {
    static targets = ["cartCount"];
    connect() {
        this.cartCountTarget.textContent = 0;
        // let cartStore = window.appCartStore;
        // reaction(() => window.appCartStore.cartLength, (cartLength) => {
        //     this.cartCountTarget.textContent = cartLength;
        // });
        observe(window.appCartStore, "productsList", ({newValue}) => {
            this.cartCountTarget.textContent = cartLength;
        });
        
    }
}

window.stimulusApp.register('header', Header);

export default Header;