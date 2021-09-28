/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let heap = [null];
    let frequency = {};
    let res = [];
    
    for (let i = 0; i < nums.length; i++) {
          if (frequency[nums[i]]) {
            frequency[nums[i]]++;
        } else {
            frequency[nums[i]] = 1;
        }
    }
    
    var heapAdd = (n) => {
        heap.push(n);
        if (heap.length > 2) {
            let current = heap.length - 1;
            while (current > 1 && heap[current] > heap[Math.floor(current/2)]) {
                    [heap[current], heap[Math.floor(current/2)]] = [heap[Math.floor(current/2)], heap[current]];
                    current = Math.floor(current/2);
            }
        }
        return heap;
    }
     var heapRemove = () => { 
        let biggest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            
            if (heap.length === 3) {
                if (heap[1] < heap[2]) {
                [heap[1], heap[2]] = [heap[2], heap[1]];
                } 
                return biggest;
            }
            
            let current = 1;
            let leftChild = current * 2;
            let rightChild = (current * 2) + 1;   
            
            while (heap[leftChild] && heap[rightChild] && (heap[current] < heap[leftChild] || heap[current] < heap[rightChild])) {
                if (heap[leftChild] > heap[rightChild]) {
                    [heap[leftChild], heap[current]] = [heap[current], heap[leftChild]];
                    current = leftChild;
                } else {
                    [heap[rightChild], heap[current]] = [heap[current], heap[rightChild]];
                    current = rightChild;
                }
                leftChild = current * 2;
                rightChild = (current * 2) + 1;
            }
        
                
            if (heap[rightChild] === undefined && heap[current] < heap[leftChild]) { //if there is no right node
                [heap[current], heap[leftChild]] = [heap[leftChild], heap[current]];
            }  
        } else if (heap.length === 2) {
            heap.splice(1, 1);
            } else {
            return null;
            }
            
     return biggest;   
    }
    Object.values(frequency).forEach(i => heapAdd(i));
 
    let i = 0;
    while (i < k) {
      res.push(Object.keys(frequency).find(key => frequency[key] === heap[1]));
        frequency[Object.keys(frequency).find(key => frequency[key] === heap[1])] = 0;
      heapRemove();
      i++;
    }
   
    return res;
};