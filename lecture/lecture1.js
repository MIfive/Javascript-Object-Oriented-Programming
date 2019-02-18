// Object oriented programming 


/*Jokhon akta bostu ke onek kichu milaya describe korbe
 tokhon setake amra bolbo "Object". akta object er modde akadik
 object thakte pare*/

 //Class === object in javascript maybe 


//  var obj = {};
//  var obj1 =obj;

//  console.log(obj);
//  console.log(obj1);



//Object er bithore property gula value key pair onujayi thake.




var book = {
    name: 'Functional Javascript', // pro
    author: 'Micbail Fugas',
    // value key pair here "author" is key  'Micbail Fugas' is value
    publisher: "O' Raily",
    page: 250,

    print: function(){
        console.log(this.name, this.author);
        
    }
};

console.log(book);
book.print();


// we can extend object from out of the object

book.publishedYear=2010;

console.log(book.publishedYear);




//object key travers or iterate 

for(var props in book){
    //console.log(props);
    
    console.log(props+ '=' +book[props]);
    
    
}




















// // accessing property using dot notation

// console.log(book.name);
// //object er name and property er name


// //accessing property using bracket notation 

// console.log(book['name']);





 