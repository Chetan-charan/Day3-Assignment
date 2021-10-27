var object = {
    "heading": "aut",
    "content": "Pariatur assumenda delectus tenetur tempora et.",
    "picture": "http://placeimg.com/640/480/nature",
    "id": "2"
}


//for-in
for(var m in object){                                                   //loop through object using for in loop
    console.log(m,object[m]);
}

var keys = Object.keys(object);

                                                                       //using for loop
for(var i=0;i<keys.length;i++){

    console.log(object[keys[i]])
    
}

                                                                        //using for of
for(var x of keys){
    console.log(x,object[x]);
    
}

                                                                        //using for each
keys.forEach(key => console.log(key,object[key]));
