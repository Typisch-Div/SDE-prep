#include<iostream>
using namespace std;

struct node {
    int data;
    node * next;
    node * prev ;
};

node* head = nullptr;

void InsertNode( int value ){
    node * newnode = new node();
    newnode -> data =  value;
    newnode -> next = nullptr;
    newnode -> prev = nullptr ;
    if (head==nullptr)  head =newnode;
    else{
        node* temp = head ;
        while( temp -> next != nullptr){
            temp = temp -> next;
        }
        temp -> next = newnode ; 
    }
}

void DisplayLL(){
    node * temp = head;
    while(temp != nullptr){
        cout << temp -> data ;
        if(temp != nullptr){
            cout << " -> " ;
        }
        temp = temp -> next;
    }
    cout <<  "NULL" << endl;
}
void RevDisplayLL(){
    node * temp = head ;
    while (temp -> next != nullptr){
        temp = temp -> next
    }
}
int main (){
    int n;
    cout << "Enter No. of nodes you want to enter : ";
    cin >> n ;
    
    for (int i = 0 ; i < n ; i++){
        int value;
        cout << "Enter the " << i+1  << " value : " ;
        cin >> value ;
        InsertNode( value );
    }

    cout << "Your Entered Linked list : ";
    DisplayLL();

    cout << "Your Entered Linked list in reverse order : ";
    RevDisplayLL();
    return 0;

}