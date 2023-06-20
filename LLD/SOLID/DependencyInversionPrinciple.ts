/**
 * D - Dependency Inversion Principle
 *
 * Class should depent on interface rather than concrete class
 */

class WiredMouse {}
class WiredKeyboard {}

/**
 * In this following MacBook class we are calling directly wired classes
 * So in feture if we want to update mac then its a huge change and leads to bug
 *
 */

class MacBook {
  private mouse: WiredMouse;
  private keyboard: WiredKeyboard;

  constructor(mouse, keyboard) {
    this.mouse = new WiredMouse();
    this.keyboard = new WiredKeyboard();
  }
}

/**
 * We can have mouse and keyboard interface which will have wired as well as bluetooth option
 */

interface Keyboard {
  wiredKeyboard: string;
  bluetoothKeyboard: string;
}

interface Mouse {
  wiredMouse: string;
  bluetoothKeyboard: string;
}

class MacBook2 {
  private mouse: Mouse;
  private keyboard: Keyboard;

  constructor(mouse: Mouse, keyboard: Keyboard) {
    this.mouse = mouse;
    this.keyboard = keyboard;
  }
}

// Ths above implementation is very generic and not tied to any specific class.
