import App from "./../../app";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const context = require.context("./", true, /\controller.js$/);
App.load(definitionsFromContext(context));
console.log("Code executed from Product Description Page!");