class Solution {
public:
    int floorSqrt(int n)  {
      int l=1;int r=n;
      int ans =1;
      while(l<=r){
        int mid=(l+r)/2;
        if((mid*mid)<=n){
            ans=mid;
            l=mid+1;
        }
        else    r=mid-1;
      }
      return r;
    }
};