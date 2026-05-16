#include<bits/stdc++.h>
using namespace std;
vector<int>intersec;
void isarr(vector<int>&arr1,vector<int>&arr2,int n1,int n2){
    int i=0,j=0;
    while(i<n1 && j<n2){
        if(arr1[i]<arr2[j]){
            i++;
        }
        else if(arr1[i]>arr2[j]){
            j++;
        }
        else{
            intersec.push_back(arr1[i]);
            i++;
            j++;
        }
    }
    return;
}
void display(vector<int>&intersec){
    for(int i=0 ;i<intersec.size();i++){
        cout<<intersec[i]<<" ";
    }
}
int main (){
    int n1;
    cout<<"Enter the size of first array :" ;
    cin>>n1;
    vector<int>arr1;
    cout<<"Enter the elements for the first array :" ;
    int x;
    for(int i=0;i<n1;i++){
        cin>>x;
        arr1.push_back(x);
    }

    int n2;
    cout<<"Enter the size of second array :" ;
    cin>>n2;
    vector<int>arr2;
    cout<<"Enter the elements for the second array :" ;
    int y;
    for(int i=0;i<n2;i++){
        cin>>y;
        arr2.push_back(y);
    }

    isarr(arr1,arr2,n1,n2);
    display(intersec);
}