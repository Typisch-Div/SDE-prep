#include<bits/stdc++.h>
using namespace std;
void ncr(int n){
    long long res=1;
    cout<<res<<" ";
    for(int i=0;i<n;i++){
        res*=(n-i);
        res/=(i+1);
        cout<<res<<" ";
    }
    return ;
}

long long ncr(int n,int r){
    long long res=1;
    for(int i=0;i<r;i++){
        res*=(n-i);
        res/=(i+1);
    }
    return res;
}

int main(){
    int n,r;

    cout<<"Enter the value of N :";
    cin>>n;

    cout<<"Row Printing : ";
    ncr(n);

    cout<<endl;

    cout<<"Enter the value of R :";
    cin>>r;

    cout<<endl;
    
    cout<<"Value printing "<<ncr(n,r);    
}