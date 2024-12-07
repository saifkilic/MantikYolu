const algorithms = [
    {
        id: 1,
        name: "Bubble Sort",
        shortDescription: "A simple comparison-based sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order.",
        longDescription: "Bubble Sort is a basic sorting algorithm that works by comparing adjacent elements in an array and swapping them if they are in the wrong order. It repeatedly passes through the list until the entire array is sorted. Though simple, it is not efficient for large datasets, with a time complexity of O(n²) in the worst case.",
        codeExamples: {
            cpp: `
Using Array
           #include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break; // Optimized to exit if no swaps are made
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubbleSort(arr, n);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
 
Using Linked List
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

// Function to add a node at the end
void append(Node*& head, int data) {
    Node* newNode = new Node{data, nullptr};
    if (!head) {
        head = newNode;
        return;
    }
    Node* temp = head;
    while (temp->next) {
        temp = temp->next;
    }
    temp->next = newNode;
}

// Bubble Sort for Linked List
void bubbleSort(Node* head) {
    if (!head) return;

    bool swapped;
    do {
        swapped = false;
        Node* current = head;

        while (current->next) {
            if (current->data > current->next->data) {
                // Swap data
                swap(current->data, current->next->data);
                swapped = true;
            }
            current = current->next;
        }
    } while (swapped);
}

// Function to print the linked list
void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    Node* head = nullptr;

    // Create linked list
    append(head, 64);
    append(head, 34);
    append(head, 25);
    append(head, 12);
    append(head, 22);
    append(head, 11);
    append(head, 90);

    cout << "Original list: ";
    printList(head);

    bubbleSort(head);

    cout << "Sorted list: ";
    printList(head);

    return 0;
}
`,
            java: `
Using Array
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // Optimized to exit if no swaps are made
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        bubbleSort(arr);

        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
            
Using Linked List
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedListBubbleSort {
    public static Node bubbleSort(Node head) {
        if (head == null) return head;

        boolean swapped;
        do {
            swapped = false;
            Node current = head;

            while (current.next != null) {
                if (current.data > current.next.data) {
                    // Swap data
                    int temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }
                current = current.next;
            }
        } while (swapped);

        return head;
    }

    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Node head = new Node(64);
        head.next = new Node(34);
        head.next.next = new Node(25);
        head.next.next.next = new Node(12);
        head.next.next.next.next = new Node(22);
        head.next.next.next.next.next = new Node(11);
        head.next.next.next.next.next.next = new Node(90);

        System.out.println("Original list:");
        printList(head);

        head = bubbleSort(head);

        System.out.println("Sorted list:");
        printList(head);
    }
}
`,
            javascript: `
Using Array
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break; // Optimized to exit if no swaps are made
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        bubbleSort(arr);

        System.out.print("Sorted array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
            
Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    bubbleSort() {
        if (!this.head) return;

        let swapped;
        do {
            swapped = false;
            let current = this.head;

            while (current.next) {
                if (current.data > current.next.data) {
                    // Swap data
                    const temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }
                current = current.next;
            }
        } while (swapped);
    }

    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" "));
    }
}

// Example usage
const list = new LinkedList();
list.append(64);
list.append(34);
list.append(25);
list.append(12);
list.append(22);
list.append(11);
list.append(90);

console.log("Original list:");
list.printList();

list.bubbleSort();

console.log("Sorted list:");
list.printList();
`,
            python: `
Using Array
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:  # Optimized to exit if no swaps are made
            break

arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print("Sorted array:", arr)
            
Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def bubble_sort(self):
        if not self.head:
            return

        swapped = True
        while swapped:
            swapped = False
            current = self.head
            while current.next:
                if current.data > current.next.data:
                    # Swap data
                    current.data, current.next.data = current.next.data, current.data
                    swapped = True
                current = current.next

    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" ")
            current = current.next
        print()

# Example usage
ll = LinkedList()
ll.append(64)
ll.append(34)
ll.append(25)
ll.append(12)
ll.append(22)
ll.append(11)
ll.append(90)

print("Original list:")
ll.print_list()

ll.bubble_sort()

print("Sorted list:")
ll.print_list()
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=uJLwnsLn0_Q",
        resources: [
            {
                title: "GeeksforGeeks on Bubble Sort",
                url: "https://www.geeksforgeeks.org/bubble-sort/"
            }
        ]
    },
    {
        id: 2,
        name: "Merge Sort",
        shortDescription: "A divide-and-conquer sorting algorithm that divides the input array into halves and sorts them recursively.",
        longDescription: "Merge Sort is a divide-and-conquer algorithm that splits an array into two halves, recursively sorts them, and then merges the sorted halves back together. It is efficient with a time complexity of O(n log n), making it a better choice than simpler algorithms like Bubble Sort for larger datasets.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
using namespace std;

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int L[n1], R[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int i = 0; i < n2; i++)
        R[i] = arr[mid + 1 + i];

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    while (i < n1)
        arr[k++] = L[i++];

    while (j < n2)
        arr[k++] = R[j++];
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
            
Using Linked List
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

Node* merge(Node* left, Node* right) {
    if (!left) return right;
    if (!right) return left;

    if (left->data <= right->data) {
        left->next = merge(left->next, right);
        return left;
    } else {
        right->next = merge(left, right->next);
        return right;
    }
}

Node* mergeSort(Node* head) {
    if (!head || !head->next) return head;

    Node *slow = head, *fast = head->next;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    Node* mid = slow->next;
    slow->next = nullptr;

    Node* left = mergeSort(head);
    Node* right = mergeSort(mid);

    return merge(left, right);
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

void append(Node*& head, int data) {
    if (!head) {
        head = new Node(data);
        return;
    }
    Node* temp = head;
    while (temp->next) temp = temp->next;
    temp->next = new Node(data);
}

int main() {
    Node* head = nullptr;
    append(head, 38);
    append(head, 27);
    append(head, 43);
    append(head, 3);
    append(head, 9);
    append(head, 82);
    append(head, 10);

    cout << "Original List: ";
    printList(head);

    head = mergeSort(head);

    cout << "Sorted List: ";
    printList(head);

    return 0;
}
`,
            java: `
Using Array
import java.util.Arrays;

public class MergeSortArray {

    public static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) {
            L[i] = arr[left + i];
        }
        for (int j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) {
            arr[k++] = L[i++];
        }

        while (j < n2) {
            arr[k++] = R[j++];
        }
    }

    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            merge(arr, left, mid, right);
        }
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Original Array: " + Arrays.toString(arr));

        mergeSort(arr, 0, arr.length - 1);

        System.out.println("Sorted Array: " + Arrays.toString(arr));
    }
}
            
Using Linked List
import java.util.Arrays;

public class MergeSortArray {

    public static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) {
            L[i] = arr[left + i];
        }
        for (int j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }

        int i = 0, j = 0, k = left;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        while (i < n1) {
            arr[k++] = L[i++];
        }

        while (j < n2) {
            arr[k++] = R[j++];
        }
    }

    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            merge(arr, left, mid, right);
        }
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        System.out.println("Original Array: " + Arrays.toString(arr));

        mergeSort(arr, 0, arr.length - 1);

        System.out.println("Sorted Array: " + Arrays.toString(arr));
    }
}
`,
            javascript: `
Using Array
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted array:", mergeSort(arr));
            
Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) current = current.next;
        current.next = newNode;
    }

    merge(left, right) {
        if (!left) return right;
        if (!right) return left;

        if (left.data <= right.data) {
            left.next = this.merge(left.next, right);
            return left;
        } else {
            right.next = this.merge(left, right.next);
            return right;
        }
    }

    mergeSort(head) {
        if (!head || !head.next) return head;

        let slow = head, fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const mid = slow.next;
        slow.next = null;

        const left = this.mergeSort(head);
        const right = this.mergeSort(mid);

        return this.merge(left, right);
    }

    sort() {
        this.head = this.mergeSort(this.head);
    }

    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" "));
    }
}

// Example usage
const list = new LinkedList();
[38, 27, 43, 3, 9, 82, 10].forEach((num) => list.append(num));

console.log("Original List:");
list.printList();

list.sort();

console.log("Sorted List:");
list.printList();
`,
            python: `
Using Array
def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result

def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

arr = [38, 27, 43, 3, 9, 82, 10]
print("Sorted array:", merge_sort(arr))
            
Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        temp = self.head
        while temp.next:
            temp = temp.next
        temp.next = new_node

    def merge(self, left, right):
        if not left:
            return right
        if not right:
            return left

        if left.data <= right.data:
            left.next = self.merge(left.next, right)
            return left
        else:
            right.next = self.merge(left, right.next)
            return right

    def merge_sort(self, head):
        if not head or not head.next:
            return head

        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        mid = slow.next
        slow.next = None

        left = self.merge_sort(head)
        right = self.merge_sort(mid)

        return self.merge(left, right)

    def sort(self):
        self.head = self.merge_sort(self.head)

    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" ")
            current = current.next
        print()

# Example usage
ll = LinkedList()
for num in [38, 27, 43, 3, 9, 82, 10]:
    ll.append(num)

print("Original List:")
ll.print_list()

ll.sort()

print("\nSorted List:")
ll.print_list()
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=tn9hxD8gx2M",
        resources: [
            {
                title: "GeeksforGeeks on Merge Sort",
                url: "https://www.geeksforgeeks.org/merge-sort/"
            }
        ]
    },
    {
        id: 3,
        name: "Quick Sort",
        shortDescription: "A divide-and-conquer algorithm that selects a pivot element and partitions the array into subarrays based on it.",
        longDescription: "Quick Sort is an efficient, divide-and-conquer sorting algorithm. It selects a pivot element and partitions the array such that elements less than the pivot are on its left, and elements greater than the pivot are on its right. The algorithm is then recursively applied to the left and right subarrays. Quick Sort has an average time complexity of O(n log n), but can degrade to O(n²) if the pivot is poorly chosen.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
using namespace std;

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = sizeof(arr) / sizeof(arr[0]);

    quickSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
            
Using Linked List
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

void append(Node*& head, int data) {
    if (!head) {
        head = new Node(data);
        return;
    }
    Node* temp = head;
    while (temp->next) temp = temp->next;
    temp->next = new Node(data);
}

Node* partition(Node* head, Node** newHead, Node** newEnd) {
    Node* pivot = head;
    Node *prev = nullptr, *cur = head, *tail = pivot;

    while (cur) {
        Node* next = cur->next;

        if (cur->data < pivot->data) {
            cur->next = *newHead;
            *newHead = cur;
        } else {
            tail->next = cur;
            tail = cur;
        }

        cur = next;
    }
    tail->next = nullptr;
    *newEnd = tail;

    return pivot;
}

Node* quickSortRecur(Node* head, Node* end) {
    if (!head || head == end) return head;

    Node *newHead = nullptr, *newEnd = nullptr;

    Node* pivot = partition(head, &newHead, &newEnd);

    if (newHead != pivot) {
        Node* temp = newHead;
        while (temp->next != pivot) temp = temp->next;
        temp->next = nullptr;

        newHead = quickSortRecur(newHead, temp);
        temp = newHead;
        while (temp->next) temp = temp->next;
        temp->next = pivot;
    }

    pivot->next = quickSortRecur(pivot->next, newEnd);

    return newHead;
}

Node* quickSort(Node* head) {
    return quickSortRecur(head, nullptr);
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    Node* head = nullptr;
    append(head, 38);
    append(head, 27);
    append(head, 43);
    append(head, 3);
    append(head, 9);
    append(head, 82);
    append(head, 10);

    cout << "Original List: ";
    printList(head);

    head = quickSort(head);

    cout << "Sorted List: ";
    printList(head);

    return 0;
}
`,
            java: `
Using Array
import java.util.Arrays;

public class QuickSortArray {

    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return i + 1;
    }

    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};

        quickSort(arr, 0, arr.length - 1);

        System.out.println("Sorted Array: " + Arrays.toString(arr));
    }
}
            
Using Linked List
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class QuickSortLinkedList {

    public static Node partition(Node head, Node end, Node[] newHead, Node[] newEnd) {
        Node pivot = end;
        Node prev = null, cur = head, tail = pivot;

        while (cur != pivot) {
            Node next = cur.next;

            if (cur.data < pivot.data) {
                if (newHead[0] == null) {
                    newHead[0] = cur;
                }
                cur.next = null;
                if (prev != null) {
                    prev.next = next;
                }
                cur.next = newHead[0];
                newHead[0] = cur;
            } else {
                tail.next = cur;
                tail = cur;
            }

            cur = next;
        }

        if (newHead[0] == null) {
            newHead[0] = pivot;
        }
        newEnd[0] = tail;

        return pivot;
    }

    public static Node quickSortRecur(Node head, Node end) {
        if (head == null || head == end) {
            return head;
        }

        Node[] newHead = new Node[1];
        Node[] newEnd = new Node[1];

        Node pivot = partition(head, end, newHead, newEnd);

        if (newHead[0] != pivot) {
            Node temp = newHead[0];
            while (temp.next != pivot) {
                temp = temp.next;
            }
            temp.next = null;

            newHead[0] = quickSortRecur(newHead[0], temp);
            temp = getTail(newHead[0]);
            temp.next = pivot;
        }

        pivot.next = quickSortRecur(pivot.next, newEnd[0]);

        return newHead[0];
    }

    public static Node quickSort(Node head) {
        return quickSortRecur(head, getTail(head));
    }

    public static Node getTail(Node head) {
        while (head != null && head.next != null) {
            head = head.next;
        }
        return head;
    }

    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Node head = new Node(38);
        head.next = new Node(27);
        head.next.next = new Node(43);
        head.next.next.next = new Node(3);
        head.next.next.next.next = new Node(9);
        head.next.next.next.next.next = new Node(82);
        head.next.next.next.next.next.next = new Node(10);

        System.out.println("Original List:");
        printList(head);

        head = quickSort(head);

        System.out.println("Sorted List:");
        printList(head);
    }
}
`,
            javascript: `
Using Array
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted Array:", quickSort(arr));
            
Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    getTail(head) {
        while (head && head.next) {
            head = head.next;
        }
        return head;
    }

    partition(head, end) {
        let pivot = end;
        let prev = null;
        let cur = head;
        let tail = pivot;

        let newHead = null;
        let newEnd = null;

        while (cur !== pivot) {
            const next = cur.next;
            if (cur.data < pivot.data) {
                cur.next = newHead;
                newHead = cur;
            } else {
                tail.next = cur;
                tail = cur;
            }
            cur = next;
        }
        tail.next = null;

        if (!newHead) newHead = pivot;
        newEnd = tail;

        return { pivot, newHead, newEnd };
    }

    quickSortRecur(head, end) {
        if (!head || head === end) return head;

        const { pivot, newHead, newEnd } = this.partition(head, end);

        if (newHead !== pivot) {
            let temp = newHead;
            while (temp.next !== pivot) {
                temp = temp.next;
            }
            temp.next = null;

            const sortedHead = this.quickSortRecur(newHead, temp);
            temp = this.getTail(sortedHead);
            temp.next = pivot;

            pivot.next = this.quickSortRecur(pivot.next, newEnd);
            return sortedHead;
        } else {
            pivot.next = this.quickSortRecur(pivot.next, newEnd);
            return pivot;
        }
    }

    quickSort() {
        this.head = this.quickSortRecur(this.head, this.getTail(this.head));
    }

    printList() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

// Example Usage
const list = new LinkedList();
list.append(38);
list.append(27);
list.append(43);
list.append(3);
list.append(9);
list.append(82);
list.append(10);

console.log("Original List:");
list.printList();

list.quickSort();

console.log("Sorted List:");
list.printList();
`,
            python: `
Using Array
def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[-1]
    left = [x for x in arr[:-1] if x <= pivot]
    right = [x for x in arr[:-1] if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)

arr = [38, 27, 43, 3, 9, 82, 10]
print("Sorted Array:", quick_sort(arr))
            
Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        temp = self.head
        while temp.next:
            temp = temp.next
        temp.next = new_node

    def get_tail(self, head):
        while head and head.next:
            head = head.next
        return head

    def partition(self, head, end):
        pivot = end
        prev = None
        cur = head
        tail = pivot

        new_head = None
        new_end = None

        while cur != pivot:
            next_node = cur.next
            if cur.data < pivot.data:
                cur.next = new_head
                new_head = cur
            else:
                tail.next = cur
                tail = cur
            cur = next_node

        tail.next = None

        if not new_head:
            new_head = pivot
        new_end = tail

        return new_head, pivot, new_end

    def quick_sort_recur(self, head, end):
        if not head or head == end:
            return head

        new_head, pivot, new_end = self.partition(head, end)

        if new_head != pivot:
            temp = new_head
            while temp.next != pivot:
                temp = temp.next
            temp.next = None

            sorted_head = self.quick_sort_recur(new_head, temp)
            temp = self.get_tail(sorted_head)
            temp.next = pivot

            pivot.next = self.quick_sort_recur(pivot.next, new_end)
            return sorted_head
        else:
            pivot.next = self.quick_sort_recur(pivot.next, new_end)
            return pivot

    def quick_sort(self):
        self.head = self.quick_sort_recur(self.head, self.get_tail(self.head))

    def print_list(self):
        temp = self.head
        result = []
        while temp:
            result.append(temp.data)
            temp = temp.next
        print(" -> ".join(map(str, result)))


# Example Usage
ll = LinkedList()
ll.append(38)
ll.append(27)
ll.append(43)
ll.append(3)
ll.append(9)
ll.append(82)
ll.append(10)

print("Original List:")
ll.print_list()

ll.quick_sort()

print("Sorted List:")
ll.print_list()
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=tWCaFVJMUi8",
        resources: [
            {
                title: "GeeksforGeeks on Quick Sort",
                url: "https://www.geeksforgeeks.org/quick-sort/"
            }
        ]
    },
    {
        id: 4,
        name: "Insertion Sort",
        shortDescription: "A simple sorting algorithm that builds the final sorted array one item at a time.",
        longDescription: "Insertion Sort is an in-place sorting algorithm that builds the sorted array one element at a time. It works by taking each element and inserting it into its correct position in the already sorted portion of the array. While simple and intuitive, its time complexity of O(n²) makes it inefficient for large datasets.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
            
Using Linked List
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void sortedInsert(Node*& head, Node* newNode) {
    if (!head || head->data >= newNode->data) {
        newNode->next = head;
        head = newNode;
    } else {
        Node* current = head;
        while (current->next && current->next->data < newNode->data) {
            current = current->next;
        }
        newNode->next = current->next;
        current->next = newNode;
    }
}

void insertionSort(Node*& head) {
    Node* sorted = nullptr;
    Node* current = head;

    while (current) {
        Node* next = current->next;
        sortedInsert(sorted, current);
        current = next;
    }
    head = sorted;
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
}

void push(Node*& head, int data) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = head;
    head = newNode;
}

int main() {
    Node* head = nullptr;
    push(head, 5);
    push(head, 6);
    push(head, 11);
    push(head, 13);
    push(head, 12);

    insertionSort(head);
    printList(head);

    return 0;
}
`,
            java: `
Using Array
public class InsertionSortArray {
    public static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);

        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
            
Using Linked List
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class InsertionSortLinkedList {
    public static Node insertionSort(Node head) {
        Node sorted = null;

        Node current = head;
        while (current != null) {
            Node next = current.next;

            sorted = sortedInsert(sorted, current);
            current = next;
        }
        return sorted;
    }

    private static Node sortedInsert(Node sorted, Node newNode) {
        if (sorted == null || sorted.data >= newNode.data) {
            newNode.next = sorted;
            return newNode;
        }

        Node current = sorted;
        while (current.next != null && current.next.data < newNode.data) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;

        return sorted;
    }

    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
    }

    public static void main(String[] args) {
        Node head = new Node(12);
        head.next = new Node(11);
        head.next.next = new Node(13);
        head.next.next.next = new Node(5);
        head.next.next.next.next = new Node(6);

        head = insertionSort(head);
        printList(head);
    }
}
`,
            javascript: `
Using Array
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

const arr = [12, 11, 13, 5, 6];
insertionSort(arr);
console.log(arr);
            
Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertionSort() {
        let sorted = null;
        let current = this.head;

        while (current) {
            const next = current.next;
            sorted = this.sortedInsert(sorted, current);
            current = next;
        }
        this.head = sorted;
    }

    sortedInsert(sorted, newNode) {
        if (!sorted || sorted.data >= newNode.data) {
            newNode.next = sorted;
            return newNode;
        }

        let current = sorted;
        while (current.next && current.next.data < newNode.data) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;

        return sorted;
    }

    printList() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const ll = new LinkedList();
ll.push(5);
ll.push(6);
ll.push(11);
ll.push(13);
ll.push(12);

ll.insertionSort();
ll.printList();
`,
            python: `
Using Array
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

arr = [12, 11, 13, 5, 6]
insertion_sort(arr)
print(arr)
            
Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insertion_sort(self):
        sorted_head = None
        current = self.head

        while current:
            next_node = current.next
            sorted_head = self.sorted_insert(sorted_head, current)
            current = next_node
        self.head = sorted_head

    def sorted_insert(self, sorted_head, new_node):
        if not sorted_head or sorted_head.data >= new_node.data:
            new_node.next = sorted_head
            return new_node

        current = sorted_head
        while current.next and current.next.data < new_node.data:
            current = current.next

        new_node.next = current.next
        current.next = new_node

        return sorted_head

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data, end=" ")
            temp = temp.next
        print()

ll = LinkedList()
ll.push(12)
ll.push(11)
ll.push(13)
ll.push(5)
ll.push(6)

ll.insertion_sort()
ll.print_list()
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=nKzEJWbkPbQ",
        resources: [
            {
                title: "GeeksforGeeks on Insertion Sort",
                url: "https://www.geeksforgeeks.org/insertion-sort/"
            }
        ]
    },
    {
        id: 5,
        name: "Selection Sort",
        shortDescription: "A comparison-based sorting algorithm that selects the smallest element and swaps it with the first unsorted element.",
        longDescription: "Selection Sort works by selecting the smallest element from the unsorted part of the array and swapping it with the first unsorted element. This process repeats for each element in the array until the entire array is sorted. Its time complexity is O(n²), making it inefficient for large datasets.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr[i], arr[minIndex]);
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);

    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
            
Using Linked List
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void selectionSort(Node* head) {
    for (Node* i = head; i != nullptr; i = i->next) {
        Node* minNode = i;
        for (Node* j = i->next; j != nullptr; j = j->next) {
            if (j->data < minNode->data) {
                minNode = j;
            }
        }
        swap(i->data, minNode->data);
    }
}

void push(Node*& head, int val) {
    Node* newNode = new Node{val, head};
    head = newNode;
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
}

int main() {
    Node* head = nullptr;
    push(head, 11);
    push(head, 22);
    push(head, 12);
    push(head, 25);
    push(head, 64);

    selectionSort(head);
    printList(head);

    return 0;
}
`,
            java: `
Using Array
import java.util.Arrays;

public class SelectionSortArray {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        selectionSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
            
Using Linked List
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class SelectionSortLinkedList {
    public static void selectionSort(Node head) {
        for (Node i = head; i != null; i = i.next) {
            Node minNode = i;
            for (Node j = i.next; j != null; j = j.next) {
                if (j.data < minNode.data) {
                    minNode = j;
                }
            }
            int temp = i.data;
            i.data = minNode.data;
            minNode.data = temp;
        }
    }

    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
    }

    public static void main(String[] args) {
        Node head = new Node(64);
        head.next = new Node(25);
        head.next.next = new Node(12);
        head.next.next.next = new Node(22);
        head.next.next.next.next = new Node(11);

        selectionSort(head);
        printList(head);
    }
}
`,
            javascript: `
Using Array
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr);
            
Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function selectionSort(head) {
    for (let i = head; i !== null; i = i.next) {
        let minNode = i;
        for (let j = i.next; j !== null; j = j.next) {
            if (j.data < minNode.data) {
                minNode = j;
            }
        }
        let temp = i.data;
        i.data = minNode.data;
        minNode.data = temp;
    }
}

function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.data + " ");
        current = current.next;
    }
}

let head = new Node(64);
head.next = new Node(25);
head.next.next = new Node(12);
head.next.next.next = new Node(22);
head.next.next.next.next = new Node(11);

selectionSort(head);
printList(head);
`,
            python: `
Using Array
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]

arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print(arr)
            
Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def selection_sort(head):
    current = head
    while current:
        min_node = current
        next_node = current.next
        while next_node:
            if next_node.data < min_node.data:
                min_node = next_node
            next_node = next_node.next
        current.data, min_node.data = min_node.data, current.data
        current = current.next

def print_list(head):
    while head:
        print(head.data, end=" ")
        head = head.next

head = Node(64)
head.next = Node(25)
head.next.next = Node(12)
head.next.next.next = Node(22)
head.next.next.next.next = Node(11)

selection_sort(head)
print_list(head)
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=EwjnF7rFLns",
        resources: [
            {
                title: "GeeksforGeeks on Selection Sort",
                url: "https://www.geeksforgeeks.org/selection-sort/"
            }
        ]
    },
    {
        id: 6,
        name: "Heap Sort",
        shortDescription: "Heap Sort is a comparison-based sorting algorithm that uses a binary heap to sort elements in O(n log n) time.",
        longDescription: "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. The binary heap is built from the array, and then the root element (maximum or minimum) is swapped with the last element, followed by reheapifying the heap. This process is repeated until the array is sorted. Heap Sort has a time complexity of O(n log n) and does not require additional space like Merge Sort, but it is not stable.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
using namespace std;

void heapify(int arr[], int n, int i) {
    int largest = i; 
    int left = 2 * i + 1; 
    int right = 2 * i + 2; 

    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    heapSort(arr, n);

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";

    return 0;
}
            
Using Linked List
#include <iostream>
#include <vector>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void linkedListToVector(Node* head, vector<int>& vec) {
    while (head) {
        vec.push_back(head->data);
        head = head->next;
    }
}

Node* vectorToLinkedList(vector<int>& vec) {
    Node* head = nullptr;
    Node* tail = nullptr;

    for (int val : vec) {
        Node* newNode = new Node{val, nullptr};
        if (!head) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            tail = newNode;
        }
    }
    return head;
}

void heapify(vector<int>& vec, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && vec[left] > vec[largest])
        largest = left;

    if (right < n && vec[right] > vec[largest])
        largest = right;

    if (largest != i) {
        swap(vec[i], vec[largest]);
        heapify(vec, n, largest);
    }
}

void heapSort(vector<int>& vec) {
    int n = vec.size();
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(vec, n, i);

    for (int i = n - 1; i > 0; i--) {
        swap(vec[0], vec[i]);
        heapify(vec, i, 0);
    }
}

void printList(Node* head) {
    while (head) {
        cout << head->data << " ";
        head = head->next;
    }
}

int main() {
    Node* head = nullptr;

    head = new Node{12, new Node{11, new Node{13, new Node{5, new Node{6, nullptr}}}}};

    vector<int> vec;
    linkedListToVector(head, vec);

    heapSort(vec);

    head = vectorToLinkedList(vec);
    printList(head);

    return 0;
}
`,
            java: `
Using Array
public class HeapSortArray {

    public static void heapify(int[] arr, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest])
            largest = left;

        if (right < n && arr[right] > arr[largest])
            largest = right;

        if (largest != i) {
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            heapify(arr, n, largest);
        }
    }

    public static void heapSort(int[] arr) {
        int n = arr.length;

        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        for (int i = n - 1; i > 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            heapify(arr, i, 0);
        }
    }

    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        heapSort(arr);

        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
            
Using Linked List
import java.util.ArrayList;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class HeapSortLinkedList {

    public static void linkedListToArray(Node head, ArrayList<Integer> arr) {
        while (head != null) {
            arr.add(head.data);
            head = head.next;
        }
    }

    public static Node arrayToLinkedList(ArrayList<Integer> arr) {
        Node head = null, tail = null;
        for (int val : arr) {
            Node newNode = new Node(val);
            if (head == null) {
                head = tail = newNode;
            } else {
                tail.next = newNode;
                tail = newNode;
            }
        }
        return head;
    }

    public static void heapify(ArrayList<Integer> arr, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr.get(left) > arr.get(largest))
            largest = left;

        if (right < n && arr.get(right) > arr.get(largest))
            largest = right;

        if (largest != i) {
            int temp = arr.get(i);
            arr.set(i, arr.get(largest));
            arr.set(largest, temp);

            heapify(arr, n, largest);
        }
    }

    public static void heapSort(ArrayList<Integer> arr) {
        int n = arr.size();

        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        for (int i = n - 1; i > 0; i--) {
            int temp = arr.get(0);
            arr.set(0, arr.get(i));
            arr.set(i, temp);

            heapify(arr, i, 0);
        }
    }

    public static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
    }

    public static void main(String[] args) {
        Node head = new Node(12);
        head.next = new Node(11);
        head.next.next = new Node(13);
        head.next.next.next = new Node(5);
        head.next.next.next.next = new Node(6);

        ArrayList<Integer> arr = new ArrayList<>();
        linkedListToArray(head, arr);

        heapSort(arr);

        head = arrayToLinkedList(arr);
        printList(head);
    }
}
`,
            javascript: `
Using Array
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}

const arr = [12, 11, 13, 5, 6];
heapSort(arr);
console.log(arr);
            
Using Linked List
// Define the Node class for the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Convert Linked List to Array
function linkedListToArray(head) {
    const arr = [];
    while (head) {
        arr.push(head.data);
        head = head.next;
    }
    return arr;
}

// Convert Array to Linked List
function arrayToLinkedList(arr) {
    let head = null, tail = null;
    for (let val of arr) {
        const newNode = new Node(val);
        if (!head) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }
    return head;
}

// Heapify function
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Heap Sort function
function heapSort(arr) {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}

// Linked List Heap Sort
function heapSortLinkedList(head) {
    // Convert linked list to array
    const arr = linkedListToArray(head);

    // Sort the array using heap sort
    heapSort(arr);

    // Convert sorted array back to linked list
    return arrayToLinkedList(arr);
}

// Print Linked List
function printList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.data + " ");
        current = current.next;
    }
    console.log();
}

// Example Usage
let head = new Node(12);
head.next = new Node(11);
head.next.next = new Node(13);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(6);

console.log("Original Linked List:");
printList(head);

head = heapSortLinkedList(head);

console.log("Sorted Linked List:");
printList(head);
`,
            python: `
Using Array
def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)

arr = [12, 11, 13, 5, 6]
heap_sort(arr)
print(arr)
            
Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def linked_list_to_array(head):
    arr = []
    while head:
        arr.append(head.data)
        head = head.next
    return arr

def array_to_linked_list(arr):
    head = None
    for val in reversed(arr):
        new_node = Node(val)
        new_node.next = head
        head = new_node
    return head

def heap_sort_linked_list(head):
    arr = linked_list_to_array(head)
    heap_sort(arr)
    return array_to_linked_list(arr)

def print_list(head):
    while head:
        print(head.data, end=" ")
        head = head.next
    print()

head = Node(12)
head.next = Node(11)
head.next.next = Node(13)
head.next.next.next = Node(5)
head.next.next.next.next = Node(6)

head = heap_sort_linked_list(head)
print_list(head)
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=pY-cH7rti4U",
        resources: [
            {
                title: "GeeksforGeeks on Heap Sort",
                url: "https://www.geeksforgeeks.org/heap-sort/"
            }
        ]
    },
    {
        id: 7,
        name: "Binary Search",
        shortDescription: "Binary Search is a fast algorithm for finding an item from a sorted list of items with a time complexity of O(log n).",
        longDescription: "Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half. If the target value is less than the item in the middle, the search continues in the lower half, otherwise, it continues in the upper half. This process repeats until the target value is found or the search interval is empty. It has a time complexity of O(log n), which makes it much faster than linear search algorithms (O(n)) for large datasets.",
            codeExamples: {
                cpp: `
            Using Array
            #include <iostream>
            using namespace std;
            
            int binarySearch(int arr[], int size, int target) {
            int left = 0, right = size - 1;
            while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) {
                return mid;
            }
            else if (arr[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
            }
            return -1; // Element not found
            }
            
            int main() {
            int arr[] = {1, 3, 5, 7, 9, 11, 13, 15};
            int size = sizeof(arr) / sizeof(arr[0]);
            int target = 7;
            
            int result = binarySearch(arr, size, target);
            if (result != -1) {
            cout << "Element found at index " << result << endl;
            } else {
            cout << "Element not found" << endl;
            }
            return 0;
            }
                
            Using Linked List
            #include <iostream>
            using namespace std;
            
            struct Node {
            int data;
            Node* next;
            };
            
            int binarySearch(Node* head, int target) {
            // Convert linked list to array
            int size = 0;
            Node* temp = head;
            while (temp) {
            size++;
            temp = temp->next;
            }
            
            int arr[size];
            temp = head;
            for (int i = 0; i < size; i++) {
            arr[i] = temp->data;
            temp = temp->next;
            }
            
            // Perform binary search on the array
            int left = 0, right = size - 1;
            while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) {
                return mid;
            }
            else if (arr[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
            }
            return -1;
            }
            
            int main() {
            Node* head = new Node{1, nullptr};
            head->next = new Node{3, nullptr};
            head->next->next = new Node{5, nullptr};
            head->next->next->next = new Node{7, nullptr};
            head->next->next->next->next = new Node{9, nullptr};
            
            int target = 7;
            int result = binarySearch(head, target);
            if (result != -1) {
            cout << "Element found at index " << result << endl;
            } else {
            cout << "Element not found" << endl;
            }
            return 0;
            }
            `,
                java: `
            Using Array
            public class BinarySearchArray {
            public static int binarySearch(int[] arr, int target) {
            int left = 0, right = arr.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] == target) {
                    return mid;
                } else if (arr[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return -1; // Element not found
            }
            
            public static void main(String[] args) {
            int[] arr = {1, 3, 5, 7, 9, 11, 13, 15};
            int target = 7;
            
            int result = binarySearch(arr, target);
            if (result != -1) {
                System.out.println("Element found at index " + result);
            } else {
                System.out.println("Element not found");
            }
            }
            }
                
            Using Linked List
            class Node {
            int data;
            Node next;
            
            Node(int data) {
            this.data = data;
            this.next = null;
            }
            }
            
            public class BinarySearchLinkedList {
            
            public static int binarySearch(Node head, int target) {
            // Convert linked list to array
            int size = 0;
            Node temp = head;
            while (temp != null) {
                size++;
                temp = temp.next;
            }
            
            int[] arr = new int[size];
            temp = head;
            for (int i = 0; i < size; i++) {
                arr[i] = temp.data;
                temp = temp.next;
            }
            
            // Perform binary search on the array
            int left = 0, right = arr.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] == target) {
                    return mid;
                } else if (arr[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return -1;
            }
            
            public static void main(String[] args) {
            Node head = new Node(1);
            head.next = new Node(3);
            head.next.next = new Node(5);
            head.next.next.next = new Node(7);
            head.next.next.next.next = new Node(9);
            
            int target = 7;
            int result = binarySearch(head, target);
            if (result != -1) {
                System.out.println("Element found at index " + result);
            } else {
                System.out.println("Element not found");
            }
            }
            }
            `,
                javascript: `
            Using Array
            function binarySearch(arr, target) {
            let left = 0, right = arr.length - 1;
            while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            }
            return -1; // Element not found
            }
            
            let arr = [1, 3, 5, 7, 9, 11, 13, 15];
            let target = 7;
            
            let result = binarySearch(arr, target);
            if (result !== -1) {
            console.log("Element found at index " + result);
            } else {
            console.log("Element not found");
            }
                
            Using Linked List
            class Node {
            constructor(data) {
            this.data = data;
            this.next = null;
            }
            }
            
            function binarySearch(head, target) {
            // Convert linked list to array
            let temp = head;
            let arr = [];
            while (temp) {
            arr.push(temp.data);
            temp = temp.next;
            }
            
            // Perform binary search on the array
            let left = 0, right = arr.length - 1;
            while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            }
            return -1;
            }
            
            let head = new Node(1);
            head.next = new Node(3);
            head.next.next = new Node(5);
            head.next.next.next = new Node(7);
            head.next.next.next.next = new Node(9);
            
            let target = 7;
            let result = binarySearch(head, target);
            if (result !== -1) {
            console.log("Element found at index " + result);
            } else {
            console.log("Element not found");
            }
            `,
                python: `
            Using Array
            def binary_search(arr, target):
            left, right = 0, len(arr) - 1
            while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
            return -1  # Element not found
            
            arr = [1, 3, 5, 7, 9, 11, 13, 15]
            target = 7
            
            result = binary_search(arr, target)
            if result != -1:
            print(f"Element found at index {result}")
            else:
            print("Element not found")
                
            Using Linked List
            class Node:
            def __init__(self, data):
            self.data = data
            self.next = None
            
            def binary_search(head, target):
            # Convert linked list to array
            arr = []
            temp = head
            while temp:
            arr.append(temp.data)
            temp = temp.next
            
            # Perform binary search on the array
            left, right = 0, len(arr) - 1
            while left <= right:
            mid = (left + right) // 2
            if arr[mid] == target:
                return mid
            elif arr[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
            return -1
            
            head = Node(1)
            head.next = Node(3)
            head.next.next = Node(5)
            head.next.next.next = Node(7)
            head.next.next.next.next = Node(9)
            
            target = 7
            result = binary_search(head, target)
            if result != -1:
            print(f"Element found at index {result}")
            else:
            print("Element not found")
            `,
          },
        videoUrl: "https://www.youtube.com/watch?v=MFhxShGxHWc",
        resources: [
            {
                title: "GeeksforGeeks on Binary Search",
                url: "https://www.geeksforgeeks.org/binary-search/"
            }
        ]
    },
    {
        id: 8,
        name: "Linear Search",
        shortDescription: "Linear Search is the simplest search algorithm that checks each element of the array sequentially.",
        longDescription: "Linear Search is the simplest search algorithm that works by sequentially checking each element of the array until the target value is found or the end of the array is reached. While it is easy to implement and does not require the array to be sorted, it has a time complexity of O(n), making it inefficient for large datasets.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
using namespace std;

int linearSearchArray(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key)
            return i;
    }
    return -1; // Element not found
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 30;

    int result = linearSearchArray(arr, n, key);
    if (result != -1)
        cout << "Element found at index " << result << endl;
    else
        cout << "Element not found" << endl;

    return 0;
}

Using Linked List
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int linearSearchLinkedList(Node* head, int key) {
    int index = 0;
    while (head) {
        if (head->data == key)
            return index;
        head = head->next;
        index++;
    }
    return -1; // Element not found
}

int main() {
    Node* head = new Node{10, new Node{20, new Node{30, new Node{40, nullptr}}}};

    int key = 30;
    int result = linearSearchLinkedList(head, key);

    if (result != -1)
        cout << "Element found at index " << result << endl;
    else
        cout << "Element not found" << endl;

    return 0;
}
`,
            java: `
Using Array
public class LinearSearchArray {
    public static int linearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key)
                return i;
        }
        return -1; // Element not found
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int key = 30;

        int result = linearSearch(arr, key);
        if (result != -1)
            System.out.println("Element found at index " + result);
        else
            System.out.println("Element not found");
    }
}
            
Using Linked List
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinearSearchLinkedList {

    public static int linearSearch(Node head, int key) {
        int index = 0;
        while (head != null) {
            if (head.data == key)
                return index;
            head = head.next;
            index++;
        }
        return -1; // Element not found
    }

    public static void main(String[] args) {
        Node head = new Node(10);
        head.next = new Node(20);
        head.next.next = new Node(30);
        head.next.next.next = new Node(40);

        int key = 30;
        int result = linearSearch(head, key);

        if (result != -1)
            System.out.println("Element found at index " + result);
        else
            System.out.println("Element not found");
    }
}
`,
            javascript: `
Using Array
function linearSearchArray(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key)
            return i;
    }
    return -1; // Element not found
}

const arr = [10, 20, 30, 40, 50];
const key = 30;

const result = linearSearchArray(arr, key);
console.log(result !== -1 ? "Element found at index {result}" : "Element not found");
            
Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function linearSearchLinkedList(head, key) {
    let index = 0;
    while (head) {
        if (head.data === key)
            return index;
        head = head.next;
        index++;
    }
    return -1; // Element not found
}

// Create Linked List
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

const key = 30;
const result = linearSearchLinkedList(head, key);

console.log(result !== -1 ? "Element found at index {result}" : "Element not found");
`,
            python: `
Using Array
def linear_search_array(arr, key):
    for i, value in enumerate(arr):
        if value == key:
            return i
    return -1  # Element not found

arr = [10, 20, 30, 40, 50]
key = 30

result = linear_search_array(arr, key)
print(f"Element found at index {result}" if result != -1 else "Element not found")
            
Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def linear_search_linked_list(head, key):
    index = 0
    while head:
        if head.data == key:
            return index
        head = head.next
        index += 1
    return -1  # Element not found

# Create Linked List
head = Node(10)
head.next = Node(20)
head.next.next = Node(30)
head.next.next.next = Node(40)

key = 30
result = linear_search_linked_list(head, key)

print(f"Element found at index {result}" if result != -1 else "Element not found")
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=246V51AWwZM",
        resources: [
            {
                title: "GeeksforGeeks on Linear Search",
                url: "https://www.geeksforgeeks.org/linear-search/"
            }
        ]
    },
    {
        id: 9,
        name: "Breadth-First Search (BFS)",
        shortDescription: "BFS is a graph traversal algorithm that explores all neighbors before moving to the next depth level.",
        longDescription: "Breadth-First Search (BFS) is a graph traversal algorithm that starts at the root node and explores all its neighboring nodes at the present depth level before moving on to nodes at the next depth level. BFS is commonly used for finding the shortest path in an unweighted graph and has a time complexity of O(V + E), where V is the number of vertices and E is the number of edges in the graph.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
#include <queue>
using namespace std;

#define MAX_NODES 100

void bfs(int start, int adjMatrix[MAX_NODES][MAX_NODES], int n) {
    bool visited[MAX_NODES] = {false};
    queue<int> q;

    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";

        for (int i = 0; i < n; i++) {
            if (adjMatrix[node][i] == 1 && !visited[i]) {
                visited[i] = true;
                q.push(i);
            }
        }
    }
}

int main() {
    int n = 5;
    int adjMatrix[MAX_NODES][MAX_NODES] = {
        {0, 1, 0, 1, 0},
        {1, 0, 1, 0, 0},
        {0, 1, 0, 1, 1},
        {1, 0, 1, 0, 1},
        {0, 0, 1, 1, 0}
    };

    int start = 0;
    bfs(start, adjMatrix, n);
    return 0;
}
            
Using Linked List
#include <iostream>
#include <queue>
using namespace std;

#define MAX_NODES 100

struct Node {
    int data;
    Node* next;
};

void bfs(int start, Node* adjList[MAX_NODES], int n) {
    bool visited[MAX_NODES] = {false};
    queue<int> q;

    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";

        Node* temp = adjList[node];
        while (temp) {
            if (!visited[temp->data]) {
                visited[temp->data] = true;
                q.push(temp->data);
            }
            temp = temp->next;
        }
    }
}

void addEdge(Node* adjList[MAX_NODES], int u, int v) {
    Node* newNode = new Node{v, adjList[u]};
    adjList[u] = newNode;

    newNode = new Node{u, adjList[v]};
    adjList[v] = newNode;
}

int main() {
    int n = 5;
    Node* adjList[MAX_NODES] = {nullptr};

    addEdge(adjList, 0, 1);
    addEdge(adjList, 0, 3);
    addEdge(adjList, 1, 2);
    addEdge(adjList, 2, 3);
    addEdge(adjList, 2, 4);
    addEdge(adjList, 3, 4);

    int start = 0;
    bfs(start, adjList, n);
    return 0;
}
`,
            java: `
Using Array
import java.util.LinkedList;
import java.util.Queue;

public class BFSArray {
    public static void bfs(int start, int[][] adjMatrix, int n) {
        boolean[] visited = new boolean[n];
        Queue<Integer> q = new LinkedList<>();

        visited[start] = true;
        q.add(start);

        while (!q.isEmpty()) {
            int node = q.poll();
            System.out.print(node + " ");

            for (int i = 0; i < n; i++) {
                if (adjMatrix[node][i] == 1 && !visited[i]) {
                    visited[i] = true;
                    q.add(i);
                }
            }
        }
    }

    public static void main(String[] args) {
        int n = 5;
        int[][] adjMatrix = {
            {0, 1, 0, 1, 0},
            {1, 0, 1, 0, 0},
            {0, 1, 0, 1, 1},
            {1, 0, 1, 0, 1},
            {0, 0, 1, 1, 0}
        };

        int start = 0;
        bfs(start, adjMatrix, n);
    }
}
            
Using Linked List
import java.util.LinkedList;
import java.util.Queue;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class BFSLinkedList {

    public static void bfs(int start, Node[] adjList, int n) {
        boolean[] visited = new boolean[n];
        Queue<Integer> q = new LinkedList<>();

        visited[start] = true;
        q.add(start);

        while (!q.isEmpty()) {
            int node = q.poll();
            System.out.print(node + " ");

            Node temp = adjList[node];
            while (temp != null) {
                if (!visited[temp.data]) {
                    visited[temp.data] = true;
                    q.add(temp.data);
                }
                temp = temp.next;
            }
        }
    }

    public static void addEdge(Node[] adjList, int u, int v) {
        Node newNode = new Node(v);
        newNode.next = adjList[u];
        adjList[u] = newNode;

        newNode = new Node(u);
        newNode.next = adjList[v];
        adjList[v] = newNode;
    }

    public static void main(String[] args) {
        int n = 5;
        Node[] adjList = new Node[n];

        addEdge(adjList, 0, 1);
        addEdge(adjList, 0, 3);
        addEdge(adjList, 1, 2);
        addEdge(adjList, 2, 3);
        addEdge(adjList, 2, 4);
        addEdge(adjList, 3, 4);

        int start = 0;
        bfs(start, adjList, n);
    }
}
`,
            javascript: `
Using Array
function bfs(start, adjMatrix, n) {
    let visited = Array(n).fill(false);
    let queue = [start];

    visited[start] = true;

    while (queue.length > 0) {
        let node = queue.shift();
        process.stdout.write(node + " ");

        for (let i = 0; i < n; i++) {
            if (adjMatrix[node][i] === 1 && !visited[i]) {
                visited[i] = true;
                queue.push(i);
            }
        }
    }
}

let n = 5;
let adjMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]
];

let start = 0;
bfs(start, adjMatrix, n);
            
Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function bfs(start, adjList, n) {
    let visited = Array(n).fill(false);
    let queue = [start];

    visited[start] = true;

    while (queue.length > 0) {
        let node = queue.shift();
        process.stdout.write(node + " ");

        let temp = adjList[node];
        while (temp) {
            if (!visited[temp.data]) {
                visited[temp.data] = true;
                queue.push(temp.data);
            }
            temp = temp.next;
        }
    }
}

function addEdge(adjList, u, v) {
    let newNode = new Node(v);
    newNode.next = adjList[u];
    adjList[u] = newNode;

    newNode = new Node(u);
    newNode.next = adjList[v];
    adjList[v] = newNode;
}

let n = 5;
let adjList = Array(n).fill(null);

addEdge(adjList, 0, 1);
addEdge(adjList, 0, 3);
addEdge(adjList, 1, 2);
addEdge(adjList, 2, 3);
addEdge(adjList, 2, 4);
addEdge(adjList, 3, 4);

let start = 0;
bfs(start, adjList, n);
`,
            python: `
Using Array
from collections import deque

def bfs(start, adjMatrix, n):
    visited = [False] * n
    queue = deque([start])

    visited[start] = True

    while queue:
        node = queue.popleft()
        print(node, end=" ")

        for i in range(n):
            if adjMatrix[node][i] == 1 and not visited[i]:
                visited[i] = True
                queue.append(i)

n = 5
adjMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]
]

start = 0
bfs(start, adjMatrix, n)
            
Using Linked List
from collections import deque

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def bfs(start, adjList, n):
    visited = [False] * n
    queue = deque([start])

    visited[start] = True

    while queue:
        node = queue.popleft()
        print(node, end=" ")

        temp = adjList[node]
        while temp:
            if not visited[temp.data]:
                visited[temp.data] = True
                queue.append(temp.data)
            temp = temp.next

def add_edge(adjList, u, v):
    new_node = Node(v)
    new_node.next = adjList[u]
    adjList[u] = new_node

    new_node = Node(u)
    new_node.next = adjList[v]
    adjList[v] = new_node

n = 5
adjList = [None] * n

add_edge(adjList, 0, 1)
add_edge(adjList, 0, 3)
add_edge(adjList, 1, 2)
add_edge(adjList, 2, 3)
add_edge(adjList, 2, 4)
add_edge(adjList, 3, 4)

start = 0
bfs(start, adjList, n)
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=oDqjPvD54Ss",
        resources: [
            {
                title: "GeeksforGeeks on BFS",
                url: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/"
            }
        ]
    },
    {
        id: 10,
        name: "Depth-First Search (DFS)",
        shortDescription: "DFS is a graph traversal algorithm that explores as far as possible down a branch before backtracking.",
        longDescription: "Depth-First Search (DFS) is a graph traversal algorithm that starts at the root node and explores as far down a branch as possible before backtracking. DFS is useful for solving problems that involve searching through all possibilities, such as puzzles and mazes. It has a time complexity of O(V + E), where V is the number of vertices and E is the number of edges in the graph.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
using namespace std;

#define MAX_NODES 5  // Adjust number of nodes as necessary

void DFS(int graph[MAX_NODES][MAX_NODES], int visited[], int node, int n) {
    cout << node << " "; // Print the current node
    visited[node] = 1;    // Mark the node as visited

    // Visit all the adjacent nodes
    for (int i = 0; i < n; i++) {
        if (graph[node][i] == 1 && !visited[i]) {
            DFS(graph, visited, i, n);
        }
    }
}

int main() {
    int graph[MAX_NODES][MAX_NODES] = { 
        {0, 1, 1, 0, 0}, 
        {1, 0, 1, 1, 0},
        {1, 1, 0, 0, 1}, 
        {0, 1, 0, 0, 1}, 
        {0, 0, 1, 1, 0}
    };
    int visited[MAX_NODES] = {0};
    
    int startNode = 0; // Starting from node 0
    DFS(graph, visited, startNode, MAX_NODES);
    
    return 0;
}
            
Using Linked List
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void DFS(Node* adj[], bool visited[], int node) {
    cout << node << " "; // Print the current node
    visited[node] = true;
    
    Node* temp = adj[node];
    while (temp) {
        if (!visited[temp->data]) {
            DFS(adj, visited, temp->data);
        }
        temp = temp->next;
    }
}

int main() {
    int n = 5;  // Number of nodes
    Node* adj[n] = {nullptr};

    // Constructing the graph
    adj[0] = new Node{1, new Node{2, nullptr}};
    adj[1] = new Node{0, new Node{2, new Node{3, nullptr}}};
    adj[2] = new Node{0, new Node{1, new Node{4, nullptr}}};
    adj[3] = new Node{1, nullptr};
    adj[4] = new Node{2, nullptr};

    bool visited[n] = {false};
    DFS(adj, visited, 0);  // Start DFS from node 0
    
    return 0;
}
`,
            java: `
Using Array
public class DFSArray {
    public static void DFS(int[][] graph, boolean[] visited, int node) {
        System.out.print(node + " ");
        visited[node] = true;
        
        for (int i = 0; i < graph.length; i++) {
            if (graph[node][i] == 1 && !visited[i]) {
                DFS(graph, visited, i);
            }
        }
    }

    public static void main(String[] args) {
        int[][] graph = {
            {0, 1, 1, 0, 0},
            {1, 0, 1, 1, 0},
            {1, 1, 0, 0, 1},
            {0, 1, 0, 0, 1},
            {0, 0, 1, 1, 0}
        };
        boolean[] visited = new boolean[5];
        
        DFS(graph, visited, 0); // Start DFS from node 0
    }
}
            
Using Linked List
class Node {
    int data;
    Node next;
    
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class DFSLinkedList {
    public static void DFS(Node[] adj, boolean[] visited, int node) {
        System.out.print(node + " ");
        visited[node] = true;
        
        Node temp = adj[node];
        while (temp != null) {
            if (!visited[temp.data]) {
                DFS(adj, visited, temp.data);
            }
            temp = temp.next;
        }
    }

    public static void main(String[] args) {
        int n = 5;
        Node[] adj = new Node[n];

        // Construct the graph using linked list adjacency list
        adj[0] = new Node(1);
        adj[0].next = new Node(2);
        adj[1] = new Node(0);
        adj[1].next = new Node(2);
        adj[1].next.next = new Node(3);
        adj[2] = new Node(0);
        adj[2].next = new Node(1);
        adj[2].next.next = new Node(4);
        adj[3] = new Node(1);
        adj[4] = new Node(2);

        boolean[] visited = new boolean[n];
        DFS(adj, visited, 0); // Start DFS from node 0
    }
}
`,
            javascript: `
Using Array
function DFS(graph, visited, node) {
    console.log(node);
    visited[node] = true;

    for (let i = 0; i < graph.length; i++) {
        if (graph[node][i] === 1 && !visited[i]) {
            DFS(graph, visited, i);
        }
    }
}

const graph = [
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0]
];

const visited = Array(graph.length).fill(false);
DFS(graph, visited, 0);  // Start DFS from node 0
            
Using Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function DFS(adj, visited, node) {
    console.log(node);
    visited[node] = true;

    let temp = adj[node];
    while (temp !== null) {
        if (!visited[temp.data]) {
            DFS(adj, visited, temp.data);
        }
        temp = temp.next;
    }
}

let adj = [];
for (let i = 0; i < 5; i++) {
    adj[i] = null;
}

// Constructing the graph
adj[0] = new Node(1);
adj[0].next = new Node(2);
adj[1] = new Node(0);
adj[1].next = new Node(2);
adj[1].next.next = new Node(3);
adj[2] = new Node(0);
adj[2].next = new Node(1);
adj[2].next.next = new Node(4);
adj[3] = new Node(1);
adj[4] = new Node(2);

let visited = Array(5).fill(false);
DFS(adj, visited, 0);  // Start DFS from node 0
`,
            python: `
Using Array
def DFS(graph, visited, node):
    print(node, end=" ")
    visited[node] = True

    for i in range(len(graph)):
        if graph[node][i] == 1 and not visited[i]:
            DFS(graph, visited, i)

graph = [
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0]
]

visited = [False] * len(graph)
DFS(graph, visited, 0)  # Start DFS from node 0
            
Using Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def DFS(adj, visited, node):
    print(node, end=" ")
    visited[node] = True

    temp = adj[node]
    while temp:
        if not visited[temp.data]:
            DFS(adj, visited, temp.data)
        temp = temp.next

# Creating the graph using linked list
n = 5
adj = [None] * n

adj[0] = Node(1)
adj[0].next = Node(2)
adj[1] = Node(0)
adj[1].next = Node(2)
adj[1].next.next = Node(3)
adj[2] = Node(0)
adj[2].next = Node(1)
adj[2].next.next = Node(4)
adj[3] = Node(1)
adj[4] = Node(2)

visited = [False] * n
DFS(adj, visited, 0)  # Start DFS from node 0
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=by93qH4ACxo",
        resources: [
            {
                title: "GeeksforGeeks on DFS",
                url: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/"
            }
        ]
    },
    {
        id: 11,
        name: "Dijkstra's Algorithm",
        shortDescription: "Dijkstra's Algorithm finds the shortest paths between nodes in a weighted graph, using a greedy approach.",
        longDescription: "Dijkstra's Algorithm is a popular algorithm used for finding the shortest paths between nodes in a graph, particularly useful in weighted graphs. It operates by visiting the nearest node first and progressively updating the shortest paths to all other nodes. The time complexity of the algorithm is O(V²) for graphs with V vertices, but can be optimized to O(E log V) using a priority queue. It's widely used in routing and navigation systems.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
#include <climits>
using namespace std;

#define MAX_NODES 100

void dijkstra(int graph[MAX_NODES][MAX_NODES], int n, int start) {
    int dist[MAX_NODES];
    bool visited[MAX_NODES] = {false};

    for (int i = 0; i < n; i++) {
        dist[i] = INT_MAX;
    }
    dist[start] = 0;

    for (int i = 0; i < n - 1; i++) {
        int minDist = INT_MAX, u;
        for (int j = 0; j < n; j++) {
            if (!visited[j] && dist[j] < minDist) {
                minDist = dist[j];
                u = j;
            }
        }

        visited[u] = true;

        for (int v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] != 0 && dist[u] != INT_MAX && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    for (int i = 0; i < n; i++) {
        if (dist[i] == INT_MAX) {
            cout << "INF ";
        } else {
            cout << dist[i] << " ";
        }
    }
}

int main() {
    int n = 5;
    int graph[MAX_NODES][MAX_NODES] = {
        {0, 10, 0, 30, 0},
        {10, 0, 50, 0, 0},
        {0, 50, 0, 20, 10},
        {30, 0, 20, 0, 60},
        {0, 0, 10, 60, 0}
    };

    int start = 0;
    dijkstra(graph, n, start);
    return 0;
}
            
Using Linked List
#include <iostream>
#include <climits>
#include <list>
using namespace std;

#define MAX_NODES 100

struct Node {
    int data, weight;
    Node(int d, int w) : data(d), weight(w) {}
};

void dijkstra(list<Node> adjList[MAX_NODES], int n, int start) {
    int dist[MAX_NODES];
    bool visited[MAX_NODES] = {false};

    for (int i = 0; i < n; i++) {
        dist[i] = INT_MAX;
    }
    dist[start] = 0;

    for (int i = 0; i < n - 1; i++) {
        int minDist = INT_MAX, u;
        for (int j = 0; j < n; j++) {
            if (!visited[j] && dist[j] < minDist) {
                minDist = dist[j];
                u = j;
            }
        }

        visited[u] = true;

        for (auto& neighbor : adjList[u]) {
            if (!visited[neighbor.data] && dist[u] != INT_MAX && dist[u] + neighbor.weight < dist[neighbor.data]) {
                dist[neighbor.data] = dist[u] + neighbor.weight;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        if (dist[i] == INT_MAX) {
            cout << "INF ";
        } else {
            cout << dist[i] << " ";
        }
    }
}

void addEdge(list<Node> adjList[MAX_NODES], int u, int v, int weight) {
    adjList[u].push_back(Node(v, weight));
    adjList[v].push_back(Node(u, weight));  // For undirected graph
}

int main() {
    int n = 5;
    list<Node> adjList[MAX_NODES];

    addEdge(adjList, 0, 1, 10);
    addEdge(adjList, 0, 3, 30);
    addEdge(adjList, 1, 2, 50);
    addEdge(adjList, 2, 3, 20);
    addEdge(adjList, 2, 4, 10);
    addEdge(adjList, 3, 4, 60);

    int start = 0;
    dijkstra(adjList, n, start);
    return 0;
}
`,
            java: `
Using Array
import java.util.*;

public class DijkstraArray {
    public static void dijkstra(int[][] graph, int n, int start) {
        int[] dist = new int[n];
        boolean[] visited = new boolean[n];
        
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[start] = 0;

        for (int i = 0; i < n - 1; i++) {
            int u = -1, minDist = Integer.MAX_VALUE;
            for (int j = 0; j < n; j++) {
                if (!visited[j] && dist[j] < minDist) {
                    minDist = dist[j];
                    u = j;
                }
            }

            visited[u] = true;

            for (int v = 0; v < n; v++) {
                if (!visited[v] && graph[u][v] != 0 && dist[u] != Integer.MAX_VALUE
                        && dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }

        for (int i = 0; i < n; i++) {
            if (dist[i] == Integer.MAX_VALUE) {
                System.out.print("INF ");
            } else {
                System.out.print(dist[i] + " ");
            }
        }
    }

    public static void main(String[] args) {
        int n = 5;
        int[][] graph = {
            {0, 10, 0, 30, 0},
            {10, 0, 50, 0, 0},
            {0, 50, 0, 20, 10},
            {30, 0, 20, 0, 60},
            {0, 0, 10, 60, 0}
        };

        int start = 0;
        dijkstra(graph, n, start);
    }
}
            
Using Linked List
import java.util.*;

class Node {
    int data, weight;

    Node(int data, int weight) {
        this.data = data;
        this.weight = weight;
    }
}

public class DijkstraLinkedList {
    public static void dijkstra(List<Node>[] adjList, int n, int start) {
        int[] dist = new int[n];
        boolean[] visited = new boolean[n];

        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[start] = 0;

        for (int i = 0; i < n - 1; i++) {
            int u = -1, minDist = Integer.MAX_VALUE;
            for (int j = 0; j < n; j++) {
                if (!visited[j] && dist[j] < minDist) {
                    minDist = dist[j];
                    u = j;
                }
            }

            visited[u] = true;

            for (Node neighbor : adjList[u]) {
                if (!visited[neighbor.data] && dist[u] != Integer.MAX_VALUE
                        && dist[u] + neighbor.weight < dist[neighbor.data]) {
                    dist[neighbor.data] = dist[u] + neighbor.weight;
                }
            }
        }

        for (int i = 0; i < n; i++) {
            if (dist[i] == Integer.MAX_VALUE) {
                System.out.print("INF ");
            } else {
                System.out.print(dist[i] + " ");
            }
        }
    }

    public static void addEdge(List<Node>[] adjList, int u, int v, int weight) {
        adjList[u].add(new Node(v, weight));
        adjList[v].add(new Node(u, weight));  // For undirected graph
    }

    public static void main(String[] args) {
        int n = 5;
        List<Node>[] adjList = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            adjList[i] = new ArrayList<>();
        }

        addEdge(adjList, 0, 1, 10);
        addEdge(adjList, 0, 3, 30);
        addEdge(adjList, 1, 2, 50);
        addEdge(adjList, 2, 3, 20);
        addEdge(adjList, 2, 4, 10);
        addEdge(adjList, 3, 4, 60);

        int start = 0;
        dijkstra(adjList, n, start);
    }
}
`,
            javascript: `
Using Array
function dijkstra(graph, n, start) {
    let dist = Array(n).fill(Infinity);
    let visited = Array(n).fill(false);

    dist[start] = 0;

    for (let i = 0; i < n - 1; i++) {
        let minDist = Infinity, u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && dist[j] < minDist) {
                minDist = dist[j];
                u = j;
            }
        }

        visited[u] = true;

        for (let v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    dist.forEach(d => {
        console.log(d === Infinity ? 'INF' : d);
    });
}

let n = 5;
let graph = [
    [0, 10, 0, 30, 0],
    [10, 0, 50, 0, 0],
    [0, 50, 0, 20, 10],
    [30, 0, 20, 0, 60],
    [0, 0, 10, 60, 0]
];

let start = 0;
dijkstra(graph, n, start);
            
Using Linked List
class Node {
    constructor(data, weight) {
        this.data = data;
        this.weight = weight;
        this.next = null;
    }
}

function dijkstra(adjList, n, start) {
    let dist = Array(n).fill(Infinity);
    let visited = Array(n).fill(false);

    dist[start] = 0;

    for (let i = 0; i < n - 1; i++) {
        let minDist = Infinity, u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && dist[j] < minDist) {
                minDist = dist[j];
                u = j;
            }
        }

        visited[u] = true;

        let temp = adjList[u];
        while (temp) {
            if (!visited[temp.data] && dist[u] !== Infinity && dist[u] + temp.weight < dist[temp.data]) {
                dist[temp.data] = dist[u] + temp.weight;
            }
            temp = temp.next;
        }
    }

    dist.forEach(d => {
        console.log(d === Infinity ? 'INF' : d);
    });
}

function addEdge(adjList, u, v, weight) {
    let newNode = new Node(v, weight);
    newNode.next = adjList[u];
    adjList[u] = newNode;

    newNode = new Node(u, weight);
    newNode.next = adjList[v];
    adjList[v] = newNode;
}

let n = 5;
let adjList = Array(n).fill(null);

addEdge(adjList, 0, 1, 10);
addEdge(adjList, 0, 3, 30);
addEdge(adjList, 1, 2, 50);
addEdge(adjList, 2, 3, 20);
addEdge(adjList, 2, 4, 10);
addEdge(adjList, 3, 4, 60);

let start = 0;
dijkstra(adjList, n, start);
`,
            python: `
Using Array
import sys

def dijkstra(graph, n, start):
    dist = [sys.maxsize] * n
    visited = [False] * n
    dist[start] = 0

    for _ in range(n - 1):
        u = min((i for i in range(n) if not visited[i]), key=lambda i: dist[i], default=-1)
        if u == -1:
            break
        visited[u] = True

        for v in range(n):
            if not visited[v] and graph[u][v] != 0 and dist[u] != sys.maxsize and dist[u] + graph[u][v] < dist[v]:
                dist[v] = dist[u] + graph[u][v]

    for d in dist:
        print('INF' if d == sys.maxsize else d, end=" ")

n = 5
graph = [
    [0, 10, 0, 30, 0],
    [10, 0, 50, 0, 0],
    [0, 50, 0, 20, 10],
    [30, 0, 20, 0, 60],
    [0, 0, 10, 60, 0]
]

start = 0
dijkstra(graph, n, start)
            
Using Linked List
import sys

class Node:
    def __init__(self, data, weight):
        self.data = data
        self.weight = weight
        self.next = None

def dijkstra(adjList, n, start):
    dist = [sys.maxsize] * n
    visited = [False] * n
    dist[start] = 0

    for _ in range(n - 1):
        u = min((i for i in range(n) if not visited[i]), key=lambda i: dist[i], default=-1)
        if u == -1:
            break
        visited[u] = True

        temp = adjList[u]
        while temp:
            if not visited[temp.data] and dist[u] != sys.maxsize and dist[u] + temp.weight < dist[temp.data]:
                dist[temp.data] = dist[u] + temp.weight
            temp = temp.next

    for d in dist:
        print('INF' if d == sys.maxsize else d, end=" ")

def add_edge(adjList, u, v, weight):
    newNode = Node(v, weight)
    newNode.next = adjList[u]
    adjList[u] = newNode

    newNode = Node(u, weight)
    newNode.next = adjList[v]
    adjList[v] = newNode

n = 5
adjList = [None] * n

add_edge(adjList, 0, 1, 10)
add_edge(adjList, 0, 3, 30)
add_edge(adjList, 1, 2, 50)
add_edge(adjList, 2, 3, 20)
add_edge(adjList, 2, 4, 10)
add_edge(adjList, 3, 4, 60)

start = 0
dijkstra(adjList, n, start)
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=GazC3A4OQTE",
        resources: [
            {
                title: "GeeksforGeeks on Dijkstra's Algorithm",
                url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm/"
            }
        ]
    },
    {
        id: 12,
        name: "Bellman-Ford Algorithm",
        shortDescription: "The Bellman-Ford Algorithm computes shortest paths in graphs with negative weight edges and detects negative cycles.",
        longDescription: "The Bellman-Ford Algorithm is a shortest-path algorithm that is capable of handling graphs with negative edge weights and can detect negative weight cycles. It works by iterating through all edges, relaxing them to find the shortest path. It has a time complexity of O(V * E), where V is the number of vertices and E is the number of edges, making it slower than Dijkstra's Algorithm for most cases but more versatile.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
#include <climits>
using namespace std;

#define MAX_NODES 100

void bellmanFord(int graph[MAX_NODES][MAX_NODES], int n, int start) {
    int dist[MAX_NODES];

    for (int i = 0; i < n; i++) {
        dist[i] = INT_MAX;
    }
    dist[start] = 0;

    // Relax edges repeatedly
    for (int i = 0; i < n - 1; i++) {
        for (int u = 0; u < n; u++) {
            for (int v = 0; v < n; v++) {
                if (graph[u][v] != 0 && dist[u] != INT_MAX && dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }
    }

    // Check for negative-weight cycles
    for (int u = 0; u < n; u++) {
        for (int v = 0; v < n; v++) {
            if (graph[u][v] != 0 && dist[u] != INT_MAX && dist[u] + graph[u][v] < dist[v]) {
                cout << "Graph contains negative weight cycle" << endl;
                return;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        if (dist[i] == INT_MAX) {
            cout << "INF ";
        } else {
            cout << dist[i] << " ";
        }
    }
}

int main() {
    int n = 5;
    int graph[MAX_NODES][MAX_NODES] = {
        {0, -1, 4, 0, 0},
        {-1, 0, 3, 2, 2},
        {4, 3, 0, 5, 0},
        {0, 2, 5, 0, 5},
        {0, 2, 0, 5, 0}
    };

    int start = 0;
    bellmanFord(graph, n, start);
    return 0;
}
            
Using Linked List
#include <iostream>
#include <climits>
#include <list>
using namespace std;

#define MAX_NODES 100

struct Edge {
    int dest, weight;
    Edge(int d, int w) : dest(d), weight(w) {}
};

void bellmanFord(list<Edge> adjList[MAX_NODES], int n, int start) {
    int dist[MAX_NODES];

    for (int i = 0; i < n; i++) {
        dist[i] = INT_MAX;
    }
    dist[start] = 0;

    // Relax edges repeatedly
    for (int i = 0; i < n - 1; i++) {
        for (int u = 0; u < n; u++) {
            for (auto& edge : adjList[u]) {
                int v = edge.dest, weight = edge.weight;
                if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }
    }

    // Check for negative-weight cycles
    for (int u = 0; u < n; u++) {
        for (auto& edge : adjList[u]) {
            int v = edge.dest, weight = edge.weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
                cout << "Graph contains negative weight cycle" << endl;
                return;
            }
        }
    }

    for (int i = 0; i < n; i++) {
        if (dist[i] == INT_MAX) {
            cout << "INF ";
        } else {
            cout << dist[i] << " ";
        }
    }
}

void addEdge(list<Edge> adjList[MAX_NODES], int u, int v, int weight) {
    adjList[u].push_back(Edge(v, weight));
}

int main() {
    int n = 5;
    list<Edge> adjList[MAX_NODES];

    addEdge(adjList, 0, 1, -1);
    addEdge(adjList, 0, 2, 4);
    addEdge(adjList, 1, 2, 3);
    addEdge(adjList, 1, 3, 2);
    addEdge(adjList, 1, 4, 2);
    addEdge(adjList, 3, 2, 5);
    addEdge(adjList, 3, 4, 5);

    int start = 0;
    bellmanFord(adjList, n, start);
    return 0;
}
`,
            java: `
Using Array
import java.util.*;

public class BellmanFordArray {

    public static void bellmanFord(int[][] graph, int n, int start) {
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[start] = 0;

        // Relax edges repeatedly
        for (int i = 0; i < n - 1; i++) {
            for (int u = 0; u < n; u++) {
                for (int v = 0; v < n; v++) {
                    if (graph[u][v] != 0 && dist[u] != Integer.MAX_VALUE && dist[u] + graph[u][v] < dist[v]) {
                        dist[v] = dist[u] + graph[u][v];
                    }
                }
            }
        }

        // Check for negative-weight cycles
        for (int u = 0; u < n; u++) {
            for (int v = 0; v < n; v++) {
                if (graph[u][v] != 0 && dist[u] != Integer.MAX_VALUE && dist[u] + graph[u][v] < dist[v]) {
                    System.out.println("Graph contains negative weight cycle");
                    return;
                }
            }
        }

        for (int i = 0; i < n; i++) {
            if (dist[i] == Integer.MAX_VALUE) {
                System.out.print("INF ");
            } else {
                System.out.print(dist[i] + " ");
            }
        }
    }

    public static void main(String[] args) {
        int n = 5;
        int[][] graph = {
            {0, -1, 4, 0, 0},
            {-1, 0, 3, 2, 2},
            {4, 3, 0, 5, 0},
            {0, 2, 5, 0, 5},
            {0, 2, 0, 5, 0}
        };

        int start = 0;
        bellmanFord(graph, n, start);
    }
}
            
Using Linked List
import java.util.*;

class Edge {
    int dest, weight;

    Edge(int dest, int weight) {
        this.dest = dest;
        this.weight = weight;
    }
}

public class BellmanFordLinkedList {

    public static void bellmanFord(List<Edge>[] adjList, int n, int start) {
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[start] = 0;

        // Relax edges repeatedly
        for (int i = 0; i < n - 1; i++) {
            for (int u = 0; u < n; u++) {
                for (Edge edge : adjList[u]) {
                    int v = edge.dest, weight = edge.weight;
                    if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                        dist[v] = dist[u] + weight;
                    }
                }
            }
        }

        // Check for negative-weight cycles
        for (int u = 0; u < n; u++) {
            for (Edge edge : adjList[u]) {
                int v = edge.dest, weight = edge.weight;
                if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                    System.out.println("Graph contains negative weight cycle");
                    return;
                }
            }
        }

        for (int i = 0; i < n; i++) {
            if (dist[i] == Integer.MAX_VALUE) {
                System.out.print("INF ");
            } else {
                System.out.print(dist[i] + " ");
            }
        }
    }

    public static void addEdge(List<Edge>[] adjList, int u, int v, int weight) {
        adjList[u].add(new Edge(v, weight));
    }

    public static void main(String[] args) {
        int n = 5;
        List<Edge>[] adjList = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            adjList[i] = new ArrayList<>();
        }

        addEdge(adjList, 0, 1, -1);
        addEdge(adjList, 0, 2, 4);
        addEdge(adjList, 1, 2, 3);
        addEdge(adjList, 1, 3, 2);
        addEdge(adjList, 1, 4, 2);
        addEdge(adjList, 3, 2, 5);
        addEdge(adjList, 3, 4, 5);

        int start = 0;
        bellmanFord(adjList, n, start);
    }
}
`,
            javascript: `
Using Array
function bellmanFord(graph, n, start) {
    let dist = Array(n).fill(Infinity);
    dist[start] = 0;

    // Relax edges repeatedly
    for (let i = 0; i < n - 1; i++) {
        for (let u = 0; u < n; u++) {
            for (let v = 0; v < n; v++) {
                if (graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }
    }

    // Check for negative-weight cycles
    for (let u = 0; u < n; u++) {
        for (let v = 0; v < n; v++) {
            if (graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }
    }

    dist.forEach(d => {
        console.log(d === Infinity ? 'INF' : d);
    });
}

let n = 5;
let graph = [
    [0, -1, 4, 0, 0],
    [-1, 0, 3, 2, 2],
    [4, 3, 0, 5, 0],
    [0, 2, 5, 0, 5],
    [0, 2, 0, 5, 0]
];

let start = 0;
bellmanFord(graph, n, start);
            
Using Linked List
class Edge {
    constructor(dest, weight) {
        this.dest = dest;
        this.weight = weight;
    }
}

function bellmanFord(adjList, n, start) {
    let dist = Array(n).fill(Infinity);
    dist[start] = 0;

    // Relax edges repeatedly
    for (let i = 0; i < n - 1; i++) {
        for (let u = 0; u < n; u++) {
            adjList[u].forEach(edge => {
                let v = edge.dest, weight = edge.weight;
                if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            });
        }
    }

    // Check for negative-weight cycles
    for (let u = 0; u < n; u++) {
        adjList[u].forEach(edge => {
            let v = edge.dest, weight = edge.weight;
            if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        });
    }

    dist.forEach(d => {
        console.log(d === Infinity ? 'INF' : d);
    });
}

function addEdge(adjList, u, v, weight) {
    adjList[u].push(new Edge(v, weight));
}

let n = 5;
let adjList = Array(n).fill(null).map(() => []);
addEdge(adjList, 0, 1, -1);
addEdge(adjList, 0, 2, 4);
addEdge(adjList, 1, 2, 3);
addEdge(adjList, 1, 3, 2);
addEdge(adjList, 1, 4, 2);
addEdge(adjList, 3, 2, 5);
addEdge(adjList, 3, 4, 5);

let start = 0;
bellmanFord(adjList, n, start);
`,
            python: `
Using Array
import sys

def bellmanFord(graph, n, start):
    dist = [sys.maxsize] * n
    dist[start] = 0

    # Relax edges repeatedly
    for _ in range(n - 1):
        for u in range(n):
            for v in range(n):
                if graph[u][v] != 0 and dist[u] != sys.maxsize and dist[u] + graph[u][v] < dist[v]:
                    dist[v] = dist[u] + graph[u][v]

    # Check for negative-weight cycles
    for u in range(n):
        for v in range(n):
            if graph[u][v] != 0 and dist[u] != sys.maxsize and dist[u] + graph[u][v] < dist[v]:
                print("Graph contains negative weight cycle")
                return

    for d in dist:
        print('INF' if d == sys.maxsize else d, end=" ")

n = 5
graph = [
    [0, -1, 4, 0, 0],
    [-1, 0, 3, 2, 2],
    [4, 3, 0, 5, 0],
    [0, 2, 5, 0, 5],
    [0, 2, 0, 5, 0]
]

start = 0
bellmanFord(graph, n, start)
            
Using Linked List
import sys

class Node:
    def __init__(self, dest, weight):
        self.dest = dest
        self.weight = weight
        self.next = None

def bellmanFord(adjList, n, start):
    dist = [sys.maxsize] * n
    dist[start] = 0

    # Relax edges repeatedly
    for _ in range(n - 1):
        for u in range(n):
            temp = adjList[u]
            while temp:
                v = temp.dest
                weight = temp.weight
                if dist[u] != sys.maxsize and dist[u] + weight < dist[v]:
                    dist[v] = dist[u] + weight
                temp = temp.next

    # Check for negative-weight cycles
    for u in range(n):
        temp = adjList[u]
        while temp:
            v = temp.dest
            weight = temp.weight
            if dist[u] != sys.maxsize and dist[u] + weight < dist[v]:
                print("Graph contains negative weight cycle")
                return
            temp = temp.next

    for d in dist:
        print('INF' if d == sys.maxsize else d, end=" ")

def add_edge(adjList, u, v, weight):
    newNode = Node(v, weight)
    newNode.next = adjList[u]
    adjList[u] = newNode

    newNode = Node(u, weight)
    newNode.next = adjList[v]
    adjList[v] = newNode

n = 5
adjList = [None] * n

add_edge(adjList, 0, 1, -1)
add_edge(adjList, 0, 2, 4)
add_edge(adjList, 1, 2, 3)
add_edge(adjList, 1, 3, 2)
add_edge(adjList, 1, 4, 2)
add_edge(adjList, 3, 2, 5)
add_edge(adjList, 3, 4, 5)

start = 0
bellmanFord(adjList, n, start)
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=lyw4FaxrwHg",
        resources: [
            {
                title: "GeeksforGeeks on Bellman-Ford Algorithm",
                url: "https://www.geeksforgeeks.org/bellman-ford-algorithm/"
            }
        ]
    },
    {
        id: 13,
        name: "Floyd-Warshall Algorithm",
        shortDescription: "The Floyd-Warshall Algorithm finds the shortest paths between all pairs of nodes in a graph, supporting negative weights.",
        longDescription: "The Floyd-Warshall Algorithm is an all-pairs shortest path algorithm that can handle negative edge weights. It computes the shortest paths between all pairs of nodes in a graph by iteratively relaxing the paths through intermediate nodes. The algorithm's time complexity is O(V³), making it less efficient for large graphs but ideal for dense graphs or when the shortest paths between all pairs are needed.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
#include <climits>
using namespace std;

#define MAX_NODES 4  // Adjust as needed

void floydWarshall(int graph[MAX_NODES][MAX_NODES], int dist[MAX_NODES][MAX_NODES], int n) {
    // Initialize the distance matrix
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            dist[i][j] = graph[i][j];
        }
    }

    // Apply Floyd-Warshall algorithm
    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
}

void printSolution(int dist[MAX_NODES][MAX_NODES], int n) {
    cout << "Shortest distances between every pair of vertices: " << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (dist[i][j] == INT_MAX)
                cout << "INF ";
            else
                cout << dist[i][j] << " ";
        }
        cout << endl;
    }
}

int main() {
    int graph[MAX_NODES][MAX_NODES] = {
        {0, 3, INT_MAX, 7},
        {8, 0, 2, INT_MAX},
        {5, INT_MAX, 0, 1},
        {2, INT_MAX, INT_MAX, 0}
    };
    
    int dist[MAX_NODES][MAX_NODES];
    int n = MAX_NODES;

    floydWarshall(graph, dist, n);
    printSolution(dist, n);
    
    return 0;
}
            
Using Linked List
#include <iostream>
#include <climits>
using namespace std;

struct Node {
    int data;
    int weight;
    Node* next;
};

void addEdge(Node* adj[], int src, int dest, int weight) {
    Node* node = new Node{dest, weight, adj[src]};
    adj[src] = node;
}

void floydWarshall(Node* adj[], int dist[][4], int n) {
    // Initialize distance matrix with INF
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            dist[i][j] = (i == j) ? 0 : INT_MAX;
        }
    }

    // Build the distance matrix from the adjacency list
    for (int i = 0; i < n; i++) {
        Node* temp = adj[i];
        while (temp) {
            dist[i][temp->data] = temp->weight;
            temp = temp->next;
        }
    }

    // Apply Floyd-Warshall algorithm
    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
}

void printSolution(int dist[][4], int n) {
    cout << "Shortest distances between every pair of vertices: " << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (dist[i][j] == INT_MAX)
                cout << "INF ";
            else
                cout << dist[i][j] << " ";
        }
        cout << endl;
    }
}

int main() {
    int n = 4;
    Node* adj[n] = {nullptr};

    // Add edges to the graph
    addEdge(adj, 0, 1, 3);
    addEdge(adj, 0, 3, 7);
    addEdge(adj, 1, 2, 2);
    addEdge(adj, 2, 3, 1);
    addEdge(adj, 3, 0, 2);

    int dist[4][4];
    floydWarshall(adj, dist, n);
    printSolution(dist, n);

    return 0;
}
`,
            java: `
Using Array
public class FloydWarshallArray {

    public static void floydWarshall(int[][] graph, int n) {
        int[][] dist = new int[n][n];

        // Initialize distance matrix
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dist[i][j] = graph[i][j];
            }
        }

        // Apply Floyd-Warshall algorithm
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (dist[i][j] > dist[i][k] + dist[k][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        // Print the shortest distance matrix
        printSolution(dist, n);
    }

    public static void printSolution(int[][] dist, int n) {
        System.out.println("Shortest distances between every pair of vertices:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][j] == Integer.MAX_VALUE)
                    System.out.print("INF ");
                else
                    System.out.print(dist[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] graph = {
            {0, 3, Integer.MAX_VALUE, 7},
            {8, 0, 2, Integer.MAX_VALUE},
            {5, Integer.MAX_VALUE, 0, 1},
            {2, Integer.MAX_VALUE, Integer.MAX_VALUE, 0}
        };
        int n = 4;

        floydWarshall(graph, n);
    }
}
            
Using Linked List
class Node {
    int data;
    int weight;
    Node next;

    Node(int data, int weight) {
        this.data = data;
        this.weight = weight;
        this.next = null;
    }
}

public class FloydWarshallLinkedList {

    public static void floydWarshall(Node[] adj, int n) {
        int[][] dist = new int[n][n];

        // Initialize the distance matrix
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dist[i][j] = (i == j) ? 0 : Integer.MAX_VALUE;
            }
        }

        // Build the distance matrix from the adjacency list
        for (int i = 0; i < n; i++) {
            Node temp = adj[i];
            while (temp != null) {
                dist[i][temp.data] = temp.weight;
                temp = temp.next;
            }
        }

        // Apply Floyd-Warshall algorithm
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (dist[i][j] > dist[i][k] + dist[k][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        // Print the shortest distance matrix
        printSolution(dist, n);
    }

    public static void printSolution(int[][] dist, int n) {
        System.out.println("Shortest distances between every pair of vertices:");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][j] == Integer.MAX_VALUE)
                    System.out.print("INF ");
                else
                    System.out.print(dist[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int n = 4;
        Node[] adj = new Node[n];

        // Construct the graph
        adj[0] = new Node(1, 3);
        adj[0].next = new Node(3, 7);
        adj[1] = new Node(0, 8);
        adj[1].next = new Node(2, 2);
        adj[2] = new Node(3, 1);
        adj[3] = new Node(0, 2);

        floydWarshall(adj, n);
    }
}
`,
            javascript: `
Using Array
function floydWarshall(graph, n) {
    let dist = [];
    
    // Initialize the distance matrix
    for (let i = 0; i < n; i++) {
        dist[i] = [];
        for (let j = 0; j < n; j++) {
            dist[i][j] = graph[i][j];
        }
    }

    // Apply Floyd-Warshall algorithm
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // Print the shortest distance matrix
    printSolution(dist, n);
}

function printSolution(dist, n) {
    console.log("Shortest distances between every pair of vertices:");
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += (dist[i][j] === Infinity ? "INF " : dist[i][j] + " ");
        }
        console.log(row);
    }
}

let graph = [
    [0, 3, Infinity, 7],
    [8, 0, 2, Infinity],
    [5, Infinity, 0, 1],
    [2, Infinity, Infinity, 0]
];
let n = 4;

floydWarshall(graph, n);
            
Using Linked List
class Node {
    constructor(data, weight) {
        this.data = data;
        this.weight = weight;
        this.next = null;
    }
}

function floydWarshall(adj, n) {
    let dist = Array.from(Array(n), () => Array(n).fill(Infinity));
    
    // Initialize the distance matrix
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    // Build the distance matrix from adjacency list
    for (let i = 0; i < n; i++) {
        let temp = adj[i];
        while (temp !== null) {
            dist[i][temp.data] = temp.weight;
            temp = temp.next;
        }
    }

    // Apply Floyd-Warshall algorithm
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    // Print the shortest distance matrix
    printSolution(dist, n);
}

function printSolution(dist, n) {
    console.log("Shortest distances between every pair of vertices:");
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += (dist[i][j] === Infinity ? "INF " : dist[i][j] + " ");
        }
        console.log(row);
    }
}

let adj = [
    new Node(1, 3),
    new Node(2, 2),
    new Node(3, 1),
    new Node(0, 2)
];
let n = 4;

floydWarshall(adj, n);
`,
            python: `
Using Array
def floyd_warshall(graph, n):
    dist = [[float('inf')] * n for _ in range(n)]

    # Initialize the distance matrix
    for i in range(n):
        for j in range(n):
            dist[i][j] = graph[i][j]
    
    # Apply Floyd-Warshall algorithm
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    # Print the shortest distance matrix
    print_solution(dist, n)

def print_solution(dist, n):
    print("Shortest distances between every pair of vertices:")
    for i in range(n):
        for j in range(n):
            if dist[i][j] == float('inf'):
                print("INF", end=" ")
            else:
                print(dist[i][j], end=" ")
        print()

graph = [
    [0, 3, float('inf'), 7],
    [8, 0, 2, float('inf')],
    [5, float('inf'), 0, 1],
    [2, float('inf'), float('inf'), 0]
]

n = 4
floyd_warshall(graph, n)
            
Using Linked List
class Node:
    def __init__(self, data, weight):
        self.data = data
        self.weight = weight
        self.next = None

def floyd_warshall(adj, n):
    dist = [[float('inf')] * n for _ in range(n)]

    # Initialize the distance matrix
    for i in range(n):
        dist[i][i] = 0
    
    # Build the distance matrix from adjacency list
    for i in range(n):
        temp = adj[i]
        while temp:
            dist[i][temp.data] = temp.weight
            temp = temp.next

    # Apply Floyd-Warshall algorithm
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

    # Print the shortest distance matrix
    print_solution(dist, n)

def print_solution(dist, n):
    print("Shortest distances between every pair of vertices:")
    for i in range(n):
        for j in range(n):
            if dist[i][j] == float('inf'):
                print("INF", end=" ")
            else:
                print(dist[i][j], end=" ")
        print()

# Creating the adjacency list
adj = [Node(1, 3), Node(2, 2), Node(3, 1), Node(0, 2)]
adj[0].next = Node(3, 7)
adj[1].next = Node(0, 8)

n = 4
floyd_warshall(adj, n)
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=4NQ3HnhyNfQ&t=352s",
        resources: [
            {
                title: "GeeksforGeeks on Floyd-Warshall Algorithm",
                url: "https://www.geeksforgeeks.org/floyd-warshall-algorithm/"
            }
        ]
    },
    {
        id: 14,
        name: "Prim's Algorithm",
        shortDescription: "Prim's Algorithm finds the minimum spanning tree (MST) in a weighted, undirected graph.",
        longDescription: "Prim's Algorithm is used to find the minimum spanning tree (MST) of a weighted, undirected graph. Starting from any node, it grows the MST by adding the edge with the smallest weight that connects a node in the MST to a node outside. It has a time complexity of O(V²) for a graph with V vertices, but can be optimized to O(E log V) with a priority queue. It is widely used in network design and clustering.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
#include <climits>
using namespace std;

#define MAX_NODES 100

void prim(int graph[MAX_NODES][MAX_NODES], int n, int start) {
    int parent[MAX_NODES];  // Stores the parent of each node
    int key[MAX_NODES];     // Stores the minimum weight edge for each node
    bool inMST[MAX_NODES];  // Whether a node is included in MST or not

    for (int i = 0; i < n; i++) {
        key[i] = INT_MAX;
        inMST[i] = false;
    }

    key[start] = 0;
    parent[start] = -1;

    for (int count = 0; count < n - 1; count++) {
        int u = -1;
        // Find the node with the minimum key value
        for (int v = 0; v < n; v++) {
            if (!inMST[v] && (u == -1 || key[v] < key[u])) {
                u = v;
            }
        }

        inMST[u] = true;

        for (int v = 0; v < n; v++) {
            if (graph[u][v] != 0 && !inMST[v] && graph[u][v] < key[v]) {
                key[v] = graph[u][v];
                parent[v] = u;
            }
        }
    }

    for (int i = 1; i < n; i++) {
        cout << "Edge: " << parent[i] << " - " << i << ", Weight: " << graph[i][parent[i]] << endl;
    }
}

int main() {
    int n = 5;
    int graph[MAX_NODES][MAX_NODES] = {
        {0, 2, 0, 6, 0},
        {2, 0, 3, 8, 5},
        {0, 3, 0, 0, 7},
        {6, 8, 0, 0, 9},
        {0, 5, 7, 9, 0}
    };

    int start = 0;
    prim(graph, n, start);
    return 0;
}
            
Using Linked List
#include <iostream>
#include <climits>
#include <list>
using namespace std;

struct Edge {
    int dest, weight;
    Edge(int d, int w) : dest(d), weight(w) {}
};

void prim(list<Edge> adjList[MAX_NODES], int n, int start) {
    int parent[MAX_NODES];  // Stores the parent of each node
    int key[MAX_NODES];     // Stores the minimum weight edge for each node
    bool inMST[MAX_NODES];  // Whether a node is included in MST or not

    for (int i = 0; i < n; i++) {
        key[i] = INT_MAX;
        inMST[i] = false;
    }

    key[start] = 0;
    parent[start] = -1;

    for (int count = 0; count < n - 1; count++) {
        int u = -1;
        // Find the node with the minimum key value
        for (int v = 0; v < n; v++) {
            if (!inMST[v] && (u == -1 || key[v] < key[u])) {
                u = v;
            }
        }

        inMST[u] = true;

        for (auto& edge : adjList[u]) {
            int v = edge.dest, weight = edge.weight;
            if (!inMST[v] && weight < key[v]) {
                key[v] = weight;
                parent[v] = u;
            }
        }
    }

    for (int i = 1; i < n; i++) {
        cout << "Edge: " << parent[i] << " - " << i << ", Weight: " << key[i] << endl;
    }
}

void addEdge(list<Edge> adjList[MAX_NODES], int u, int v, int weight) {
    adjList[u].push_back(Edge(v, weight));
    adjList[v].push_back(Edge(u, weight));
}

int main() {
    int n = 5;
    list<Edge> adjList[MAX_NODES];

    addEdge(adjList, 0, 1, 2);
    addEdge(adjList, 0, 3, 6);
    addEdge(adjList, 1, 2, 3);
    addEdge(adjList, 1, 3, 8);
    addEdge(adjList, 1, 4, 5);
    addEdge(adjList, 2, 4, 7);
    addEdge(adjList, 3, 4, 9);

    int start = 0;
    prim(adjList, n, start);
    return 0;
}
`,
            java: `
Using Array
import java.util.*;

public class PrimsAlgorithmArray {

    public static void prim(int[][] graph, int n, int start) {
        int[] parent = new int[n];
        int[] key = new int[n];
        boolean[] inMST = new boolean[n];

        Arrays.fill(key, Integer.MAX_VALUE);
        key[start] = 0;
        parent[start] = -1;

        for (int count = 0; count < n - 1; count++) {
            int u = -1;
            for (int v = 0; v < n; v++) {
                if (!inMST[v] && (u == -1 || key[v] < key[u])) {
                    u = v;
                }
            }

            inMST[u] = true;

            for (int v = 0; v < n; v++) {
                if (graph[u][v] != 0 && !inMST[v] && graph[u][v] < key[v]) {
                    key[v] = graph[u][v];
                    parent[v] = u;
                }
            }
        }

        for (int i = 1; i < n; i++) {
            System.out.println("Edge: " + parent[i] + " - " + i + ", Weight: " + graph[i][parent[i]]);
        }
    }

    public static void main(String[] args) {
        int n = 5;
        int[][] graph = {
            {0, 2, 0, 6, 0},
            {2, 0, 3, 8, 5},
            {0, 3, 0, 0, 7},
            {6, 8, 0, 0, 9},
            {0, 5, 7, 9, 0}
        };

        int start = 0;
        prim(graph, n, start);
    }
}
            
Using Linked List
import java.util.*;

class Edge {
    int dest, weight;

    Edge(int dest, int weight) {
        this.dest = dest;
        this.weight = weight;
    }
}

public class PrimsAlgorithmLinkedList {

    public static void prim(List<Edge>[] adjList, int n, int start) {
        int[] parent = new int[n];
        int[] key = new int[n];
        boolean[] inMST = new boolean[n];

        Arrays.fill(key, Integer.MAX_VALUE);
        key[start] = 0;
        parent[start] = -1;

        for (int count = 0; count < n - 1; count++) {
            int u = -1;
            for (int v = 0; v < n; v++) {
                if (!inMST[v] && (u == -1 || key[v] < key[u])) {
                    u = v;
                }
            }

            inMST[u] = true;

            for (Edge edge : adjList[u]) {
                int v = edge.dest, weight = edge.weight;
                if (!inMST[v] && weight < key[v]) {
                    key[v] = weight;
                    parent[v] = u;
                }
            }
        }

        for (int i = 1; i < n; i++) {
            System.out.println("Edge: " + parent[i] + " - " + i + ", Weight: " + key[i]);
        }
    }

    public static void addEdge(List<Edge>[] adjList, int u, int v, int weight) {
        adjList[u].add(new Edge(v, weight));
        adjList[v].add(new Edge(u, weight));
    }

    public static void main(String[] args) {
        int n = 5;
        List<Edge>[] adjList = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            adjList[i] = new ArrayList<>();
        }

        addEdge(adjList, 0, 1, 2);
        addEdge(adjList, 0, 3, 6);
        addEdge(adjList, 1, 2, 3);
        addEdge(adjList, 1, 3, 8);
        addEdge(adjList, 1, 4, 5);
        addEdge(adjList, 2, 4, 7);
        addEdge(adjList, 3, 4, 9);

        int start = 0;
        prim(adjList, n, start);
    }
}
`,
            javascript: `
Using Array
function prim(graph, n, start) {
    let parent = Array(n).fill(-1);
    let key = Array(n).fill(Infinity);
    let inMST = Array(n).fill(false);

    key[start] = 0;

    for (let count = 0; count < n - 1; count++) {
        let u = -1;
        for (let v = 0; v < n; v++) {
            if (!inMST[v] && (u === -1 || key[v] < key[u])) {
                u = v;
            }
        }

        inMST[u] = true;

        for (let v = 0; v < n; v++) {
            if (graph[u][v] !== 0 && !inMST[v] && graph[u][v] < key[v]) {
                key[v] = graph[u][v];
                parent[v] = u;
            }
        }
    }

    for (let i = 1; i < n; i++) {
        console.log("Edge: {parent[i]} - {i}, Weight: {key[i]}");
    }
}

let n = 5;
let graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
];

let start = 0;
prim(graph, n, start);
            
Using Linked List
class Edge {
    constructor(dest, weight) {
        this.dest = dest;
        this.weight = weight;
    }
}

function prim(adjList, n, start) {
    let parent = Array(n).fill(-1);
    let key = Array(n).fill(Infinity);
    let inMST = Array(n).fill(false);

    key[start] = 0;

    for (let count = 0; count < n - 1; count++) {
        let u = -1;
        for (let v = 0; v < n; v++) {
            if (!inMST[v] && (u === -1 || key[v] < key[u])) {
                u = v;
            }
        }

        inMST[u] = true;

        for (let edge of adjList[u]) {
            let v = edge.dest;
            let weight = edge.weight;
            if (!inMST[v] && weight < key[v]) {
                key[v] = weight;
                parent[v] = u;
            }
        }
    }

    for (let i = 1; i < n; i++) {
        console.log("Edge: {parent[i]} - {i}, Weight: {key[i]}");
    }
}

function addEdge(adjList, u, v, weight) {
    adjList[u].push(new Edge(v, weight));
    adjList[v].push(new Edge(u, weight));
}

let n = 5;
let adjList = Array.from({ length: n }, () => []);

addEdge(adjList, 0, 1, 2);
addEdge(adjList, 0, 3, 6);
addEdge(adjList, 1, 2, 3);
addEdge(adjList, 1, 3, 8);
addEdge(adjList, 1, 4, 5);
addEdge(adjList, 2, 4, 7);
addEdge(adjList, 3, 4, 9);

let start = 0;
prim(adjList, n, start);
`,
            python: `
Using Array
import sys

def prim(graph, n, start):
    parent = [-1] * n
    key = [sys.maxsize] * n
    inMST = [False] * n

    key[start] = 0

    for _ in range(n - 1):
        u = min((v for v in range(n) if not inMST[v]), key=lambda v: key[v], default=-1)
        inMST[u] = True

        for v in range(n):
            if graph[u][v] != 0 and not inMST[v] and graph[u][v] < key[v]:
                key[v] = graph[u][v]
                parent[v] = u

    for i in range(1, n):
        print(f"Edge: {parent[i]} - {i}, Weight: {key[i]}")

n = 5
graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0]
]

start = 0
prim(graph, n, start)
            
Using Linked List
import sys

class Node:
    def __init__(self, dest, weight):
        self.dest = dest
        self.weight = weight
        self.next = None

def prim(adjList, n, start):
    parent = [-1] * n
    key = [sys.maxsize] * n
    inMST = [False] * n

    key[start] = 0

    for _ in range(n - 1):
        u = min((v for v in range(n) if not inMST[v]), key=lambda v: key[v], default=-1)
        inMST[u] = True

        temp = adjList[u]
        while temp:
            v, weight = temp.dest, temp.weight
            if not inMST[v] and weight < key[v]:
                key[v] = weight
                parent[v] = u
            temp = temp.next

    for i in range(1, n):
        print(f"Edge: {parent[i]} - {i}, Weight: {key[i]}")

def add_edge(adjList, u, v, weight):
    newNode = Node(v, weight)
    newNode.next = adjList[u]
    adjList[u] = newNode

    newNode = Node(u, weight)
    newNode.next = adjList[v]
    adjList[v] = newNode

n = 5
adjList = [None] * n

add_edge(adjList, 0, 1, 2)
add_edge(adjList, 0, 3, 6)
add_edge(adjList, 1, 2, 3)
add_edge(adjList, 1, 3, 8)
add_edge(adjList, 1, 4, 5)
add_edge(adjList, 2, 4, 7)
add_edge(adjList, 3, 4, 9)

start = 0
prim(adjList, n, start)
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=xq3ABa-px_g",
        resources: [
            {
                title: "GeeksforGeeks on Prim's Algorithm",
                url: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-algorithm/"
            }
        ]
    },
    {
        id: 15,
        name: "Kruskal's Algorithm",
        shortDescription: "Kruskal's Algorithm finds the minimum spanning tree (MST) by sorting edges and using a disjoint-set to avoid cycles.",
        longDescription: "Kruskal's Algorithm is used to find the minimum spanning tree (MST) of a graph by sorting all the edges in non-decreasing order of their weight and adding them to the MST if they do not form a cycle. The algorithm uses a disjoint-set data structure to efficiently detect cycles and has a time complexity of O(E log E), where E is the number of edges. It's efficient for sparse graphs.",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
#include <algorithm>
#include <climits>
using namespace std;

#define MAX_NODES 100
#define MAX_EDGES 1000

struct Edge {
    int u, v, weight;
};

int parent[MAX_NODES];
int rank[MAX_NODES];

void initializeUnionFind(int n) {
    for (int i = 0; i < n; i++) {
        parent[i] = i;
        rank[i] = 0;
    }
}

int find(int u) {
    if (parent[u] != u) {
        parent[u] = find(parent[u]);
    }
    return parent[u];
}

void unionSets(int u, int v) {
    int rootU = find(u);
    int rootV = find(v);
    
    if (rootU != rootV) {
        if (rank[rootU] > rank[rootV]) {
            parent[rootV] = rootU;
        } else if (rank[rootU] < rank[rootV]) {
            parent[rootU] = rootV;
        } else {
            parent[rootV] = rootU;
            rank[rootU]++;
        }
    }
}

bool compareEdges(Edge e1, Edge e2) {
    return e1.weight < e2.weight;
}

void kruskal(Edge edges[MAX_EDGES], int n, int m) {
    sort(edges, edges + m, compareEdges);
    
    initializeUnionFind(n);
    
    int mstWeight = 0;
    for (int i = 0; i < m; i++) {
        Edge e = edges[i];
        int u = e.u;
        int v = e.v;
        int weight = e.weight;
        
        if (find(u) != find(v)) {
            cout << "Edge: " << u << " - " << v << ", Weight: " << weight << endl;
            unionSets(u, v);
            mstWeight += weight;
        }
    }
    cout << "Total weight of MST: " << mstWeight << endl;
}

int main() {
    int n = 4, m = 5;
    Edge edges[MAX_EDGES] = {
        {0, 1, 10}, {0, 2, 6}, {0, 3, 5},
        {1, 3, 15}, {2, 3, 4}
    };

    kruskal(edges, n, m);
    return 0;
}
            
Using Linked List
#include <iostream>
#include <list>
#include <algorithm>
#include <climits>
using namespace std;

#define MAX_NODES 100

struct Edge {
    int u, v, weight;
    Edge(int u, int v, int w) : u(u), v(v), weight(w) {}
};

int parent[MAX_NODES];
int rank[MAX_NODES];

void initializeUnionFind(int n) {
    for (int i = 0; i < n; i++) {
        parent[i] = i;
        rank[i] = 0;
    }
}

int find(int u) {
    if (parent[u] != u) {
        parent[u] = find(parent[u]);
    }
    return parent[u];
}

void unionSets(int u, int v) {
    int rootU = find(u);
    int rootV = find(v);
    
    if (rootU != rootV) {
        if (rank[rootU] > rank[rootV]) {
            parent[rootV] = rootU;
        } else if (rank[rootU] < rank[rootV]) {
            parent[rootU] = rootV;
        } else {
            parent[rootV] = rootU;
            rank[rootU]++;
        }
    }
}

bool compareEdges(Edge e1, Edge e2) {
    return e1.weight < e2.weight;
}

void kruskal(list<Edge>& adjList, int n) {
    list<Edge> edges;
    for (int u = 0; u < n; u++) {
        for (auto edge : adjList) {
            edges.push_back(edge);
        }
    }

    edges.sort(compareEdges);
    
    initializeUnionFind(n);
    
    int mstWeight = 0;
    for (auto edge : edges) {
        int u = edge.u;
        int v = edge.v;
        int weight = edge.weight;
        
        if (find(u) != find(v)) {
            cout << "Edge: " << u << " - " << v << ", Weight: " << weight << endl;
            unionSets(u, v);
            mstWeight += weight;
        }
    }
    cout << "Total weight of MST: " << mstWeight << endl;
}

int main() {
    int n = 4;
    list<Edge> adjList[MAX_NODES];

    adjList[0].push_back(Edge(0, 1, 10));
    adjList[0].push_back(Edge(0, 2, 6));
    adjList[0].push_back(Edge(0, 3, 5));
    adjList[1].push_back(Edge(1, 3, 15));
    adjList[2].push_back(Edge(2, 3, 4));

    kruskal(adjList, n);
    return 0;
}
`,
            java: `
Using Array
import java.util.Arrays;

class Edge {
    int u, v, weight;

    Edge(int u, int v, int weight) {
        this.u = u;
        this.v = v;
        this.weight = weight;
    }
}

public class KruskalArray {
    static int[] parent = new int[100];
    static int[] rank = new int[100];

    static void initializeUnionFind(int n) {
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
        }
    }

    static int find(int u) {
        if (parent[u] != u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }

    static void unionSets(int u, int v) {
        int rootU = find(u);
        int rootV = find(v);

        if (rootU != rootV) {
            if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
            } else if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
            } else {
                parent[rootV] = rootU;
                rank[rootU]++;
            }
        }
    }

    static void kruskal(Edge[] edges, int n, int m) {
        Arrays.sort(edges, (e1, e2) -> e1.weight - e2.weight);

        initializeUnionFind(n);

        int mstWeight = 0;
        for (int i = 0; i < m; i++) {
            Edge e = edges[i];
            int u = e.u;
            int v = e.v;
            int weight = e.weight;

            if (find(u) != find(v)) {
                System.out.println("Edge: " + u + " - " + v + ", Weight: " + weight);
                unionSets(u, v);
                mstWeight += weight;
            }
        }
        System.out.println("Total weight of MST: " + mstWeight);
    }

    public static void main(String[] args) {
        int n = 4, m = 5;
        Edge[] edges = {
            new Edge(0, 1, 10), new Edge(0, 2, 6), new Edge(0, 3, 5),
            new Edge(1, 3, 15), new Edge(2, 3, 4)
        };

        kruskal(edges, n, m);
    }
}
            
Using Linked List
import java.util.*;

class Edge {
    int u, v, weight;

    Edge(int u, int v, int weight) {
        this.u = u;
        this.v = v;
        this.weight = weight;
    }
}

public class KruskalLinkedList {

    static int[] parent = new int[100];
    static int[] rank = new int[100];

    static void initializeUnionFind(int n) {
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
        }
    }

    static int find(int u) {
        if (parent[u] != u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }

    static void unionSets(int u, int v) {
        int rootU = find(u);
        int rootV = find(v);

        if (rootU != rootV) {
            if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
            } else if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
            } else {
                parent[rootV] = rootU;
                rank[rootU]++;
            }
        }
    }

    static void kruskal(List<Edge> adjList, int n) {
        List<Edge> edges = new ArrayList<>();
        for (int u = 0; u < n; u++) {
            for (Edge e : adjList.get(u)) {
                edges.add(e);
            }
        }

        edges.sort(Comparator.comparingInt(e -> e.weight));

        initializeUnionFind(n);

        int mstWeight = 0;
        for (Edge e : edges) {
            int u = e.u;
            int v = e.v;
            int weight = e.weight;

            if (find(u) != find(v)) {
                System.out.println("Edge: " + u + " - " + v + ", Weight: " + weight);
                unionSets(u, v);
                mstWeight += weight;
            }
        }
        System.out.println("Total weight of MST: " + mstWeight);
    }

    public static void main(String[] args) {
        int n = 4;
        List<Edge> adjList = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            adjList.add(new ArrayList<>());
        }

        adjList.get(0).add(new Edge(0, 1, 10));
        adjList.get(0).add(new Edge(0, 2, 6));
        adjList.get(0).add(new Edge(0, 3, 5));
        adjList.get(1).add(new Edge(1, 3, 15));
        adjList.get(2).add(new Edge(2, 3, 4));

        kruskal(adjList, n);
    }
}
`,
            javascript: `
Using Array
import java.util.*;

class Edge {
    int u, v, weight;

    Edge(int u, int v, int weight) {
        this.u = u;
        this.v = v;
        this.weight = weight;
    }
}

public class KruskalLinkedList {

    static int[] parent = new int[100];
    static int[] rank = new int[100];

    static void initializeUnionFind(int n) {
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
        }
    }

    static int find(int u) {
        if (parent[u] != u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }

    static void unionSets(int u, int v) {
        int rootU = find(u);
        int rootV = find(v);

        if (rootU != rootV) {
            if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
            } else if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
            } else {
                parent[rootV] = rootU;
                rank[rootU]++;
            }
        }
    }

    static void kruskal(List<Edge> adjList, int n) {
        List<Edge> edges = new ArrayList<>();
        for (int u = 0; u < n; u++) {
            for (Edge e : adjList.get(u)) {
                edges.add(e);
            }
        }

        edges.sort(Comparator.comparingInt(e -> e.weight));

        initializeUnionFind(n);

        int mstWeight = 0;
        for (Edge e : edges) {
            int u = e.u;
            int v = e.v;
            int weight = e.weight;

            if (find(u) != find(v)) {
                System.out.println("Edge: " + u + " - " + v + ", Weight: " + weight);
                unionSets(u, v);
                mstWeight += weight;
            }
        }
        System.out.println("Total weight of MST: " + mstWeight);
    }

    public static void main(String[] args) {
        int n = 4;
        List<Edge> adjList = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            adjList.add(new ArrayList<>());
        }

        adjList.get(0).add(new Edge(0, 1, 10));
        adjList.get(0).add(new Edge(0, 2, 6));
        adjList.get(0).add(new Edge(0, 3, 5));
        adjList.get(1).add(new Edge(1, 3, 15));
        adjList.get(2).add(new Edge(2, 3, 4));

        kruskal(adjList, n);
    }
}
            
Using Linked List
class Edge {
    constructor(u, v, weight) {
        this.u = u;
        this.v = v;
        this.weight = weight;
    }
}

function find(parent, u) {
    if (parent[u] !== u) {
        parent[u] = find(parent, parent[u]);
    }
    return parent[u];
}

function union(parent, rank, u, v) {
    let rootU = find(parent, u);
    let rootV = find(parent, v);

    if (rootU !== rootV) {
        if (rank[rootU] > rank[rootV]) {
            parent[rootV] = rootU;
        } else if (rank[rootU] < rank[rootV]) {
            parent[rootU] = rootV;
        } else {
            parent[rootV] = rootU;
            rank[rootU]++;
        }
    }
}

function kruskal(adjList, n) {
    let edges = [];
    for (let u = 0; u < n; u++) {
        adjList[u].forEach(edge => edges.push(edge));
    }

    edges.sort((a, b) => a.weight - b.weight);

    let parent = Array(n).fill(0).map((_, idx) => idx);
    let rank = Array(n).fill(0);
    let mstWeight = 0;

    edges.forEach(edge => {
        let u = edge.u;
        let v = edge.v;
        let weight = edge.weight;

        if (find(parent, u) !== find(parent, v)) {
            console.log("Edge: {u} - {v}, Weight: {weight}");
            union(parent, rank, u, v);
            mstWeight += weight;
        }
    });

    console.log("Total weight of MST: {mstWeight}");
}

let n = 4;
let adjList = [
    [new Edge(0, 1, 10), new Edge(0, 2, 6), new Edge(0, 3, 5)],
    [new Edge(1, 3, 15)],
    [new Edge(2, 3, 4)],
    []
];

kruskal(adjList, n);
`,
            python: `
Using Array
class Edge:
    def __init__(self, u, v, weight):
        self.u = u
        self.v = v
        self.weight = weight

def find(parent, u):
    if parent[u] != u:
        parent[u] = find(parent, parent[u])
    return parent[u]

def union(parent, rank, u, v):
    rootU = find(parent, u)
    rootV = find(parent, v)

    if rootU != rootV:
        if rank[rootU] > rank[rootV]:
            parent[rootV] = rootU
        elif rank[rootU] < rank[rootV]:
            parent[rootU] = rootV
        else:
            parent[rootV] = rootU
            rank[rootU] += 1

def kruskal(edges, n):
    edges.sort(key=lambda e: e.weight)

    parent = list(range(n))
    rank = [0] * n
    mstWeight = 0

    for e in edges:
        u, v, weight = e.u, e.v, e.weight
        if find(parent, u) != find(parent, v):
            print(f"Edge: {u} - {v}, Weight: {weight}")
            union(parent, rank, u, v)
            mstWeight += weight

    print(f"Total weight of MST: {mstWeight}")

edges = [
    Edge(0, 1, 10), Edge(0, 2, 6), Edge(0, 3, 5),
    Edge(1, 3, 15), Edge(2, 3, 4)
]

kruskal(edges, 4)
            
Using Linked List
class Node:
    def __init__(self, dest, weight):
        self.dest = dest
        self.weight = weight
        self.next = None

def find(parent, u):
    if parent[u] != u:
        parent[u] = find(parent, parent[u])
    return parent[u]

def union(parent, rank, u, v):
    rootU = find(parent, u)
    rootV = find(parent, v)

    if rootU != rootV:
        if rank[rootU] > rank[rootV]:
            parent[rootV] = rootU
        elif rank[rootU] < rank[rootV]:
            parent[rootU] = rootV
        else:
            parent[rootV] = rootU
            rank[rootU] += 1

def kruskal(adjList, n):
    edges = []
    for u in range(n):
        temp = adjList[u]
        while temp:
            edges.append((u, temp.dest, temp.weight))
            temp = temp.next

    edges.sort(key=lambda e: e[2])

    parent = list(range(n))
    rank = [0] * n
    mstWeight = 0

    for u, v, weight in edges:
        if find(parent, u) != find(parent, v):
            print(f"Edge: {u} - {v}, Weight: {weight}")
            union(parent, rank, u, v)
            mstWeight += weight

    print(f"Total weight of MST: {mstWeight}")

def add_edge(adjList, u, v, weight):
    newNode = Node(v, weight)
    newNode.next = adjList[u]
    adjList[u] = newNode

    newNode = Node(u, weight)
    newNode.next = adjList[v]
    adjList[v] = newNode

adjList = [None] * 4
add_edge(adjList, 0, 1, 10)
add_edge(adjList, 0, 2, 6)
add_edge(adjList, 0, 3, 5)
add_edge(adjList, 1, 3, 15)
add_edge(adjList, 2, 3, 4)

kruskal(adjList, 4)
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=JZBQLXgSGfs",
        resources: [
            {
                title: "GeeksforGeeks on Kruskal's Algorithm",
                url: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm/"
            }
        ]
    },
    {
        id: 16,
        name: "A* Search Algorithm",
        shortDescription: "A* is a heuristic-based search algorithm used to find the shortest path in a graph by combining Dijkstra's and Greedy search.",
        longDescription: "A* is an informed search algorithm that finds the shortest path between nodes by combining Dijkstra's algorithm and Greedy Best-First Search. It evaluates paths by considering both the cost to reach the node and the estimated cost to the goal. The A* algorithm uses a heuristic function to guide the search, making it more efficient. It is widely used in pathfinding applications, such as game AI and GPS systems, with a time complexity of O(E).",
        codeExamples: {
            cpp: `
Using Array
#include <iostream>
#include <queue>
#include <cmath>
#include <climits>
using namespace std;

#define MAX_NODES 4  // Adjust as needed

struct Node {
    int x, y;
    int g, h, f;
    Node* parent;
    
    Node(int x, int y, int g, int h, Node* parent = nullptr) 
        : x(x), y(y), g(g), h(h), f(g + h), parent(parent) {}

    bool operator>(const Node& other) const {
        return f > other.f;
    }
};

int heuristic(int x1, int y1, int x2, int y2) {
    return abs(x1 - x2) + abs(y1 - y2);  // Manhattan distance
}

void aStarSearch(int startX, int startY, int endX, int endY) {
    bool closedList[MAX_NODES][MAX_NODES] = {false};
    Node* openList[MAX_NODES * MAX_NODES];  // Max possible nodes in a grid (assuming small grid size)
    int openCount = 0;

    Node* start = new Node(startX, startY, 0, heuristic(startX, startY, endX, endY));
    openList[openCount++] = start;

    while (openCount > 0) {
        // Find node with lowest f
        int currentIdx = 0;
        for (int i = 1; i < openCount; i++) {
            if (openList[i]->f < openList[currentIdx]->f) {
                currentIdx = i;
            }
        }

        Node* current = openList[currentIdx];
        openCount--;
        openList[currentIdx] = openList[openCount];  // Remove the current node from openList

        if (current->x == endX && current->y == endY) {
            cout << "Path found!" << endl;
            Node* node = current;
            while (node) {
                cout << "(" << node->x << ", " << node->y << ") ";
                node = node->parent;
            }
            cout << endl;
            return;
        }

        closedList[current->x][current->y] = true;

        // Check neighbors
        for (int dx = -1; dx <= 1; dx++) {
            for (int dy = -1; dy <= 1; dy++) {
                if (abs(dx) + abs(dy) != 1) continue;  // Only 4 directions (no diagonals)

                int nx = current->x + dx, ny = current->y + dy;
                if (nx < 0 || ny < 0 || nx >= MAX_NODES || ny >= MAX_NODES || closedList[nx][ny]) continue;

                int g = current->g + 1;
                int h = heuristic(nx, ny, endX, endY);
                Node* nextNode = new Node(nx, ny, g, h, current);
                openList[openCount++] = nextNode;
            }
        }
    }

    cout << "No path found!" << endl;
}

int main() {
    int startX = 0, startY = 0, endX = 3, endY = 3;
    aStarSearch(startX, startY, endX, endY);
    return 0;
}
            
Using Linked List
#include <iostream>
#include <queue>
#include <cmath>
#include <climits>
using namespace std;

#define MAX_NODES 4  // Adjust as needed

struct Node {
    int x, y;
    int g, h, f;
    Node* parent;
    Node* next;  // Linked list to store neighbors

    Node(int x, int y, int g, int h, Node* parent = nullptr)
        : x(x), y(y), g(g), h(h), f(g + h), parent(parent), next(nullptr) {}

    bool operator>(const Node& other) const {
        return f > other.f;
    }
};

int heuristic(int x1, int y1, int x2, int y2) {
    return abs(x1 - x2) + abs(y1 - y2);  // Manhattan distance
}

void aStarSearch(Node* adj[], int startX, int startY, int endX, int endY) {
    bool closedList[MAX_NODES][MAX_NODES] = {false};
    Node* openList[MAX_NODES * MAX_NODES];  // Max possible nodes in a grid
    int openCount = 0;

    Node* start = new Node(startX, startY, 0, heuristic(startX, startY, endX, endY));
    openList[openCount++] = start;

    while (openCount > 0) {
        // Find node with lowest f
        int currentIdx = 0;
        for (int i = 1; i < openCount; i++) {
            if (openList[i]->f < openList[currentIdx]->f) {
                currentIdx = i;
            }
        }

        Node* current = openList[currentIdx];
        openCount--;
        openList[currentIdx] = openList[openCount];  // Remove the current node from openList

        if (current->x == endX && current->y == endY) {
            cout << "Path found!" << endl;
            Node* node = current;
            while (node) {
                cout << "(" << node->x << ", " << node->y << ") ";
                node = node->parent;
            }
            cout << endl;
            return;
        }

        closedList[current->x][current->y] = true;

        // Check neighbors
        for (Node* temp = adj[current->x * MAX_NODES + current->y].next; temp != nullptr; temp = temp->next) {
            int nx = temp->x, ny = temp->y;
            if (closedList[nx][ny]) continue;

            int g = current->g + 1;
            int h = heuristic(nx, ny, endX, endY);
            Node* nextNode = new Node(nx, ny, g, h, current);
            openList[openCount++] = nextNode;
        }
    }

    cout << "No path found!" << endl;
}

int main() {
    Node* adj[MAX_NODES * MAX_NODES] = { nullptr };

    // Create adjacency list manually here
    adj[0].next = new Node(1, 0, 0, 0);
    adj[1].next = new Node(1, 1, 0, 0);
    adj[2].next = new Node(0, 2, 0, 0);
    adj[3].next = new Node(3, 3, 0, 0);

    int startX = 0, startY = 0, endX = 3, endY = 3;
    aStarSearch(adj, startX, startY, endX, endY);
    return 0;
}
`,
            java: `
Using Array
import java.util.*;

class Node {
    int x, y, g, h, f;
    Node parent;

    Node(int x, int y, int g, int h, Node parent) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
    }
}

public class AStarSearch {
    private static final int N = 4; // Grid size (4x4)

    public static int heuristic(int x1, int y1, int x2, int y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2); // Manhattan distance
    }

    public static List<int[]> getNeighbors(int x, int y) {
        return Arrays.asList(new int[]{x - 1, y}, new int[]{x + 1, y}, new int[]{x, y - 1}, new int[]{x, y + 1});
    }

    public static void aStarSearch(int startX, int startY, int endX, int endY) {
        boolean[][] closedList = new boolean[N][N];
        Node[] openList = new Node[N * N];  // Fixed size array
        int openCount = 0;

        Node start = new Node(startX, startY, 0, heuristic(startX, startY, endX, endY), null);
        openList[openCount++] = start;

        while (openCount > 0) {
            // Find node with lowest f
            int currentIdx = 0;
            for (int i = 1; i < openCount; i++) {
                if (openList[i].f < openList[currentIdx].f) {
                    currentIdx = i;
                }
            }

            Node current = openList[currentIdx];
            openCount--;
            openList[currentIdx] = openList[openCount];  // Remove the current node from openList

            if (current.x == endX && current.y == endY) {
                System.out.println("Path found!");
                Node node = current;
                while (node != null) {
                    System.out.print("(" + node.x + ", " + node.y + ") ");
                    node = node.parent;
                }
                System.out.println();
                return;
            }

            closedList[current.x][current.y] = true;

            // Check neighbors
            for (int[] neighbor : getNeighbors(current.x, current.y)) {
                int nx = neighbor[0], ny = neighbor[1];
                if (nx < 0 || ny < 0 || nx >= N || ny >= N || closedList[nx][ny]) continue;

                int g = current.g + 1;
                int h = heuristic(nx, ny, endX, endY);
                Node nextNode = new Node(nx, ny, g, h, current);
                openList[openCount++] = nextNode;
            }
        }

        System.out.println("No path found!");
    }

    public static void main(String[] args) {
        aStarSearch(0, 0, 3, 3); // Start and goal
    }
}
            
