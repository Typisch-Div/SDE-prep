#include<bits/stdc++.h>
using namespace std;
int checksorted(vector<int> &arr , int n){
    for(int i=1;i<n;i++){
        if(arr[i]>=arr[i-1]){
            
        }
        else{
            return false;
        }
    }
    return true ;
}
vector<int> arr;
int main(){
    int n;
    cout<<"Enter the no. of elements : " ;
    cin>> n;
    cout<<"Enter the elements: ";
    for(int i=0;i<n; i++){
        int x;
        cin>> x;
        arr.push_back(x);
    }
    
    bool isSorted = checksorted(arr, n);
    cout << (isSorted ? "The array is sorted." : "The array is not sorted.") << endl;
    
    return 0;
}
