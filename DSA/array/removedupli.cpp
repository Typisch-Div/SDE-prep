#include<bits/stdc++.h>
using namespace std;

int removedupli(vector<int>&arr,int n){
    int i =0 ;
    for(int j=1; j<n;j++){
        if(arr[j]!=arr[i]){
            arr[i+1]=arr[j];
            i++;
        }
    }
    return i+1;
}

vector<int> arr ;

int main (){
    int n;
    cout << "Enter the size of array: " ;
    cin >> n;
    cout<< "Enter the elements :";
    for(int i=0;i<n; i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    cout << " No. of unique elements : "<<removedupli(arr,n) ;
}