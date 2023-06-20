// Open for extension but closed for modification

class saveToDB {
  private invoice: Invoice;

  constructor(invoice: Invoice) {
    this.invoice = invoice;
  }

  public savingToDB() {
    // save to DB
  }
}

// The above code is already tested and live but there is new requirement to saveToFile() came.

class saveToDB2 {
  private invoice: Invoice;

  constructor(invoice: Invoice) {
    this.invoice = invoice;
  }

  public savingToDB() {
    // save to DB
  }

  //  this is a bad way of adding new requirement in an existing class
  public savingToFile() {
    // save to file
  }
}

// If we write the new requirement in the same class it might bring new bug

// Following is one of the way how we can write code for the above requirement -

interface InvoiceSave {
  save(invoice: Invoice): void;
}

class DatabaseSave implements InvoiceSave {
  // @Override
  public save(invoice: Invoice) {
    // save to DB
    return;
  }
}

class FileSave implements InvoiceSave {
  // @override
  public save(invoice: Invoice) {
    // save to file
  }
}
