// Assuming ValueOrGradient is another defined type or interface
type ValueOrGradient = any; // Replace 'any' with your actual type if defined elsewhere

// Define the VgValueRef type/interface
interface VgValueRef<V extends ValueOrGradient> {
    value?: V; // value property of type V or undefined
    // Add more properties as needed
}

// Example usage:
const example: VgValueRef<number> = { value: 10 };
console.log(example); // Output: { value: 10 }

const example2: VgValueRef<string> = { value: 'Hello' };
console.log(example2); // Output: { value: 'Hello' }

const example3: VgValueRef<boolean> = { }; // value is optional
console.log(example3); // Output: { }
