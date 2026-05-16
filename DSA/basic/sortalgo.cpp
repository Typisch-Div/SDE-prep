#include<bits/stdc++.h>
using namespace std;
void selectionsort(vector < int> &arr,int n){
    for(int i=0; i<= n-2; i++){
        int mini = i;
        for(int j=i; j<=n-1; j++){
            if(arr[j]<arr[mini])    mini=j;
        }
        swap(arr[i],arr[mini]);
    }
}
void bubblesort(vector < int> &arr, int n){
    int swaphapp =0;
    for(int i=n-1; i>0; i--){
        for(int j=0 ;j<=i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
                swaphapp =1;
            }
        }
        if(swaphapp==0){
            cout<<"No swap swap required"<<endl;
            break;
        } 
    }
}
void insertionsort(vector < int> &arr, int n){
    for(int i=0; i<=n-1; i++){
        int j=i;
        while (j > 0 && arr[j-1]>arr[j]){
            swap(arr[j-1],arr[j]);
            j--;
        }
    }
}
void merge(vector < int> &arr,int low, int mid , int high ){
    vector <int> temp;
    int left = low ;
    int right = mid +1;
    while(left<= mid && right <= high){
        if(arr[left]<=arr[right]){
            temp.push_back(arr[left]);
            left++;
        }
        else{
            temp.push_back(arr[right]);
            right++;
        }
    }
    while(left<=mid){
        temp.push_back(arr[left]);
        left++;
    }
    while(right<=high){
        temp.push_back(arr[right]);
        right++;
    }
    for(int i= low; i<=high ;i++){
        arr[i]=temp[i-low];
    }
}
void mergesort(vector<int> &arr , int low , int high){
    if(low >= high) return;
    int mid = (low + high)/2;
    mergesort(arr, low,mid);
    mergesort( arr, mid+1, high);
    merge( arr, low,  mid,  high );
}
int partition(vector <int> &arr, int low, int high){
    int pivot = arr[low];
    int i = low ;
    int j = high ;
    while(i < j){
        while(arr[i] <= pivot && i <= high-1){
            i++;
        }
        while(arr[j] > pivot && j >= low+1){
            j--;
        }
        if(i<j) swap(arr[i],arr[j]);
    }
    swap(arr[low],arr[j]);
    return j;
}
void quicksort(vector <int> &arr, int low, int high){
    if(low<high){
        int pivotindex = partition(arr,low,high);
        quicksort(arr,low,pivotindex-1);
        quicksort(arr,pivotindex+1,high);
    }
}
int main(){
    int n ;
    cout << "Enter the size of array : " ;
    cin >> n ;
    vector <int> arr ;
    cout << "Enter the elements of array : "; 
    for(int i=0 ; i<n ; i++ ){
        int x;
        cin >> x;
        arr.push_back(x);
    }   
    //selectionsort(arr,n);
    // bubblesort(arr,n);
    //insertionsort(arr,n);
    mergesort(arr,0,n-1);
    //quicksort(arr,0,n-1);
    for(int i=0 ; i<n ; i++ )    cout << arr[i] << " ";
    return 0;
}