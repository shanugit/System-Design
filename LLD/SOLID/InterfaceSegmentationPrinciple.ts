/**
 * Interface Segmentation Principle
 *
 * Interface should be such that client should not implement unnecessary functions they do not need
 */

interface RestorantEmployee {
  serveFood(): void;
  washDishes(): void;
  serveCustomers(): void;
}
/**
 * We can see form the below example that if waiter implements the RestorantEmployee interface,
 * then it has to implement the washDishes() function which is not the duty of a waiter.
 */
class Waiter implements RestorantEmployee {
  public serveFood() {
    // waiter is responsible for this job only
  }

  public washDishes() {
    // waiter is not responsible for this job
  }

  public serveCustomers() {
    // This is responsibility of waiter
  }
}

/**
 * Ideally we should break the interface to segments and keep only related operation in one interface
 */

interface WaiterInterface {
  serveFood(): void;
  takeOrder(): void;
}

class Waiter2 implements WaiterInterface {
  public serveFood() {}
  public takeOrder() {}
}

interface ChefInterface {
  cookFood(): void;
  decideMenu(): void;
}

class Chef implements ChefInterface {
  public cookFood() {}
  public decideMenu() {}
}
