#include<bits/stdc++.h>
using namespace std;
int main (){
    int m,n;
    cout<<"enter the size of matrix (mxn ) : ";
    cin>>m>>n;
    cout<<"Enter the elements:"<<endl;
    int arr[m][n];
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>arr[i][j];
        }
    }
    int col[m]={0};
    int row[n]={0};
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(arr[i][j]==0){
                row[i]=1;
                col[j]=1;
            }
        }
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(col[j]||row[i]){
                arr[i][j]=0;
            }
        }
    }
    cout<<"Result after changing:"<<endl;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
// class Solution {
// public:
//     void setZeroes(vector<vector<int>>& matrix) {
//         int rows = matrix.size();
//         int cols = matrix[0].size();

//         bool firstRowHasZero = false;
//         bool firstColHasZero = false;

//         // Check if the first row contains zero
//         for (int c = 0; c < cols; c++) {
//             if (matrix[0][c] == 0) {
//                 firstRowHasZero = true;
//                 break;
//             }
//         }

//         // Check if the first column contains zero
//         for (int r = 0; r < rows; r++) {
//             if (matrix[r][0] == 0) {
//                 firstColHasZero = true;
//                 break;
//             }
//         }

//         // Use the first row and column as markers
//         for (int r = 1; r < rows; r++) {
//             for (int c = 1; c < cols; c++) {
//                 if (matrix[r][c] == 0) {
//                     matrix[r][0] = 0;
//                     matrix[0][c] = 0;
//                 }
//             }
//         }

//         // Set the marked rows to zero
//         for (int r = 1; r < rows; r++) {
//             if (matrix[r][0] == 0) {
//                 for (int c = 1; c < cols; c++) {
//                     matrix[r][c] = 0;
//                 }
//             }
//         }

//         // Set the marked columns to zero
//         for (int c = 1; c < cols; c++) {
//             if (matrix[0][c] == 0) {
//                 for (int r = 1; r < rows; r++) {
//                     matrix[r][c] = 0;
//                 }
//             }
//         }

//         // Set the first row to zero if needed
//         if (firstRowHasZero) {
//             for (int c = 0; c < cols; c++) {
//                 matrix[0][c] = 0;
//             }
//         }

//         // Set the first column to zero if needed
//         if (firstColHasZero) {
//             for (int r = 0; r < rows; r++) {
//                 matrix[r][0] = 0;
//             }
//         }        
//     }
// };
}