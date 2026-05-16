#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n= nums.size();
        int l=0;
        int r=n-1;
        while(l<=r){
            int mid=(l+r)/2;
            if(nums[mid]==target) return mid;
            else if(nums[mid]>=nums[l]){
                if(target<=nums[mid] && target>=nums[l])    r=mid-1;
                else    l=mid+1;
            }
            else{
                if(target>=nums[mid] && target<=nums[r])    l=mid+1;
                else    r=mid-1;
            }
        }
        return -1;
    }
};
//part2
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size() - 1;
        
        while (left <= right) {
            int mid = (left + right) / 2;
            
            if (nums[mid] == target) {
                return true;
            }
            
            if (nums[mid] == nums[left] && nums[mid]==nums[right]) {
                left++;
                right--;
                continue;
            }
            
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return false;        
    }
};