#include<bits/stdc++.h>
using namespace std;
void display(vector<int>&arr, int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}
void NextPermutation(vector<int>&arr, int n){
    vector<int>temp;
    int idx=-1;
    for(int i=n-2;i>=0;i--){
        if(arr[i]<arr[i+1]){
            idx=i;
            break;
        }
    }
    if(idx == -1)   return ;
    for(int i=n-1;i>=idx;i--){
        if(arr[i]>arr[idx]){
            swap(arr[i],arr[idx]);
            break;
        }
    }
    reverse(arr.begin()+idx+1,arr.end());
    return ;
}
int main (){
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
    cout<<"Next possible Permutation : ";
    NextPermutation(arr,n);
    display(arr,n);
}