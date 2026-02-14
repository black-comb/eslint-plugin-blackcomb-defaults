// eslint-disable-next-line @typescript-eslint/array-type
const arrayType: Array<number> = [1, 2, 3];

/**
 * @deprecated Use greetNew instead.
 */
function greetDeprecated(name: string): void {
  // Some code...
}

// eslint-disable-next-line @typescript-eslint/no-deprecated
greetDeprecated('Alice');
