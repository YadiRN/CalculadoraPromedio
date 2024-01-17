var alumno1;
alumno1="Arhon";

console.log(alumno1)

let alumno1=paseInt(prompt("Fvr ingre nombre alumno1"));
let nota1=paseInt(prompt("Fvr ingrese nota1"));
let nota2=paseInt(prompt("Fvr ingrese nota2"));
let nota3=paseInt(prompt("Fvr ingrese nota3"));

let n1=9;
let n2=5;
let n3=10;

if (n1>=0 && n1<=10) {alert=("Notas ingresadas OK");}
  else{console.log("error en notas")}

if (n2>=0 && n2<=10) {console.log("Notas  ingresadas OK")
    
  } else {console.log("error en nota ingresada")
    
  }

if (n3>=0 && n3<=10) {console.log("Notas  ingresadas OK")
    
} else {console.log("error en nota ingresada")
  
}


//*vamos a calcular promedio de las tres notas del alumno1 ingresadas*/
let suma1=n1+n2+n3;
console.log(suma1);

let promedio1=(suma1/3);
console.log(promedio1);

//**Analisis de aprobado o reprobado*/

if (promedio1>=7) {console.log(" alumno1 !Felicitaciones! has aprobado con un promedio de (promedio1)")
    
} else {console.log("alumno1, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es (promedio1")
    
}




