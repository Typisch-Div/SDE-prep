class Solution {
public:
    int findmaxi(vector<int> &nums){
        int maxi = INT_MIN;
        for(int i = 0; i < nums.size(); i++){
            maxi = max(maxi, nums[i]);
        }
        return maxi;
    }
    
    bool possible(vector<int>&nums, int div,int th){
        int n=nums.size();
        int cal=0;
        for(int i=0;i<n;i++){
            cal+=((nums[i] + div - 1)/div);  
        }
        return (cal<=th);
    }

    int smallestDivisor(vector<int>& nums, int th) {
        int low=1;
        int high=findmaxi(nums);
        int n=nums.size();
        int ans=INT_MAX;
        while(low<=high){
            int mid=low+(high-low)/2;
            if(possible(nums,mid,th)) {
                ans= min(ans,mid);
                high=mid-1;
            }  
            else    low=mid+1;
        }
        return low;
    }
};