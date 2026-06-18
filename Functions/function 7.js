let arr = ["Hello world!","!Hola mundo!", "Hallo wereld", "Привет мир!"];
{function getGreetings() {
    console.log(arr);
}
getGreetings();}

{const getGreetings = () => console.log(arr);
    getGreetings();}

{const getGreetings = function () {
    console.log(arr);
}
getGreetings();}
