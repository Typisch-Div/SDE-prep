#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int x) {
        int n=nums.size();
        int lb = lower_bound(nums.begin(),nums.end(),x)-nums.begin();
        int ub = lower_bound(nums.begin(),nums.end(),x+1)-nums.begin()-1;
        if(lb<n && nums[lb]==x)    return{lb,ub};
        else    return{-1,-1};
    }
};