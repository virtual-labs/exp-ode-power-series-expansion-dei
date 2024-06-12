	

let input1=document.querySelector(".text");
let input2=document.querySelector(".text1");
let div =document.querySelector(".box2")
let btn1 = document.querySelector(".btn")
let div1 =document.querySelector(".box3")
let diff= document.querySelector(".num")
let box5 = document.querySelector('.box5') 
let c;
let c1;
let c2;
let c3;
let c4;
 let c5;
 let c6;
 let c7;
 let c8;
 let c9; 
box5.style.display="none"
btn1.addEventListener("click",()=>{
     div1.innerHTML=""
    demo(diff.value,input1.value,input2.value);
   
    box5.style.display="block";
  
})


 
  
  function demo(value2,value3,value4)
  {
   
    let markup =`<h3>
    expand the function   ${value3}  power (x- ${value4})  using taylor series  formula<br>
    <br>
   given this formula  f(x)=f(a)+f'(a).(x-a)+f''(a).(x-a)<sup>2</sup>/2!+f'''(a).(x-a)<sup>3</sup>/3!... 
   <br>
    given a= ${value4}
    <br> 

  </h3>
 
  `
 div.innerHTML=markup
 
function ntimesderivatives()
{
  let p1;
 if(value3.includes("x"))
 {
  p1= value3.replaceAll("x",value4) 
 }
   for(i=1;i<=value2;i++)
    {
           
      if(i==1)
     {
      c =math.derivative(value3,"x").toString()
      console.log(c);
      p =document.createElement("h2");
  let markup1;

  if(c.includes("x"))
  {
  markup1 =  `f'(a) ==> 
   <br>
   f'(a) = ${c}
   <br>
   put the value of f(a),f'(a) in taylor series formula
   <br>
  ${value3}=${p1}+${c.replaceAll("x",value4)}.(x-${value4})
  <br>
  ${value3}=${math.evaluate(p1)}+${math.evaluate(c.replaceAll("x",value4))}.(x-${value4})
    
  `
  
  
  p.innerHTML=markup1
  }    
       
  


 div1.appendChild(p);
}
     else if(i==2)

     {
       c1=  math.derivative(c, "x").toString();
       console.log(c1);
     let p =document.createElement("h2");
     let markup2;
     if(c1.includes("x"))
     {
      markup2= `f''(a)==>?
       <br>
        f''(a) = ${c1}
        <br>
        put the value of f(a),f'(a),f''(a) in taylor series formula
        <br>
        ${value3} =  ${p1}+(${c.replaceAll("x",value4)}).(x-${value4})+
          
        (${c1.replaceAll("x",value4)}).(x-${value4})<sup>2</sup>/${math.factorial(2)}
          <br>
          ${value3} =  ${math.evaluate(p1)}+(${math.evaluate(c.replaceAll("x",value4))}).(x-${value4})+
          
        (${math.evaluate(c1.replaceAll("x",value4))}).(x-${value4})<sup>2</sup>/${math.factorial(2)}
       `
      
       p.innerHTML=markup2
     }

  

   
    div1.appendChild(p);
      
     }
    
     else if(i==3)
     {
       c2=  math.derivative(c1, "x").toString();
       console.log(c2);
        let p =document.createElement("h2");
        let markup3;
      if(c2.includes("x"))
      {
     markup3 = `f'''(a) ==?
     <br>
     f'''(a) == ${c2.replace("x",value4)}
     <br>
     put the value of f(a),f'(a),f''(a),f'''(a) in taylor series formula
     <br>
     ${value3} =  ${p1}+(${c.replaceAll("x",value4)}).(x-
       
      ${value4})+(${c1.replaceAll("x",value4)}).(x-${value4})<sup>2</sup>/${math.factorial(2)}+
      (${c2.replaceAll("x",value4)}).(x-${value4})<sup>3</sup>/${math.factorial(3)}
 <br>
      ${value3} =  ${math.evaluate(p1)}+(${math.evaluate(c.replaceAll("x",value4))}).(x-
       
       ${value4})+(${math.evaluate(c1.replaceAll("x",value4))}).(x-${value4})<sup>2</sup>/${math.factorial(2)}+
       (${math.evaluate(c2.replaceAll("x",value4))}).(x-${value4})<sup>3</sup>/${math.factorial(3)}
     
     `
     p.innerHTML=markup3
      }
     div1.appendChild(p); 
      
     }

     else if(i==4)
     {
       c3=  math.derivative(c2, "x").toString();
       console.log(c3);
       let p =document.createElement("h2");
     let markup4;
     if(c3.includes("x"))
     {
      markup4=`f''''(a) ==>?
      <br>
      f''''(a) == ${c3.replace("x", value4)}
      <br>
     put the value of f(a),f'(a),f''(a),f'''(a),f''''(a) in taylor series formula
     <br>
     ${value3} =  ${p1}+(${c.replaceAll("x",value4)}).(x-
       
      ${value4})+(${c1.replaceAll("x",value4)}).(x-${value4})<sup>2</sup>/${math.factorial(2)}+
      (${c2.replaceAll("x",value4)}).(x-${value4})<sup>3</sup>/${math.factorial(3)}+
      (${c3.replaceAll("x",value4)}).(x-${value4})<sup>4</sup>/${math.factorial(4)}
    
     <br>
      ${value3} =  ${math.evaluate(p1)}+(${math.evaluate(c3.replaceAll("x",value4))}).(x-
       
       ${value4})+(${math.evaluate(c3.replaceAll("x",value4))}).(x-${value4})<sup>2</sup>/${math.factorial(2)}+
       (${math.evaluate(c3.replaceAll("x",value4))}).(x-${value4})<sup>3</sup>/${math.factorial(3)}+
       (${math.evaluate(c3.replaceAll("x",value4))}).(x-${value4})<sup>4</sup>/${math.factorial(4)}
     
      `
      p.innerHTML=markup4;
     }
     div1.appendChild(p);
     }
     else if(i==5)
     {
       c4=  math.derivative(c3, "x").toString();
       console.log(c4);
       let p =document.createElement("h2");
     let markup5;
     if(c4.includes("x"))
     {
      markup5 =` f'''''(a) ==>?
      <br>
      f'''''(a) == ${c4.replace("x",value4)}
      put the value of f(a),f'(a),f''(a),f'''(a),f'''''(a),f'''''(a) in taylor series formula
     <br>
     ${value3} =  ${p1}+f'(${math.evaluate(c.replaceAll("x",value4))}).(x-
       
      ${value4})+(${c1.replaceAll("x",value4)}).(x-${value4})<sup>2</sup>/${math.factorial(2)}+
      (${c2.replaceAll("x",value4)}).(x-${value4})<sup>3</sup>/${math.factorial(3)}+
      (${c3.replaceAll("x",value4)}).(x-${value4})<sup>4</sup>/${math.factorial(4)}+
      (${c4.replaceAll("x",value4)}).(x-${value4})<sup>5</sup>/${math.factorial(5)}
    
     

     <br>
      ${value3} =  ${math.evaluate(p1)}+f'(${math.evaluate(c.replaceAll("x",value4))}).(x-
       
       ${value4})+(${math.evaluate(c1.replaceAll("x",value4))}).(x-${value4})<sup>2</sup>/${math.factorial(2)}+
       (${math.evaluate(c2.replaceAll("x",value4))}).(x-${value4})<sup>3</sup>/${math.factorial(3)}+
       (${math.evaluate(c3.replaceAll("x",value4))}).(x-${value4})<sup>4</sup>/${math.factorial(4)}+
       (${math.evaluate(c4.replaceAll("x",value4))}).(x-${value4})<sup>5</sup>/${math.factorial(5)}
     
      
      `
      p.innerHTML=markup5
     }
    div1.appendChild(p)
     }

       
    }
}
 ntimesderivatives()
 
  }
 