Using Linked List
import java.util.*;

class Node {
    int x, y, g, h, f;
    Node parent;
    Node next; // Linked list pointer

    Node(int x, int y, int g, int h, Node parent) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
        this.next = null;
    }

    public boolean isEqual(Node other) {
        return this.x == other.x && this.y == other.y;
    }
}

public class AStarSearch {
    private static final int N = 4; // Grid size (4x4)

    public static int heuristic(int x1, int y1, int x2, int y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2); // Manhattan distance
    }

    public static LinkedList<Node> getNeighbors(Node current) {
        LinkedList<Node> neighbors = new LinkedList<>();
        int[][] directions = { {-1, 0}, {1, 0}, {0, -1}, {0, 1} };
        for (int[] dir : directions) {
            int nx = current.x + dir[0], ny = current.y + dir[1];
            if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
                neighbors.add(new Node(nx, ny, 0, 0, null));
            }
        }
        return neighbors;
    }

    public static void aStarSearch(int startX, int startY, int endX, int endY) {
        LinkedList<Node> openList = new LinkedList<>();
        LinkedList<Node> closedList = new LinkedList<>();

        Node start = new Node(startX, startY, 0, heuristic(startX, startY, endX, endY), null);
        openList.add(start);

        while (!openList.isEmpty()) {
            // Find node with lowest f
            Node current = openList.getFirst();
            for (Node n : openList) {
                if (n.f < current.f) {
                    current = n;
                }
            }

            openList.remove(current);
            closedList.add(current);

            if (current.x == endX && current.y == endY) {
                System.out.println("Path found!");
                Node node = current;
                while (node != null) {
                    System.out.print("(" + node.x + ", " + node.y + ") ");
                    node = node.parent;
                }
                System.out.println();
                return;
            }

            LinkedList<Node> neighbors = getNeighbors(current);
            for (Node neighbor : neighbors) {
                if (closedList.stream().anyMatch(n -> n.isEqual(neighbor))) continue;

                int g = current.g + 1;
                int h = heuristic(neighbor.x, neighbor.y, endX, endY);
                Node nextNode = new Node(neighbor.x, neighbor.y, g, h, current);
                boolean inOpenList = openList.stream().anyMatch(n -> n.isEqual(nextNode));
                if (!inOpenList) openList.add(nextNode);
            }
        }

        System.out.println("No path found!");
    }

    public static void main(String[] args) {
        aStarSearch(0, 0, 3, 3); // Start and goal
    }
}
`,
            javascript: `
