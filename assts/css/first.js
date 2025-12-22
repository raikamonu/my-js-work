// document.getElementById('h1').innerText="bad girl";
// document.getElementById('h2').innerHTML="<span style='font-weight:bold'>bad girl</span>";
// document.getElementById('h3').innerHTML="<span style='color:blue'>bad girl</span>";



//    alert("monu------");

    




    //var
//globle scope /function
//re declare or re ass
// use before declare
// undefined



//let
//block scope
//re ass
//not use before dec
//not required ass value on time of declare
// RECHANGE



//const
//block scope
//no use before declare
//readonly not change re ass
//no re declare 
//NOT RECHANGE


//prompt();
//prompt(message);
// prompt(message, defaultValue);


//Arithmetic opeators
//substraction -
//addition +
//multiplication *
//division /
//moduls %
//exponentiation **
//increament ++
//decreament --


//assignment operators

//x=y
//x-=y
//x+=y
//x*=y
//x/=y
//x%=y
//x**=y


//comparison operators
//==equal to
//!= not equal
//=== equal value and equal type
// !== not equal value or not equal type 
//< less than
// > greater than 
//>= greater than or equal to
//<=less than or equal to
// ? ternary operator

//control flow statements
//conditional
//looping
//jump


//conditional statement
//if
//if else
//if else if
//neseted if
// switch
//"ternary","and","or"& "not" operators


//ternary
//const result=number>0?'positive': 'negitive';
//console.log(result);
            //or
//console.log('${number>0?'positive': 'negitive'}');




//looptype
              //1. entry control loop
              //2. exit control loop

//for loop
//:-for(let number= 1;number<=3; number++)
//{
//console.log('hello')}


//while
// let number=10;
// while(number>=1)
// {
//     console.log(number);
//     number--;
// }



//do while
// let number=1;
// do{
//     console.log(number);
//     number++;
// }while(number<=3);

//for ...of loop
//for ...in loop
//forEach()
//map()
//for awaite..of


//neseted loop
// for(i=1; i<=10; i++)
// {
//     console.log(i*2);
// }

            //or
            // let tableText='2:- ';

            // for(i=1; i<=10; i++)
            //   {
            //     tableText += `${i*2} `;
            //   }
           
            //  console.log(tableText);
                
            //or

    // for(let outer=2; outer<=5; outer++)
    //        {
    //           tableText=`${outer}:- `;

    //         for(i=1; i<=10; i++)
    //           {
    //             tableText += `${i*outer} `;
    //           }
           
    //          console.log(tableText);
         //   }



//break and continue
//break
// for(let i=1; i<=5; i++)
// {
//   break;
//   console.log(i);
 
// }

// for(let i=1; i<=5; i++)
// {
//   if(i>=3)
//   {continue;}
//   console.log(i);
// }



//functions in javascript
//function
// function studentInsert()
// {console.log('insert started');
// console.log('inserted');}

// function studentupdate()
// {console.log('insert started');
// console.log('update');}

// function studentdelete()
// {console.log('insert started');
// console.log('delete');}

// function studentselected()
// {console.log('insert started');
// console.log('selected');}

// studentInsert()
// studentselected()
        //or
        
        //parameters
//         function studentSelect(studentName)
// {
//   console.log ('started...');
//    console.log (`Hello ${studentName`});
//     console.log ('ended...');
// }
// studentSelect();
// studentSelect();

///arguments
//  function studentSelect(studentName)
// {
//   console.log ('started...');
//   console.log (`Hello ${studentName}`);
//   console.log ('ended...');
// }
// studentSelect('Ram');
// studentSelect('Sita');


//return
//  function studentSelect(studentName)
// {
//   console.log ('started...');
//   console.log (`Hello ${studentName}`);
//   console.log ('ended...');
//   return studentName.length;
// }
// studentSelect('Ram');
// studentSelect('Sita');


//and(&&)operator
//true && true = true
//false && true = false
// false && false =false
// const Fpermission =true;
// const Mpermission =true;
// if(Fpermission ==true&&
//  Mpermission ==true)
// {
//   console.log('allowed');
// }
// else{
//   console.log('not allowed');
// }


//  or (||)operator
//false || true = true
// false || false =false
//true || true = true

// const Fpermission =true;
// const Mpermission =true;
// if(Fpermission ==true||

//  Mpermission ==true)
// {
//   console.log('allowed');
// }
// else{
//   console.log('not allowed');
// }

//not operator
// const isAllowed = false;
// if (!isAllowed)
// {
//   console.log('Not Allowed!');
// }


//function in javascript
//function declaration
// function sum(v1,v2,v3){
// console.log('started');
// console.log(v1+v2+v3);
// }
// sum(20,56,77);


//function expression
// const sum= function (v1,v2,v3){
// console.log('started');
// console.log(v1+v2+v3);
// }
// console.log(sum);
// sum(20,56,77);


 //arrow function
