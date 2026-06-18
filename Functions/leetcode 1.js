function filter(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        
        let result = fn(arr[i], i);
        
        if (result) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
}
console.log(filter([0,10,20,30], n => n > 10));
console.log(filter([-2,-1,0,1,2], n => n + 1));