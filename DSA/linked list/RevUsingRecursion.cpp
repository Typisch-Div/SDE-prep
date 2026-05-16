#include<iostream>
using namespace std ;

struct node{
    int data ;
    node * next ; 
};

node * head = nullptr ;

void Insertnode(int value ){
    node * newnode = new node ();
    newnode -> data = value ;
    newnode -> next = nullptr ;
    if(head == nullptr )    head = newnode ;
    else {
        node * temp = head ;
        while(temp -> next != nullptr){
            temp = temp -> next ;
        }
        temp -> next = newnode ;
    }
}

void RecDisplayLL(node * temp){
    // node * temp = head ;
    if( temp == nullptr) return ;
    RecDisplayLL(temp -> next);
    cout << temp -> data << " ";

}

int main (){ 
    int n ;
    // node * head = nullptr ;
    cout << "Enter No. of nodes you want to enter : ";
    cin >> n ;
    
    for (int i = 1 ; i <= n ; i++){
        int value;
        cout << "Enter the " << i  << " value : " ;
        cin >> value ;
        Insertnode( value ) ;
    }

    cout << "Your Entered Linked list : ";
    RecDisplayLL(head);
    return 0 ;
}
