#include<bits/stdc++.h>
using namespace std;
void leaders(vector<int>&arr,int n){
    vector<int>ans;
    int maxi=INT_MIN;
    for(int i=n-1;i>=0;i--){
        if(arr[i]>maxi){
            ans.push_back(arr[i]);
        }
        maxi=max(maxi,arr[i]);
    }
    for(int i=0;i<ans.size();i++){
        cout<<ans[i]<<" ";
    }
    return;
}

int main(){
    int n;
    cout<<"Enter the size of array:";
    cin>>n;
    vector<int>arr;
    cout<<"Enter the elements:";
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    cout<<"leaders of the array are: ";
    leaders(arr,n);
}
