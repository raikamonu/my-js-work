 function submit()
 {
  
  const  Name= document.getElementById("Name").value;
  const Age=document.getElementById("Age").value;
    const City=document.getElementById("City").value;
  const fullName = `${Name}   ${Age}  ${City}`
   
  const div = document.getElementById("fullName").innerText=fullName;

 
//  const table = document.getElementById("tableBody");

//   table.innerHTML += `
//     <tr class="hover:bg-blue-500">
        
//         <td>${Name}</td>
//         <td>${Age}</td>
//         <td>${City}</td>
//         <td>
//             <i class="fa-solid fa-pencil"></i>
//             <i class="fa-regular fa-trash-can"></i>
//         </td>
//     </tr>
//   `;

  
 
 }


  function sum()
 {
   
    const v1= parseInt(  document.getElementById('value1').value);
    const v2= parseInt( document.getElementById('value2').value);
    const sum =v1+v2;
   
    document.getElementById("sum").innerText=sum;
 }

 function sub()
 {
   
    const v3= parseInt(  document.getElementById('value3').value);
    const v4= parseInt( document.getElementById('value4').value);
    const sub =v3-v4;
   
  document.getElementById("sub").innerText=sub;
 }


  function multiple()
 {
   
    const v5= parseInt(  document.getElementById('value5').value);
    const v6= parseInt( document.getElementById('value6').value);
    const multiple =v5*v6;
   
  document.getElementById("multiple").innerText=multiple;
 }


  function divide()
 {
   
    const v7= parseInt(  document.getElementById('value7').value);
    const v8= parseInt( document.getElementById('value8').value);
    const divide =v7/v8;
   
  document.getElementById("divide").innerText=divide;
 }