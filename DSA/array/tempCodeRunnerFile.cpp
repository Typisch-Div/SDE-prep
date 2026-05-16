int main (){
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
    cout<<"Max consicutive ones: "<<ConsecutiveOnes(arr);
}