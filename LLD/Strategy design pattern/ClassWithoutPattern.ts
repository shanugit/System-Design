class Vehicle3 {
  public drive() {
    console.log(`Normal Driving option`);
  }
}

class PublicCar3 extends Vehicle3 {}

class SportCar extends Vehicle3 {
  public drive() {
    console.log(`Added super fast driving capability`);
  }
}

class PersonalCar extends Vehicle3 {
  public drive() {
    console.log(`Added super fast driving capability`);
  }
}

/**
 * In this following example we have Vehicle parent class which has three sub class.
 * All the sub class needs drive functionality but two of the car want more than drive capability.
 * For that reason we have override the drive functionality in those sub class.
 *
 * If we ovserve properly then we can see that both SportCar and PersonalCar has added fast driving capability
 * This is redundant code in both the class.
 */
