fetch("https://jsonplaceholder.typicode.com/users")
.then((result)=> result.json())
.then((data)=>console.log(data));