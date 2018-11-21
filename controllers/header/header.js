import { Controller } from 'stimulus';
import { observable, computed, autorun } from "mobx";

class Header extends Controller {
    static targets = ["cartCount"];
    @observable cartCount;
    
    initialize() {
        this.cartCount = this.data.get("cartCount");
        console.log(`Initial cart count is ${this.data.get("cartCount")}`);
        autorun(() => console.log(this.updateCartCount));
    }
    connect() {
        //this.cartCountTarget.textContent = cartCount;
        setTimeout(() => {
            this.changeCartCount(50);
        }, 3000)
        console.log(`Header Controller Connected!`);
    }
    disconnect() {
        console.log(`Header Controller Disconnected!!`);
    }
    changeCartCount(newCount) {
        this.cartCount = newCount;
    }
    setCountOnView(newCount) {
        this.cartCountTarget.textContent = newCount;
    }
    @computed get updateCartCount() { 
        this.setCountOnView(this.cartCount);
        return this.cartCount;
    }    
}

window.stimulusApp.register('header', Header);

export default Header;