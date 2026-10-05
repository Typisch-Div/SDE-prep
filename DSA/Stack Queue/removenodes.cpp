class Solution {
private:
    ListNode* rev(ListNode* head){
        if(!head || !head->next) return head;
        ListNode* prev = NULL;
        ListNode* temp = head;
        while(temp){
            ListNode* next = temp->next;
            temp->next = prev;
            prev = temp;
            temp = next;
        }
        return prev;
    }
public:
    ListNode* removeNodes(ListNode* head) {
        if(!head || !head->next) return head;
        ListNode* newHead = rev(head);
        int curr = newHead->val;
        ListNode* ans = newHead;
        ListNode* temp = newHead->next;
        ListNode* prev = newHead;
        while(temp){
            if(temp->val >= curr){
                curr = temp->val;
                prev->next = temp;
                prev = temp;
            }
            temp = temp->next;
            prev->next = NULL;
        }
        return rev(ans);
    }
};