export class App {
  message = "Hi";
  msg = 'error';

  constructor() {
    this.message = "Hello World";
  }

  changeMSG() {
    this.msg = prompt("Hi, Please type in a message below :).");
  }
}
