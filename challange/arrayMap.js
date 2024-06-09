function hasContiguousSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        if (currentSum === target) {
            return true;
        }
    }
    
    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(hasContiguousSubarrayWithSum(arr, target));  // Output: true
