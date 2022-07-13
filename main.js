var a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3,d3,D,D1,D2,D3;





function funny(){
a1=document.getElementById("a1").value;
b1=document.getElementById("b1").value;
c1 = document.getElementById("c1").value;
d1 = document.getElementById("d1").value;
a2 = document.getElementById("a2").value;
b2 = document.getElementById("b2").value;
c2=document.getElementById("c2").value;
d2=document.getElementById("d2").value;
a3 = document.getElementById("a3").value;
b3 = document.getElementById("b3").value;
c3 = document.getElementById("c3").value;
d3 = document.getElementById("d3").value;

D=a1*b2*c3-a1*b3*c2-b1*a2*c3+b1*a3*c2+c1*a2*b3-c1*a3*b2; 
D1=d1*b2*c3-d1*b3*c2-b1*d2*c3+b1*d3*c2+c1*d2*b3-c1*d3*b2;
D2=a1*d2*c3-a1*d3*c2-d1*a2*c3+d1*a3*c2+c1*a2*d3-c1*a3*d2;
D3=a1*b2*d3-a1*b3*d2-b1*a2*d3+b1*a3*d2+d1*a2*b3-d1*a3*b2;
X=D1/D;
Y=D2/D;
Z=D3/D;


document.getElementById("vd").innerHTML=D;
document.getElementById("vd1").innerHTML=D1;
document.getElementById("vd2").innerHTML=D2;
document.getElementById("vd3").innerHTML=D3;
document.getElementById("vx").innerHTML=X;
document.getElementById("vy").innerHTML=Y;
document.getElementById("vz").innerHTML=Z;
  
}


  
  
  
