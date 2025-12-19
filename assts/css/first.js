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



 







function zoomin() {
    const img=document.getElementById("image");
    img.style.width="500px"
 }
 
 function zoomout() {
    const img=document.getElementById("image");
    img.style.width="300px"
 }

function Image1() {
   const img =document.getElementById("img2");
   img.src="/jstailwind/assts/img/function img2.jpeg"
}


function Image2() {
   const img =document.getElementById("img2");
   img.src="/jstailwind/assts/img/function img3.jpeg"
}


function ImageSlider()
 {                                          

   const ImagePaths=["/jstailwind/assts/img/function img1.jpeg",
                     "/jstailwind/assts/img/function img2.jpeg",
                     "/jstailwind/assts/img/function img3.jpeg",
                     "/jstailwind/assts/img/function img4.jpeg"]
  let currentIndex=0;
 
   setInterval( ()=>{
 
   document.getElementById("img3").src=`${ImagePaths[currentIndex]}`
   currentIndex++;
 
   if(currentIndex> ImagePaths.length-1)
   {
      currentIndex=0
   }
 
   },1000 )
 
}
ImageSlider();






















 