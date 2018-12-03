/* Creates Map */
function MyMap(){
	this.collection = {};
	this.count = 0;
	/* Returns the number of keys in map */
	this.size = function(){
		return this.count;
	};

	/* Adds a key-value pair to map */
	this.set = function(key, value){
		this.collection[key] = value;
		this.count++;
	};

	/* Check if key is in map */
	this.has = function(key){
		return (key in this.collection);
	}

	/* Get value associated with key */
	this.get = function(key){
		return (key in this.collection)? this.collection[key] : null;
	};

	/* Deletes a key-value pair */
	this.delete = function(key){
		delete this.collection[key];
		this.count--;
	};

	/* Returns an array containing all values in the map */
	this.values = function(){
		let valuesArray = new Array();
		for(let key of Object.keys(this.collection)){
			valuesArray.push(this.collection[key]);
		}
		return (valuesArray.length > 0)? valuesArray : null;
	};

	/* Clears the map */
	this.clear = function(){
		this.collection = {};
		this.count = 0;
	};
}