// const sum= (v1,v2,v3)=>{
// console.log('started');
// console.log(v1+v2+v3);
// }
// console.log(sum);
// sum(20,56,77);
     //or
//      const sum= (v1,v2,v3)=>
// console.log(v1+v2+v3);
// sum(20,56,77);

      //or
//        const sum= (v1,v2,v3)=>{
//         return  v1+v2+v3;}
// console.log(sum(20,56,77));



//higher order functions(hofs)
// function sayHello(){
//   console.log('Hello');
//   function HelloAgain(){
//   console.log('Hello Again');
// }
// return HelloAgain();
// }

// sayHello();
// HelloAgain();



//modules 
// export
//import

// const sum =(v1, v2)=>v1+v2;
// console.log(sum(12,24));



 







// // function zoomin() {
// //     const img=document.getElementById("image");
// //     img.style.width="500px"
// //  }
 
// //  function zoomout() {
// //     const img=document.getElementById("image");
// //     img.style.width="500px"
// //  }

//  function zoomin() {
//     const img=document.getElementById("image-1");
//      img.style.width="300px"
//  }
 
//  function zoomout() {
//     const img=document.getElementById("image-1");
//     img.style.width="400px"
//  }



// function Image1() {
//    const img =document.getElementById("img2");
//    img.src="/jstailwind/assts/img/function img2.jpeg"
// }


// function Image2() {
//    const img =document.getElementById("img2");
//    img.src="/jstailwind/assts/img/function img3.jpeg"
// }


// function ImageSlider()
//  {                                          

//    const ImagePaths=["/jstailwind/assts/img/function img1.jpeg",
//                      "/jstailwind/assts/img/function img2.jpeg",
//                      "/jstailwind/assts/img/function img3.jpeg",
//                      "/jstailwind/assts/img/function img4.jpeg"]
//   let currentIndex=0;
 
//    setInterval( ()=>{
 
//    document.getElementById("img3").src=`${ImagePaths[currentIndex]}`
//    currentIndex++;
 
//    if(currentIndex> ImagePaths.length-1)
//    {
//       currentIndex=0
//    }
 
//    },1000 )
 
// }
// ImageSlider();


// ///////////////dom assignment///////////


// //////////Question:1 /////////
// function ChangeText() {
//    const p=document.getElementById("msg");
//    p.innerText=`"Hello JavaScript"`
// }

// ////////////Question:2///////////

// function ChangeColor() {
//    const p=document.getElementById("para")
//    p.style.color="red"
   
// }


// ////////////Question:3///////////

// function Changedisplay() {
//    const p=document.getElementById("info")
//    p.style.display="none"
   
// }


// ////////////Question:4///////////

// function Changeshow() {
//    const p=document.getElementById("show")
//    p.style.display="block"
   
// }


// ////////////Question:5///////////

// function firstUpdate() {
//    const p=document.getElementsByClassName("text")
//    p[0].innerText=`"Updated"`
   
// }


// ////////////Question:6///////////

// function updateboxcolor() {
//   const p = document.getElementsByClassName("box");
//   p[0].style.backgroundColor = "green";
// }

// // ////////////Question:7///////////

// function paragraph() {
//    const text=document.getElementsByTagName("p")
//    text[0].innerText="Dom changed"

// }


// ////////////Question:8///////////

// function firsth() {
//   const p = document.getElementsByClassName("heading");
//   p[0].style.fontSize = "40px";
// }

// ////////////Question:9///////////

//   function increment() {
//     const countv = document.getElementById('count');
//     let currentValue = parseInt(countv.textContent);
//     currentValue += 1;
    
//     countv.textContent = currentValue;
//   }


// ////////////Question:10///////////
// function displayValue() {

//     const inputValue = document.getElementById("name").value;
//     document.getElementById("output").innerText = inputValue;
// }


// ////////////Question:11///////////

// function changetext() {
//   const p = document.getElementById("terget");
//   p.innerText = "Mouse Over"
// }



// ////////////Question:12///////////

// function resetText() {
//   const p = document.getElementById("target");
//   p.innerText = "Mouse out"
// }


// ////////////assignment2///////////////

// /////////////Question:1///////////

// let ON=false;
// function hello() {
//   const p = document.getElementById("status");
// ON=!ON
//   if(ON){
//    p.innerText="ON";
// }
// else{
//    p.innerText="OFF";
// }

// }


// /////////////Question:2///////////

// function clicked () {
//    const button=document.getElementById("btn")
// button.innerText="disabled property of the button"

// }


// /////////////Question:3///////////

// function clicked () {
//    const button=document.getElementById("btn")
// button.innerText="disabled property of the button"

// }

// /////////////Question:4///////////
// function boxcolor() {
//   const p = document.getElementsByClassName("boxes");
//   p[0].style.backgroundColor = "orange";
//   for(let i=1;i<p.length;i++)
//    if(p[i]){
//    p[i].style.backgroundColor = "white";
//   }
   
// }


