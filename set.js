/* Creates a Set */
function MySet(){
	// array to hold elements of set
	let collection = [];

	/* Checks if set already contains element */
	this.has = function(element){
		return (collection.indexOf(element) !== -1);
	};

	/* Returns all elements in set */
	this.values = function(){
		return collection;
	};

	/* Adds element to set */
	this.add = function(element){
		if(!this.has(element)){
			collection.push(element);
			return true;
		}
		return false;
	}

	/* Removes element from set */
	this.remove = function(element){
		if(this.has(element)){
			collection.splice(collection.indexOf(element), 1);
			return true;
		}
		return false;
	};

	/* Returns cardinality of set */
	this.cardinality = function(){
		return collection.length;
	};

	/* Returns the union of two set */
	this.union = function(otherSet){
		let unionSet = new MySet();
		let firstSet = this.values();
		let secondSet = otherSet.values();
		firstSet.forEach(function(e){
			unionSet.add(e);
		});
		secondSet.forEach(function(e){
			unionSet.add(e);
		});
		return unionSet;
	};

	/* Returns the intersection of two sets */
	this.intersection = function(otherSet){
		let intersectionSet = new MySet();
		let firstSet = this.values();
		firstSet.forEach(function(e){
			if(otherSet.has(e)){
				intersectionSet.add(e);
			}
		});
		return intersectionSet;
	};

	/* Returns the difference of two sets */
	this.difference = function(otherSet){
		let differenceSet = new MySet();
		let firstSet = this.values();
		firstSet.forEach(function(e){
			if(!otherSet.has(e)){
				differenceSet.add(e);
			}
		});
		return differenceSet;
	};

	/* Returns true if calling set is subset of passed set.
	Otherwise returns false */
	this.isSubsetOf = function(otherSet){
		let firstSet = this.values();
		return firstSet.every(function(e){
			return otherSet.has(e);
		});
	};

	/* Returns true if calling set is superset of passed set.
	Otherwise returns false */
	this.isSupersetOf = function(otherSet){
		let secondSet = otherSet.values();
		return secondSet.every(e => this.has(e));
	};
}