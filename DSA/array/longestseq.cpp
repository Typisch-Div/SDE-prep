#include<bits/stdc++.h>
using namespace std;
int longestseq(vector<int>&arr,int n){
    unordered_set<int>st;
    int longest =1;
    if(n==0) return 0;
    for(int i=0;i<n;i++){
        st.insert(arr[i]);
    }
    for(auto it : st){
        if(st.find(it-1)==st.end()){
            int count=1;
            int x=it;
            while(st.find(x+1)!=st.end()){
                x++;
                count++;
            }
            longest=max(longest,count);
        }
    }
    return longest;
}
int main (){
    int n;
    cout<<"Enter the size of array :";
    cin>>n;
    vector<int>arr;
    cout<<"Enter the elements: ";
    for(int i=0;i<n-1;i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    cout<<"Length of the longest sequence: "<<longestseq(arr,n);
}