// /////////////Question:5///////////

// function inputbutton() {
//    const input=document.getElementById("input1").value;
//    const input2=document.getElementById("input2").value;
//    const input3 =document.getElementById("input3")
   
//    if(input=="" && input2==""){
// input3.innerText="required";
// input3.style.color="red"


//    }
//    else{
//      input3.innerText="Login attempt sent";
// input3.style.color="green";
      
//    }
// }

// /////////////////Question:6//////////

// function colorchange() {
//   const change=document.getElementById("rowchange")
//    change.style.backgroundColor="grey"
//  }
 

//  function colorout() {
//     const change=document.getElementById("rowchange")
//     change.style.backgroundColor="blue"
//  }



// /////////////////Question:7///////////
// function hidepara() {
//    const  textc=document.getElementsByClassName("textc")
//  for(let i=0;i<textc.length-1;i++)
//    if(textc[i]){
//    textc[i].style.display = "none";
//   }

// }

// /////////////////Question:8///////////

// function incrementCount() {
//   const btn = document.getElementById("counterBtn");
//   let currentCount = parseInt(btn.getAttribute("data-count"));
//   currentCount++;
//   btn.setAttribute("data-count", currentCount);
//   btn.innerHTML = "Clicked " + currentCount + " times";
// }


// /////////////////Question:9///////////
// function validate() {
//   const input = document.getElementById("userInput");
//   const msg = document.getElementById("message");
//   if (input.value.length < 5) {
//     msg.innerText = "Minimum 5 characters required";
//   } else {
//     msg.innerText = "Success!";
//     msg.style.color = "green";
//   }
// }

// /////////////////Question:10///////////

// function changeImage() {
//   document.getElementById("myImage").src = "/jstailwind/assts/img/function img4.jpeg";
// }



// /////////////////Question:11///////////
// function toggleButton() {
//   const checkbox = document.getElementById("termsCheckbox");
//   const btn = document.getElementById("submitBtn");
//   if (checkbox) {
//     btn.disabled = false; 
//   } else {
//     btn.disabled = true;
//   }
// }


// /////////////////Question:12///////////


// function updateGreeting() {
//   const select = document.getElementById("timeSelect");
//   const display = document.getElementById("greeting");

//   let selectedValue = select.value;
//   if (selectedValue === "Morning") {
//     display.innerText = "Good Morning";
//   } else if (selectedValue === "Evening") {
//     display.innerText = "Good Evening";
//   } else {
//     display.innerText = "Please select a time";
//   }
// }


// /////////////////////object assignment/////////

// /////////////////Question:1///////////
// const person = {
//   name: "Hanu",
//   age: 25,
//   city: "Hanumangarh"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// console.log(person);

// /////////////////Question:2///////////

// const student = {
//   name: "Hanu",
//   age: 25,
//   city: "Hanumangarh"
// };
// student.email="abc12@gmail.com"
// console.log(student);

// /////////////////Question:3///////////

// const child = {
//   name: "Hanu",
//   age: 25,
//   city: "Hanumangarh"
// };
// delete child.age;
// console.log(child);


// /////////////////Question:4///////////

// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book.year);
// console.log(book);


// /////////////////Question:5///////////

// const children = {
//   name: "Hanu",
//   age: 25,
//   city: "Hanumangarh"
// };
//  children.city="Fatehabad";
// console.log(children);


// /////////////////Question:6///////////
// const intro = [{
//   name: "vanshu",
//   age: 25,
//   city: "Kansar",
//   email: "vanshu@example.com"
// }];
// for (let key in intro) {
//   console.log(`${key}: ${intro[key]}`);
// }

// /////////////////Question:7///////////
// const newStudent = { 
//   name: "monu",
// greet() {
//       console.log(`Hello ${newStudent.name}`);
//     }
//   };
//   newStudent.greet();

// /////////////////Question:8///////////
// const item1 = {name: "Hanu",age: 25,};
// const item2 = {mobile:6666,city: "Hanumangarh"};
// const mergeitem= Object.assign( item1, item2)
// console.log(mergeitem);

// /////////////////Question:9///////////

const users=[];
function handleDelete(index) {
  users.splice(index,1)
  showList()
}
function handleEdit(index)
 {
    console.log('Edit Clicked'+index)
 }
function showList() {
  let htmlBuilder='';
  users.forEach((item,index )=> {
    htmlBuilder+=`
    <tr>
           <td> ${item.name}</td>
           <td> ${item.email} </td>
           <td> <button onclick='handleDelete(${index} )'>Delete</button>  </td>
           <td> <button  onclick='handleEdit(${index})'>Edit</button></td>
         </tr>`
  })
  document.getElementById("data").innerHTML=htmlBuilder;
}

function handleSubmit() {
  const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    document.getElementById("name").value="";
    document.getElementById("email").value="";
const user={
name:name,
email:email
}
users.push(user);
showList();
console.log(users);

}



 

 

 

 

 

 











