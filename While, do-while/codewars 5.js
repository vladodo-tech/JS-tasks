let number = function(busStops){
    return busStops.reduce((sum, [on, off]) => sum + on - off, 0);
}
console.log(number([[10, 0], [3, 5], [5, 8]]));