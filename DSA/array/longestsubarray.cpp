#include<bits/stdc++.h>
using namespace std;
int longsub(vector<int>&arr,int n ,int k){
    // map<long long,int>preSummap;
    // long long sum=0;
    // int maxLen=0;
    // for(int i=0;i<arr.size();i++){
    //     sum+=arr[i];
    //     if(sum == k){
    //         maxLen=max(maxLen,i+1);
    //     }
    //     long long rem =sum -k ;
    //     if(preSummap.find(rem) != preSummap.end()){
    //         int len= i - preSummap[rem];
    //         maxLen=max(maxLen,len);
    //     }
    //     if(preSummap.find(sum)==preSummap.end()){
    //         preSummap[sum]=i;
    //     }
    // }
    // return maxLen;

    int left=0,right =0;
    long long sum=arr[0];
    int maxlen=0;
    while(right<arr.size()){
        while(left<=right && sum> k){
            sum-=arr[left];
            left++;
        }
        if(sum==k){
            maxlen=max(maxlen,right-left+1);
        }
        right++;
        if(right<arr.size())    sum+=arr[right];
    }
    return maxlen;

}
int main (){
    int n;
    cout<<"Enter the size of array :";
    cin>>n;
    vector<int>arr;
    cout<<"Enter the elements: " ;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    cout<<"Enter the target sum : ";
    int k;
    cin>>k;
    cout<<"Lenght of the longest subarray: "<<longsub(arr,n,k);

}