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
}