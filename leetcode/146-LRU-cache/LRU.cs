using System;
using System.Collections.Generic;

namespace lru {
    public class LRUCache {
        private readonly IDictionary<int, Node> nodes;
        private int size, capacity;
        private Node head, tail;

        public LRUCache(int _capacity) {
            nodes = new Dictionary<int, Node>();
            head = new Node(0, 0);
            tail = new Node(0, 0);
            head.next = tail;
            tail.prev = head;
            size = 0;
            capacity = _capacity;
        }

        public int Get(int key) {
            Node node;
            if (!nodes.TryGetValue(key, out node)) return -1;
            RemoveNode(node);
            InsertFirst(node);
            Console.Write($"GET {key} -> ");
            Inspect();
            return node.value;
        }

        public void Put(int key, int value) {
            Node node;
            if (nodes.TryGetValue(key, out node)) {
                Console.Write($"Removing {node.key} >> ");
                node.value = value;
                RemoveNode(node);
                InsertFirst(node);
            }
            else {
                node = new Node(key, value);
                if (size >= capacity) {
                    nodes.Remove(tail.prev.key);
                    RemoveNode(tail.prev);
                }
                InsertFirst(node);
            }
            nodes[node.key] = node;
            Console.Write($"PUT [{key}, {value}] -> ");
            Inspect();
        }
        
        private void RemoveNode(Node node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            size--;
        }

        private void InsertFirst(Node node) {
            node.next = head.next;
            node.prev = head;
            head.next.prev = node;
            head.next = node;
            size++;
        }

        private void Inspect() {
            var n = head.next;
            while (n != tail) {
                Console.Write($"[{n.key},{n.value}],{n.prev.key},{n.next.key} -> ");
                n = n.next;
            }
            Console.WriteLine();
        }


        private class Node {
            public int key, value;
            public Node next, prev;

            public Node(int _key, int _value) { key = _key; value = _value; }
        }
    }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */
