#include<bits/stdc++.h>
using namespace std;
vector<vector<int>>triplets(vector<int>&arr,int n){
    // set<vector<int>>st;
    // for(int i=0;i<n;i++){
    //     set<int>hashset;
    //     for(int j=i+1;j<n;j++){
    //         int third=-(arr[i]+arr[j]);
    //         if(hashset.find(third)!=hashset.end()){
    //             vector<int>temp={arr[i],arr[j],third};
    //             sort(temp.begin(),temp.end());
    //             st.insert(temp);
    //         }
    //         hashset.insert(arr[j]);  
    //     }
    // }
    // vector<vector<int>>ans(st.begin(),st.end());
    vector<vector<int>>ans;
    sort(arr.begin(),arr.end());
    for(int i=0;i<n;i++){
        if(i>0 && arr[i]==arr[i-1])     continue;
        int j=i+1;
        int k=n-1;
        while(j<k){
            int sum=arr[i]+arr[j]+arr[k];
            if(sum>0){
                k--;
            }
            else if(sum<0){
                j++;
            }
            else{
                vector<int>temp={arr[i],arr[j],arr[k]};
                ans.push_back(temp);
                j++;
                k--;
                while(j<k && arr[j]==arr[j-1])  j++;
                while(j<k && arr[k]==arr[k+1])  k--;
            }
        }
    }
    return ans;
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
    vector<vector<int>> result = triplets(arr, n);
    cout << "Triplets for 3sum are as follows:" << endl;
    for (auto& triplet : result) {
        cout << "[";
        for (int k = 0; k < triplet.size(); k++) {
            cout << triplet[k];
            if (k < triplet.size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }

}