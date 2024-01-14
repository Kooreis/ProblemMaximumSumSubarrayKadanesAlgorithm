```cpp
#include <iostream>
#include <vector>
#include <climits>

int maxSubArraySum(const std::vector<int>& arr) {
    int max_so_far = INT_MIN, max_ending_here = 0;
    for (int i = 0; i < arr.size(); i++) {
        max_ending_here = max_ending_here + arr[i];
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;
        if (max_ending_here < 0)
            max_ending_here = 0;
    }
    return max_so_far;
}

int main() {
    std::vector<int> arr = {-2, -3, 4, -1, -2, 1, 5, -3};
    int max_sum = maxSubArraySum(arr);
    std::cout << "Maximum contiguous sum is " << max_sum;
    return 0;
}
```