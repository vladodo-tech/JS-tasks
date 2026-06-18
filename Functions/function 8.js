const distanceInMeters = [2, 5, 13, 44, 100];

const distanceInFeet = distanceInMeters.map(function(i) {
    return Math.round(i * 3.28084);
});

console.log(distanceInFeet);