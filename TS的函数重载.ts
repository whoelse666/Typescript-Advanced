interface ShowMessage {
  (message: object): void;
  (text: string, onClose?: Function): void;
  (text: string, mode: string, duration?: number): void;
  (text: string, duration?: number, onClose?: Function): void;
}

interface Utils {
  showMessage: ShowMessage;
}

const utils: Utils = {
  showMessage: (param1: string | object, param2?: string | number | Function, param3?: Function | number) => {}
};
utils.showMessage("");

utils.showMessage({
  mode: "mode",
  text: "text",
  onclose: function () {},
  duration: 3000
});
utils.showMessage("text");
utils.showMessage("text", function () {});
utils.showMessage("text", "mode");
utils.showMessage("text", "mode", 3000);
utils.showMessage('text',3000);
utils.showMessage('text', 3000, function(){})
/* function message(options: object): void
function message(text: string, onClose?: Function): void
function message(text: string, mode: string, duration?: number): void
function message(text: string, duration?: number, onClose?: Function): void
 */

function message(param1: string | object, param2?: string | number | Function, param3?: Function | number): void {
  console.log("param1", param1);
}

message("hello");
