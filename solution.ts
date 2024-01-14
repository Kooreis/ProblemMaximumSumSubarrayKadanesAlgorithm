Here is a TypeScript console application that solves the problem using Kadane's algorithm:

```typescript
class MaxSubArray {
    private array: number[];

    constructor(array: number[]) {
        this.array = array;
    }

    findMaxSubArray(): number {
        let maxSoFar = 0;
        let maxEndingHere = 0;

        for (let i = 0; i < this.array.length; i++) {
            maxEndingHere = maxEndingHere + this.array[i];
            if (maxEndingHere < 0) {
                maxEndingHere = 0;
            }
            if (maxSoFar < maxEndingHere) {
                maxSoFar = maxEndingHere;
            }
        }

        return maxSoFar;
    }
}

let array = [-2, -3, 4, -1, -2, 1, 5, -3];
let maxSubArray = new MaxSubArray(array);
console.log(maxSubArray.findMaxSubArray());
```

This application defines a class `MaxSubArray` that takes an array of numbers as input and has a method `findMaxSubArray` that implements Kadane's algorithm to find the maximum sum of a subarray. The application then creates an instance of `MaxSubArray` with a specific array, and logs the result of `findMaxSubArray` to the console.