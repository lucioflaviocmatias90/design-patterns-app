// Component
abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== "string") return false;
    return /@/.test(value);
  }
}

class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value !== "string";
  }
}

class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value !== "number";
  }
}

// Composite
class ValidationComposite extends ValidationComponent {
  private children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

// Client Code
const validateNumber = new ValidateNumber();
const validateEmail = new ValidateEmail();
const validateString = new ValidateString();

const validateComposite = new ValidationComposite();
validateComposite.add(validateEmail, validateNumber, validateString);

console.log(validateComposite.validate("lucio@email.com"));
