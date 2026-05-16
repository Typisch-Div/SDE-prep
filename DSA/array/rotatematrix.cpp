#include<bits/stdc++.h>
using namespace std;
int main (){
    int n;
    cout<<"Enter the side of Square matrix :";
    cin>>n;
    cout<<"Enter the elements: "<<endl;
    int arr[n][n];
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }
    int resultmatrix[n][n];
    
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            resultmatrix[j][n-1-i]=arr[i][j];
        }
    }

    cout<<"Matrix after rotating :"<<endl;

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cout<<resultmatrix[i][j]<<" ";
        }
        cout<<endl;
    }
    // approach 2 
    // take transpose
    // for(int i=0;i<n-2;i++){
    //     for(int j=i+1;j<n-1;j++){
    //         swap(arr[i][j],arr[j][i]);
    //     } 
    // }
    // for(int i=0;i<n;i++){
    //     reverse()
    // }
}
