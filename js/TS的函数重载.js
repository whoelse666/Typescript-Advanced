"use strict";
const utils = {
    showMessage: (param1, param2, param3) => {
    }
};
utils.showMessage("");
/* function message(options: object): void
function message(text: string, onClose?: Function): void
function message(text: string, mode: string, duration?: number): void
function message(text: string, duration?: number, onClose?: Function): void
 */
function message(param1, param2, param3) {
    console.log('param1', param1);
}
message('hello');
