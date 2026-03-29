## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative - Languages were the program the programmer writes, is a sequence of commands representing the actions the computer does. 
   1. [5 points] Object Oriented - The state of the programm is arrange via objects that have internal state and functions that can operate on the state.
   1. [5 points] Functional - The program is an expression, running the program is evaluating the expression. Method are also expressions. The program avoid permutating the state. All the functions does not have side effect.
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm? - imperative code tends to be more messy and complex in large code bases. OOP help that by using encapsulation, modularity and abstraction.
1. [5 points] How does the functional paradigm improve over the object oriented paradigm? - in the functional programing paradigm, since functions don't rely on or change anything outside of themselves, they are incredibly easy to test in isolation. In OOP every object hase a state that changes over time. If a bug occurs, its harder to test the specific scenario.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

Answer:
```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
}

const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => 
  inventory
    .filter(({ discounted }) => discounted)
    .map(({ price }) => price)
    .reduce((acc, price, _, array) => 
      acc + (price / array.length), 0
    );
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
2. [3 points] `x => x.map(y => y * 2)`
3. [3 points] `(x, y) => x.filter(y)`
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
5. [3 points] `(x, y) => x ? y[0] : y[1]`
6. [3 points] `(f,g) => x => f(g(x+1))`
