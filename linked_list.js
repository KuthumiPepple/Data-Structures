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
}