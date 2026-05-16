#include<bits/stdc++.h>
using namespace std;
int singleoccur(vector<int> &arr){
    int xor1 =0;
    for(int i=0;i<arr.size();i++){
        xor1= xor1 ^arr[i];
    }
    return xor1;
    // map<long long,int>mpp;
    // for(int i=0;i<arr.size();i++){
    //     mpp[arr[i]]++;
    // }
    // for(auto it : mpp){
    //     if(it.second ==1){
    //         return it.first;
    //     }
    // }
    // return -1;
}
int main (){
    int n;
    cout << "Enter the size of array: " ;
    cin >> n;
    vector<int>arr;
    cout<< "Enter the elements :";
    for(int i=0;i<n; i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    cout<<"single occurance element : "<<singleoccur(arr);
}