Using Array
class Node {
    constructor(x, y, g, h, parent = null) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
    }

    compareTo(other) {
        return this.f - other.f;
    }
}

function heuristic(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);  // Manhattan distance
}

function aStarSearch(startX, startY, endX, endY) {
    let closedList = Array.from({ length: 4 }, () => Array(4).fill(false));
    let openList = [];

    let start = new Node(startX, startY, 0, heuristic(startX, startY, endX, endY));
    openList.push(start);

    while (openList.length > 0) {
        openList.sort((a, b) => a.compareTo(b));
        let current = openList.shift();

        if (current.x === endX && current.y === endY) {
            console.log("Path found!");
            let path = [];
            while (current) {
                path.push("({current.x}, {current.y})");
                current = current.parent;
            }
            console.log(path.reverse().join(' -> '));
            return;
        }

        closedList[current.x][current.y] = true;

        for (let [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
            let nx = current.x + dx;
            let ny = current.y + dy;
            if (nx < 0 || ny < 0 || nx >= 4 || ny >= 4 || closedList[nx][ny]) continue;

            let g = current.g + 1;
            let h = heuristic(nx, ny, endX, endY);
            let neighbor = new Node(nx, ny, g, h, current);
            openList.push(neighbor);
        }
    }

    console.log("No path found!");
}

aStarSearch(0, 0, 3, 3);
            
Using Linked List
class Node {
    constructor(x, y, g, h, parent = null) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
        this.next = null; // Linked list pointer
    }

    compareTo(other) {
        return this.f - other.f;
    }

    isEqual(other) {
        return this.x === other.x && this.y === other.y;
    }
}

