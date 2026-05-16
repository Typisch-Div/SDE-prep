#include<bits/stdc++.h>
using namespace std;
int maxprofit(vector<int>&arr,int n){
    int mini=arr[0];
    int profit=0;
    for(int i=0;i<n;i++){
        int cost = arr[i]-mini;
        profit=max(profit,cost);
        mini=min(mini,arr[i]);
    }
    return profit;
}
int main(){
    int n;
    cout<<"Enter the size of array:";
    cin>>n;
    vector<int>arr;
    cout<<"Enter the elements: ";
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    cout<<"Max profit that can be earned : "<<maxprofit(arr,n);
}