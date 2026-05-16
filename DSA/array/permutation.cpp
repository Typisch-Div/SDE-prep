#include<bits/stdc++.h>
using namespace std;

// Function to print the array
void printArray(vector<int>& arr, int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Recursive function to generate permutations
void permute(vector<int>& arr, int start, int n) {
    if (start == n) {
        // Base case: print the current permutation
        printArray(arr, n);
        return;
    }
    
    for (int i = start; i < n; i++) {
        // Swap to fix the current element
        swap(arr[i], arr[start]);
        
        // Recurse for the next position
        permute(arr, start + 1, n);
        
        // Backtrack: swap back
        swap(arr[i], arr[start]);
    }
}

int main() {
    int n;
    cout << "Enter the size of array: ";
    cin >> n;
    
    vector<int> arr;
    cout << "Enter the elements: ";
    for(int i = 0; i < n; i++) {  // Fixed: changed n-1 to n
        int x;
        cin >> x;
        arr.push_back(x);
    }
    
    permute(arr, 0, n);
    
    return 0;
}