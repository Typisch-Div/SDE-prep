#include<bits/stdc++.h>
using namespace std;
int ConsecutiveOnes(vector<int>&arr){
    int maxi=0;
    int count=0;
    for(int i=0;i<arr.size();i++){
        if(arr[i]==1){
            count++;
            maxi=max(maxi,count);
        }
        else{
            count=0;
        }
    }
    return maxi;
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
    cout<<"Max consicutive ones: "<<ConsecutiveOnes(arr);
}