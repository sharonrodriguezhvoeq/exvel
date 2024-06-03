class ParentClass {
  constructor(protected value: number) {}

  public getValue(): number {
    return this.value;
  }
}

class SubClass extends ParentClass {
  constructor(value: number, private extraValue: number) {
    super(value);
  }

  public getExtraValue(): number {
    return this.extraValue;
  }

  public getTotalValue(): number {
    return this.getValue() + this.getExtraValue();
  }
}

// Usage
const instance = new SubClass(10, 5);
console.log(instance.getTotalValue()); // Outputs: 15
