# A class should have one resaon to change which means that a class should have one responsibility.

```
// This following example is where we are not following single responsibllity principle

class Marker {
    private name: string;
    private color: string;
    private year: number;
    private price: number;

    constructor(name: string, color: string, year: number, price: number) {
        this.name = name;
        this.color = color;
        this.year = year;
        this.price = price;
    }
}

class Invoice {
    private marker: Marker;
    private quantity: number;

    constructor(marker: Marker, quantity: number) {
        this.marker = marker;
        this.quantity = quantity;
    }

    public calculateTotal(): number {
        return this.quantity * this.marker.price;
    }

    public printInvoice() {}

    public saveToDB() {}
}

/*
In this following Invoice class we have three responsibility, which are calculateTotal(), printInvoice() and saveToDB()
Now this class has three responsibilities and due to change in any of the API we have to retest the whole class again as the new change may bring bug in the existing code.
*/

```

We need to avoid writing this type of class as this way we are increasing the code complexity and making it harder to understand later.

Following code is one of the way where we are using single responsiblity principle -

```
class Invoice {
    private marker: Marker;
    private quantity: number;

    cinstructor(marker: Marker, quantity: number) {
        this.marker = marker;
        this.quantity = quantity;
    }

    public calculateTotal(): number {
        return this.quantity * this.marker.price;
    }
}

class InvoicePrinter {
    private invoice: Invoice;

    constructor(invoice: Invoice) {
        this.invoice = invoice;
    }

    public printInvoice() {
        console.log(this.invoice);
    }
}

class saveToDB() {
    private invoice: Invoice;

    constructor(invoice: Invoice) {
        this.invoice = invoice;
    }

    public savingToDB() {
        // we can perform db save operation here
    }
}

```