function heuristic(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);  // Manhattan distance
}

function aStarSearch(startX, startY, endX, endY) {
    let openList = new LinkedList();
    let closedList = new LinkedList();

    let start = new Node(startX, startY, 0, heuristic(startX, startY, endX, endY));
    openList.add(start);

    while (openList.length > 0) {
        // Find node with lowest f
        let current = openList.getFirst();
        let currentNode = current;
        while (current !== null) {
            if (current.f < currentNode.f) {
                currentNode = current;
            }
            current = current.next;
        }

        openList.remove(currentNode);
        closedList.add(currentNode);

        if (currentNode.x === endX && currentNode.y === endY) {
            console.log("Path found!");
            let node = currentNode;
            while (node) {
                console.log("{node.x}, {node.y})");
                node = node.parent;
            }
            return;
        }

        let neighbors = getNeighbors(currentNode);
        for (let neighbor of neighbors) {
            if (closedList.contains(neighbor)) continue;

            let g = currentNode.g + 1;
            let h = heuristic(neighbor.x, neighbor.y, endX, endY);
            let nextNode = new Node(neighbor.x, neighbor.y, g, h, currentNode);
            if (!openList.contains(nextNode)) {
                openList.add(nextNode);
            }
        }
    }

    console.log("No path found!");
}

