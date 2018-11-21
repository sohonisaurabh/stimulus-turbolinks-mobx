import { Application } from "stimulus";
import Turbolinks from "turbolinks";

Turbolinks.start()

const application = Application.start();

window.stimulusApp = application;