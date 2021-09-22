var arr =  [
    {
    "heading": "aliquid",
    "content": "Libero aut voluptas dolorem est aperiam dolor aperiam.",
    "picture": "http://placeimg.com/640/480/nature",
    "id": "1"
},{
    "heading": "aut",
    "content": "Pariatur assumenda delectus tenetur tempora et.",
    "picture": "http://placeimg.com/640/480/nature",
    "id": "2"
}
]

//for-in
for(var m in arr){
    console.log(m,arr[m]);
}

//for loop
for(var i=0;i<arr.length;i++){
    var obj = arr[i];
    for(var key in obj){
        console.log(key,obj[key])
    }
}

//for of
for(x of arr){
    console.log(x)
}

//for each
arr.forEach(myFunction)

function myFunction(x) {
  console.log(x);
}
