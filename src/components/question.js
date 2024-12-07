const questions = [
  // Data Structures - Easy
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "Which of the following is a linear data structure?",
    options: ["Array", "Binary Tree", "Graph", "Heap"],
    answer: "Array",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "What is the time complexity of accessing an element in an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "Which data structure uses FIFO order?",
    options: ["Stack", "Queue", "Graph", "Hash Table"],
    answer: "Queue",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "Which of the following is an example of a non-linear data structure?",
    options: ["Array", "Binary Tree", "Queue", "Stack"],
    answer: "Binary Tree",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "What is the worst-case time complexity for searching in a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "Which of the following is not an example of a data structure?",
    options: ["Array", "Linked List", "Compiler", "Stack"],
    answer: "Compiler",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "Which data structure supports LIFO order?",
    options: ["Stack", "Queue", "Array", "Tree"],
    answer: "Stack",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "Which of the following can be used to implement a queue?",
    options: ["Array", "Linked List", "Both", "None"],
    answer: "Both",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "What is the purpose of a hash function in a hash table?",
    options: [
      "To find the key quickly",
      "To sort the elements",
      "To create a binary tree",
      "To calculate the memory size",
    ],
    answer: "To find the key quickly",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "What is the size of a pointer in a 64-bit architecture?",
    options: ["4 bytes", "8 bytes", "16 bytes", "32 bytes"],
    answer: "8 bytes",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "What is the primary difference between a stack and a queue?",
    options: [
      "Stack uses LIFO, Queue uses FIFO",
      "Stack uses FIFO, Queue uses LIFO",
      "Stack is faster than Queue",
      "Queue requires more memory than Stack",
    ],
    answer: "Stack uses LIFO, Queue uses FIFO",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "Which of the following data structures can be used to implement recursion?",
    options: ["Stack", "Queue", "Array", "Graph"],
    answer: "Stack",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "What is the output of the following code?\n\n```python\nstack = []\nstack.append(1)\nstack.append(2)\nstack.pop()\nprint(stack)\n```\n",
    options: ["[1, 2]", "[1]", "[]", "[2]"],
    answer: "[1]",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "What is the purpose of a priority queue?",
    options: [
      "To process elements in FIFO order",
      "To process elements based on priority",
      "To sort the elements",
      "To store elements in a linear manner",
    ],
    answer: "To process elements based on priority",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "In a linked list, what does the last node contain?",
    options: [
      "Data only",
      "Data and pointer to next node",
      "Data and NULL pointer",
      "None",
    ],
    answer: "Data and NULL pointer",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      'What is the dry run output for the following code?\n\n```c\nint arr[] = {1, 2, 3};\nfor(int i = 0; i < 3; i++) {\n    printf("%d ", arr[i]);\n}\n```\n',
    options: ["1 2 3", "3 2 1", "1 3 2", "Error"],
    answer: "1 2 3",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "Which of the following is used to store hierarchical data?",
    options: ["Tree", "Stack", "Array", "Queue"],
    answer: "Tree",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "What is the result of enqueueing 10, 20, 30 and then dequeueing two elements from a queue?",
    options: ["10 20", "30", "10 20 30", "20 30"],
    answer: "30",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "What is the height of a binary tree with only one node?",
    options: ["0", "1", "2", "Undefined"],
    answer: "1",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "Which data structure is used in Depth-First Search (DFS)?",
    options: ["Queue", "Stack", "Hash Table", "Heap"],
    answer: "Stack",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "Which data structure is used to find the shortest path in a graph?",
    options: ["Queue", "Priority Queue", "Stack", "Tree"],
    answer: "Priority Queue",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "What does the `front` operation in a queue return?",
    options: [
      "The first element",
      "The last element",
      "The middle element",
      "An empty element",
    ],
    answer: "The first element",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "Which of the following operations is the fastest for a hash table?",
    options: ["Insertion", "Search", "Deletion", "All are equally fast"],
    answer: "All are equally fast",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "What is the degree of a node in a binary tree?",
    options: [
      "Number of child nodes",
      "Number of sibling nodes",
      "Height of the node",
      "Depth of the node",
    ],
    answer: "Number of child nodes",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "Which of the following is true for a circular queue?",
    options: [
      "The queue wraps around when it reaches the end of the array",
      "It can store only odd numbers",
      "It is slower than a linear queue",
      "None of the above",
    ],
    answer: "The queue wraps around when it reaches the end of the array",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "What is the dry run output of the following?\n\n```java\nint[] arr = {4, 5, 6};\nSystem.out.println(arr[1]);\n```\n",
    options: ["4", "5", "6", "Error"],
    answer: "5",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "What is the minimum number of edges in a tree with 10 nodes?",
    options: ["10", "9", "11", "8"],
    answer: "9",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "What is the time complexity of searching in a binary search tree in the best case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question:
      "Which traversal visits all nodes in a binary tree level by level?",
    options: ["Inorder", "Postorder", "Preorder", "Level Order"],
    answer: "Level Order",
  },
  {
    subject: "Data Structures",
    difficulty: "Easy",
    question: "In a max heap, which element is always at the root?",
    options: [
      "The smallest element",
      "The largest element",
      "The second largest element",
      "None of the above",
    ],
    answer: "The largest element",
  },

  // Data Structures - Medium
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "Which data structure is used in Depth First Search (DFS)?",
    options: ["Queue", "Stack", "Array", "Graph"],
    answer: "Stack",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the time complexity of searching in a binary search tree?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "Which of the following is an example of a self-balancing binary search tree?",
    options: ["Binary Tree", "AVL Tree", "Heap", "Stack"],
    answer: "AVL Tree",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "What is the difference between a stack and a queue?",
    options: [
      "Stack is LIFO, Queue is FIFO",
      "Stack is FIFO, Queue is LIFO",
      "Both are LIFO",
      "Both are FIFO",
    ],
    answer: "Stack is LIFO, Queue is FIFO",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "Which data structure is best for implementing a priority queue?",
    options: ["Stack", "Queue", "Heap", "Array"],
    answer: "Heap",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "In a hash table, what happens if the hash function produces the same index for two keys?",
    options: [
      "An error is thrown",
      "The keys are stored in the same index using chaining",
      "The hash table is rehashed",
      "The larger key overwrites the smaller key",
    ],
    answer: "The keys are stored in the same index using chaining",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "What is the purpose of a doubly linked list?",
    options: [
      "To allow traversal in both directions",
      "To store binary data",
      "To sort data",
      "To reduce memory usage",
    ],
    answer: "To allow traversal in both directions",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the time complexity of inserting a node in a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "Which traversal technique is used in Breadth First Search (BFS)?",
    options: ["Stack", "Queue", "Array", "Heap"],
    answer: "Queue",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the difference between a singly linked list and a doubly linked list?",
    options: [
      "Singly linked list has one pointer per node; doubly has two",
      "Doubly linked list is sorted, singly is not",
      "Singly linked list uses less memory",
      "Doubly linked list has more memory overhead",
    ],
    answer: "Singly linked list has one pointer per node; doubly has two",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the time complexity of deleting a node from a binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the maximum number of nodes in a binary tree of height h?",
    options: ["2^h - 1", "2^(h+1) - 1", "h^2", "h"],
    answer: "2^(h+1) - 1",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "What is the purpose of a sentinel node in a linked list?",
    options: [
      "To store additional data",
      "To act as a placeholder for the head or tail",
      "To increase memory efficiency",
      "To improve sorting performance",
    ],
    answer: "To act as a placeholder for the head or tail",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the time complexity of heapify operation in a binary heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "Which of the following traversal techniques produces a sorted order in a binary search tree?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    answer: "Inorder",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the primary advantage of using a balanced tree like AVL or Red-Black Tree?",
    options: [
      "Faster insertions",
      "Faster deletions",
      "Maintains O(log n) height for efficient operations",
      "Uses less memory",
    ],
    answer: "Maintains O(log n) height for efficient operations",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What happens when a queue becomes full in a circular queue implementation?",
    options: [
      "An error is thrown",
      "Queue wraps around and overwrites data",
      "Front and rear pointers meet",
      "Rear pointer resets to the front",
    ],
    answer: "Front and rear pointers meet",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "Which traversal is used to evaluate an expression tree?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    answer: "Postorder",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the auxiliary space complexity of quicksort in its best case?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "Which of the following can be used to represent a sparse matrix efficiently?",
    options: ["Array", "Linked List", "Graph", "Heap"],
    answer: "Linked List",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "What is the purpose of a min-heap?",
    options: [
      "To always have the largest element at the root",
      "To always have the smallest element at the root",
      "To sort elements",
      "To implement graphs",
    ],
    answer: "To always have the smallest element at the root",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "Which sorting algorithm is stable and works in O(n) for small ranges of numbers?",
    options: ["Merge Sort", "Quick Sort", "Counting Sort", "Heap Sort"],
    answer: "Counting Sort",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "What is the main characteristic of a B-Tree?",
    options: [
      "It is a binary tree",
      "It maintains sorted data and supports logarithmic time operations",
      "It uses a hash function",
      "It is a type of graph",
    ],
    answer: "It maintains sorted data and supports logarithmic time operations",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "What is the degree of a node in a graph?",
    options: [
      "Number of edges connected to the node",
      "Number of nodes adjacent to it",
      "Number of child nodes",
      "The depth of the node",
    ],
    answer: "Number of edges connected to the node",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "In a hash table, what does open addressing mean?",
    options: [
      "Storing elements in a linked list",
      "Storing elements directly in the array using rehashing",
      "Using separate hash functions",
      "None of the above",
    ],
    answer: "Storing elements directly in the array using rehashing",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the worst-case time complexity of searching in a skip list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "What is the adjacency list representation of a graph?",
    options: [
      "A list storing edges",
      "An array of lists where each list represents the adjacent vertices",
      "A matrix storing edge weights",
      "None of the above",
    ],
    answer:
      "An array of lists where each list represents the adjacent vertices",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question:
      "What is the minimum number of edges in a connected graph with n nodes?",
    options: ["n", "n-1", "n+1", "2n-1"],
    answer: "n-1",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "What is a trie primarily used for?",
    options: [
      "Storing integers",
      "Storing strings efficiently for search operations",
      "Sorting numbers",
      "Managing heaps",
    ],
    answer: "Storing strings efficiently for search operations",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "Which data structure is used to implement Dijkstra's algorithm?",
    options: ["Stack", "Priority Queue", "Queue", "Array"],
    answer: "Priority Queue",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "Explain the difference between a red-black tree and an AVL tree in terms of balancing operations.",
    options: [
      "Red-black tree requires fewer rotations but is less balanced",
      "AVL tree uses height-based balancing, while red-black uses color-based balancing",
      "Red-black trees are always balanced, AVL trees are not",
      "AVL tree is faster in balancing than red-black trees",
    ],
    answer:
      "AVL tree uses height-based balancing, while red-black uses color-based balancing",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the space complexity of storing a sparse matrix using a hash table?",
    options: ["O(n)", "O(m*n)", "O(n + m)", "O(1)"],
    answer: "O(n + m)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question: "What is the time complexity of heapifying an array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "How can you efficiently find the intersection of two sorted arrays?",
    options: [
      "Linear Search",
      "Binary Search",
      "Using Hashing",
      "Using Merge Sort",
    ],
    answer: "Using Merge Sort",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "Given a complete binary tree, write an algorithm to convert it into a max-heap in O(n) time.",
    options: [
      "Use heapify for each non-leaf node in reverse level order",
      "Sort the array and rebuild the heap",
      "Traverse the tree using BFS",
      "Build a binary search tree and then extract the heap",
    ],
    answer: "Use heapify for each non-leaf node in reverse level order",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "In a binary search tree, what is the time complexity of deleting a node with two children?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the time complexity of searching for an element in a red-black tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "Given a graph with V vertices and E edges, what is the time complexity of performing a depth-first search (DFS) on an adjacency matrix?",
    options: ["O(V + E)", "O(V^2)", "O(E^2)", "O(V log V)"],
    answer: "O(V^2)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "In a hash table with chaining, what is the worst-case time complexity of search, insert, and delete operations when the hash function is poor?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "How do you efficiently perform an in-order traversal on a threaded binary tree?",
    options: [
      "Using a stack",
      "Using recursion",
      "Using the threads themselves",
      "Using a queue",
    ],
    answer: "Using the threads themselves",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the amortized time complexity of inserting an element into a splay tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "How can you find the lowest common ancestor of two nodes in a binary tree in O(n) time?",
    options: [
      "Using DFS and backtracking",
      "Using a hash table to store parent pointers",
      "Using a BFS traversal",
      "Using level order traversal and sorting",
    ],
    answer: "Using DFS and backtracking",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the space complexity of a Fenwick Tree (Binary Indexed Tree)?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: "O(n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question: "How can you implement a min-max heap efficiently?",
    options: [
      "Using two separate heaps",
      "Using a single array with alternating levels",
      "Using a BST with both min and max pointers",
      "Using a hash table",
    ],
    answer: "Using a single array with alternating levels",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the time complexity of finding the strongly connected components in a directed graph?",
    options: ["O(V + E)", "O(V^2)", "O(E log V)", "O(V log V)"],
    answer: "O(V + E)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "In a Fibonacci Heap, what is the amortized time complexity of the delete operation?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question: "How can you detect a cycle in a directed graph using DFS?",
    options: [
      "Track visited and recursion stack for nodes",
      "Use a hash table to store edge pairs",
      "Perform BFS and check for back edges",
      "Sort the graph topologically",
    ],
    answer: "Track visited and recursion stack for nodes",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question: "What is the purpose of van Emde Boas Trees?",
    options: [
      "Efficiently perform operations on a small range of integers",
      "Optimize BST traversal",
      "Store data in a distributed environment",
      "Handle hash collisions",
    ],
    answer: "Efficiently perform operations on a small range of integers",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the best way to find the k-th smallest element in a stream of n elements?",
    options: [
      "Using a max heap of size k",
      "Using a min heap of size k",
      "Sorting the stream and taking the k-th element",
      "Using a binary search tree",
    ],
    answer: "Using a max heap of size k",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "In a segment tree, what is the time complexity of range updates?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the time complexity of union-find with path compression and union by rank?",
    options: ["O(1)", "O(log n)", "O(n)", "O(α(n))"],
    answer: "O(α(n))",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question: "What is the purpose of a Bloom Filter?",
    options: [
      "To store large datasets efficiently",
      "To quickly test membership in a set",
      "To optimize sorting operations",
      "To reduce memory overhead",
    ],
    answer: "To quickly test membership in a set",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the time complexity of finding the median in a stream of integers?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "How can you check if a binary tree is height-balanced in O(n) time?",
    options: [
      "Calculate the height at every node recursively",
      "Use DFS and calculate height in one traversal",
      "Check the difference in heights for every subtree",
      "Use a level order traversal",
    ],
    answer: "Use DFS and calculate height in one traversal",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "In a trie, what is the time complexity of inserting a word of length k?",
    options: ["O(1)", "O(k)", "O(k log n)", "O(n)"],
    answer: "O(k)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question: "How can you efficiently merge two balanced binary search trees?",
    options: [
      "Convert both to sorted arrays and merge",
      "Use an AVL balancing algorithm",
      "Perform in-order traversal on both simultaneously",
      "Insert nodes from one tree into the other",
    ],
    answer: "Convert both to sorted arrays and merge",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the worst-case height of a B-Tree of order m with n keys?",
    options: ["O(log n)", "O(log m n)", "O(m log n)", "O(m)"],
    answer: "O(log m n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question: "How can you implement a graph efficiently for sparse data?",
    options: [
      "Use an adjacency matrix",
      "Use an adjacency list",
      "Use a complete graph representation",
      "Use a hash table for edges",
    ],
    answer: "Use an adjacency list",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question:
      "What is the time complexity of Prim's algorithm using a Fibonacci Heap?",
    options: ["O(V + E)", "O(E log V)", "O(V^2)", "O(E + log V)"],
    answer: "O(E log V)",
  },
  {
    subject: "Data Structures",
    difficulty: "Hard",
    question: "How can you detect an articulation point in a graph?",
    options: [
      "Using Tarjan's Algorithm with DFS",
      "Using BFS and checking degrees",
      "Using a hash table",
      "Sorting the edges by weight",
    ],
    answer: "Using Tarjan's Algorithm with DFS",
  },

  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Given a complete binary tree represented as an array, write an algorithm to convert it into a max-heap in O(n) time.",
    options: [
      "Use heapify for each non-leaf node in reverse level order",
      "Sort the array and rebuild the heap",
      "Traverse the tree using BFS",
      "Build a binary search tree and then extract the heap",
    ],
    answer: "Use heapify for each non-leaf node in reverse level order",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "You are given an adjacency list representation of a graph. Write an algorithm to find all strongly connected components.",
    options: [
      "Use Kosaraju's algorithm",
      "Perform BFS for each node",
      "Use a union-find data structure",
      "Apply a topological sort",
    ],
    answer: "Use Kosaraju's algorithm",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Given a red-black tree, describe the sequence of rotations required after inserting a new node that violates its balancing property.",
    options: [
      "Identify and apply left or right rotations and recoloring",
      "Perform BFS until balance is restored",
      "Convert to AVL tree",
      "Rebuild the entire tree",
    ],
    answer: "Identify and apply left or right rotations and recoloring",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "What is the amortized time complexity of inserting an element into a Fibonacci heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "You are implementing a suffix array. Which algorithm should you use for the most efficient construction?",
    options: ["Radix Sort", "DC3 Algorithm", "Quick Sort", "KMP Algorithm"],
    answer: "DC3 Algorithm",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Design an algorithm to find the longest palindromic substring in O(n) time.",
    options: [
      "Use Manacher's algorithm",
      "Apply dynamic programming",
      "Perform string reversal and comparison",
      "Use a rolling hash",
    ],
    answer: "Use Manacher's algorithm",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "In a trie, how would you efficiently support prefix search for over 1 million words with minimum memory overhead?",
    options: [
      "Compress the trie using a compact representation",
      "Store words as a binary search tree",
      "Use a hash table for prefixes",
      "Create a separate index for common prefixes",
    ],
    answer: "Compress the trie using a compact representation",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "What is the theoretical maximum number of distinct minimum spanning trees for a graph with `n` nodes and unique weights?",
    options: ["1", "n - 1", "n!", "2^(n-1)"],
    answer: "1",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Which combination of algorithms is best for solving a dynamic graph problem efficiently?",
    options: [
      "Use dynamic connectivity and Dijkstra's algorithm",
      "DFS and Prim's algorithm",
      "Kruskal's algorithm and Floyd-Warshall",
      "Bellman-Ford and Union-Find",
    ],
    answer: "Use dynamic connectivity and Dijkstra's algorithm",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Given a graph with weighted edges and negative cycles, which algorithm can detect the negative cycles?",
    options: [
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm",
      "Dijkstra's Algorithm",
      "DFS with cycle detection",
    ],
    answer: "Bellman-Ford Algorithm",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given a binary search tree (BST) with nodes [10, 5, 15, 3, 7, 13, 17], explain how the algorithm for deleting node '5' works.",
    options: [
      "The node 5 is deleted and the tree is restructured.",
      "The node 5 is replaced by its inorder predecessor.",
      "The node 5 is removed and the children are connected directly to node 10.",
      "The node 5 is replaced by its inorder successor.",
    ],
    answer: "The node 5 is replaced by its inorder successor.",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the input list [5, 1, 4, 2, 8] and applying the heapify algorithm for a max heap, what is the sequence of transformations?",
    options: [
      "[5, 1, 4, 2, 8] -> [8, 5, 4, 2, 1]",
      "[5, 1, 4, 2, 8] -> [8, 1, 4, 5, 2]",
      "[8, 5, 4, 2, 1] -> [8, 5, 4, 2, 1]",
      "[8, 5, 4, 2, 1] -> [5, 1, 4, 8, 2]",
    ],
    answer: "[5, 1, 4, 2, 8] -> [8, 5, 4, 2, 1]",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the following input array [1, 2, 3, 4, 5], explain how the quicksort algorithm partitions this array with the pivot being 3.",
    options: [
      "[1, 2, 3, 4, 5] -> [1, 2, 3, 4, 5]",
      "[1, 2, 3, 4, 5] -> [1, 2, 3, 5, 4]",
      "[1, 2, 3, 4, 5] -> [1, 2, 3, 4, 5] after sorting",
      "[1, 2, 3, 4, 5] -> [1, 2, 4, 5, 3]",
    ],
    answer: "[1, 2, 3, 4, 5] -> [1, 2, 3, 4, 5]",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given a doubly linked list with nodes [10, 20, 30, 40, 50], explain how the algorithm for inserting a node with value '35' at the correct position works.",
    options: [
      "Node '35' is inserted between '30' and '40'.",
      "Node '35' is inserted between '20' and '30'.",
      "Node '35' is inserted at the end of the list.",
      "Node '35' is inserted at the beginning of the list.",
    ],
    answer: "Node '35' is inserted between '30' and '40'.",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Explain the time complexity of the operation 'get' in a hash map with open addressing, when the load factor is very high.",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    answer: "O(n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "What is the time complexity of performing an insert operation in an AVL tree (self-balancing binary search tree)?",
    options: ["O(log n)", "O(n log n)", "O(n)", "O(log n^2)"],
    answer: "O(log n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "What is the main difference between a singly linked list and a doubly linked list in terms of memory usage?",
    options: [
      "A doubly linked list uses more memory because it stores references to both next and previous nodes.",
      "A singly linked list uses more memory as it only stores a reference to the next node.",
      "Both use the same amount of memory.",
      "A doubly linked list uses less memory as it stores fewer references.",
    ],
    answer:
      "A doubly linked list uses more memory because it stores references to both next and previous nodes.",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Given a graph with V vertices and E edges, explain the space complexity of an adjacency matrix representation of the graph.",
    options: ["O(V + E)", "O(V^2)", "O(E)", "O(V)"],
    answer: "O(V^2)",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given a graph with the adjacency list: {A: [B, C], B: [A, D], C: [A, D], D: [B, C]}, and applying Depth-First Search (DFS) starting from vertex A, what is the traversal order?",
    options: ["A, B, D, C", "A, C, D, B", "A, B, C, D", "A, D, C, B"],
    answer: "A, B, D, C",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question: "What is the space complexity of a binary tree with n nodes?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(n)",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Given the following code snippet for a Min-Heap, what will be the output in array form?\n\n```python\nimport heapq\narr = [10, 7, 3, 5, 2]\nheapq.heapify(arr)\nprint(arr)\n```",
    options: [
      "[2, 3, 5, 7, 10]",
      "[10, 7, 3, 5, 2]",
      "[2, 10, 5, 7, 3]",
      "[10, 3, 2, 5, 7]",
    ],
    answer: "[2, 3, 5, 7, 10]",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "What is the output of the following Python code to find the longest common subsequence (LCS) for strings 'AGGTAB' and 'GXTXAYB'?\n\n```python\ndef lcs(X, Y):\n    m, n = len(X), len(Y)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if X[i - 1] == Y[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    result = ''\n    i, j = m, n\n    while i > 0 and j > 0:\n        if X[i - 1] == Y[j - 1]:\n            result = X[i - 1] + result\n            i -= 1\n            j -= 1\n        elif dp[i - 1][j] > dp[i][j - 1]:\n            i -= 1\n        else:\n            j -= 1\n    return result\nprint(lcs('AGGTAB', 'GXTXAYB'))\n```",
    options: ["'GTAB'", "'GTAY'", "'GXAB'", "'GXTAB'"],
    answer: "'GTAB'",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Dry Run: What is the output of the following code snippet for constructing a max-heap from array [4, 10, 3, 5, 1]?\n\n```python\nimport heapq\narr = [4, 10, 3, 5, 1]\nmax_heap = [-x for x in arr]\nheapq.heapify(max_heap)\nresult = [-heapq.heappop(max_heap) for _ in range(len(max_heap))]\nprint(result)\n```",
    options: [
      "[10, 5, 3, 4, 1]",
      "[10, 4, 3, 5, 1]",
      "[10, 5, 4, 3, 1]",
      "[10, 1, 5, 3, 4]",
    ],
    answer: "[10, 5, 3, 4, 1]",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the input array [8, 4, 7, 3, 1] and applying radix sort, what will be the output?\n\n```python\ndef radix_sort(arr):\n    max_val = max(arr)\n    exp = 1\n    while max_val // exp > 0:\n        count_sort(arr, exp)\n        exp *= 10\ndef count_sort(arr, exp):\n    n = len(arr)\n    output = [0] * n\n    count = [0] * 10\n    for i in range(n):\n        index = (arr[i] // exp) % 10\n        count[index] += 1\n    for i in range(1, 10):\n        count[i] += count[i - 1]\n    for i in range(n - 1, -1, -1):\n        index = (arr[i] // exp) % 10\n        output[count[index] - 1] = arr[i]\n        count[index] -= 1\n    for i in range(n):\n        arr[i] = output[i]\narr = [8, 4, 7, 3, 1]\nradix_sort(arr)\nprint(arr)\n```",
    options: [
      "[1, 3, 4, 7, 8]",
      "[8, 4, 7, 3, 1]",
      "[3, 1, 4, 7, 8]",
      "[1, 7, 8, 4, 3]",
    ],
    answer: "[1, 3, 4, 7, 8]",
  },
  {
    subject: "Data Structures",
    difficulty: "Psychopath",
    question:
      "What is the output of the following code snippet to construct a binary search tree (BST) and perform an inorder traversal?\n\n```python\nclass Node:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None\n\ndef insert(root, value):\n    if root is None:\n        return Node(value)\n    if value < root.value:\n        root.left = insert(root.left, value)\n    else:\n        root.right = insert(root.right, value)\n    return root\n\ndef inorder_traversal(root, result):\n    if root is not None:\n        inorder_traversal(root.left, result)\n        result.append(root.value)\n        inorder_traversal(root.right, result)\n    return result\nroot = None\nvalues = [7, 3, 10, 1, 5]\nfor value in values:\n    root = insert(root, value)\nprint(inorder_traversal(root, []))\n```",
    options: [
      "[1, 3, 5, 7, 10]",
      "[10, 7, 5, 3, 1]",
      "[5, 3, 1, 7, 10]",
      "[1, 5, 3, 10, 7]",
    ],
    answer: "[1, 3, 5, 7, 10]",
  },

  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which of the following is the simplest way to check if a number is even?",
    options: ["x % 2 == 0", "x / 2 == 0", "x & 1 == 0", "x ^ 2 == 0"],
    answer: "x % 2 == 0",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which of the following is a correct way to reverse a string in JavaScript?",
    options: [
      "reverse(string)",
      "string.reverse()",
      "string.split('').reverse().join('')",
      "string.reverse().split('')",
    ],
    answer: "string.split('').reverse().join('')",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question: "What is the output of the following expression: 3 + 2 * 4?",
    options: ["14", "11", "10", "20"],
    answer: "11",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "What is the output of the following code?\n\nlet arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr);",
    options: ["[1, 2, 3, 4]", "[1, 2, 3]", "[4, 3, 2, 1]", "undefined"],
    answer: "[1, 2, 3, 4]",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question: "Which of the following is true about a for loop in JavaScript?",
    options: [
      "It always runs at least once",
      "The condition is checked before each iteration",
      "It doesn't support an increment step",
      "The loop condition can't change during iteration",
    ],
    answer: "The condition is checked before each iteration",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which operator is used to compare two values for equality in JavaScript, ignoring type?",
    options: ["==", "===", "=", "is"],
    answer: "==",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which of the following statements is used to terminate a loop early in JavaScript?",
    options: ["break", "exit", "continue", "stop"],
    answer: "break",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which of the following represents a correct way to find the largest number in an array in JavaScript?",
    options: [
      "Math.max(...arr)",
      "arr.max()",
      "arr.reduce(max)",
      "arr[0] > arr[1]",
    ],
    answer: "Math.max(...arr)",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question: "Which data structure uses LIFO (Last In First Out) order?",
    options: ["Queue", "Array", "Stack", "List"],
    answer: "Stack",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which of the following is the correct syntax to create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "create function myFunction() {}",
      "function = myFunction() {}",
      "myFunction() function {}",
    ],
    answer: "function myFunction() {}",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "What is the output of the following code?\n\nlet x = 5;\nconsole.log(x++);",
    options: ["6", "5", "undefined", "Error"],
    answer: "5",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which of the following correctly declares a constant in JavaScript?",
    options: [
      "const pi = 3.14;",
      "let pi = 3.14;",
      "constant pi = 3.14;",
      "var pi = 3.14;",
    ],
    answer: "const pi = 3.14;",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which method is used to remove the last element of an array in JavaScript?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "pop()",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question: "Which of the following is a falsy value in JavaScript?",
    options: ["0", "1", "'false'", "[]"],
    answer: "0",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "What will the following code output?\n\nconsole.log(typeof null);",
    options: ["'null'", "'object'", "'undefined'", "'boolean'"],
    answer: "'object'",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which method can be used to convert a string to an integer in JavaScript?",
    options: ["parseInt()", "toInt()", "convertInt()", "StringToInt()"],
    answer: "parseInt()",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "What is the output of the following code?\n\nlet x = 2;\nx = x ** 3;\nconsole.log(x);",
    options: ["8", "6", "9", "Error"],
    answer: "8",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which method is used to add one or more elements to the end of an array?",
    options: ["push()", "pop()", "concat()", "add()"],
    answer: "push()",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which of the following is the correct way to write an arrow function in JavaScript?",
    options: [
      "let add = (a, b) => a + b;",
      "let add = (a, b) => { return a + b; }",
      "Both A and B",
      "None of the above",
    ],
    answer: "Both A and B",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question: "Which operator is used to check strict equality in JavaScript?",
    options: ["==", "===", "!=", "!=="],
    answer: "===",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "What does the 'typeof' operator return for an array in JavaScript?",
    options: ["'array'", "'object'", "'undefined'", "'list'"],
    answer: "'object'",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "What is the output of the following code?\n\nconsole.log(Boolean(''));",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question: "Which method is used to iterate over an array in JavaScript?",
    options: ["forEach()", "map()", "filter()", "All of the above"],
    answer: "All of the above",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which function is used to execute a block of code after a specified time in JavaScript?",
    options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    answer: "setTimeout()",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "What will be the output of the following code?\n\nlet x = '5';\nconsole.log(+x);",
    options: ["'5'", "5", "'+5'", "undefined"],
    answer: "5",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which of the following methods returns a new array with only the elements that pass a condition?",
    options: ["filter()", "map()", "forEach()", "slice()"],
    answer: "filter()",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which symbol is used to define a template literal in JavaScript?",
    options: ["'", '"', "`", "~"],
    answer: "`",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "What will be the result of the following code?\n\nconsole.log(2 + '2');",
    options: ["4", "'22'", "'4'", "Error"],
    answer: "'22'",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question: "Which keyword is used to create a class in JavaScript?",
    options: ["class", "object", "function", "constructor"],
    answer: "class",
  },
  {
    subject: "Logic Building",
    difficulty: "Easy",
    question:
      "Which method is used to remove the first element of an array in JavaScript?",
    options: ["shift()", "pop()", "splice()", "remove()"],
    answer: "shift()",
  },

  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What will be the output of the following JavaScript code?\n\nlet arr = [1, 2, 3];\narr[10] = 5;\nconsole.log(arr.length);",
    options: ["3", "5", "11", "10"],
    answer: "11",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question: "Which algorithm is used to find the shortest path in a graph?",
    options: [
      "Dijkstra's Algorithm",
      "QuickSort",
      "Binary Search",
      "Merge Sort",
    ],
    answer: "Dijkstra's Algorithm",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Which of the following time complexities represents the best case for QuickSort?",
    options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
    answer: "O(n log n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question: "What is the worst-case time complexity of bubble sort?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
    answer: "O(n^2)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Given an array of numbers, write an algorithm to find the two numbers that add up to a given target sum. What is the time complexity of the most efficient solution?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "You are given a binary tree. Which traversal technique would you use to print the nodes from top to bottom, left to right?",
    options: [
      "In-order Traversal",
      "Pre-order Traversal",
      "Post-order Traversal",
      "Level-order Traversal",
    ],
    answer: "Level-order Traversal",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What is the time complexity of searching for an element in a balanced binary search tree?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question: "Which of the following statements about recursion is false?",
    options: [
      "Recursion is often used to break a problem into smaller sub-problems.",
      "Recursive functions do not require a base case.",
      "Recursion can be inefficient without proper optimization.",
      "Recursion is usually more memory-intensive than iteration.",
    ],
    answer: "Recursive functions do not require a base case.",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What will be the output of the following code?\n\nlet x = 5;\nlet y = x++ + ++x;\nconsole.log(y);",
    options: ["11", "10", "9", "12"],
    answer: "11",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Which of the following sorting algorithms does not have a worst-case time complexity of O(n log n)?",
    options: ["Merge Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
    answer: "Bubble Sort",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the time complexity of the best known algorithm for multiplying two n-digit numbers?",
    options: ["O(n^2)", "O(n log n)", "O(n^3)", "O(n^2 log n)"],
    answer: "O(n^2 log n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What will be the output of the following code?\n\nlet obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj).length);",
    options: ["1", "2", "undefined", "Error"],
    answer: "2",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Which of the following data structures is the most efficient for implementing a priority queue?",
    options: ["Array", "Linked List", "Heap", "Binary Search Tree"],
    answer: "Heap",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What is the output of the following code?\n\nlet x = '5';\nlet y = +x + 5;\nconsole.log(typeof y);",
    options: ["'number'", "'string'", "'undefined'", "'object'"],
    answer: "'number'",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "In a graph, what is the term for the number of edges connected to a vertex?",
    options: ["Degree", "Weight", "Edge Count", "Path Length"],
    answer: "Degree",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Which of the following techniques uses divide-and-conquer for sorting?",
    options: ["Bubble Sort", "QuickSort", "Insertion Sort", "Selection Sort"],
    answer: "QuickSort",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What will be the output of the following code?\n\nlet x = [10, 20, 30];\nconsole.log(x.indexOf(40));",
    options: ["-1", "0", "2", "undefined"],
    answer: "-1",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question: "What is the best data structure to implement an undo feature?",
    options: ["Queue", "Stack", "Linked List", "Heap"],
    answer: "Stack",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What will be the output of the following code?\n\nconsole.log(0.1 + 0.2 === 0.3);",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What is the space complexity of a breadth-first search (BFS) algorithm on a graph?",
    options: ["O(V + E)", "O(V)", "O(E)", "O(V^2)"],
    answer: "O(V + E)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Which of the following is true about the Set object in JavaScript?",
    options: [
      "A Set allows duplicate values.",
      "A Set is iterable.",
      "A Set stores elements in insertion order.",
      "Both B and C",
    ],
    answer: "Both B and C",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What is the time complexity of inserting an element into a hash table in the average case?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Which of the following is a characteristic of dynamic programming?",
    options: [
      "It solves problems recursively without storing intermediate results.",
      "It stores the results of sub-problems to avoid recomputation.",
      "It always has a time complexity of O(n log n).",
      "It uses randomization to improve performance.",
    ],
    answer: "It stores the results of sub-problems to avoid recomputation.",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What will be the output of the following code?\n\nlet a = [1, 2, 3];\nlet b = [...a, 4];\nconsole.log(b);",
    options: ["[1, 2, 3, 4]", "[1, 2, 3]", "undefined", "Error"],
    answer: "[1, 2, 3, 4]",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question: "What is the time complexity of the Merge Sort algorithm?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n log n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Which of the following represents the correct syntax for using the 'map' method in JavaScript?",
    options: [
      "array.map((element) => element * 2)",
      "map(array, element => element * 2)",
      "array.map[element => element * 2]",
      "map(array).element * 2",
    ],
    answer: "array.map((element) => element * 2)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "It refers to the global object in all contexts.",
      "It refers to the current function being executed.",
      "It refers to the object that the function is a property of.",
      "It refers to the prototype of the current object.",
    ],
    answer: "It refers to the object that the function is a property of.",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Which of the following is the best data structure for implementing a graph?",
    options: [
      "Adjacency Matrix",
      "Adjacency List",
      "Both A and B",
      "None of the above",
    ],
    answer: "Both A and B",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What is the output of the following code?\n\nlet str = 'hello';\nconsole.log(str.charAt(5));",
    options: ["'o'", "'' (empty string)", "undefined", "Error"],
    answer: "'' (empty string)",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "What is the output of the following code?\n\nlet arr = [10, 20, 30];\narr.splice(1, 1);\nconsole.log(arr);",
    options: ["[10, 30]", "[10, 20]", "[10, 30, 20]", "undefined"],
    answer: "[10, 30]",
  },
  {
    subject: "Logic Building",
    difficulty: "Medium",
    question:
      "Which of the following is a property of a depth-first search (DFS) algorithm?",
    options: [
      "It uses a queue for implementation.",
      "It explores as far as possible along each branch before backtracking.",
      "It guarantees the shortest path in an unweighted graph.",
      "It is less memory-intensive than BFS.",
    ],
    answer:
      "It explores as far as possible along each branch before backtracking.",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "Which of the following is the most efficient algorithm for finding the median of two sorted arrays?",
    options: [
      "Merge Sort",
      "Quick Select",
      "Binary Search",
      "Divide and Conquer",
    ],
    answer: "Binary Search",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the time complexity of checking if a graph is bipartite using BFS?",
    options: ["O(V + E)", "O(V^2)", "O(V log E)", "O(E)"],
    answer: "O(V + E)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "Which of the following is true about the time complexity of the Fast Fourier Transform (FFT)?",
    options: ["O(n^2)", "O(n log n)", "O(log n)", "O(n^3)"],
    answer: "O(n log n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "Which sorting algorithm is used in Timsort, the default sorting algorithm in Java?",
    options: ["QuickSort", "Merge Sort", "Heap Sort", "Insertion Sort"],
    answer: "Merge Sort",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the space complexity of the recursive implementation of the Merge Sort algorithm?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the time complexity of the dynamic programming approach to solving the 0/1 knapsack problem?",
    options: ["O(nW)", "O(W^2)", "O(n^2)", "O(Wn)"],
    answer: "O(nW)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "In a complete binary tree with n nodes, how many leaf nodes does the tree contain?",
    options: ["n/2", "n/2 + 1", "log n", "n"],
    answer: "n/2",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the space complexity of the depth-first search (DFS) algorithm in an undirected graph with n vertices and m edges?",
    options: ["O(n + m)", "O(n)", "O(m)", "O(log n)"],
    answer: "O(n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "How many comparisons does it take to sort an array of n elements using merge sort?",
    options: ["O(n log n)", "O(n^2)", "O(n log n + n)", "O(n^3)"],
    answer: "O(n log n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the amortized time complexity of the insert operation in a dynamic array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(1) amortized, O(n) worst-case"],
    answer: "O(1) amortized, O(n) worst-case",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the expected runtime of the randomized QuickSort algorithm on an array of size n?",
    options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
    answer: "O(n log n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question: `Given the following C++ code:
    #include <iostream>
    #include <vector>
    using namespace std;
    
    int countInversions(vector<int>& arr) {
        int n = arr.size();
        int count = 0;
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (arr[i] > arr[j])
                    count++;
            }
        }
        return count;
    }
    
    int main() {
        vector<int> arr = {3, 1, 2, 4};
        cout << countInversions(arr) << endl;
        return 0;
    }`,
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "Which of the following algorithms uses divide and conquer for matrix multiplication?",
    options: [
      "Naive Algorithm",
      "Strassen's Algorithm",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
    ],
    answer: "Strassen's Algorithm",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the time complexity of solving the Longest Increasing Subsequence (LIS) using a dynamic programming approach?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    answer: "O(n^2)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question: `Given the following C++ code:
    #include <iostream>
    using namespace std;
    
    int mysteryFunction(int n) {
        if (n <= 1) return n;
        return mysteryFunction(n - 1) + mysteryFunction(n - 2);
    }
    
    int main() {
        cout << mysteryFunction(6) << endl;
        return 0;
    }`,
    options: ["5", "8", "13", "21"],
    answer: "8",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the best-case time complexity of the Bubble Sort algorithm?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
    answer: "O(n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the time complexity of finding the shortest path in a weighted graph using Dijkstra’s algorithm?",
    options: ["O(V + E)", "O((V + E) log V)", "O(V^2)", "O(E log V)"],
    answer: "O((V + E) log V)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "How many spanning trees can be generated from a complete graph with n vertices?",
    options: ["n^n", "n^(n-2)", "(n-1)^n", "n*n"],
    answer: "n^(n-2)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the worst-case time complexity of the BFS algorithm for traversing a graph?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V log V)"],
    answer: "O(V + E)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question: "What is the recurrence relation of the Tower of Hanoi problem?",
    options: [
      "T(n) = 2T(n-1) + 1",
      "T(n) = T(n-1) + n",
      "T(n) = 2^n",
      "T(n) = T(n/2) + 1",
    ],
    answer: "T(n) = 2T(n-1) + 1",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question: `Given the following C++ code:\n
    #include <iostream>\n
    using namespace std;\n
    
    void printPattern(int n) {\n
        if (n == 0) return;\n
        cout << n << " ";\n
        printPattern(n - 1);\n
        cout << n << " ";\n
    }\n
    
    int main() {\n
        printPattern(3);\n
        return 0;\n
    }`,
    options: ["3 2 1", "1 2 3", "3 2 1 1 2 3", "3 2 1 1 2 3"],
    answer: "3 2 1 1 2 3",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the time complexity of Floyd-Warshall's Algorithm for finding the shortest paths in a graph?",
    options: ["O(V + E)", "O(V^3)", "O(E log V)", "O(V^2 log V)"],
    answer: "O(V^3)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the time complexity of constructing a Min-Heap from an unordered array?",
    options: ["O(n log n)", "O(n)", "O(log n)", "O(1)"],
    answer: "O(n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "Which of the following is a valid approach for solving the Maximum Flow problem?",
    options: [
      "Floyd-Warshall Algorithm",
      "Ford-Fulkerson Method",
      "Kruskal’s Algorithm",
      "Dijkstra’s Algorithm",
    ],
    answer: "Ford-Fulkerson Method",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the purpose of the Bellman-Ford algorithm in graph theory?",
    options: [
      "Finding the shortest path in an undirected graph",
      "Detecting negative weight cycles",
      "Finding minimum spanning trees",
      "Counting the number of connected components",
    ],
    answer: "Detecting negative weight cycles",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question: `Given the following C++ code:
    #include <iostream>
    using namespace std;
    
    int main() {
        int x = 5, y = 10;
        int* ptr1 = &x, *ptr2 = &y;
        *ptr2 = *ptr1;
        cout << x << " " << y << endl;
        return 0;
    }`,
    options: ["5 10", "10 10", "5 5", "10 5"],
    answer: "5 5",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question:
      "What is the runtime complexity of checking if a binary tree is a Binary Search Tree (BST) using inorder traversal?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question: "Which of the following is true about a Red-Black Tree?",
    options: [
      "It is a type of binary heap.",
      "It maintains balance by limiting the height difference.",
      "Every path from root to leaf has the same black nodes.",
      "It cannot be used in dynamic sets.",
    ],
    answer: "Every path from root to leaf has the same black nodes",
  },
  {
    subject: "Logic Building",
    difficulty: "Hard",
    question: `Given the following C++ code:
    #include <iostream>\n
    using namespace std;\n
    
    int main() {\n
        int a[] = {1, 2, 3};\n
        int* p = a;\n
        cout << *(p + 1) << endl;\n
        return 0;\n
    }\n`,
    options: ["1", "2", "3", "Segmentation fault"],
    answer: "2",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "Given a sequence of numbers, find the maximum possible product of any three numbers in O(n) time complexity. What is the best algorithm for solving this?",
    options: [
      "Sorting the array",
      "Using a hash map",
      "Using two priority queues",
      "One-pass scanning algorithm",
    ],
    answer: "One-pass scanning algorithm",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "In a directed graph with negative weight edges, which algorithm can be used to find the shortest path?",
    options: [
      "Bellman-Ford",
      "Dijkstra's Algorithm",
      "Floyd-Warshall",
      "A* Search",
    ],
    answer: "Bellman-Ford",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "What is the space complexity of storing a sparse graph using adjacency lists?",
    options: ["O(V^2)", "O(V + E)", "O(E log V)", "O(V log V)"],
    answer: "O(V + E)",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "Which algorithm is most appropriate to solve the traveling salesman problem in polynomial time?",
    options: [
      "Greedy Algorithm",
      "Dynamic Programming",
      "Branch and Bound",
      "No polynomial-time solution exists",
    ],
    answer: "No polynomial-time solution exists",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "What is the expected time complexity of the quickselect algorithm to find the kth smallest element in an unsorted array?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "What is the best known algorithm to multiply two n x n matrices in terms of time complexity?",
    options: ["O(n^2)", "O(n^3)", "O(n^2.81)", "O(n^3.1)"],
    answer: "O(n^2.81)",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "In an undirected graph, which algorithm can be used to find the connected components of the graph in O(V + E) time?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Union-Find Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    answer: "Depth-First Search (DFS)",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "You are given a 2D grid. Write an algorithm to find the number of distinct islands in the grid, where an island is a group of 1's connected horizontally or vertically. What is the time complexity?",
    options: ["O(n*m)", "O(n*m log n)", "O(log n)", "O(n^2)"],
    answer: "O(n*m)",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "What is the optimal way to store a sparse matrix for fast retrieval of elements, considering both space and time complexity?",
    options: [
      "Use a hash map",
      "Use a 2D array",
      "Use a linked list",
      "Use a compressed sparse row (CSR) format",
    ],
    answer: "Use a compressed sparse row (CSR) format",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "What is the maximum possible number of comparisons required to determine the median of an unsorted array of size n using the median of medians algorithm?",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
    answer: "O(n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the following sequence of numbers [2, 3, 1, 5, 6], explain how a merge sort algorithm sorts the array.",
    options: [
      "The array becomes [1, 2, 3, 5, 6] after the merging steps.",
      "The array becomes [1, 2, 3, 5, 6] after the first split.",
      "The array becomes [6, 5, 3, 2, 1] after sorting.",
      "The array becomes [1, 2, 3, 5, 6] after the first comparison.",
    ],
    answer: "The array becomes [1, 2, 3, 5, 6] after the merging steps.",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given a set of numbers [10, 5, 7, 3, 8], explain how a selection sort algorithm sorts the array.",
    options: [
      "[10, 5, 7, 3, 8] -> [3, 5, 7, 8, 10]",
      "[10, 5, 7, 3, 8] -> [5, 7, 3, 8, 10]",
      "[3, 5, 7, 8, 10] -> [5, 3, 7, 10, 8]",
      "[3, 5, 7, 8, 10] -> [7, 5, 8, 10, 3]",
    ],
    answer: "[10, 5, 7, 3, 8] -> [3, 5, 7, 8, 10]",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given a stack with elements [3, 5, 7, 8], explain the steps of the push and pop operations to simulate a queue using two stacks.",
    options: [
      "First, push 3, 5, 7, 8 to Stack 1, then pop elements from Stack 1 to Stack 2 for dequeue.",
      "First, push 3, 5, 7 to Stack 1, and pop elements from Stack 1 for dequeue.",
      "Push all elements to Stack 2 and pop them for enqueue.",
      "Pop from Stack 1, and push to Stack 2 for enqueue.",
    ],
    answer:
      "First, push 3, 5, 7, 8 to Stack 1, then pop elements from Stack 1 to Stack 2 for dequeue.",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "Given an array [9, 2, 8, 7, 5], explain how a bubble sort algorithm performs the sorting steps.",
    options: [
      "[9, 2, 8, 7, 5] -> [2, 8, 7, 5, 9]",
      "[9, 2, 8, 7, 5] -> [2, 7, 5, 8, 9]",
      "[5, 7, 8, 9, 2] -> [5, 2, 7, 8, 9]",
      "[9, 8, 7, 5, 2] -> [2, 5, 7, 8, 9]",
    ],
    answer: "[9, 2, 8, 7, 5] -> [2, 8, 7, 5, 9]",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given a graph with edges (1,2), (1,3), (3,4), and (2,5), perform a depth-first search (DFS) starting from node 1.",
    options: [
      "1 -> 2 -> 5 -> 3 -> 4",
      "1 -> 3 -> 4 -> 2 -> 5",
      "1 -> 2 -> 3 -> 4 -> 5",
      "1 -> 5 -> 4 -> 3 -> 2",
    ],
    answer: "1 -> 2 -> 5 -> 3 -> 4",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "What is the result of performing a binary search on the sorted array [1, 3, 5, 7, 9] to find the number '7'?",
    options: [
      "Middle element is 5, move right; next middle is 7, target found.",
      "Middle element is 5, move left; next middle is 3, target found.",
      "Middle element is 7, target found.",
      "Middle element is 3, target found.",
    ],
    answer: "Middle element is 5, move right; next middle is 7, target found.",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "What is the time complexity of performing a linear search in an unsorted array?",
    options: ["O(log n)", "O(n)", "O(n^2)", "O(log n^2)"],
    answer: "O(n)",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the array [4, 2, 7, 1], explain how the quicksort algorithm partitions the array with the pivot being 4.",
    options: [
      "[4, 2, 7, 1] -> [2, 1, 4, 7]",
      "[4, 2, 7, 1] -> [2, 1, 7, 4]",
      "[1, 2, 4, 7]",
      "[1, 2, 7, 4]",
    ],
    answer: "[4, 2, 7, 1] -> [2, 1, 4, 7]",
  },
  {
    subject: "Logic Building",
    difficulty: "Psychopath",
    question:
      "What is the result of applying the modulus operation to the number 55 divided by 7?",
    options: ["7", "8", "6", "55"],
    answer: "6",
  },

  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "What is the time complexity of accessing an element in an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "Which algorithm is used to find the greatest common divisor (GCD) of two numbers?",
    options: [
      "Euclidean Algorithm",
      "QuickSort",
      "Merge Sort",
      "Binary Search",
    ],
    answer: "Euclidean Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What is the worst-case time complexity of Bubble Sort?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    answer: "O(n^2)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "Which of the following is the best algorithm for searching for an element in a sorted array?",
    options: ["Linear Search", "Binary Search", "Selection Sort", "Quick Sort"],
    answer: "Binary Search",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What does the algorithm 'Merge Sort' do?",
    options: [
      "Sorts by dividing the array into smaller parts",
      "Searches an array",
      "Finds the maximum element",
      "Sorts by swapping elements",
    ],
    answer: "Sorts by dividing the array into smaller parts",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "Which of the following is an in-place sorting algorithm?",
    options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Radix Sort"],
    answer: "Quick Sort",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "What is the time complexity of a binary search algorithm on a sorted array of size n?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What is the space complexity of the Merge Sort algorithm?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "Which data structure is used for implementing a Breadth-First Search (BFS)?",
    options: ["Stack", "Queue", "Priority Queue", "Array"],
    answer: "Queue",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "What does the 'Quick Sort' algorithm use for partitioning the array?",
    options: [
      "Median element",
      "Pivot element",
      "Random element",
      "First element",
    ],
    answer: "Pivot element",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "What is the time complexity of accessing an element in an array?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "Which algorithm is used to find the greatest common divisor (GCD) of two numbers?",
    options: [
      "Euclidean Algorithm",
      "QuickSort",
      "Merge Sort",
      "Binary Search",
    ],
    answer: "Euclidean Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What is the worst-case time complexity of Bubble Sort?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    answer: "O(n^2)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "Which of the following is the best algorithm for searching for an element in a sorted array?",
    options: ["Linear Search", "Binary Search", "Selection Sort", "Quick Sort"],
    answer: "Binary Search",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What does the algorithm 'Merge Sort' do?",
    options: [
      "Sorts by dividing the array into smaller parts",
      "Searches an array",
      "Finds the maximum element",
      "Sorts by swapping elements",
    ],
    answer: "Sorts by dividing the array into smaller parts",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "Which of the following is an in-place sorting algorithm?",
    options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Radix Sort"],
    answer: "Quick Sort",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "What is the time complexity of a binary search algorithm on a sorted array of size n?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: "O(log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What is the space complexity of the Merge Sort algorithm?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "Which data structure is used for implementing a Breadth-First Search (BFS)?",
    options: ["Stack", "Queue", "Priority Queue", "Array"],
    answer: "Queue",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "What does the 'Quick Sort' algorithm use for partitioning the array?",
    options: [
      "Median element",
      "Pivot element",
      "Random element",
      "First element",
    ],
    answer: "Pivot element",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What is the primary purpose of sorting algorithms?",
    options: [
      "Arranging data in a specific order",
      "Searching for an element",
      "Performing arithmetic operations",
      "Compressing data",
    ],
    answer: "Arranging data in a specific order",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "Which of the following algorithms is not a sorting algorithm?",
    options: ["Bubble Sort", "Binary Search", "Quick Sort", "Merge Sort"],
    answer: "Binary Search",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What is the best-case time complexity of Bubble Sort?",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    answer: "O(n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "Which of the following algorithms is used to reverse an array?",
    options: [
      "Iterative Algorithm",
      "Bubble Sort",
      "Binary Search",
      "Merge Sort",
    ],
    answer: "Iterative Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "What is the time complexity of inserting an element in the middle of a singly linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "Which algorithm finds the minimum element in an array?",
    options: ["Selection Sort", "Merge Sort", "Binary Search", "Quick Sort"],
    answer: "Selection Sort",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What is the main feature of a greedy algorithm?",
    options: [
      "It makes the locally optimal choice at each step",
      "It solves the entire problem in one go",
      "It always backtracks",
      "It avoids recursion",
    ],
    answer: "It makes the locally optimal choice at each step",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "What is the time complexity of finding the maximum element in an unsorted array of size n?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question:
      "Which of the following operations can a stack data structure perform efficiently?",
    options: [
      "Push and Pop",
      "Insert at any position",
      "Find the maximum element",
      "Sort the stack",
    ],
    answer: "Push and Pop",
  },
  {
    subject: "Algorithms",
    difficulty: "Easy",
    question: "What is the main use of a queue data structure?",
    options: [
      "Processing data in a First-In-First-Out (FIFO) order",
      "Performing depth-first search",
      "Storing sorted data",
      "Finding the shortest path",
    ],
    answer: "Processing data in a First-In-First-Out (FIFO) order",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "Which of the following is a stable sorting algorithm?",
    options: ["Merge Sort", "Quick Sort", "Heap Sort", "Selection Sort"],
    answer: "Merge Sort",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n^2)", "O(n log n)", "O(n^3)", "O(log n)"],
    answer: "O(n^2)",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following algorithms can be used to solve the Knapsack Problem?",
    options: [
      "Dynamic Programming",
      "Greedy Algorithm",
      "Divide and Conquer",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "What is the time complexity of finding the shortest path from a source node to all other nodes using Dijkstra's algorithm?",
    options: ["O(n^2)", "O(V^2)", "O(E + V log V)", "O(n log n)"],
    answer: "O(E + V log V)",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following is a correct use of Depth-First Search (DFS)?",
    options: [
      "Finding the shortest path",
      "Detecting cycles in a graph",
      "Finding the largest element",
      "Searching for an element in an array",
    ],
    answer: "Detecting cycles in a graph",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which algorithm is most efficient for finding the minimum spanning tree (MST) of a graph?",
    options: [
      "Kruskal's Algorithm",
      "Prim's Algorithm",
      "Dijkstra's Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    answer: "Prim's Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following algorithms is used to solve the Travelling Salesman Problem?",
    options: [
      "Greedy Algorithm",
      "Backtracking",
      "Dynamic Programming",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "What is the average time complexity of searching an element in a hash table with separate chaining?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "Which of the following is the correct definition of a heap?",
    options: [
      "A complete binary tree",
      "A binary tree where each node is smaller than its children",
      "A binary tree where each node is larger than its children",
      "A tree with no child node having more than two children",
    ],
    answer: "A complete binary tree",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "In which of the following cases is the use of a hash table most beneficial?",
    options: [
      "When searching for an element in a large dataset",
      "When sorting a large dataset",
      "When performing a depth-first search",
      "When performing a breadth-first search",
    ],
    answer: "When searching for an element in a large dataset",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of the Dijkstra's algorithm for finding the shortest path in a graph with an adjacency matrix?",
    options: ["O(V^2)", "O(V log V)", "O(E log V)", "O(E + V log V)"],
    answer: "O(V^2)",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "Which of the following is used for topological sorting?",
    options: ["DFS", "BFS", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
    answer: "DFS",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "What is the space complexity of Merge Sort?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following data structures is used in a Breadth-First Search (BFS)?",
    options: ["Stack", "Queue", "Heap", "Priority Queue"],
    answer: "Queue",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following algorithms is not used for solving shortest path problems?",
    options: [
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
      "Floyd-Warshall Algorithm",
      "Kruskal's Algorithm",
    ],
    answer: "Kruskal's Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "What is the average-case time complexity of Quick Sort?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    answer: "O(n log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "Which of the following is used to implement a priority queue?",
    options: ["Array", "Heap", "Stack", "Linked List"],
    answer: "Heap",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "What is the best-case time complexity of Insertion Sort?",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(1)"],
    answer: "O(n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following traversal techniques can be used to check if a binary tree is a binary search tree?",
    options: [
      "In-order Traversal",
      "Pre-order Traversal",
      "Post-order Traversal",
      "Level-order Traversal",
    ],
    answer: "In-order Traversal",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "What is the main advantage of a balanced binary search tree over an unbalanced one?",
    options: [
      "Faster insertions",
      "Faster deletions",
      "Guaranteed O(log n) time complexity for operations",
      "Easier implementation",
    ],
    answer: "Guaranteed O(log n) time complexity for operations",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which algorithm is commonly used to detect negative weight cycles in a graph?",
    options: [
      "Dijkstra's Algorithm",
      "Prim's Algorithm",
      "Bellman-Ford Algorithm",
      "Kruskal's Algorithm",
    ],
    answer: "Bellman-Ford Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "What is the main purpose of a hash function in a hash table?",
    options: [
      "Sorting data",
      "Searching data",
      "Mapping keys to indices",
      "Balancing a binary tree",
    ],
    answer: "Mapping keys to indices",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which traversal algorithm is used to solve the N-Queens problem?",
    options: [
      "Breadth-First Search",
      "Depth-First Search",
      "Dijkstra's Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    answer: "Depth-First Search",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "What is the purpose of the pivot element in Quick Sort?",
    options: [
      "Splitting the array into two halves",
      "Finding the maximum value",
      "Sorting the array in-place",
      "Reversing the array",
    ],
    answer: "Splitting the array into two halves",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following algorithms is used for finding articulation points in a graph?",
    options: ["Kruskal's Algorithm", "DFS", "BFS", "Dijkstra's Algorithm"],
    answer: "DFS",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following problems is best solved using Dynamic Programming?",
    options: [
      "Sorting an array",
      "Finding the shortest path in an unweighted graph",
      "Knapsack Problem",
      "MST (Minimum Spanning Tree)",
    ],
    answer: "Knapsack Problem",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following algorithms uses a divide-and-conquer approach?",
    options: ["Quick Sort", "Bubble Sort", "Heap Sort", "Insertion Sort"],
    answer: "Quick Sort",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following is a greedy algorithm for finding the MST (Minimum Spanning Tree)?",
    options: [
      "Bellman-Ford Algorithm",
      "Prim's Algorithm",
      "Floyd-Warshall Algorithm",
      "DFS",
    ],
    answer: "Prim's Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question: "What is the time complexity of Heap Sort in the worst case?",
    options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
    answer: "O(n log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which of the following problems can be solved using backtracking?",
    options: [
      "Sorting an array",
      "Knapsack Problem",
      "Sudoku Solver",
      "Finding the shortest path",
    ],
    answer: "Sudoku Solver",
  },
  {
    subject: "Algorithms",
    difficulty: "Medium",
    question:
      "Which graph traversal algorithm is most suitable for finding connected components?",
    options: ["DFS", "BFS", "Dijkstra's Algorithm", "Prim's Algorithm"],
    answer: "DFS",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following is true about the time complexity of the Floyd-Warshall algorithm for finding all pairs shortest paths?",
    options: ["O(V^3)", "O(V^2 log V)", "O(V log V)", "O(V^2)"],
    answer: "O(V^3)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the space complexity of the Dynamic Programming approach for solving the 0/1 Knapsack problem?",
    options: ["O(n)", "O(W)", "O(nW)", "O(n^2)"],
    answer: "O(nW)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following is true about the time complexity of Heap Sort?",
    options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
    answer: "O(n log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following is an example of a non-comparison-based sorting algorithm?",
    options: ["Bubble Sort", "Quick Sort", "Counting Sort", "Merge Sort"],
    answer: "Counting Sort",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of the Bellman-Ford algorithm for finding the shortest path in a graph with negative weights?",
    options: ["O(V^2)", "O(EV)", "O(V^3)", "O(E + V log V)"],
    answer: "O(EV)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the space complexity of an adjacency list representation for a graph with V vertices and E edges?",
    options: ["O(V + E)", "O(V^2)", "O(E)", "O(V)"],
    answer: "O(V + E)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of performing an insert operation in a Red-Black Tree?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(log n^2)"],
    answer: "O(log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following algorithms uses a divide-and-conquer approach to solving the Maximum Subarray Problem?",
    options: [
      "Merge Sort",
      "Quick Sort",
      "Divide and Conquer",
      "Kadane's Algorithm",
    ],
    answer: "Divide and Conquer",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of the A* algorithm for finding the shortest path in a graph?",
    options: ["O(V log V)", "O(E log V)", "O(E + V log V)", "O(V^2)"],
    answer: "O(E + V log V)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question: "Which of the following problems is undecidable?",
    options: [
      "Travelling Salesman Problem",
      "Subset Sum Problem",
      "Halting Problem",
      "Knapsack Problem",
    ],
    answer: "Halting Problem",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following is the amortized time complexity of splaying in a splay tree?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of the Strassen's algorithm for matrix multiplication?",
    options: ["O(n^3)", "O(n^2.81)", "O(n^2)", "O(n log n)"],
    answer: "O(n^2.81)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following techniques is used in the Boyer-Moore string matching algorithm?",
    options: [
      "Dynamic Programming",
      "Divide and Conquer",
      "Backtracking",
      "Heuristic-based preprocessing",
    ],
    answer: "Heuristic-based preprocessing",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following is the time complexity of the Edmonds-Karp algorithm for finding the maximum flow in a flow network?",
    options: ["O(VE)", "O(V^2E)", "O(E log V)", "O(VE^2)"],
    answer: "O(VE^2)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of the Karatsuba algorithm for multiplying two n-digit numbers?",
    options: ["O(n^2)", "O(n log n)", "O(n^1.59)", "O(n^3)"],
    answer: "O(n^1.59)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following algorithms is used to compute the strongly connected components of a graph?",
    options: [
      "Kruskal's Algorithm",
      "Tarjan's Algorithm",
      "Floyd-Warshall Algorithm",
      "Prim's Algorithm",
    ],
    answer: "Tarjan's Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of solving the Longest Common Subsequence (LCS) problem using dynamic programming?",
    options: ["O(m + n)", "O(mn)", "O(mn log n)", "O(2^n)"],
    answer: "O(mn)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which algorithm is used for solving the Generalized Maximum Flow problem?",
    options: [
      "Edmonds-Karp Algorithm",
      "Push-Relabel Algorithm",
      "Kruskal's Algorithm",
      "Ford-Fulkerson Algorithm",
    ],
    answer: "Push-Relabel Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of the Rabin-Karp algorithm for pattern matching in the worst case?",
    options: ["O(m + n)", "O(mn)", "O(m log n)", "O(n^2)"],
    answer: "O(mn)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which algorithm is used for finding articulation points and bridges in a graph?",
    options: [
      "Kruskal's Algorithm",
      "Prim's Algorithm",
      "Tarjan's Algorithm",
      "Floyd-Warshall Algorithm",
    ],
    answer: "Tarjan's Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following is the correct time complexity for solving the Traveling Salesman Problem using dynamic programming?",
    options: ["O(n^2)", "O(n^2 * 2^n)", "O(2^n)", "O(n!)"],
    answer: "O(n^2 * 2^n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of the Hopcroft-Karp algorithm for finding the maximum matching in a bipartite graph?",
    options: ["O(VE)", "O(E log V)", "O(V^2E)", "O(sqrt(V)E)"],
    answer: "O(sqrt(V)E)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of solving the Integer Linear Programming problem?",
    options: ["O(n^2)", "O(n log n)", "NP-hard", "O(2^n)"],
    answer: "NP-hard",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which algorithm is used for finding the closest pair of points in a plane in O(n log n) time?",
    options: [
      "Divide and Conquer",
      "Dynamic Programming",
      "Backtracking",
      "Greedy Algorithm",
    ],
    answer: "Divide and Conquer",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following is true about the Min-Cut Max-Flow theorem?",
    options: [
      "The minimum cut is always greater than the maximum flow.",
      "The minimum cut is equal to the maximum flow.",
      "The maximum flow depends on the number of edges.",
      "The minimum cut is unrelated to the maximum flow.",
    ],
    answer: "The minimum cut is equal to the maximum flow.",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of solving the Longest Increasing Subsequence problem using a binary search approach?",
    options: ["O(n^2)", "O(n log n)", "O(log n)", "O(n)"],
    answer: "O(n log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "Which of the following algorithms is used to find a minimum cost maximum flow in a graph?",
    options: [
      "Bellman-Ford Algorithm",
      "Dijkstra's Algorithm",
      "Edmonds-Karp Algorithm",
      "Successive Shortest Path Algorithm",
    ],
    answer: "Successive Shortest Path Algorithm",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the time complexity of finding the determinant of an n x n matrix using Gaussian elimination?",
    options: ["O(n^2)", "O(n^3)", "O(n log n)", "O(n!)"],
    answer: "O(n^3)",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question:
      "What is the worst-case time complexity of the Ford-Fulkerson algorithm for computing the maximum flow?",
    options: ["O(E log V)", "O(VE)", "O(E^2)", "O(V^3)"],
    answer: "O(E^2)",
  },

  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given an array [3, 2, 5, 1, 6, 4] and the pivot 4, explain how the Quick Sort algorithm works in the first partitioning step.",
    options: [
      "The array is divided into two parts: [3, 2, 1] and [5, 6, 4]",
      "The array is divided into two parts: [3, 2, 1] and [5, 6]",
      "The pivot 4 is placed in the middle, resulting in [3, 2, 1, 4, 5, 6]",
      "The pivot 4 is placed at the end, resulting in [1, 2, 3, 4, 5, 6]",
    ],
    answer:
      "The pivot 4 is placed in the middle, resulting in [3, 2, 1, 4, 5, 6]",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given a graph with vertices {A, B, C, D, E}, and edges {A-B, B-C, C-D, D-E, E-A}, explain how Breadth-First Search (BFS) works starting from vertex A.",
    options: [
      "The order of traversal is A, B, C, D, E",
      "The order of traversal is A, E, D, C, B",
      "The order of traversal is A, B, D, C, E",
      "The order of traversal is A, B, C, E, D",
    ],
    answer: "The order of traversal is A, B, C, D, E",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the following recurrence relation for Merge Sort: T(n) = 2T(n/2) + O(n), solve for the time complexity using the Master Theorem.",
    options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
    answer: "O(n log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Given the input array [1, 2, 3, 4, 5], how does the algorithm for finding the longest increasing subsequence (LIS) work?",
    options: [
      "It finds the subsequence [1, 2, 3, 4, 5] with a length of 5.",
      "It finds the subsequence [1, 2, 3] with a length of 3.",
      "It finds the subsequence [1, 3, 5] with a length of 3.",
      "It finds the subsequence [1, 2] with a length of 2.",
    ],
    answer: "It finds the subsequence [1, 2, 3, 4, 5] with a length of 5.",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Given a graph with V vertices and E edges, explain the time complexity of running Dijkstra's algorithm with a priority queue.",
    options: ["O(V^2)", "O(E log V)", "O(V log V)", "O(E + V log V)"],
    answer: "O(E + V log V)",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the input array [10, 7, 8, 9, 1, 5], how does the Quick Sort algorithm partition the array around the pivot 9?",
    options: [
      "The array becomes [1, 7, 8, 5, 9, 10]",
      "The array becomes [10, 9, 8, 7, 1, 5]",
      "The array becomes [1, 5, 8, 7, 9, 10]",
      "The array becomes [1, 7, 8, 9, 5, 10]",
    ],
    answer: "The array becomes [1, 7, 8, 5, 9, 10]",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given a graph with the adjacency matrix [[0, 1, 0], [1, 0, 1], [0, 1, 0]], and applying Depth-First Search (DFS) starting from vertex 0, what is the traversal order?",
    options: ["0, 1, 2", "0, 2, 1", "0, 1", "1, 0, 2"],
    answer: "0, 1, 2",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the following input array [4, 3, 5, 1, 2], apply the Heap Sort algorithm. What is the sequence of array transformations?",
    options: [
      "[4, 3, 5, 1, 2] -> [5, 3, 4, 1, 2] -> [5, 3, 4, 1, 2] -> [5, 3, 2, 1, 4] -> [2, 3, 1, 4, 5]",
      "[5, 3, 4, 1, 2] -> [3, 4, 5, 1, 2] -> [5, 3, 4, 1, 2] -> [2, 3, 1, 4, 5]",
      "[4, 3, 5, 1, 2] -> [5, 4, 3, 1, 2] -> [4, 3, 1, 2, 5]",
      "[5, 3, 4, 1, 2] -> [4, 3, 5, 1, 2] -> [2, 3, 1, 4, 5]",
    ],
    answer:
      "[4, 3, 5, 1, 2] -> [5, 3, 4, 1, 2] -> [5, 3, 4, 1, 2] -> [5, 3, 2, 1, 4] -> [2, 3, 1, 4, 5]",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Which of the following is the correct way to calculate the time complexity of a divide-and-conquer algorithm?",
    options: [
      "T(n) = O(n log n)",
      "T(n) = O(n^2)",
      "T(n) = O(n^3)",
      "T(n) = O(log n)",
    ],
    answer: "T(n) = O(n log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Given a binary tree, explain the algorithm for calculating the height of the tree.",
    options: [
      "It starts from the root and traverses each node recursively, computing the height of each subtree.",
      "It uses a stack and visits all nodes iteratively.",
      "It starts from the leaf nodes and calculates the height back to the root.",
      "It uses dynamic programming to calculate the height at each level of the tree.",
    ],
    answer:
      "It starts from the root and traverses each node recursively, computing the height of each subtree.",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given an undirected graph with vertices {A, B, C, D} and edges {A-B, B-C, C-D, D-A}, applying Prim’s algorithm starting from vertex A, what are the edges of the resulting Minimum Spanning Tree (MST)?",
    options: ["{A-B, B-C, C-D}", "{A-B, B-C, D-A}", "{A-B, C-D}", "{A-D, B-C}"],
    answer: "{A-B, B-C, C-D}",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Given an input array [10, 20, 15, 25, 5], apply the Max-Heapify operation to the root. What is the resulting array after the first step?",
    options: [
      "[25, 20, 15, 10, 5]",
      "[20, 10, 15, 25, 5]",
      "[10, 20, 25, 15, 5]",
      "[15, 20, 10, 25, 5]",
    ],
    answer: "[25, 20, 15, 10, 5]",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the following recurrence relation T(n) = 2T(n/2) + O(n^2), what is the time complexity of the algorithm?",
    options: ["O(n^2 log n)", "O(n^3)", "O(n log n)", "O(n^2)"],
    answer: "O(n^2 log n)",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Given an array [1, 3, 6, 7, 9, 4, 10, 5, 6], find the length of the longest increasing subsequence using dynamic programming.",
    options: ["5", "6", "4", "7"],
    answer: "6",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Given a binary search tree with nodes {10, 5, 15, 3, 7, 18}, perform an in-order traversal. What is the resulting sequence?",
    options: [
      "[3, 5, 7, 10, 15, 18]",
      "[10, 5, 15, 3, 7, 18]",
      "[18, 15, 10, 7, 5, 3]",
      "[5, 3, 7, 15, 10, 18]",
    ],
    answer: "[3, 5, 7, 10, 15, 18]",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given a graph represented by an adjacency matrix [[0, 1, 0], [1, 0, 1], [0, 1, 0]], applying Depth-First Search (DFS) starting from vertex 0, what is the traversal order?",
    options: ["[0, 1, 2]", "[0, 2, 1]", "[0, 1]", "[1, 0, 2]"],
    answer: "[0, 1, 2]",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given an input array [4, 3, 5, 1, 2], apply the Heap Sort algorithm. What is the sequence of array transformations?",
    options: [
      "[4, 3, 5, 1, 2] -> [5, 3, 4, 1, 2] -> [5, 3, 2, 1, 4] -> [2, 3, 1, 4, 5]",
      "[5, 3, 4, 1, 2] -> [3, 4, 5, 1, 2] -> [5, 3, 4, 1, 2] -> [2, 3, 1, 4, 5]",
      "[4, 3, 5, 1, 2] -> [5, 4, 3, 1, 2] -> [4, 3, 1, 2, 5]",
      "[5, 3, 4, 1, 2] -> [4, 3, 5, 1, 2] -> [2, 3, 1, 4, 5]",
    ],
    answer:
      "[4, 3, 5, 1, 2] -> [5, 3, 4, 1, 2] -> [5, 3, 2, 1, 4] -> [2, 3, 1, 4, 5]",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Given the input array [12, 11, 13, 5, 6], how does the Insertion Sort algorithm proceed after processing the third element?",
    options: [
      "[5, 11, 12, 13, 6]",
      "[11, 12, 13, 5, 6]",
      "[5, 6, 11, 12, 13]",
      "[5, 12, 13, 11, 6]",
    ],
    answer: "[5, 11, 12, 13, 6]",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Dry Run: Given the input graph with vertices {A, B, C, D, E} and edges with weights {(A-B, 2), (B-C, 3), (C-D, 4), (D-E, 5), (E-A, 6)}, what is the resulting MST when Kruskal's algorithm is applied?",
    options: [
      "{A-B, B-C, C-D, D-E}",
      "{A-B, B-C, D-E, E-A}",
      "{A-B, B-C, C-D}",
      "{A-B, B-C, C-D, E-A}",
    ],
    answer: "{A-B, B-C, C-D, D-E}",
  },
  {
    subject: "Algorithms",
    difficulty: "Psychopath",
    question:
      "Given an array [1, 2, 3, 4, 5] and using Divide and Conquer to find the Maximum Subarray Sum, what is the result?",
    options: ["15", "10", "9", "12"],
    answer: "15",
  },
];
export default questions;
