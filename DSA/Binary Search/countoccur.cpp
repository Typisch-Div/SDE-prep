#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    int countOccurrences(vector<int>& nums, int x) {
        // Your code goes here
        int n=nums.size();
        int lb = lower_bound(nums.begin(),nums.end(),x)-nums.begin();
        int ub = lower_bound(nums.begin(),nums.end(),x+1)-nums.begin()-1;
        if(lb<n && nums[lb]==x)    return ub-lb+1;
        else    return -1;
    }
};