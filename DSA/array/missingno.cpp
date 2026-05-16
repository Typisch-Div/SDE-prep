#include<bits/stdc++.h>
using namespace std;
int missingelement(vector<int>&arr,int n){
    int sum=n*(n+1)/2;
    int s2=0;
    for(int i=0;i<n-1;i++){
        s2+=arr[i];
    }

    return (sum-s2);
}
// int missingelement(vector<int>&arr,int n){
//     int xor1=0,xor2=0;
//     int num=n-1;
//     for(int i=0;i<num;i++){
//         xor2=xor2^arr[i];
//         xor1=xor1^(i+1);
//     }
//     xor1 = xor1 ^ n;
//     return xor1^xor2;
// }
int main (){
    int n;
    cout<<"Enter the size of array :";
    cin>>n;
    vector<int>arr;
    cout<<"Enter the elements: ";
    for(int i=0;i<n-1;i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    cout<<"Missing element: "<<missingelement(arr,n);
}