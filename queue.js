// Creates a queue
function Queue(){
	let collection = [];
	this.print = function(){
		console.log(collection);
	}
	/* Adds item to rear of queue */
	this.enqueue = function(item){
		collection.push(item)
	};

	/* Removes item at front of queue and returns it */
	this.dequeue = function(){
		return collection.shift();
	};

	/* Returns element at front of queue */
	this.front = function(){
		return collection[0];
	};

	/* Returns length of queue */
	this.size = function(){
		return collection.length;
	};

	/* Returns boolean value whether or not queue is empty */
	this.isEmpty = function(){
		return (collection.length === 0);
	};
}