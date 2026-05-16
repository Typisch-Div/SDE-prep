#include<bits/stdc++.h>
using namespace std;
int largestelement(vector<int>&arr,int n){
    int largest = arr[0];
    for(int i=0; i<n;i++){
        if(arr[i]>largest)  largest=arr[i];
    }
    return largest;
}

int slargestelement(vector<int>&arr,int n){
    int slargest =INT_MIN;
    int largest = arr[0];
    for(int i=0; i<n;i++){
        if(arr[i]>largest){
            slargest=largest;
            largest=arr[i];
        }
        else if(arr[i]<largest && arr[i]>slargest){
            slargest=arr[i];
        }
    }  
    return slargest;
}

int main (){
    int n;
    cout << "Enter the size of array: " ;
    cin >> n;
    vector<int> arr ;
    cout<< "Enter the elements :";
    for(int i=0;i<n; i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    //cout<<"the largest element in the given array is : "<<largestelement(arr , n)<< endl;
    cout<<"the slargest element in the given array is : "<<slargestelement(arr , n);

}