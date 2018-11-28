// Creates a linked list
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

	/* Adds element/node to end of linked list */
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

	/* Removes element/node from linked list */
	this.remove = function(element){
		// create reference to head
		let currentNode = head;
		let previousNode;
		// check if element is head. If yes set head to next node
		if(currentNode.element === element){
			head = currentNode.next;
		}else{
			while(currentNode.element !== element){
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			// point from previous node of current node to next node of current node
			previousNode.next = currentNode.next;
		}
		// decrement size of linked list
		length--;
	}

	/* Checks if linked list is empty. Returns a boolean value*/
	this.isEmpty = function(){
		return length === 0;
	}

	/* Returns index of element */
	this.indexOf = function(element){
		// set current node to head
		let currentNode = head;
		let index = -1;
		// while current node is not null, traverse list
		while(currentNode){
			index++;
			if(currentNode.element === element){
				return index;
			}
			currentNode = currentNode.next;
		}
		return -1;
	};

	/* Returns element at index */
	this.elementAt = function(index){
	let currentNode = head;
	let count = 0;
	while(count < index){
		count++;
		currentNode = currentNode.next;
	}
	return currentNode.element;
	}

	/* Adds element at index */
	this.addAt = function(element, index){
		let node = new Node(element);
		// 2 variables to hold references to previous and current nodes
		let currentNode = head;
		let previousNode;
		// set index of current node to 0
		let currentIndex = 0;
		// check index
		if(index > length){
			return false;
		}
		if(index === 0){
			head = node;
			node.next = currentNode;
		}else{
			while(currentIndex < index){
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			// slot node between previous node and current node
			previousNode.next = node;
			node.next = currentNode;
		}
		// increment size
		length++;
	}

	/* Removes element at index */
	this.removeAt = function(index){
		let currentNode = head;
		let previousNode;
		// set index of current node to 0
		let currentIndex = 0;
		// validate index
		if(index < 0 || index >= length){
			return null;
		}
		if(index === 0){
			head = currentNode.next;
		}else{
			while(currentIndex < index){
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			// point from previous node of current node to next node of current node
			previousNode.next = currentNode.next;
		}
		length--;
		return currentNode.element;
	}
}