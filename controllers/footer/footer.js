import { Controller } from "stimulus";
import { observe, reaction} from "mobx";

class Footer extends Controller {
    static targets = ["banner"];
    connect() {
        // let cartStore = window.appCartStore;
        observe(window.appCartStore, "productsList", ({newValue}) => {
            this.toggleBanner();
            let timeoutId = setTimeout(() => {
                this.toggleBanner();
                clearTimeout(timeoutId);
            }, 3000);
        });
        
    }
    toggleBanner() {
        this.bannerTarget.classList.toggle("hidden");
    }
}

window.stimulusApp.register('footer', Footer);