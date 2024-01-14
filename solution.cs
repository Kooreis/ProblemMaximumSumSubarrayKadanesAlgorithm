Here is a JavaScript solution using Kadane's algorithm:

```javascript
function maxSubArraySum(a, size)
{
    let max_so_far = a[0];
    let curr_max = a[0];
 
    for (let i = 1; i < size; i++)
    {
        curr_max = Math.max(a[i], curr_max+a[i]);
        max_so_far = Math.max(max_so_far, curr_max);
    }
    return max_so_far;
}
 
let a = [-2, -3, 4, -1, -2, 1, 5, -3];
let n = a.length;
let max_sum = maxSubArraySum(a, n);
console.log("Maximum contiguous sum is ", max_sum);
```

This console application will find the subarray with the maximum sum in the given array using Kadane's algorithm. The array is hardcoded in the application, but you can replace it with any array you want. The application will print the maximum contiguous sum in the console.