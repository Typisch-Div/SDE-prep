#include<bits/stdc++.h>
using namespace std;
vector<int>unionarr;
void Union(vector<int>&arr1,vector<int>&arr2,int n1, int n2){
    int i=0,j=0;
    while(i<n1 && j<n2 ){
        if(arr1[i]<=arr2[j]){
            if(unionarr.size()==0 || unionarr.back()!=arr1[i]){
                unionarr.push_back(arr1[i]);
            }
            i++;
        }
        else{
            if(unionarr.size()==0 || unionarr.back()!=arr2[j]){
                unionarr.push_back(arr2[j]);
            } 
            j++;           
        }
    }
    while(i<n1){
        if(unionarr.size()==0 || unionarr.back()!=arr1[i]){
                unionarr.push_back(arr1[i]);
        }
        i++;
    }
    while(j<n2){
        if(unionarr.size()==0 || unionarr.back()!=arr2[j]){
                unionarr.push_back(arr2[j]);
        } 
        j++;
    }
    return ;
}
void display(vector<int>&unionarr){
    for(int i=0 ;i<unionarr.size();i++){
        cout<<unionarr[i]<<" ";
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

    Union(arr1,arr2,n1,n2);
    display(unionarr);
}