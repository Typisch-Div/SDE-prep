#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the number to check: ";
    cin >> n;

    if (n < 2) {
        cout << "Not a Prime Number." << endl;
        return 0;
    }

    int count = 0;
    for (int i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            count++;
            if (i != n / i) {
                count++;
            }
        }
    }

    if (count == 2) {
        cout << "Prime Number." << endl;
    } else {
        cout << "Not a Prime Number." << endl;
    }

    return 0;
}
