#include <bits/stdc++.h>
using namespace std;

class Solution {
public:

    /* Function to find the next greater 
    element for each element in the array */
    vector<int> nextGreaterElements(vector<int> arr) {
        
        int n = arr.size(); //size of array
        
        // To store the next greater elements
        vector<int> ans(n);
        
        // Stack to get elements in LIF fashion
        stack<int> st;
        
        // Start traversing from the back
        for(int i = 2*n-1; i >= 0; i--) {
            
            // Get the actual index
            int ind = i % n;
            
            // Get the current element
            int currEle = arr[ind];
            
            /* Pop the elements in the stack until 
            the stack is not empty and the top 
            element is not the greater element */
            while(!st.empty() && st.top() <= currEle) {
                st.pop();
            }
            
            // Store the answer for the second half
            if(i < n) {
                
                /* If the greater element is not 
                found, stack will be empty */
                if(st.empty()) 
                    ans[i] = -1;
                    
                // Else store the answer
                else 
                    ans[i] = st.top();
            }
            
            /* Push the current element in the stack 
            maintaining the decreasing order */
            st.push(currEle);
        }
        
        // Return the result
        return ans;
    }
};

int main() {
    int n = 6;
    vector<int> arr = {5, 7, 1, 7, 6, 0};
    
    /* Creating an instance of 
    Solution class */
    Solution sol; 
    
    /* Function call to find the next greater 
    element for each element in the array */
    vector<int> ans = sol.nextGreaterElements(arr);
    
    cout << "The next greater elements are: ";
    for(int i=0; i < n; i++) {
        cout << ans[i] << " ";
    }
    
    return 0;
}