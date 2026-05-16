#include<bits/stdc++.h>
using namespace std;
vector<vector<int>>quadlets(vector<int>&arr,int n,int target){
    set<vector<int>>st;
    for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
            set<int>hashset;
            for(int k=j+1;k<n;k++){
                long long sum=arr[i]+arr[j];
                sum+=arr[k];
                int fourth=target-(sum);
                if(hashset.find(fourth)!=hashset.end()){
                    vector<int>temp={arr[i],arr[j],arr[k],fourth};
                    sort(temp.begin(),temp.end());
                    st.insert(temp);
                }
                hashset.insert(arr[k]); 
            }
        }
    }
    vector<vector<int>>ans(st.begin(),st.end());
    // vector<vector<int>>ans;
    // sort(arr.begin(),arr.end());
    // for(int i=0;i<n;i++){
    //     if(i>0 && arr[i]==arr[i-1])     continue;
    //     for(int j=i+1;j<n;j++){
    //         if(j>i+1 && arr[j]==arr[j-1])     continue;
    //         int k=i+1;
    //         int l=n-1;
    //         while(k<l){
    //             long long sum=arr[i]+arr[j];
    //             sum+=arr[k];
    //             sum+=arr[l];
    //             if(sum>target){
    //                 l--;
    //             }
    //             else if(sum<target){
    //                 k++;
    //             }
    //             else{
    //                 vector<int>temp={arr[i],arr[j],arr[k],arr[l]};
    //                 ans.push_back(temp);
    //                 k++;
    //                 l--;
    //                 while(k<l && arr[k]==arr[k-1])  k++;
    //                 while(k<l && arr[l]==arr[l+1])  l--;
    //             }
    //         }
    //     }
    // }
    return ans;
}

int main(){
    int n;
    cout << "Enter the size of array: " ;
    cin >> n;
    int k;
    cout<<"Enter the target: ";
    cin>>k;
    vector<int>arr;
    cout<< "Enter the elements :";
    for(int i=0;i<n; i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    vector<vector<int>> result = quadlets(arr, n,k);
    cout << "Quadlets for 4sum are as follows:" << endl;
    for (auto& quadlets : result) {
        cout << "[";
        for (int l = 0; l < quadlets.size(); l++) {
            cout << quadlets[l];
            if (l < quadlets.size() - 1) cout << ", ";
        }
        cout << "]" << endl;
    }

}