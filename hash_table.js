/* Create Hash Table */
function HashTable(){
	let hashFunction = (string, max) => {
		let hash = 0;
		for (let i = string.length - 1; i >= 0; i--) {
			hash += string.charCodeAt(i);
		}
		return hash % max;
	};

	let storage = [];
	// define number of buckets
	const storageLimit = 14;
	this.print = function(){
		console.log(storage);
	};

	/* Adds key-value pair to table */
	this.add = function(key, value){
		// generate index
		let index = hashFunction(key, storageLimit);
		if(storage[index] === undefined){
			storage[index] = [[key, value]];
		}else{
			let inserted = false;
			// loop through bucket
			for(let i = 0; i < storage[index].length; i++){
				// check if key is already in bucket. If yes store value
				if(storage[index[i][0]] === key){
					storage[index][i][1] = value;
					inserted = true;
				}
			}
			if(inserted === false){
				// put key-value pair into bucket
				storage[index].push([key, value]);
			}
		}
	};

	/* Removes key-value pair from table */
	this.remove = function(key){
		// generate index
		let index = hashFunction(key, storageLimit);
		// check if bucket contains only 1 item and if item's key is equal to passed key. If yes, remove bucket
		if(storage[index].length === 1 && storage[index][0][0] === key){
			console.log('no. of buckets before deletion of a bucket: ' + storage.length);
			delete storage[index];
			console.log('no. of buckets after deletion of a bucket: ' + storage.length);
		}else{
			for(let i = 0; i < storage[index].length; i++){
				if(storage[index][i][0] === key){
					console.log('no. of items in bucket before deletion of an item: ' + storage.length);
					delete storage[index][i];
					console.log('no. of items in bucket after deletion of an item: ' + storage.length);
				}
			}
		}
	};

	/* Returns value associated with key */
	this.lookup = function(key){
		let index = hashFunction(key, storageLimit);
		if(storage[index] === undefined){
			return undefined;
		}else{
			for(let i = 0; i < storage[index].length; i++){
				if(storage[index][i][0] === key){
					return storage[index][i][1];
				}
			}
		}
	}
}