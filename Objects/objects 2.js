const room = {
    height : 3,
    tv : "Samsung",
    big : true
}
Object.keys(room).forEach(key => { //b.
    console.log(key);
});
console.log(typeof room.big);  //c.
console.log(room.tv.length); //d.
console.log(room.tv.length - 1); //e.
console.log(room.tv.toUpperCase()); //f.
console.log(room.tv.replace("Samsung", "LG")); //g.
room["furniture"] = ["table", "chair", "sofa"]; //h.
console.log(room.furniture[1]); //i.
delete room.big; console.log(room); //j.