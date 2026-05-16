#include<bits/stdc++.h>
using namespace std;
vector<int> spiralOrder(vector<vector<int>>& matrix) {
        
    }
int main (){
    int m,n;
    cout<<"enter the size of matrix (mxn ) : ";
    cin>>m>>n;
    cout<<"Enter the elements:"<<endl;
    int matrix[m][n];
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>matrix[i][j];
        }
    }
    // int n=matrix.size();
    // int m=matrix[0].size();
    int top=0,left=0;
    int bottom=n-1,right=m-1;
    vector<int>ans;
    while(left<=right && top<=bottom){
        for(int i=left;i<=right;i++){
            ans.push_back(matrix[top][i]);
        }
        top++;
        for(int i=top;i<=bottom;i++){
            ans.push_back(matrix[i][right]);
        }
        right--;
        if(top<=bottom){
            for(int i=right;i>=left;i--){
                ans.push_back(matrix[bottom][i]);
            }
            bottom--;
        }
        if(left<=right){
            for(int i=bottom;i>=top;i--){
                ans.push_back(matrix[i][left]);
            }
            left++;
        }
    }
    cout<<"AFTER TRAVERSAL: ";
    for(int i=0;i<ans.size();i++){
        cout<<ans[i]<<" ";
    }
}