function LinkedList() {
	let length = 0;
	let head = null;

	let Node = function(element){
		this.element = element;
		this.next = null;
	};

	this.size = function(){
		return length;
	}

	this.head = function(){
		return head;
	}

	this.add = function(element){
		let node = new Node(element);
		// check if list is empty. If yes set head to point to new node
		if(head === null){
			head = node;
		}else{
			// create reference to head
			let currentNode = head;
			// then traverse linked list to reach end node
			while(currentNode.next){
				currentNode = currentNode.next;
			}
			// set end node's next property to new node
			currentNode.next = node;
		}
		// increment size of linked list
		length++;
	}

	this.remove = function(element){
		// create reference to head
		let currentNode = head;
		let previousNode;
		// check if element is head. If yes set head to next node
		if(currentNode === element){
			head = currentNode.next;
		}else{
			while(currentNode.element !== element){
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			// point from previous node to next node
			previousNode.next = currentNode.next;
		}
		// decrement size of linked list
		length--;
	}

	this.isEmpty = function(){
		return length === 0;
	}
}