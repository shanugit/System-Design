# L - Liskov substitutional Principle

# If class B is a sub class of class A then we should be able to replace object of A with B without breaking the behavior of the program

If we implement any interface then we should not deprecate any behaviour of that interface. We can add new capabilities.

```
interface Bike {
    turnOnEngine(): void;
    accelerate(): void;
}

# In this example we can implements the interface as we are not deprecating any of the parent objects capabilities.

class Motorcycle implements Bike {
    private isEngineOn: boolean;
    private speed = 0;

    public turnOnEngine() {
        this.isEngineOn = true;
    }

    public accelerate() {
        this.speed += 10;
    }
}

# This class is deprecating the Bike interfaces turnOnEngine() as cycle do not have engine.
# We should not be implementing interface like Bike for class like Bicycle as its reducing the parent objects capabilities.

class BiCycle implements Bike {
    private isEngineOn: boolean;
    private speed = 0;

    public turnEngineOn() {
        throw new Error(`Cycle do not have engine!!`);
    }

    public accelerate() {
        this.speed += 5;
    }
}

```
