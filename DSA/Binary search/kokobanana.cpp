#include<bits/stdc++.h>
using namespace std;

class Solution {
public:

    int findmax(vector<int> &piles){

        int maxi = INT_MIN;

        for(int i = 0; i < piles.size(); i++){
            maxi = max(maxi, piles[i]);
        }

        return maxi;
    }

    long long calth(vector<int>& piles, int mid){

        long long th = 0;

        for(int i = 0; i < piles.size(); i++){

            th += ((long long)piles[i] + mid - 1) / mid;
        }

        return th;
    }

    int minEatingSpeed(vector<int>& piles, int h) {

        int l = 1;
        int r = findmax(piles);

        while(l <= r){

            int mid = l + (r - l) / 2;

            long long th = calth(piles, mid);

            if(th <= h)
                r = mid - 1;
            else
                l = mid + 1;
        }

        return l;
    }
};