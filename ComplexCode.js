/*
   Filename: ComplexCode.js
   Content: Example of complex and elaborate JavaScript code
*/

// Define a class called ComplexNumber
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Getter method to get the magnitude of the complex number
  get magnitude() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  // Method to add two complex numbers
  add(other) {
    const real = this.real + other.real;
    const imaginary = this.imaginary + other.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  // Method to subtract two complex numbers
  subtract(other) {
    const real = this.real - other.real;
    const imaginary = this.imaginary - other.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  // Method to multiply two complex numbers
  multiply(other) {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(real, imaginary);
  }
}

// Create some instances of ComplexNumber and perform operations
const complex1 = new ComplexNumber(3, 4);
const complex2 = new ComplexNumber(1, 2);
const complex3 = complex1.add(complex2);
const complex4 = complex1.multiply(complex2);

console.log("Complex 1: ", complex1);        // Output: Complex 1:  ComplexNumber { real: 3, imaginary: 4 }
console.log("Complex 2: ", complex2);        // Output: Complex 2:  ComplexNumber { real: 1, imaginary: 2 }
console.log("Complex 3 (Addition): ", complex3); // Output: Complex 3 (Addition):  ComplexNumber { real: 4, imaginary: 6 }
console.log("Complex 4 (Multiplication): ", complex4); // Output: Complex 4 (Multiplication):  ComplexNumber { real: -5, imaginary: 10 }

// Calculate and print the magnitude of complex4
console.log("Magnitude of Complex 4: ", complex4.magnitude); // Output: Magnitude of Complex 4:  11.180339887498949