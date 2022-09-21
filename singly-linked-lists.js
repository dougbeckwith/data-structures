class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  // add to end of LinkedList
  // return LinkedList
  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  // remove from end of LinkedList
  // return LinkedList
  pop() {
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return this
  }
  // remove from start of linked list
  // return list
  shift() {
    if (this.head === null) return undefined
    let newHead = this.head.next
    this.head = newHead
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return this
  }
  // add to start of linked list
  // return list
  unshift(val) {
    const newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  // get node from linked list at index
  get(index) {
    if (!this.head) return null
    if (index < 0 || index > this.length) return null

    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  // change value of a node based on index and the new value passed in
  set(index, newValue) {
    // find linked list item by index
    let findNode = this.get(index)
    if (findNode) {
      findNode.value = newValue
      return findNode
    } else {
      return 'no node at that index'
    }
  }
  // insert new node at index
  // if insert return true
  // else return false
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)

    let newNode = new Node(value)
    let prev = this.get(index - 1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
}

let singlyLinkedList = new SinglyLinkedList()