function getNeighbors(node) {
    let neighbors = [];
    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 4 directions
    for (let [dx, dy] of directions) {
        let nx = node.x + dx, ny = node.y + dy;
        if (nx >= 0 && ny >= 0 && nx < 4 && ny < 4) {
            neighbors.push(new Node(nx, ny, 0, 0, null));
        }
    }
    return neighbors;
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    remove(node) {
        if (this.head === node) {
            this.head = this.head.next;
            if (this.tail === node) this.tail = null;
        } else {
            let current = this.head;
            while (current !== null && current.next !== node) {
                current = current.next;
            }
            if (current !== null) {
                current.next = node.next;
                if (node === this.tail) {
                    this.tail = current;
                }
            }
        }
        this.length--;
    }

    getFirst() {
        return this.head;
    }

    contains(node) {
        let current = this.head;
        while (current !== null) {
            if (current.isEqual(node)) return true;
            current = current.next;
        }
        return false;
    }
}

aStarSearch(0, 0, 3, 3);
`,
            python: `
Using Array
import heapq

MAX_NODES = 4  # Adjust as needed

class Node:
    def __init__(self, x, y, g, h, parent=None):
        self.x = x
        self.y = y
        self.g = g
        self.h = h
        self.f = g + h
        self.parent = parent

    def __lt__(self, other):
        return self.f < other.f

def heuristic(x1, y1, x2, y2):
    return abs(x1 - x2) + abs(y1 - y2)  # Manhattan distance

def a_star_search(start_x, start_y, end_x, end_y):
    closed_list = [[False] * MAX_NODES for _ in range(MAX_NODES)]
    open_list = []  # Priority queue

    start_node = Node(start_x, start_y, 0, heuristic(start_x, start_y, end_x, end_y))
    heapq.heappush(open_list, start_node)

    while open_list:
        current = heapq.heappop(open_list)

        if current.x == end_x and current.y == end_y:
            print("Path found!")
            path = []
            while current:
                path.append((current.x, current.y))
                current = current.parent
            print(" -> ".join(map(str, reversed(path))))
            return

        closed_list[current.x][current.y] = True

        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = current.x + dx, current.y + dy
            if 0 <= nx < MAX_NODES and 0 <= ny < MAX_NODES and not closed_list[nx][ny]:
                g = current.g + 1
                h = heuristic(nx, ny, end_x, end_y)
                neighbor = Node(nx, ny, g, h, current)
                heapq.heappush(open_list, neighbor)

    print("No path found!")

a_star_search(0, 0, 3, 3)
           
Using Linked List
class Node:
    def __init__(self, x, y, g, h, parent=None):
        self.x = x
        self.y = y
        self.g = g
        self.h = h
        self.f = g + h
        self.parent = parent
        self.next = None

    def is_equal(self, other):
        return self.x == other.x and self.y == other.y

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add(self, node):
        if not self.head:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node

    def remove(self, node):
        if self.head == node:
            self.head = self.head.next
        else:
            current = self.head
            while current:
                if current.next == node:
                    current.next = node.next
                    if node == self.tail:
                        self.tail = current
                    break
                current = current.next

    def contains(self, node):
        current = self.head
        while current:
            if current.is_equal(node):
                return True
            current = current.next
        return False

    def get_first(self):
        return self.head

