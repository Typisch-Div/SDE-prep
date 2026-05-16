#include<iostream>
using namespace std;

struct node{
    int data ;
    node *next ;
};

node * head = nullptr ;

void Insertnode( int value ){
    node * newnode =new node();
    newnode -> data = value ;
    newnode -> next = nullptr;
    if (head == nullptr)    head = newnode ;
    else{
        node * temp = head ;
        while ( temp -> next != nullptr ){
            temp = temp -> next ;
        }
        temp -> next = newnode ;
    }
} 

void FindNode(int key){
    node * temp = head ;
    while( temp != nullptr ){
        if ( temp -> data == key ){
            cout << "Element found " ;
            break;
        }
        else {
            cout<<" Element not found " ;
            break ;
        }   
        temp = temp -> next ;
        
    }
}
void DisplayLL(){
    node * temp = head ;
    while( temp != nullptr ){
        cout << temp -> data <<" - > " ;
        temp = temp ->  next ;
    }  
    cout << " NULL " << endl ;
} 

int main (){
    int key ;
    int n ;
    cout << "Enter No. of nodes you want to enter : ";
    cin >> n ;
    
    for (int i = 1 ; i <= n ; i++){
        int value;
        cout << "Enter the " << i  << " value : " ;
        cin >> value ;
        Insertnode( value ) ;
    }

    cout << "Your Entered Linked list : ";
    DisplayLL();

    cout << " Enter the element you want to find : " ;
    cin >> key ;
    FindNode ( key ) ;
    return 0;
}
