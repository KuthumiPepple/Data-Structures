// Creates priority queue
function PriorityQueue(){
	let collection = [];
	this.printCollection = function(){
		console.log(collection);
	};

	/* Adds element to queue based on assigned priority status */
	this.enqueue = function(element){
		if(this.isEmpty()){
			collection.push(element);
		}else{
			let added = false;
			for(let i = 0; i < collection.length; i++){
				// comparing priority status
				if(element[1] < collection[i][1]){
					collection.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if(!added){
				collection.push(element);
			}
		}
	}
	
	/* Removes and returns element at end of queue */
	this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };

    /* Returns element at end of queue */
    this.front = function() {
        return collection[0];
    };

    /* Returns length of queue */
    this.size = function() {
        return collection.length; 
    };

    /* Returns boolean value whether or not queue is empty */
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}