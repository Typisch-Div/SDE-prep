class Solution {
public:
    int mul(int k , int N){
        long long ans = 1;
        for (int i = 0; i < N; i++) {
            ans *= k;
        }
        return ans;
    }
    int NthRoot(int N, int n) {
        int l=1;int r=n;
        int ans =1;
        while(l<=r){
            int mid=(l+r)/2;
            int k=(mul(mid,N));
            if(k==n) return mid;
            else if(k<n){
                l=mid+1;
            }
            else    r=mid-1;
        }
        return -1;
        }
};
