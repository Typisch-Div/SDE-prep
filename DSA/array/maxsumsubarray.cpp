#include<bits/stdc++.h>
using namespace std;
void maxsum(vector<int>&arr,int n ){
    
    int sum=0;
    int maxi=INT_MIN;
    int start=0;
    int ansend=-1,ansstart=-1;
    for(int i=0;i<n;i++){
        if(sum == 0)    start = i;
        sum+=arr[i];
        if(sum>maxi){
            maxi=sum;
            ansstart = start;
            ansend=i;
        }
        if(sum<0)   sum=0;
    }
    for(int i=ansstart;i<=ansend;i++){
        cout<<arr[i]<<" ";
    }
    return ;
}
int main (){
    int n;
    cout<<"Enter the size of array :";
    cin>>n;
    vector<int>arr;
    cout<<"Enter the elements: " ;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    cout<<"sum of the longest subarray: ";
    maxsum(arr,n);

}