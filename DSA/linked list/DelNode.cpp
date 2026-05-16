#include<iostream>
using namespace std;

struct node{
    int data ;
    node * next;
};

node * head = nullptr;

void InsertAtBeginning (int value){
    node * newnode = new node();
    newnode -> data = value ;
    newnode -> next = nullptr ;
    if( head == nullptr )   head = newnode ;
    else{
        node * temp = head ;  
        while( temp -> next != nullptr ){
            temp = temp -> next ;
        }
        temp -> next = newnode ;
    }
}

void DeleteAtBeginning(){
    if( head == nullptr ) cout << " Your Linked List is Empty " ;
    else{
        node * temp = head;
        head = temp -> next;
    }
}

void DeleteAtEnd(){
    if( head == nullptr ) cout << " Your Linked List is Empty " ;
    else{
        node * temp = head;
        while( temp -> next -> next != nullptr ){
            temp = temp -> next;
        }
        temp -> next = nullptr;
    }
}

void DeleteAtPos( int key ){
    node * temp = head ;
    for (int i = 1 ; i < (key-1) ; i++){
        temp = temp -> next ;
    }
    temp -> next = temp -> next -> next;
}

void DeletebyVal(int val){
    node* temp =head;
    while(temp -> next -> data != val){
        temp = temp -> next;
    }
    temp -> next = temp -> next -> next;
}

void DisplayLL(){
    node * temp = head ;
    while(temp != nullptr){
        cout << temp -> data << " -> ";
        temp = temp -> next ;
    }
    cout << "NULL " << endl;
}

int main (){
    int n;
    cout << " Enter the no. of nodes you want to enter : " ;
    cin >> n ;

    for(int i = 0 ; i < n ; i++ ){
        int value ; 
        cout << " Enter the value to insert : " ;
        cin >> value ;
        InsertAtBeginning(value) ;
    }

    cout << endl;

    // cout << " Your Entered Linked List before deletion : " << endl;
    // DisplayLL();
    // cout << endl;

    // cout << " Your Entered Linked List after deletion at Beginning : " << endl;
    // DeleteAtBeginning();
    // DisplayLL();
    // cout << endl;

    // cout << " Your Entered Linked List after deletion at End : " << endl;
    // DeleteAtEnd();
    // DisplayLL();
    // cout << endl;

    cout << " Your Entered Linked List after deletion at specific location : " << endl;
    int key,val;
    cout<< " Enter the node you want to delete : " ;
    cin >> key ;
    cout << "Enter the value you want to delete : ";
    cin >> val;
    DeleteAtPos( key );
    DeletebyVal(val);
    DisplayLL();

    return 0;

}