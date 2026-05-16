#include<bits/stdc++.h>
using namespace std;
void movezeroes(vector<int>&arr, int n){
    int j=-1;
    
    for(int i=0;i<n;i++){
        if(arr[i]==0){
            j=i;
            break;
        }
    }
    if(j==-1)   return ;
    for(int i=j+1;i<n;i++){
        if(arr[i]!=0){
            swap(arr[i],arr[j]);
            j++;
        }
    }
}
void display(vector<int>&arr, int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}
int main(){
    int n;
    cout<<"Enter the size of the array : ";
    cin>>n;
    vector<int> arr;
    
    cout<<"Enter the elements: "<<endl;
    for(int i=0; i<n; i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    cout<<endl;
    display(arr,n);
    movezeroes(arr,n);
    cout<<endl;
    display(arr,n);

    return 0 ;
}