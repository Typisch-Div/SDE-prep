#include<bits/stdc++.h>
using namespace std;
void Areverse(vector<int>&arr,int start ,int end){
    while(start<=end){
        swap(arr[start],arr[end]);
        start++;
        end--;
    }
}
void rotatearr(vector<int>&arr,int d, int n){
    Areverse(arr,0,d-1);
    Areverse(arr,d,n-1);
    Areverse(arr,0,n-1);
}
int main(){
    int n;
    cout<<"Enter the size of array :";
    cin>> n;
    vector<int> arr;
    cout<<"Enter the elements : " ;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    int d ;
    cout << "Enter factor to rotate : ";
    cin>>d;
    rotatearr(arr,d,n);
    for(int i=0;i<n;i++){
        cout<< arr[i]<<" ";
    }
}