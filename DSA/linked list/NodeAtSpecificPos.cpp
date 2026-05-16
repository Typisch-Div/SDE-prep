#include<iostream>
using namespace std;

struct node{
    int data;
    node * next;
};

node * head = nullptr;

void InsertAtBeginning(int value){
    node * newnode = new node();
    newnode -> data = value;
    newnode -> next = head;
    head = newnode ;
}

void InsertAtEnd (int value){
    node * newnode =new node();
    newnode -> data = value ;
    newnode -> next = nullptr;
    if (head ==nullptr ) head= newnode;
    else{
        node * temp = head;
        while( temp -> next != nullptr ){
            temp = temp -> next ; 
        }
        temp -> next = newnode;
    }
}

void InsertAtPos( int key , int value){
    node * newnode = new node();
    newnode -> data = value ;
    newnode -> next = nullptr ;
    if (head == nullptr) head = newnode ;
    else {
        node * temp = head ;
        for (int i = 1 ; i < (key-1) ; i++){
            temp = temp -> next ;
        }
        newnode -> next = temp -> next ;
        temp -> next = newnode;
    }
}

void DisplayLL(){
    node * temp = head;
    while(temp != nullptr){
        cout << temp -> data <<" -> ";
        temp = temp -> next ;
    }
    cout << " NULL " << endl ;
}

int main (){

    int value , key ;

    cout << " Enter the node to add at beginning : " ;
    cin >> value ;
    InsertAtBeginning( value );

    cout << " Enter the node to add at beginning : " ;
    cin >> value ;
    InsertAtBeginning( value );
    
    cout << " Enter the node to add at beginning : " ;
    cin >> value ;
    InsertAtBeginning( value );

    cout << " Enter the node to add at ending : " ;
    cin >> value ;
    InsertAtEnd( value );

    cout << " Enter the node to add at ending : " ;
    cin >> value ;
    InsertAtEnd( value );

    cout << " Enter the node to add at ending : " ;
    cin >> value ;
    InsertAtEnd( value );

    cout << " Enter the pos and value to add node :  " ;
    cin >> key >> value ;
    InsertAtPos( key , value);

    cout << " Enter the pos and value to add node :  " ;
    cin >> key >> value ;
    InsertAtPos( key , value);

    cout << "Your Entered Linked list : ";
    DisplayLL();
    return 0;
}