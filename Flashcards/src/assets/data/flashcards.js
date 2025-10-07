export const flashcards = [
    //Definition Flashcards
    {
        id: 1, 
        question: "What is a Stack ?",
        answer: "A linear data structure that follows the Last In First Out (LIFO) principle. It allows adding and removing elements only from one end, called the top of the stack.",
        image: "stack.png"
    },
    {
        id: 2,
        question: "What is a Queue ?",
        answer: "A linear data structure that follows the First In First Out (FIFO) principle. It allows adding elements at the rear end and removing elements from the front end.",
        image: "queue.png"
    },
    {
        id: 3,
        question: " What is a Hash Table ?",
        answer: "A data structure that maps keys to values using hash function for fast lookups . It provides efficient insertion, deletion, and retrieval operations based on the key.",
        image: "hashTable.png"
    },
    {
        id: 4,
        question: "What is a Linked List ?",
        answer: "A linear data structure where elements, called nodes, are connected through pointers. Each node contains data and a reference to the next node in the sequence.",
        image: "LinkedList.png"
    },
    {
        id: 5,
        question: "What is a Binary Tree ?",
        answer: "A hierarchical data structure where each node has at most two children, referred to as the left and right child. It is used for efficient searching, sorting, and hierarchical representation of data.",
        image: "binaryTree.png"},
    
    
    //Use Case Flashcards
    {
        id: 6,
        question: "When would you to use a Stack?",
        answer: "A stack is used when you need to reverse elements or handle tasks in last-in, first-out order, like in function calls, expression evaluation, backtracking, or depth-first search."
    },
    {
        id: 7,
        question: "When would you use a Queue?",
        answer: "A Queue is used to manage tasks in first-come, first-served order, like CPU scheduling, print queues, breadth-first search, or handling requests in web servers."
    },
    {
        id: 8,
        question: "When would you use a Hash Table?",
        answer: "When you need fast access to data based on unique keys, such as in implementing dictionaries, caches, or sets. It is also useful for counting occurrences of elements."
    },
    {
        id: 9,
        question: "When would you use a Linked List?",
        answer: "When you need dynamic memory allocation and efficient insertions/deletions, such as in implementing stacks, queues, or adjacency lists for graphs. It is also useful for scenarios where the size of the data structure is unknown or changes frequently."
    },
    {
        id: 10,
        question: "When would you use a Binary Tree?",
        answer: "When you need to maintain a sorted order of elements for efficient searching, insertion, and deletion, such as in binary search trees (BST). It is also useful for hierarchical data representation, expression parsing, and priority queues (using binary heaps)."
    },

    // Time Complexity Flashcards
    {
        id: 11,
        question: "What is the time complexity of Stack operations ?",
        answer: "Push and Pop operations have a time complexity of O(1) as they involve adding or removing an element from the top of the stack."
    },
    {
        id: 12,
        question: "What is the time complexity of Queue operations ?",
        answer: "Enqueue and Dequeue operations have a time complexity of O(1) as they involve adding an element at the rear and removing an element from the front of the queue."
    },
    {
        id: 13,

        question: "What is the time complexity of Hash Table operations ?",
        answer: "Average case time complexity for insertion, deletion, and search operations is O(1). However, in the worst case (due to collisions), it can degrade to O(n)."
    },
    {
        id: 14,
        question: "What is the time complexity of Linked List operations ?",
        answer: "Insertion and deletion operations have a time complexity of O(1) if the node to be deleted is known. Searching for an element has a time complexity of O(n) as it may require traversing the entire list."
    },
    {
        id: 15,
        question: "What is the time complexity of Binary Tree operations ?",
        answer: "In a balanced binary search tree (BST), insertion, deletion, and search operations have a time complexity of O(log n). However, in an unbalanced tree, these operations can degrade to O(n) in the worst case."
    },

    //Common Operations Flashcards
    { 
        id: 16,
        question: "What are the common operations performed on a Stack ?",
        answer: "Push (add an element to the top), Pop (remove the top element), Peek/Top (view the top element without removing it), IsEmpty (check if the stack is empty)."
    },
    { 
        id: 17,
        question: "What are the common operations performed on a Queue ?",
        answer: "Enqueue (add an element to the rear), Dequeue (remove the front element), Front (view the front element without removing it), IsEmpty (check if the queue is empty)."
    },
    { 
        id: 18,
        question: "What are the common operations performed on a Hash Table ?",
        answer: "Insert (add a key-value pair), Delete (remove a key-value pair), Search/Lookup (retrieve the value associated with a key), Handle Collisions (using techniques like chaining or open addressing)."
    },
    { 
        id: 19,
        question: "What are the common operations performed on a Linked List ?",
        answer: "Insertion (add a new node), Deletion (remove a node), Traversal (visit each node), Search (find a node with a specific value)."
    },
    { 
        id: 20,
        question: "What are the common operations performed on a Binary Tree ?",
        answer: "Insertion (add a new node), Deletion (remove a node), Traversal (in-order, pre-order, post-order), Search (find a node with a specific value)."
    },
    // Comparison Flashcards
    { 
        id: 21,
        question: "How does a Stack differ from a Queue ?",
        answer: "A Stack follows the Last In First Out (LIFO) principle, allowing addition and removal of elements only from the top. A Queue follows the First In First Out (FIFO) principle, allowing addition of elements at the rear and removal from the front."
    },
    {
        id: 22,
        question: "How does a Hash Table differ from a Linked List ?",
        answer: "A Hash Table provides fast access to data based on unique keys using a hash function, while a Linked List is a linear data structure where elements are connected through pointers. Hash Tables are optimized for quick lookups, whereas Linked Lists are better suited for dynamic memory allocation and efficient insertions/deletions."
    },
    {
        id: 23,
        question: "How does a Binary Tree differ from a Linked List ?",
        answer: "A Binary Tree is a hierarchical data structure where each node has at most two children, allowing for efficient searching, sorting, and hierarchical representation of data. A Linked List is a linear data structure where elements are connected through pointers, making it suitable for dynamic memory allocation and efficient insertions/deletions. Binary Trees provide faster search times (O(log n) in balanced trees) compared to Linked Lists (O(n))."
    }, 
    {
        id: 24,
        question: "How does a Stack differ from a Linked List ?",
        answer: "A Stack is a linear data structure that follows the Last In First Out (LIFO) principle, allowing addition and removal of elements only from the top. A Linked List is a linear data structure where elements are connected through pointers, allowing for dynamic memory allocation and efficient insertions/deletions at any position in the list."
    },  
    {
        id: 25,
        question: "How does a Queue differ from a Linked List ?",
        answer: "A Queue is a linear data structure that follows the First In First Out (FIFO) principle, allowing addition of elements at the rear and removal from the front. A Linked List is a linear data structure where elements are connected through pointers, allowing for dynamic memory allocation and efficient insertions/deletions at any position in the list."
    },

    //Behavior -> Structure 
    {
        id: 26,
        question: "Which data stucture allows constant-time acces by index ?",
        answer: "Array"
    },
    {
        id: 27,
        question: "Which structure maintains sorted order and allows binary search ?",
        answer: "Binary Search Tree(BST)"
    },
    {
        id: 28, 
        question: "Which data structure uses nodes with 'next' pointers ?",
        answer: "Linked List"
    }   
];