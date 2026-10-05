#include <bits/stdc++.h>
using namespace std;

void solve() {

    int n;
    cin >> n;
    
    int pv=0;
    int nv=0;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    for(int i = 0; i < n; i++){
        if(a[i]==-1)    nv++;
        if(a[i]==1) pv++;
    }
    if (n % 2 != 0) {
        cout << "NO\n";
        return;
    }

    if (abs(pv - nv) % 4 == 0)
        cout << "YES\n";
    else
        cout << "NO\n";
    return;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;

    while (t--) {
        solve();
    }

    return 0;
}