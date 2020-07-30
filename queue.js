//QUEUE

//Enqueue and dequeue

export class Queue {

    constructor(maxQueueLength){
        this.queue = [];
        this.maxQueueLength = maxQueueLength;
        // this.qlength = this.queueLength();
    }
    
    enqueue(x){
        //insert x in last position of array
        if(this.queueLength() >= this.maxQueueLength){
            return false;
        }

        this.queue[this.queueLength()] = x;

    }

    dequeue(){
        //remove from index 0
        // this.queue[0];
        if(!this.isEmpty()){
            let tempQueue = [];
            for(let i=1;i<this.queueLength();i++){
                tempQueue[i-1] = this.queue[i];
            }
            this.queue = tempQueue;
        }
        return false;
    }

    isEmpty(){
        if(this.queueLength() == 0){
            return true;
        }
        return false;

    }

    queueLength(){
        let i=0;
        while(!(this.queue[i] == null || this.queue[i] == undefined)){
            i++;
        }
        return i;
    }
}