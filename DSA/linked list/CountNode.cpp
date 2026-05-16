#include<iostream>
using namespace std;

struct node {
    int data;
    node*next;
};

node* head = nullptr;

void InsertNode( int value ){
    node * newnode = new node();
    newnode -> data =  value;
    newnode -> next = nullptr;
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
    int count = 0;
    node * temp = head;
    while(temp != nullptr){
        cout << temp -> data ;
        count++;
        if(temp != nullptr){
            cout << " -> " ;
        }
        temp = temp -> next;
    }
    cout <<  "NULL" << endl;
    cout << " no. of nodes : " << count ;
}
int main (){
    InsertNode(1);
    InsertNode(2);
    InsertNode(3);
    InsertNode(4);
    InsertNode(5);
    InsertNode(6);
    InsertNode(7);
    InsertNode(8);
    
    cout << "Your Entered Linked list : ";
    DisplayLL();
    return 0;

}