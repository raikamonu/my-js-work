
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




 
const users =[];
 
 function handleDelete(index)
 {
     users.splice(index,1);
     showList();
 
 }
function handleEdit(index)
 {
    console.log('Edit Clicked'+index)
 }
 
 
 
 
function showList()
{
    let htmlBuilder='';
 
 
    users.forEach( (item, index)=>{
        htmlBuilder+=`
         <tr>
         <td> ${item.Index}</td>
           <td> ${item.name}</td>
           <td> ${item.age} </td>
           <td> ${item.city}</td>
           <td> <button onclick='handleDelete(${index} )'><i class="fa-regular fa-trash-can"></i></button>  </td>
           <td> <button  onclick='handleEdit(${index})'><i class="fa-solid fa-pencil"></i></button></td>
         </tr>
        `
    }
 
    ) 
 
      document.getElementById('data').innerHTML=htmlBuilder;
}
 
function handleSubmit()
{
    const name= document.getElementById('name').value;
    const age= document.getElementById('age').value;
    const city= document.getElementById('city').value;
    document.getElementById('name').value="";
     document.getElementById('age').value="";
 document.getElementById('city').value="";
 
     const user ={
        name:name,
        age:age,
        city:city
     }
 
      users.push(user);
      showList();
     console.log(users);
 
}
