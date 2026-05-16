#include<bits/stdc++.h>
using namespace std;
int MajorityElement(vector<int>&arr, int n){
    int count =0;
    int el;
    for(int i=0;i<n;i++){
        if(count ==0){
            count=1;
            el=arr[i];
        }
        else if(arr[i]==el)     count++;
        else    count--;
    }
    int cnt=0;
    for(int i=0;i<n;i++){
        if(arr[i]==el)  cnt++;
    }
    if(cnt>n/2)     return el;
    return -1;
}
vector<int>MajorityElement1(vector<int>&arr, int n){
    int ct1 =0,ct2=0;
    int el1=INT_MIN,el2=INT_MIN;
    for(int i=0;i<n;i++){
        if(ct1==0 && arr[i]!=el2){
            ct1=1;
            el1=arr[i];
        }
        else if(ct2==0 && arr[i]!=el1){
            ct2=1;
            el2=arr[i];
        }
        else if(arr[i]==el1)     ct1++;
        else if(arr[i]==el2)     ct2++;
        else{
            ct1--;
            ct2--;
        }
    }
    ct1=0,ct2=0;
    vector<int>ls;
    for(int i=0;i<n;i++){
        if(arr[i]==el1)  ct1++;
        if(arr[i]==el2)  ct2++;
    }
    int mini=(int)(n/3)+1;
    if(ct1>=mini)   ls.push_back(el1);
    if(ct2>=mini)   ls.push_back(el2);

    return ls;

}
int main(){
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
    cout<<"Majority element for occurance >= n/2"<<MajorityElement(arr,n);
    cout<<"Majority element for occurance >= n/3";
    MajorityElement1(arr,n);

}