def heuristic(x1, y1, x2, y2):
    return abs(x1 - x2) + abs(y1 - y2)  # Manhattan distance

def get_neighbors(node):
    neighbors = []
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    for dx, dy in directions:
        nx, ny = node.x + dx, node.y + dy
        if 0 <= nx < 4 and 0 <= ny < 4:
            neighbors.append(Node(nx, ny, 0, 0, None))
    return neighbors

def a_star_search(start_x, start_y, end_x, end_y):
    open_list = LinkedList()
    closed_list = LinkedList()

    start = Node(start_x, start_y, 0, heuristic(start_x, start_y, end_x, end_y))
    open_list.add(start)

    while open_list.head:
        current = open_list.get_first()
        open_list.remove(current)

        closed_list.add(current)

        if current.x == end_x and current.y == end_y:
            print("Path found!")
            path = []
            while current:
                path.append(f"({current.x}, {current.y})")
                current = current.parent
            print(" -> ".join(reversed(path)))
            return

        for neighbor in get_neighbors(current):
            if closed_list.contains(neighbor):
                continue

            g = current.g + 1
            h = heuristic(neighbor.x, neighbor.y, end_x, end_y)
            next_node = Node(neighbor.x, neighbor.y, g, h, current)

            if not open_list.contains(next_node):
                open_list.add(next_node)

    print("No path found!")

a_star_search(0, 0, 3, 3)
`,
          },
        videoUrl: "https://www.youtube.com/watch?v=ySN5Wnu88nE",
        resources: [
            {
                title: "GeeksforGeeks on A* Algorithm",
                url: "https://www.geeksforgeeks.org/a-search-algorithm/"
            }
        ]
    }
      
    
];
 
export default algorithms;