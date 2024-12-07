const dataStructures = [
  {
    id: 1,
    name: "Array",
    description:
      "A fixed-size collection of items stored in contiguous memory.",
    detailedDescription:
      "An array is a data structure consisting of a collection of elements, each identified by an index or key. Arrays are of a fixed size, meaning that once declared, their size cannot be changed. They enable fast access to elements using their index and support operations like iteration, insertion, and deletion. However, they have a limitation in dynamic sizing, which can lead to inefficient memory usage.",
    codeExamples: {
      cpp: `#include <iostream>
  using namespace std;
  
  int main() {
      int arr[5] = {1, 2, 3, 4, 5}; // Declare and initialize an array
  
      for (int i = 0; i < 5; i++) {
          cout << arr[i] << " "; // Access elements
      }
      return 0;
  }`,
      java: ` public class ArrayExample {
      public static void main(String[] args) {
          int[] arr = {1, 2, 3, 4, 5}; // Declare and initialize an array
  
          for (int i = 0; i < arr.length; i++) {
              System.out.print(arr[i] + " "); // Access elements
          }
      }`,
      javascript: `const arr = [1, 2, 3];
  console.log(arr[0]); // Accessing the first element`,
      python: `arr = [1, 2, 3]
  print(arr[0]) # Accessing the first element`,
    },
    videoUrl: "https://www.youtube.com/watch?v=QFrJQq6Iox8",
    resources: [
      {
        title: "MDN Web Docs on Arrays",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
      },
    ],
  },
  {
    id: 2,
    name: "Linked List",
    description: "A collection of nodes where each node points to the next.",
    detailedDescription:
      "A linked list is a linear data structure where elements are stored in nodes. Each node contains a data field and a reference (or pointer) to the next node in the sequence. Unlike arrays, linked lists allow for dynamic sizing and efficient insertions and deletions. However, they have higher memory overhead and access times, as elements must be accessed sequentially.",
    codeExamples: {
      cpp: ` #include <iostream>
  using namespace std;
  
  struct Node {
      int data;
      Node* next;
  };
  
  void printList(Node* n) {
      while (n != NULL) {
          cout << n->data << " ";
          n = n->next;
      }
  }
  
  int main() {
      Node* head = new Node();
      head->data = 1;
      head->next = new Node();
      head->next->data = 2;
      head->next->next = NULL;
  
      printList(head); // Display elements
      return 0;
  }`,
      java: `class Node {
      int data;
      Node next;
  
      Node(int d) {
          data = d;
          next = null;
      }
  }
  
  public class LinkedList {
      Node head;
  
      void printList() {
          Node current = head;
          while (current != null) {
              System.out.print(current.data + " ");
              current = current.next;
          }
      }
  
      public static void main(String[] args) {
          LinkedList list = new LinkedList();
          list.head = new Node(1);
          list.head.next = new Node(2);
          list.printList(); // Display elements
      }
          }`,
      javascript: `class Node {
      constructor(data) {
          this.data = data;
          this.next = null;
      }
  }
  
  class LinkedList {
      constructor() {
          this.head = null;
      }
  
      printList() {
          let current = this.head;
          while (current) {
              console.log(current.data);
              current = current.next;
          }
      }
  }
  
  const list = new LinkedList();
  list.head = new Node(1);
  list.head.next = new Node(2);
  list.printList();`,
      python: `class Node:
      def _init_(self, data):
          self.data = data
          self.next = None
  
  class LinkedList:
      def _init_(self):
          self.head = None
  
      def print_list(self):
          current = self.head
          while current:
              print(current.data, end=" ")
              current = current.next
  
  llist = LinkedList()
  llist.head = Node(1)
  llist.head.next = Node(2)
  
  llist.print_list()  # Display elements`,
    },
    videoUrl: "https://www.youtube.com/watch?v=N6dOwBde7-M",
    resources: [
      {
        title: "GeeksforGeeks on Linked List",
        url: "https://www.geeksforgeeks.org/data-structures/linked-list/",
      },
    ],
  },
  {
    id: 3,
    name: "Stack",
    description:
      "A linear data structure that follows the Last In First Out (LIFO) principle.",
    detailedDescription:
      "A stack is a linear data structure that follows the Last In First Out (LIFO) principle, meaning that the last element added to the stack is the first one to be removed. Stacks support operations such as push (to add an item) and pop (to remove an item). This makes them useful in scenarios like function call management, expression evaluation, and backtracking algorithms.",
    codeExamples: {
      cpp: `//Using Array
#include <iostream>
using namespace std;

class StackArray {
private:
    static const int MAX = 1000; // Maximum size of the stack
    int arr[MAX];
    int top;

public:
    StackArray() : top(-1) {}

    void push(int value) {
        if (top >= MAX - 1) {
            cout << "Stack overflow";
            return;
        }
        arr[++top] = value;
    }

    void pop() {
        if (isEmpty()) {
            cout << "Stack underflow";
            return;
        }
        top--;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty";
            return -1;
        }
        return arr[top];
    }

    bool isEmpty() {
        return top == -1;
    }

    void display() {
        for (int i = top; i >= 0; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    StackArray stack;

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.display(); // Display all elements in the stack

    while (!stack.isEmpty()) {
        cout << stack.peek() << " "; // Display the top element
        stack.pop();
    }
    return 0;
}

//Using Linked list
 #include <iostream>
using namespace std;

// Node structure for the linked list
struct Node {
    int data;
    Node* next;
};

// Stack class using a linked list
class StackLinkedList {
private:
    Node* top;

public:
    StackLinkedList() : top(nullptr) {}

    void push(int value) {
        Node* newNode = new Node();
        newNode->data = value;
        newNode->next = top;
        top = newNode;
    }

    void pop() {
        if (isEmpty()) {
            cout << "Stack underflow";
            return;
        }
        Node* temp = top;
        top = top->next;
        delete temp;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Stack is empty";
            return -1;
        }
        return top->data;
    }

    bool isEmpty() {
        return top == nullptr;
    }

    void display() {
        Node* current = top;
        while (current) {
            cout << current->data << " ";
            current = current->next;
        }
        cout << endl;
    }
};

int main() {
    StackLinkedList stack;

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.display(); // Display all elements in the stack

    while (!stack.isEmpty()) {
        cout << stack.peek() << " "; // Display the top element
        stack.pop();
    }
    return 0;
}`,
      java: ` 
Using Array
class StackArray {
    private int[] stack;
    private int top;

    public StackArray(int size) {
        stack = new int[size];
        top = -1;
    }

    public boolean isFull() {
        return top == stack.length - 1;
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public void push(int value) {
        if (isFull()) {
            System.out.println("Stack is full");
            return;
        }
        stack[++top] = value;
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return -1;
        }
        return stack[top--];
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return;
        }
        System.out.print("Stack: ");
        for (int i = 0; i <= top; i++) {
            System.out.print(stack[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        StackArray stack = new StackArray(5);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.display();
        System.out.println("Popped: " + stack.pop());
        stack.display();
    }
}

Using Linked List
class StackNode {
    int data;
    StackNode next;

    StackNode(int value) {
        data = value;
        next = null;
    }
}

class StackList {
    private StackNode top;

    public StackList() {
        top = null;
    }

    public boolean isEmpty() {
        return top == null;
    }

    public void push(int value) {
        StackNode newNode = new StackNode(value);
        newNode.next = top;
        top = newNode;
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return -1;
        }
        int value = top.data;
        top = top.next;
        return value;
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return;
        }
        System.out.print("Stack: ");
        StackNode temp = top;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        StackList stack = new StackList();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.display();
        System.out.println("Popped: " + stack.pop());
        stack.display();
    }
}`,
javascript: `
Using Array
class QueueArray {
    constructor(size) {
        this.queue = new Array(size).fill(null);
        this.front = -1;
        this.rear = -1;
        this.capacity = size;
        this.size = 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }
        if (this.rear === -1) this.front = 0;
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        const value = this.queue[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return value;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let result = "Queue: ";
        for (let i = 0; i < this.size; i++) {
            result += this.queue[(this.front + i) % this.capacity] + " ";
        }
        console.log(result);
    }
}

const queue = new QueueArray(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
console.log("Dequeued:", queue.dequeue());
queue.display();

Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueList {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front === null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.rear === null) {
            this.front = this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        const value = this.front.data;
        this.front = this.front.next;
        if (this.front === null) this.rear = null;
        return value;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let current = this.front;
        let result = "Queue: ";
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        console.log(result);
    }
}

const queue = new QueueList();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
console.log("Dequeued:", queue.dequeue());
queue.display();
`,
      python: `
Using Array
class QueueArray:
    def __init__(self, capacity):
        self.queue = [None] * capacity
        self.front = self.rear = -1
        self.capacity = capacity
        self.size = 0

    def is_full(self):
        return self.size == self.capacity

    def is_empty(self):
        return self.size == 0

    def enqueue(self, value):
        if self.is_full():
            print("Queue is full")
            return
        if self.rear == -1:
            self.front = 0
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = value
        self.size += 1

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        value = self.queue[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return value

    def display(self):
        if self.is_empty():
            print("Queue is empty")
            return
        print("Queue:", end=" ")
        for i in range(self.size):
            print(self.queue[(self.front + i) % self.capacity], end=" ")
        print()


queue = QueueArray(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.display()
print("Dequeued:", queue.dequeue())
queue.display()

Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class QueueList:
    def __init__(self):
        self.front = self.rear = None

    def is_empty(self):
        return self.front is None

    def enqueue(self, value):
        new_node = Node(value)
        if self.rear is None:
            self.front = self.rear = new_node
            return
        self.rear.next = new_node
        self.rear = new_node

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        value = self.front.data
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return value

    def display(self):
        if self.is_empty():
            print("Queue is empty")
            return
        print("Queue:", end=" ")
        temp = self.front
        while temp:
            print(temp.data, end=" ")
            temp = temp.next
        print()


queue = QueueList()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.display()
print("Dequeued:", queue.dequeue())
queue.display()
`,
    },
    videoUrl: "https://www.youtube.com/watch?v=KInG04mAjO0",
    resources: [
      {
        title: "GeeksforGeeks on Stack",
        url: "https://www.geeksforgeeks.org/data-structures/stack/",
      },
    ],
  },
  {
    id: 4,
    name: "Queue",
    description:
      "A collection of elements that follows the First In First Out (FIFO) principle.",
    detailedDescription:
      "A queue is a linear data structure that operates on a First In First Out (FIFO) principle, where elements are added from the back (enqueue) and removed from the front (dequeue). This behavior makes queues suitable for tasks such as order processing, managing tasks in a printer queue, and other scenarios where the first element added should be the first to be removed. Queues typically support enqueue, dequeue, and front operations, each with an O(1) time complexity.",
    codeExamples: {
      cpp: `
Using Array
#include <iostream>
using namespace std;

class QueueArray {
private:
    static const int MAX = 1000;
    int arr[MAX];
    int front, rear;

public:
    QueueArray() : front(-1), rear(-1) {}

    bool isFull() {
        return rear == MAX - 1;
    }

    bool isEmpty() {
        return front == -1 || front > rear;
    }

    void enqueue(int value) {
        if (isFull()) {
            cout << "Queue overflow";
            return;
        }
        if (front == -1) front = 0;
        arr[++rear] = value;
    }

    void dequeue() {
        if (isEmpty()) {
            cout << "Queue underflow";
            return;
        }
        front++;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty";
            return -1;
        }
        return arr[front];
    }

    void display() {
        if (isEmpty()) {
            cout << "Queue is empty";
            return;
        }
        for (int i = front; i <= rear; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    QueueArray queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.display();

    queue.dequeue();
    queue.display();

    return 0;
}
   
Using Linked List
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

class QueueLinkedList {
private:
    Node *front, *rear;

public:
    QueueLinkedList() : front(nullptr), rear(nullptr) {}

    void enqueue(int value) {
        Node* newNode = new Node();
        newNode->data = value;
        newNode->next = nullptr;
        if (rear == nullptr) {
            front = rear = newNode;
            return;
        }
        rear->next = newNode;
        rear = newNode;
    }

    void dequeue() {
        if (front == nullptr) {
            cout << "Queue underflow";
            return;
        }
        Node* temp = front;
        front = front->next;
        if (front == nullptr) rear = nullptr;
        delete temp;
    }

    int peek() {
        if (front == nullptr) {
            cout << "Queue is empty";
            return -1;
        }
        return front->data;
    }

    void display() {
        if (front == nullptr) {
            cout << "Queue is empty";
            return;
        }
        Node* temp = front;
        while (temp) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }
};

int main() {
    QueueLinkedList queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.display();

    queue.dequeue();
    queue.display();

    return 0;
}`,
      java: `
  Using Array
  class QueueArray {
    private int[] queue;
    private int front, rear, size;

    public QueueArray(int capacity) {
        queue = new int[capacity];
        front = rear = -1;
        size = 0;
    }

    public boolean isFull() {
        return size == queue.length;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public void enqueue(int value) {
        if (isFull()) {
            System.out.println("Queue is full");
            return;
        }
        if (rear == -1) front = 0; // Initialize front
        rear = (rear + 1) % queue.length;
        queue[rear] = value;
        size++;
    }

    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return -1;
        }
        int value = queue[front];
        front = (front + 1) % queue.length;
        size--;
        return value;
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        System.out.print("Queue: ");
        for (int i = 0; i < size; i++) {
            System.out.print(queue[(front + i) % queue.length] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        QueueArray queue = new QueueArray(5);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.display();
        System.out.println("Dequeued: " + queue.dequeue());
        queue.display();
    }
}

Using Linked List
class Node {
    int data;
    Node next;

    Node(int value) {
        data = value;
        next = null;
    }
}

class QueueList {
    private Node front, rear;

    public QueueList() {
        front = rear = null;
    }

    public boolean isEmpty() {
        return front == null;
    }

    public void enqueue(int value) {
        Node newNode = new Node(value);
        if (rear == null) {
            front = rear = newNode;
            return;
        }
        rear.next = newNode;
        rear = newNode;
    }

    public int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return -1;
        }
        int value = front.data;
        front = front.next;
        if (front == null) rear = null; // If queue becomes empty
        return value;
    }

    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        System.out.print("Queue: ");
        Node temp = front;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        QueueList queue = new QueueList();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.display();
        System.out.println("Dequeued: " + queue.dequeue());
        queue.display();
    }
}
`,
      javascript: ` 
Using Array
class QueueArray {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return null;
        }
        return this.queue.shift();
    }

    peek() {
        return this.isEmpty() ? null : this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    display() {
        console.log(this.queue.join(" "));
    }
}

const queue = new QueueArray();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
queue.dequeue();
queue.display();

Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.rear === null) {
            this.front = this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue() {
        if (this.front === null) {
            console.log("Queue underflow");
            return null;
        }
        const temp = this.front;
        this.front = this.front.next;
        if (this.front === null) this.rear = null;
        return temp.data;
    }

    peek() {
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.front === null;
    }

    display() {
        let current = this.front;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" "));
    }
}

const queue = new QueueLinkedList();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
queue.dequeue();
queue.display();
`,
      python: `
Using Array
class QueueArray:
    def __init__(self):
        self.queue = []

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if self.is_empty():
            print("Queue underflow")
            return None
        return self.queue.pop(0)

    def peek(self):
        return None if self.is_empty() else self.queue[0]

    def is_empty(self):
        return len(self.queue) == 0

    def display(self):
        print(" ".join(map(str, self.queue)))


queue = QueueArray()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.display()
queue.dequeue()
queue.display()
      
Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class QueueLinkedList:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, value):
        new_node = Node(value)
        if self.rear is None:
            self.front = self.rear = new_node
            return
        self.rear.next = new_node
        self.rear = new_node

    def dequeue(self):
        if self.front is None:
            print("Queue underflow")
            return None
        temp = self.front
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return temp.data

    def peek(self):
        return None if self.front is None else self.front.data

    def is_empty(self):
        return self.front is None

    def display(self):
        current = self.front
        result = []
        while current:
            result.append(current.data)
            current = current.next
        print(" ".join(map(str, result)))


queue = QueueLinkedList()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.display()
queue.dequeue()
queue.display()
      `,
    },
    videoUrl: "https://www.youtube.com/watch?v=nqXaPZi99JI",
    resources: [
      {
        title: "GeeksforGeeks on Queue",
        url: "https://www.geeksforgeeks.org/data-structures/queue/",
      },
    ],
  },
  {
    id: 5,
    name: "Hash Table",
    description:
      "A data structure that implements an associative array abstract data type.",
    detailedDescription:
      "A hash table is a data structure that implements an associative array, a structure that can map keys to values. Hash tables use a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. The average-case time complexity for search, insert, and delete operations is O(1). However, the worst-case time complexity can degrade to O(n) due to collisions, which can be mitigated with proper handling strategies like chaining or open addressing.",
    codeExamples: {
      cpp: `
Using Array 
#include <iostream>
#include <vector>
using namespace std;

class HashTableArray {
private:
    static const int TABLE_SIZE = 10;
    int table[TABLE_SIZE];

public:
    HashTableArray() {
        for (int i = 0; i < TABLE_SIZE; i++) {
            table[i] = -1; // -1 indicates an empty slot
        }
    }

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

    void insert(int key) {
        int index = hashFunction(key);
        while (table[index] != -1) {
            index = (index + 1) % TABLE_SIZE; // Linear probing
        }
        table[index] = key;
    }

    bool search(int key) {
        int index = hashFunction(key);
        int start = index;
        while (table[index] != -1) {
            if (table[index] == key)
                return true;
            index = (index + 1) % TABLE_SIZE;
            if (index == start)
                break; // We've looped back to the start
        }
        return false;
    }

    void display() {
        for (int i = 0; i < TABLE_SIZE; i++) {
            if (table[i] != -1)
                cout << i << ": " << table[i] << endl;
            else
                cout << i << ": " << "EMPTY" << endl;
        }
    }
};

int main() {
    HashTableArray ht;
    ht.insert(10);
    ht.insert(20);
    ht.insert(30);
    ht.insert(25);

    ht.display();

    cout << "Search 20: " << (ht.search(20) ? "Found" : "Not Found") << endl;
    cout << "Search 15: " << (ht.search(15) ? "Found" : "Not Found") << endl;

    return 0;
}

Using Linked List
#include <iostream>
#include <list>
using namespace std;

class HashTableList {
private:
    static const int TABLE_SIZE = 10;
    list<int> table[TABLE_SIZE];

public:
    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

    void insert(int key) {
        int index = hashFunction(key);
        table[index].push_back(key);
    }

    bool search(int key) {
        int index = hashFunction(key);
        for (int element : table[index]) {
            if (element == key)
                return true;
        }
        return false;
    }

    void display() {
        for (int i = 0; i < TABLE_SIZE; i++) {
            cout << i << ": ";
            for (int element : table[i]) {
                cout << element << " -> ";
            }
            cout << "NULL" << endl;
        }
    }
};

int main() {
    HashTableList ht;
    ht.insert(10);
    ht.insert(20);
    ht.insert(30);
    ht.insert(25);

    ht.display();

    cout << "Search 20: " << (ht.search(20) ? "Found" : "Not Found") << endl;
    cout << "Search 15: " << (ht.search(15) ? "Found" : "Not Found") << endl;

    return 0;
}`,
      java: `
Using Array 
class HashTableArray {
    int[] table;
    int size;

    public HashTableArray(int size) {
        this.size = size;
        table = new int[size];
        for (int i = 0; i < size; i++) table[i] = -1;
    }

    int hashFunction(int key) {
        return key % size;
    }

    void insert(int key) {
        int index = hashFunction(key);
        while (table[index] != -1) {
            index = (index + 1) % size;
        }
        table[index] = key;
    }

    boolean search(int key) {
        int index = hashFunction(key);
        int start = index;
        while (table[index] != -1) {
            if (table[index] == key) return true;
            index = (index + 1) % size;
            if (index == start) break;
        }
        return false;
    }

    void display() {
        for (int i = 0; i < size; i++) {
            System.out.println(i + ": " + (table[i] != -1 ? table[i] : "EMPTY"));
        }
    }

    public static void main(String[] args) {
        HashTableArray ht = new HashTableArray(10);
        ht.insert(10);
        ht.insert(20);
        ht.insert(30);
        ht.insert(25);
        ht.display();
        System.out.println("Search 20: " + (ht.search(20) ? "Found" : "Not Found"));
        System.out.println("Search 15: " + (ht.search(15) ? "Found" : "Not Found"));
    }
}

Using Linked List
import java.util.*;

class HashTableList {
    ArrayList<LinkedList<Integer>> table;
    int size;

    public HashTableList(int size) {
        this.size = size;
        table = new ArrayList<>();
        for (int i = 0; i < size; i++) table.add(new LinkedList<>());
    }

    int hashFunction(int key) {
        return key % size;
    }

    void insert(int key) {
        int index = hashFunction(key);
        table.get(index).add(key);
    }

    boolean search(int key) {
        int index = hashFunction(key);
        return table.get(index).contains(key);
    }

    void display() {
        for (int i = 0; i < size; i++) {
            System.out.print(i + ": ");
            for (int value : table.get(i)) {
                System.out.print(value + " -> ");
            }
            System.out.println("NULL");
        }
    }

    public static void main(String[] args) {
        HashTableList ht = new HashTableList(10);
        ht.insert(10);
        ht.insert(20);
        ht.insert(30);
        ht.insert(25);
        ht.display();
        System.out.println("Search 20: " + (ht.search(20) ? "Found" : "Not Found"));
        System.out.println("Search 15: " + (ht.search(15) ? "Found" : "Not Found"));
    }
}`,
      javascript: `
Using Array 
class HashTableArray {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    hashFunction(key) {
        return key % this.size;
    }

    insert(key, value) {
        let index = this.hashFunction(key);
        while (this.table[index] !== null) {
            index = (index + 1) % this.size; // Linear probing
        }
        this.table[index] = [key, value];
    }

    search(key) {
        let index = this.hashFunction(key);
        const start = index;
        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
            if (index === start) break; // Loop detected
        }
        return null; // Key not found
    }

    display() {
        this.table.forEach((entry, index) => {
            if (entry !== null) {
                console.log("{index}: {entry[0]} => {entry[1]}");
            } else {
                console.log("{index}: EMPTY");
            }
        });
    }
}

const hashTable = new HashTableArray(10);
hashTable.insert(1, "one");
hashTable.insert(11, "eleven");
hashTable.insert(21, "twenty-one");

hashTable.display();

console.log("Search for key 11:", hashTable.search(11));
console.log("Search for key 5:", hashTable.search(5));

Using Linked List
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTableList {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    hashFunction(key) {
        return key % this.size;
    }

    insert(key, value) {
        const index = this.hashFunction(key);
        const newNode = new Node(key, value);
        if (this.table[index] === null) {
            this.table[index] = newNode;
        } else {
            let current = this.table[index];
            while (current.next !== null) {
                if (current.key === key) {
                    current.value = value; // Update if key exists
                    return;
                }
                current = current.next;
            }
            current.next = newNode;
        }
    }

    search(key) {
        const index = this.hashFunction(key);
        let current = this.table[index];
        while (current !== null) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null; // Key not found
    }

    display() {
        this.table.forEach((head, index) => {
            let result = "{index}: ";
            let current = head;
            while (current !== null) {
                result += "{current.key} => {current.value} -> ";
                current = current.next;
            }
            result += "NULL";
            console.log(result);
        });
    }
}

const hashTable = new HashTableList(10);
hashTable.insert(1, "one");
hashTable.insert(11, "eleven");
hashTable.insert(21, "twenty-one");

hashTable.display();

console.log("Search for key 11:", hashTable.search(11));
console.log("Search for key 5:", hashTable.search(5));
`,
      python: `
Using Array 
class HashTableArray:
    def __init__(self, size):
        self.size = size
        self.table = [-1] * size

    def hash_function(self, key):
        return key % self.size

    def insert(self, key):
        index = self.hash_function(key)
        while self.table[index] != -1:
            index = (index + 1) % self.size  # Linear probing
        self.table[index] = key

    def search(self, key):
        index = self.hash_function(key)
        start = index
        while self.table[index] != -1:
            if self.table[index] == key:
                return True
            index = (index + 1) % self.size
            if index == start:
                break
        return False

    def display(self):
        for i, value in enumerate(self.table):
            print(f"{i}: {value if value != -1 else 'EMPTY'}")


ht = HashTableArray(10)
ht.insert(10)
ht.insert(20)
ht.insert(30)
ht.insert(25)
ht.display()

print("Search 20:", "Found" if ht.search(20) else "Not Found")
print("Search 15:", "Found" if ht.search(15) else "Not Found")

Using Linked List
class HashTableList:
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]

    def hash_function(self, key):
        return key % self.size

    def insert(self, key):
        index = self.hash_function(key)
        self.table[index].append(key)

    def search(self, key):
        index = self.hash_function(key)
        return key in self.table[index]

    def display(self):
        for i, chain in enumerate(self.table):
            print(f"{i}: {' -> '.join(map(str, chain)) if chain else 'EMPTY'}")


ht = HashTableList(10)
ht.insert(10)
ht.insert(20)
ht.insert(30)
ht.insert(25)
ht.display()

print("Search 20:", "Found" if ht.search(20) else "Not Found")
print("Search 15:", "Found" if ht.search(15) else "Not Found")`,
    },
    videoUrl: "https://www.youtube.com/watch?v=FsfRsGFHuv4",
    resources: [
      {
        title: "GeeksforGeeks on Hash Tables",
        url: "https://www.geeksforgeeks.org/hashing-data-structure/",
      },
    ],
  },
  {
    id: 6,
    name: "Binary Tree",
    description:
      "A hierarchical structure with nodes, each having at most two children.",
    detailedDescription:
      "A binary tree is a tree data structure where each node has at most two children, referred to as the left child and the right child. It is used to represent hierarchical relationships. The most common types of binary trees include full binary trees, complete binary trees, and binary search trees. They allow for efficient searching, insertion, and deletion operations, especially when balanced.",
    codeExamples: {
      cpp: `
Using Array
#include<bits/stdc++.h>
using namespace std;
char tree[10];
int root(char key) {
if (tree[0] != '0')
	cout << "Tree already had root";
else
	tree[0] = key;
return 0;
}

int set_left(char key, int parent) {
if (tree[parent] == '0')
	cout << "Can't set child at "
	<< (parent * 2) + 1
	<< " , no parent found";
else
	tree[(parent * 2) + 1] = key;
return 0;
}

int set_right(char key, int parent) {
if (tree[parent] == '0')
	cout << "Can't set child at "
	<< (parent * 2) + 2
	<< " , no parent found";
else
	tree[(parent * 2) + 2] = key;
return 0;
}

int print_tree() {
cout << "/n";
for (int i = 0; i < 10; i++) {
	if (tree[i] != '0')
	cout << tree[i];
	else
	cout << "-";
}
return 0;
}

// Driver Code
int main() {
root('A');
set_left('B',0);
set_right('C', 0);
set_left('D', 1);
set_right('E', 1);
set_right('F', 2);
print_tree();
return 0;
}

Using Linked List
using namespace std;

class Lnode {
public:
    int data;
    Lnode* next;

    Lnode(int value) {
        data = value;
        next = nullptr;
    }
};

class Tnode {
public:
    int data;
    Tnode* left;
    Tnode* right;

    Tnode(int value) {
        data = value;
        left = right = nullptr;
    }
};

// Converts a given linked list representing a complete 
// binary tree into the linked representation of a binary tree.
Tnode* convert(Lnode* head) {
    if (head == nullptr) {
        return nullptr;
    }

    // Queue to store the parent nodes
    queue<Tnode*> q;

    // The first node is always the root node,
      // and add it to the queue
    Tnode* root = new Tnode(head->data);
    q.push(root);

    // Move the pointer to the next node
    head = head->next;

    // Until the end of the linked list is reached, 
      // do the following steps
    while (head) {
      
        // Take the parent node from the queue 
          // and remove it from the queue
        Tnode* parent = q.front();
        q.pop();

        // Take the next two nodes from the linked list
        Tnode* leftChild = nullptr;
        Tnode* rightChild = nullptr;

        // Create left child
        if (head) {
            leftChild = new Tnode(head->data);
            q.push(leftChild);
            head = head->next;
        }

        // Create right child
        if (head) {
            rightChild = new Tnode(head->data);
            q.push(rightChild);
            head = head->next;
        }

        // Assign the left and right children of the parent
        parent->left = leftChild;
        parent->right = rightChild;
    }

    return root;
}

// Level Order Traversal of the binary tree
void levelOrderTraversal(Tnode* root) {
    if (root == nullptr) {
        return;
    }

    // Queue to hold nodes at each level
    queue<Tnode*> q;
    q.push(root);

    while (!q.empty()) {
        Tnode* currNode = q.front();
        q.pop();

        // Print the current node's data
        cout << currNode->data << " ";

        // Push the left and right children 
          // of the current node to the queue
        if (currNode->left) {
            q.push(currNode->left);
        }
        if (currNode->right) {
            q.push(currNode->right);
        }
    }
}

int main() {
  
    // Create linked list : 10->12->15->25->30->36
    Lnode* head = new Lnode(10);
    head->next = new Lnode(12);
    head->next->next = new Lnode(15);
    head->next->next->next = new Lnode(25);
    head->next->next->next->next = new Lnode(30);
    head->next->next->next->next->next = new Lnode(36); 
  
    Tnode* root = convert(head);
    levelOrderTraversal(root);

    return 0;
}`,
      java: `
Using Array
import java.io.*;
import java.lang.*;
import java.util.*;
 
// Class 1
public class Tree {
 
    // Main driver method
    public static void main(String[] args)
    {
 
        // Creating object of class 2 inside main() method
        Array_imp obj = new Array_imp();
 
        // Setting root node
        obj.Root("A");
        obj.set_Left("B", 0);
        obj.set_Right("C", 0);
        obj.set_Left("D", 1);
        obj.set_Right("E", 1);
        obj.set_Right("F", 2);
        obj.print_Tree();
    }
}
 
// Class 2
class Array_imp {
 
    // Member variables of this class
    static int root = 0;
    static String[] str = new String[10];
 
    // Method 1
    // Creating root node
    public void Root(String key) { str[0] = key; }
 
    // Method 2
    // Creating left son of root
    public void set_Left(String key, int root)
    {
        int t = (root * 2) + 1;
 
        if (str[root] == null) {
            System.out.printf(
                "Can't set child at %d, no parent found",
                t);
        }
        else {
            str[t] = key;
        }
    }
 
    // Method 3
    // Creating right son of root
    public void set_Right(String key, int root)
    {
        int t = (root * 2) + 2;
 
        if (str[root] == null) {
            System.out.printf(
                "Can't set child at %d, no parent found",
                t);
        }
        else {
            str[t] = key;
        }
    }
 
    // Method 4
    // To print our tree
    public void print_Tree()
    {
 
        // Iterating using for loop
        for (int i = 0; i < 10; i++) {
            if (str[i] != null)
                System.out.print(str[i]);
            else
                System.out.print("-");
        }
    }
}
Using Linked List
import java.util.LinkedList;
import java.util.Queue;

class Lnode {
    int data;
    Lnode next;
  
    Lnode(int value) {
        data = value;
        next = null;
    }
}

class Tnode {
    int data;
    Tnode left, right;
  
    Tnode(int value) {
        data = value;
        left = null;
        right = null;
    }
}

class GfG {
  
    // Converts a given linked list representing a complete binary tree into the
    // linked representation of a binary tree.
    static Tnode convert(Lnode head) {
        if (head == null) {
            return null;
        }

        // Queue to store the parent nodes
        Queue<Tnode> q = new LinkedList<>();

        // The first node is always the root node,
        // and add it to the queue
        Tnode root = new Tnode(head.data);
        q.add(root);

        // Move the pointer to the next node
        head = head.next;

        // Until the end of the linked list is reached,
        // do the following steps
        while (head != null) {
          
            // Take the parent node from the queue
            // and remove it from the queue
            Tnode parent = q.poll();

            Tnode leftChild = null, rightChild = null;

            // Create left child
            if (head != null) {
                leftChild = new Tnode(head.data);
                q.add(leftChild);
                head = head.next;
            }

            // Create right child
            if (head != null) {
                rightChild = new Tnode(head.data);
                q.add(rightChild);
                head = head.next;
            }

            // Assign the left and right children of the parent
            parent.left = leftChild;
            parent.right = rightChild;
        }

        return root;
    }

    // Level Order Traversal of the binary tree
    static void levelOrderTraversal(Tnode root) {
        if (root == null) {
            return;
        }

        // Queue to hold nodes at each level
        Queue<Tnode> q = new LinkedList<>();
        q.add(root);

        while (!q.isEmpty()) {
            Tnode currNode = q.poll();

            // Print the current node's data
            System.out.print(currNode.data + " ");

            // Push the left and right children
            // of the current node to the queue
            if (currNode.left != null) {
                q.add(currNode.left);
            }
            if (currNode.right != null) {
                q.add(currNode.right);
            }
        }
    }

    public static void main(String[] args) {
      
        // Create linked list : 10->12->15->25->30->36
        Lnode head = new Lnode(10);
        head.next = new Lnode(12);
        head.next.next = new Lnode(15);
        head.next.next.next = new Lnode(25);
        head.next.next.next.next = new Lnode(30);
        head.next.next.next.next.next = new Lnode(36);

        Tnode root = convert(head);
        levelOrderTraversal(root);
    }
}`,
      javascript: `Using Array
const tree = Array(10).fill(null);
 
function root(key) {
    if (tree[0] != null) {
        console.log("Tree already had root");
    } else {
        tree[0] = key;
    }
}
 
function setLeft(key, parent) {
    if (tree[parent] == null) {
        console.log("Can't set child at {(parent * 2) + 1}, no parent found ");
    } else {
        tree[(parent * 2) + 1] = key;
    }
}
 
function setRight(key, parent) {
    if (tree[parent] == null) {
        console.log("Can't set child at {(parent * 2) + 2}, no parent found");
    } else {
        tree[(parent * 2) + 2] = key;
    }
}
 
function printTree() {
    for (let i = 0; i < 10; i++) {
        if (tree[i] != null) {
            console.log(tree[i]);
        } else {
            console.log("-");
        }
    }
}
 
// Driver Code
root("A");
setLeft("B", 0);
setRight("C", 0);
setLeft("D", 1);
setRight("E", 1);
setRight("F", 2);
printTree();
Using Linked List
class Lnode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

// Binary tree node class
class Tnode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

// Converts a given linked list representing a 
// complete binary tree into the linked representation of a binary tree.
function convert(head) {
    if (head === null) {
        return null;
    }

    // Queue to store the parent nodes
    let q = [];

    // The first node is always the root node,
    // and add it to the queue
    let root = new Tnode(head.data);
    q.push(root);

    // Move the pointer to the next node
    head = head.next;

    // Until the end of the linked list is reached,
    // do the following steps
    while (head) {
    
        // Take the parent node from the queue
        // and remove it from the queue
        let parent = q.shift();

        let leftChild = null;
        let rightChild = null;

        // Create left child
        if (head) {
            leftChild = new Tnode(head.data);
            q.push(leftChild);
            head = head.next;
        }

        // Create right child
        if (head) {
            rightChild = new Tnode(head.data);
            q.push(rightChild);
            head = head.next;
        }

        // Assign the left and right 
        // children of the parent
        parent.left = leftChild;
        parent.right = rightChild;
    }

    return root;
}

// Level Order Traversal of the binary tree
function levelOrderTraversal(root) {
    if (root === null) {
        return;
    }

    // Queue to hold nodes at each level
    let q = [];
    q.push(root);

    while (q.length > 0) {
        let currNode = q.shift();

        // Print the current node's data
        console.log(currNode.data + " ");

        // Push the left and right children
        // of the current node to the queue
        if (currNode.left) {
            q.push(currNode.left);
        }
        if (currNode.right) {
            q.push(currNode.right);
        }
    }
}

// Create linked list : 10->12->15->25->30->36
let head = new Lnode(10);
head.next = new Lnode(12);
head.next.next = new Lnode(15);
head.next.next.next = new Lnode(25);
head.next.next.next.next = new Lnode(30);
head.next.next.next.next.next = new Lnode(36);

let root = convert(head);
levelOrderTraversal(root);`,
      python: `
Using Array
tree = [None] * 10
 
 
def root(key):
    if tree[0] != None:
        print("Tree already had root")
    else:
        tree[0] = key
 
 
def set_left(key, parent):
    if tree[parent] == None:
        print("Can't set child at", (parent * 2) + 1, ", no parent found")
    else:
        tree[(parent * 2) + 1] = key
 
 
def set_right(key, parent):
    if tree[parent] == None:
        print("Can't set child at", (parent * 2) + 2, ", no parent found")
    else:
        tree[(parent * 2) + 2] = key
 
 
def print_tree():
    for i in range(10):
        if tree[i] != None:
            print(tree[i], end="")
        else:
            print("-", end="")
    print()
 
 
# Driver Code
root('A')
set_left('B', 0)
set_right('C', 0)
set_left('D', 1)
set_right('E', 1)
set_right('F', 2)
print_tree()
 
Using Linked List
from collections import deque

class Lnode:
    def __init__(self, value):
        self.data = value
        self.next = None

class Tnode:
    def __init__(self, value):
        self.data = value
        self.left = None
        self.right = None

# Converts a given linked list representing a complete
# binary tree into the linked representation of a binary tree.
def convert(head):
    if not head:
        return None

    # Queue to store the parent nodes
    q = deque()

    # The first node is always the root node,
    # and add it to the queue
    root = Tnode(head.data)
    q.append(root)

    # Move the pointer to the next node
    head = head.next

    # Until the end of the linked list is reached,
    # do the following steps
    while head:
      
        # Take the parent node from the queue
        # and remove it from the queue
        parent = q.popleft()

        leftChild = None
        rightChild = None

        # Create left child
        if head:
            leftChild = Tnode(head.data)
            q.append(leftChild)
            head = head.next

        # Create right child
        if head:
            rightChild = Tnode(head.data)
            q.append(rightChild)
            head = head.next

        # Assign the left and right children of the parent
        parent.left = leftChild
        parent.right = rightChild

    return root

# Level Order Traversal of the binary tree
def levelOrderTraversal(root):
    if not root:
        return

    # Queue to hold nodes at each level
    q = deque()
    q.append(root)

    while q:
        currNode = q.popleft()

        # Print the current node's data
        print(currNode.data, end=" ")

        # Push the left and right children
        # of the current node to the queue
        if currNode.left:
            q.append(currNode.left)
        if currNode.right:
            q.append(currNode.right)

if __name__ == "__main__":
  
    # Create linked list : 10->12->15->25->30->36
    head = Lnode(10)
    head.next = Lnode(12)
    head.next.next = Lnode(15)
    head.next.next.next = Lnode(25)
    head.next.next.next.next = Lnode(30)
    head.next.next.next.next.next = Lnode(36)
    
    root = convert(head)
    levelOrderTraversal(root)`,
    },
    videoUrl: "https://www.youtube.com/watch?v=-DzowlcaUmE",
    resources: [
      {
        title: "GeeksforGeeks on Binary Trees",
        url: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
      },
    ],
  },
  {
    id: 7,
    name: "Graph",
    description:
      "A collection of nodes connected by edges. It can be used to represent various relationships.",
    detailedDescription:
      "A graph is a data structure consisting of a finite set of vertices (or nodes) and a finite set of edges that connect these vertices. Graphs can be classified as directed or undirected, weighted or unweighted, and can represent various relationships in data. Graph algorithms can be used to find paths, detect cycles, and perform traversals, among other tasks.",
    codeExamples: {
      cpp: `
Using Array
#include <iostream>
using namespace std;

class GraphMatrix {
    int vertices;
    int** adjMatrix;

public:
    GraphMatrix(int v) {
        vertices = v;
        adjMatrix = new int*[vertices];
        for (int i = 0; i < vertices; i++) {
            adjMatrix[i] = new int[vertices];
            for (int j = 0; j < vertices; j++) {
                adjMatrix[i][j] = 0;
            }
        }
    }

    void addEdge(int u, int v) {
        adjMatrix[u][v] = 1;
        adjMatrix[v][u] = 1; // For undirected graph
    }

    void display() {
        for (int i = 0; i < vertices; i++) {
            for (int j = 0; j < vertices; j++) {
                cout << adjMatrix[i][j] << " ";
            }
            cout << endl;
        }
    }

    ~GraphMatrix() {
        for (int i = 0; i < vertices; i++) {
            delete[] adjMatrix[i];
        }
        delete[] adjMatrix;
    }
};

int main() {
    GraphMatrix graph(5);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.display();
    return 0;
}
      
Using Linked List
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};

class GraphList {
    int vertices;
    Node** adjList;

public:
    GraphList(int v) {
        vertices = v;
        adjList = new Node*[vertices];
        for (int i = 0; i < vertices; i++) {
            adjList[i] = nullptr;
        }
    }

    void addEdge(int u, int v) {
        Node* newNode = new Node(v);
        newNode->next = adjList[u];
        adjList[u] = newNode;

        newNode = new Node(u);
        newNode->next = adjList[v];
        adjList[v] = newNode; // For undirected graph
    }

    void display() {
        for (int i = 0; i < vertices; i++) {
            cout << i << " -> ";
            Node* temp = adjList[i];
            while (temp) {
                cout << temp->data << " ";
                temp = temp->next;
            }
            cout << endl;
        }
    }

    ~GraphList() {
        for (int i = 0; i < vertices; i++) {
            Node* temp = adjList[i];
            while (temp) {
                Node* toDelete = temp;
                temp = temp->next;
                delete toDelete;
            }
        }
        delete[] adjList;
    }
};

int main() {
    GraphList graph(5);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.display();
    return 0;
}
`,
      java: `
Using Array
class GraphMatrix {
    private int[][] adjMatrix;
    private int vertices;

    public GraphMatrix(int vertices) {
        this.vertices = vertices;
        adjMatrix = new int[vertices][vertices];
    }

    public void addEdge(int u, int v) {
        adjMatrix[u][v] = 1;
        adjMatrix[v][u] = 1; // For undirected graph
    }

    public void display() {
        for (int i = 0; i < vertices; i++) {
            for (int j = 0; j < vertices; j++) {
                System.out.print(adjMatrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        GraphMatrix graph = new GraphMatrix(5);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        graph.addEdge(3, 4);
        graph.display();
    }
}
      
Using Linked List
import java.util.ArrayList;

class GraphList {
    private ArrayList<ArrayList<Integer>> adjList;
    private int vertices;

    public GraphList(int vertices) {
        this.vertices = vertices;
        adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }

    public void addEdge(int u, int v) {
        adjList.get(u).add(v);
        adjList.get(v).add(u); // For undirected graph
    }

    public void display() {
        for (int i = 0; i < vertices; i++) {
            System.out.print(i + " -> ");
            for (int neighbor : adjList.get(i)) {
                System.out.print(neighbor + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        GraphList graph = new GraphList(5);
        graph.addEdge(0, 1);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        graph.addEdge(3, 4);
        graph.display();
    }
}`,
      javascript: `
Using Array
class GraphMatrix {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjMatrix = Array.from({ length: vertices }, () => Array(vertices).fill(0));
    }

    addEdge(u, v) {
        this.adjMatrix[u][v] = 1;
        this.adjMatrix[v][u] = 1; // For undirected graph
    }

    display() {
        console.log("Adjacency Matrix:");
        this.adjMatrix.forEach(row => console.log(row.join(" ")));
    }
}

const graph = new GraphMatrix(5);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.display();
      
Using Linked List
class GraphList {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = Array.from({ length: vertices }, () => []);
    }

    addEdge(u, v) {
        this.adjList[u].push(v);
        this.adjList[v].push(u); // For undirected graph
    }

    display() {
        console.log("Adjacency List:");
        this.adjList.forEach((list, index) => {
            console.log("{index} -> {list.join(" ")}");
        });
    }
}

const graph = new GraphList(5);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.display();`,
      python: `
Using Array
class GraphMatrix:
    def __init__(self, vertices):
        self.vertices = vertices
        self.adj_matrix = [[0] * vertices for _ in range(vertices)]

    def add_edge(self, u, v):
        self.adj_matrix[u][v] = 1
        self.adj_matrix[v][u] = 1  # For undirected graph

    def display(self):
        for row in self.adj_matrix:
            print(" ".join(map(str, row)))


graph = GraphMatrix(5)
graph.add_edge(0, 1)
graph.add_edge(1, 2)
graph.add_edge(2, 3)
graph.add_edge(3, 4)
graph.display()
      
Using Linked List
class GraphList:
    def __init__(self, vertices):
        self.vertices = vertices
        self.adj_list = [[] for _ in range(vertices)]

    def add_edge(self, u, v):
        self.adj_list[u].append(v)
        self.adj_list[v].append(u)  # For undirected graph

    def display(self):
        for i, neighbors in enumerate(self.adj_list):
            print(f"{i} -> {' '.join(map(str, neighbors))}")


graph = GraphList(5)
graph.add_edge(0, 1)
graph.add_edge(1, 2)
graph.add_edge(2, 3)
graph.add_edge(3, 4)
graph.display()
`,
    },
    videoUrl: "https://www.youtube.com/watch?v=-VgHk7UMPP4",
    resources: [
      {
        title: "GeeksforGeeks on Graphs",
        url: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
      },
    ],
  },
  {
    id: 9,
    name: "Trie",
    description:
      "A special type of tree used to store associative data structures. A common application is storing a predictive text or autocomplete dictionary.",
    detailedDescription:
      "A Trie, also known as a prefix tree, is a specialized tree used to store associative data structures. It is particularly effective for searching and storing strings. Each node in a Trie represents a character of a string, and the path from the root to a node represents a prefix of some strings. Tries are widely used for autocomplete features in search engines, spell checkers, and IP routing.",
    codeExamples: {
      cpp: `
Using Array
#include <iostream>
#define MAX_SIZE 100
using namespace std;

class ArrayBST {
    int bst[MAX_SIZE]; // Fixed size array
public:
    ArrayBST() {
        for (int i = 0; i < MAX_SIZE; i++) bst[i] = -1;
    }

    void insert(int value) {
        int idx = 0;
        while (idx < MAX_SIZE) {
            if (bst[idx] == -1) {
                bst[idx] = value;
                return;
            }
            idx = value < bst[idx] ? 2 * idx + 1 : 2 * idx + 2;
        }
        cout << "Tree is full, cannot insert " << value << endl;
    }

    void inOrderTraversal(int idx = 0) {
        if (idx >= MAX_SIZE || bst[idx] == -1) return;
        inOrderTraversal(2 * idx + 1);
        cout << bst[idx] << " ";
        inOrderTraversal(2 * idx + 2);
    }
};

int main() {
    ArrayBST tree;
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.inOrderTraversal();
    return 0;
}


Using Linked List
#include <iostream>
using namespace std;

struct Node {
    int value;
    Node* left;
    Node* right;

    Node(int val) : value(val), left(nullptr), right(nullptr) {}
};

class BST {
public:
    Node* root;

    BST() : root(nullptr) {}

    Node* insert(Node* root, int value) {
        if (!root) return new Node(value);
        if (value < root->value)
            root->left = insert(root->left, value);
        else
            root->right = insert(root->right, value);
        return root;
    }

    void inorder(Node* root) {
        if (root) {
            inorder(root->left);
            cout << root->value << " ";
            inorder(root->right);
        }
    }

    void insert(int value) { root = insert(root, value); }
    void display() { inorder(root); cout << endl; }
};

int main() {
    BST tree;
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(3);
    tree.insert(7);

    cout << "Inorder Traversal: ";
    tree.display();

    return 0;
}

`,
      java: `
Using Array
class ArrayBST {
    private final int[] bst;
    private final int MAX_SIZE = 100;

    public ArrayBST() {
        bst = new int[MAX_SIZE];
        for (int i = 0; i < MAX_SIZE; i++) bst[i] = -1;
    }

    public void insert(int value) {
        int idx = 0;
        while (idx < MAX_SIZE) {
            if (bst[idx] == -1) {
                bst[idx] = value;
                return;
            }
            idx = value < bst[idx] ? 2 * idx + 1 : 2 * idx + 2;
        }
        System.out.println("Tree is full, cannot insert " + value);
    }

    public void inOrderTraversal(int idx) {
        if (idx >= MAX_SIZE || bst[idx] == -1) return;
        inOrderTraversal(2 * idx + 1);
        System.out.print(bst[idx] + " ");
        inOrderTraversal(2 * idx + 2);
    }

    public static void main(String[] args) {
        ArrayBST tree = new ArrayBST();
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.inOrderTraversal(0);
    }
}

Using Linked List
class Node {
    int value;
    Node left, right;

    Node(int value) {
        this.value = value;
        left = right = null;
    }
}

class BST {
    private Node root;

    public void insert(int value) {
        root = insertRec(root, value);
    }

    private Node insertRec(Node root, int value) {
        if (root == null) {
            root = new Node(value);
            return root;
        }
        if (value < root.value) {
            root.left = insertRec(root.left, value);
        } else if (value > root.value) {
            root.right = insertRec(root.right, value);
        }
        return root;
    }

    public void inorder() {
        inorderRec(root);
    }

    private void inorderRec(Node root) {
        if (root != null) {
            inorderRec(root.left);
            System.out.print(root.value + " ");
            inorderRec(root.right);
        }
    }

    public static void main(String[] args) {
        BST tree = new BST();
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(3);
        tree.insert(7);

        System.out.println("Inorder Traversal:");
        tree.inorder();
    }
}
`,
      javascript: `
Using Array
class ArrayBST {
    constructor(maxSize = 100) {
        this.bst = Array(maxSize).fill(null);
    }

    insert(value) {
        let idx = 0;
        while (idx < this.bst.length) {
            if (this.bst[idx] === null) {
                this.bst[idx] = value;
                return;
            }
            idx = value < this.bst[idx] ? 2 * idx + 1 : 2 * idx + 2;
        }
        console.log("Tree is full, cannot insert", value);
    }

    inOrderTraversal(idx = 0) {
        if (idx >= this.bst.length || this.bst[idx] === null) return;
        this.inOrderTraversal(2 * idx + 1);
        console.log(this.bst[idx]);
        this.inOrderTraversal(2 * idx + 2);
    }
}

const tree = new ArrayBST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.inOrderTraversal();


Using Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("Inorder Traversal:");
tree.inorder();
`,
      python: `
Using Array
class ArrayBST:
    def __init__(self, max_size=100):
        self.bst = [None] * max_size

    def insert(self, value):
        idx = 0
        while idx < len(self.bst):
            if self.bst[idx] is None:
                self.bst[idx] = value
                return
            idx = 2 * idx + 1 if value < self.bst[idx] else 2 * idx + 2
        print("Tree is full, cannot insert", value)

    def in_order_traversal(self, idx=0):
        if idx >= len(self.bst) or self.bst[idx] is None:
            return
        self.in_order_traversal(2 * idx + 1)
        print(self.bst[idx], end=" ")
        self.in_order_traversal(2 * idx + 2)


tree = ArrayBST()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.in_order_traversal()


Using Linked List
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, root, value):
        if not root:
            return Node(value)
        if value < root.value:
            root.left = self.insert(root.left, value)
        else:
            root.right = self.insert(root.right, value)
        return root

    def add(self, value):
        self.root = self.insert(self.root, value)

    def inorder(self, root):
        if root:
            self.inorder(root.left)
            print(root.value, end=" ")
            self.inorder(root.right)

    def display(self):
        self.inorder(self.root)
        print()

# Example Usage
tree = BST()
tree.add(10)
tree.add(5)
tree.add(15)
tree.add(3)
tree.add(7)

print("Inorder Traversal:")
tree.display()

`,
    },
    videoUrl: "https://www.youtube.com/watch?v=Y6dOuGjwsxU",
    resources: [
      {
        title: "GeeksforGeeks on Trie",
        url: "https://www.geeksforgeeks.org/trie-insert-and-search/",
      },
    ],
  },
  {
    id: 8,
    name: "Binary Search Tree",
    description:
      "A tree data structure where each node has at most two children, and the left subtree contains values less than the parent, while the right subtree contains values greater than the parent.",
    detailedDescription:
      "A Binary Search Tree (BST) is a data structure used for efficient searching, insertion, and deletion of elements. Each node in the BST has a value, and the tree is structured such that for any given node, all values in the left subtree are smaller, and all values in the right subtree are larger. This property allows operations like search, insertion, and deletion to be performed in O(log n) time on average. BSTs can be balanced or unbalanced, with balanced trees ensuring optimal performance.",
    codeExamples: {
        cpp: `
        Using Array
        #include <iostream>
        using namespace std;
        
        class TrieNode {
        public:
            TrieNode* children[26];  // Assuming lowercase English letters
            bool isEndOfWord;
        
            TrieNode() {
                isEndOfWord = false;
                for (int i = 0; i < 26; i++) {
                    children[i] = nullptr;
                }
            }
        };
        
        class Trie {
        private:
            TrieNode* root;
        
        public:
            Trie() {
                root = new TrieNode();
            }
        
            void insert(string word) {
                TrieNode* node = root;
                for (char ch : word) {
                    int index = ch - 'a';
                    if (node->children[index] == nullptr) {
                        node->children[index] = new TrieNode();
                    }
                    node = node->children[index];
                }
                node->isEndOfWord = true;
            }
        
            bool search(string word) {
                TrieNode* node = root;
                for (char ch : word) {
                    int index = ch - 'a';
                    if (node->children[index] == nullptr) {
                        return false;
                    }
                    node = node->children[index];
                }
                return node->isEndOfWord;
            }
        
            bool startsWith(string prefix) {
                TrieNode* node = root;
                for (char ch : prefix) {
                    int index = ch - 'a';
                    if (node->children[index] == nullptr) {
                        return false;
                    }
                    node = node->children[index];
                }
                return true;
            }
        
            ~Trie() {
                // Implement destructor if needed to free memory (not shown for brevity)
            }
        };
        
        int main() {
            Trie trie;
            trie.insert("apple");
            cout << trie.search("apple") << endl;    // 1 (true)
            cout << trie.search("app") << endl;      // 0 (false)
            cout << trie.startsWith("app") << endl;  // 1 (true)
            return 0;
        }
        
        Using Linked List
        #include <iostream>
        using namespace std;
        
        class TrieNode {
        public:
            char data;
            TrieNode* next;
            TrieNode* children[26];  // Assuming lowercase English letters
            bool isEndOfWord;
        
            TrieNode(char c) {
                data = c;
                next = nullptr;
                isEndOfWord = false;
                for (int i = 0; i < 26; i++) {
                    children[i] = nullptr;
                }
            }
        };
        
        class Trie {
        private:
            TrieNode* root;
        
        public:
            Trie() {
                root = new TrieNode(' ');
            }
        
            void insert(string word) {
                TrieNode* node = root;
                for (char ch : word) {
                    int index = ch - 'a';
                    if (node->children[index] == nullptr) {
                        node->children[index] = new TrieNode(ch);
                    }
                    node = node->children[index];
                }
                node->isEndOfWord = true;
            }
        
            bool search(string word) {
                TrieNode* node = root;
                for (char ch : word) {
                    int index = ch - 'a';
                    if (node->children[index] == nullptr) {
                        return false;
                    }
                    node = node->children[index];
                }
                return node->isEndOfWord;
            }
        
            bool startsWith(string prefix) {
                TrieNode* node = root;
                for (char ch : prefix) {
                    int index = ch - 'a';
                    if (node->children[index] == nullptr) {
                        return false;
                    }
                    node = node->children[index];
                }
                return true;
            }
        
            ~Trie() {
                // Implement destructor if needed to free memory (not shown for brevity)
            }
        };
        
        int main() {
            Trie trie;
            trie.insert("apple");
            cout << trie.search("apple") << endl;    // 1 (true)
            cout << trie.search("app") << endl;      // 0 (false)
            cout << trie.startsWith("app") << endl;  // 1 (true)
            return 0;
        }
        `,
              java: `
        Using Array
        class TrieNode {
            TrieNode[] children;
            boolean isEndOfWord;
        
            public TrieNode() {
                children = new TrieNode[26];  // Assuming lowercase English letters
                isEndOfWord = false;
            }
        }
        
        class Trie {
            private TrieNode root;
        
            public Trie() {
                root = new TrieNode();
            }
        
            public void insert(String word) {
                TrieNode node = root;
                for (char ch : word.toCharArray()) {
                    int index = ch - 'a';
                    if (node.children[index] == null) {
                        node.children[index] = new TrieNode();
                    }
                    node = node.children[index];
                }
                node.isEndOfWord = true;
            }
        
            public boolean search(String word) {
                TrieNode node = root;
                for (char ch : word.toCharArray()) {
                    int index = ch - 'a';
                    if (node.children[index] == null) {
                        return false;
                    }
                    node = node.children[index];
                }
                return node.isEndOfWord;
            }
        
            public boolean startsWith(String prefix) {
                TrieNode node = root;
                for (char ch : prefix.toCharArray()) {
                    int index = ch - 'a';
                    if (node.children[index] == null) {
                        return false;
                    }
                    node = node.children[index];
                }
                return true;
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                Trie trie = new Trie();
                trie.insert("apple");
                System.out.println(trie.search("apple"));  // true
                System.out.println(trie.search("app"));    // false
                System.out.println(trie.startsWith("app")); // true
            }
        }
        
        Using Linked List
        class TrieNode {
            char data;
            TrieNode[] children;
            boolean isEndOfWord;
        
            public TrieNode(char c) {
                data = c;
                children = new TrieNode[26]; // Assuming lowercase English letters
                isEndOfWord = false;
            }
        }
        
        class Trie {
            private TrieNode root;
        
            public Trie() {
                root = new TrieNode(' ');
            }
        
            public void insert(String word) {
                TrieNode node = root;
                for (char ch : word.toCharArray()) {
                    int index = ch - 'a';
                    if (node.children[index] == null) {
                        node.children[index] = new TrieNode(ch);
                    }
                    node = node.children[index];
                }
                node.isEndOfWord = true;
            }
        
            public boolean search(String word) {
                TrieNode node = root;
                for (char ch : word.toCharArray()) {
                    int index = ch - 'a';
                    if (node.children[index] == null) {
                        return false;
                    }
                    node = node.children[index];
                }
                return node.isEndOfWord;
            }
        
            public boolean startsWith(String prefix) {
                TrieNode node = root;
                for (char ch : prefix.toCharArray()) {
                    int index = ch - 'a';
                    if (node.children[index] == null) {
                        return false;
                    }
                    node = node.children[index];
                }
                return true;
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                Trie trie = new Trie();
                trie.insert("apple");
                System.out.println(trie.search("apple"));  // true
                System.out.println(trie.search("app"));    // false
                System.out.println(trie.startsWith("app")); // true
            }
        }`,
              javascript: `
        Using Array
        class TrieNode {
            constructor() {
                this.children = new Array(26).fill(null); // Assuming lowercase English letters
                this.isEndOfWord = false;
            }
        }
        
        class Trie {
            constructor() {
                this.root = new TrieNode();
            }
        
            insert(word) {
                let node = this.root;
                for (let ch of word) {
                    let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
                    if (!node.children[index]) {
                        node.children[index] = new TrieNode();
                    }
                    node = node.children[index];
                }
                node.isEndOfWord = true;
            }
        
            search(word) {
                let node = this.root;
                for (let ch of word) {
                    let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
                    if (!node.children[index]) {
                        return false;
                    }
                    node = node.children[index];
                }
                return node.isEndOfWord;
            }
        
            startsWith(prefix) {
                let node = this.root;
                for (let ch of prefix) {
                    let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
                    if (!node.children[index]) {
                        return false;
                    }
                    node = node.children[index];
                }
                return true;
            }
        }
        
        const trie = new Trie();
        trie.insert("apple");
        console.log(trie.search("apple")); // true
        console.log(trie.search("app"));   // false
        console.log(trie.startsWith("app")); // true
        
        Using Linked List
        class TrieNode {
            constructor(char) {
                this.data = char;
                this.children = [];
                this.isEndOfWord = false;
            }
        }
        
        class Trie {
            constructor() {
                this.root = new TrieNode(' ');
            }
        
            insert(word) {
                let node = this.root;
                for (let ch of word) {
                    let found = false;
                    for (let child of node.children) {
                        if (child.data === ch) {
                            node = child;
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        const newNode = new TrieNode(ch);
                        node.children.push(newNode);
                        node = newNode;
                    }
                }
                node.isEndOfWord = true;
            }
        
            search(word) {
                let node = this.root;
                for (let ch of word) {
                    let found = false;
                    for (let child of node.children) {
                        if (child.data === ch) {
                            node = child;
                            found = true;
                            break;
                        }
                    }
                    if (!found) return false;
                }
                return node.isEndOfWord;
            }
        
            startsWith(prefix) {
                let node = this.root;
                for (let ch of prefix) {
                    let found = false;
                    for (let child of node.children) {
                        if (child.data === ch) {
                            node = child;
                            found = true;
                            break;
                        }
                    }
                    if (!found) return false;
                }
                return true;
            }
        }
        
        const trie = new Trie();
        trie.insert("apple");
        console.log(trie.search("apple")); // true
        console.log(trie.search("app"));   // false
        console.log(trie.startsWith("app")); // true`,
              python: `
        Using Array
        class TrieNode:
            def __init__(self):
                self.children = [None] * 26  # Assuming lowercase English letters
                self.is_end_of_word = False
        
        class Trie:
            def __init__(self):
                self.root = TrieNode()
        
            def insert(self, word):
                node = self.root
                for ch in word:
                    index = ord(ch) - ord('a')
                    if node.children[index] is None:
                        node.children[index] = TrieNode()
                    node = node.children[index]
                node.is_end_of_word = True
        
            def search(self, word):
                node = self.root
                for ch in word:
                    index = ord(ch) - ord('a')
                    if node.children[index] is None:
                        return False
                    node = node.children[index]
                return node.is_end_of_word
        
            def starts_with(self, prefix):
                node = self.root
                for ch in prefix:
                    index = ord(ch) - ord('a')
                    if node.children[index] is None:
                        return False
                    node = node.children[index]
                return True
        
        # Testing the Trie
        trie = Trie()
        trie.insert("apple")
        print(trie.search("apple"))  # True
        print(trie.search("app"))    # False
        print(trie.starts_with("app"))  # True
        
        Using Linked List
        class TrieNode:
            def __init__(self, char=None):
                self.char = char
                self.children = []
                self.is_end_of_word = False
        
        class Trie:
            def __init__(self):
                self.root = TrieNode()
        
            def insert(self, word):
                node = self.root
                for ch in word:
                    found = False
                    for child in node.children:
                        if child.char == ch:
                            node = child
                            found = True
                            break
                    if not found:
                        new_node = TrieNode(ch)
                        node.children.append(new_node)
                        node = new_node
                node.is_end_of_word = True
        
            def search(self, word):
                node = self.root
                for ch in word:
                    found = False
                    for child in node.children:
                        if child.char == ch:
                            node = child
                            found = True
                            break
                    if not found:
                        return False
                return node.is_end_of_word
        
            def starts_with(self, prefix):
                node = self.root
                for ch in prefix:
                    found = False
                    for child in node.children:
                        if child.char == ch:
                            node = child
                            found = True
                            break
                    if not found:
                        return False
                return True
        
        # Testing the Trie
        trie = Trie()
        trie.insert("apple")
        print(trie.search("apple"))  # True
        print(trie.search("app"))    # False
        print(trie.starts_with("app"))  # True
        `,
            },
            videoUrl: "https://www.youtube.com/watch?v=mtvbVLK5xDQ",
            resources: [
              {
                title: "GeeksforGeeks on Binary Search Tree",
                url: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/",
              },
            ],
          }
  
];

export default dataStructures;
