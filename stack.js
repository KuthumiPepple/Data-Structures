// creates stack
function Stack(){
	this.count = 0;
	this.storage = {};

	// adds item at top of stack
	this.push = function(item){
		this.storage[this.count] = item;
		this.count++;
	}

	// removes item at top of stack and returns it
	this.pop = function(){
		// check if stack is empty
		if(this.count === 0)
			return undefined;
		else{
			// decrement count
			this.count--;
			let item = this.storage[this.count];
			delete this.storage[this.count];
			return item;
		}
	}

	// returns size of stack
	this.size = function(){
		return this.count;
	}

	// returns item at top of stack
	this.peek = function(){
		return this.storage[this.count - 1];
	}
}