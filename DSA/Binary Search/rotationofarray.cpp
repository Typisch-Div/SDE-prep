#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    int findKRotation(vector<int> &nums)  {
        int left = 0;
        int right = nums.size() - 1;
        int ans=INT_MAX;
        int idx=-1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if(nums[left]<=nums[right]){
                if(nums[left]<ans){
                    idx=left;
                    ans=nums[left];
                }
                break;
            }
            if(nums[left]<=nums[mid]){
                if(nums[left]<ans){
                    idx=left;
                    ans=nums[left];
                }
                left=mid+1;
            }
            else{
                right=mid-1;
                if(nums[left]<ans){
                    idx=mid;
                    ans=nums[mid];
                }
            }
        } 
        return idx;
    }
};