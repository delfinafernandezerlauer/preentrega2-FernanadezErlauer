// constructor de array Alumnos 

let alumnos = []

class Alumnos {
    constructor (legajo,nombre,apellido,promedio,deporte,credito){
    this.legajo = legajo,
    this.nombre = nombre,
    this.apellido = apellido,
    this.promedio = promedio,
    this.deporte = deporte,
    this.credito = credito
    }
}

// funcion agregado de alumnos al array

function alumnoNuevo () {
    let suma = 0;
    const leg = prompt("Ingrese legajo del alumno.");
    if (leg !==null){
        
        nombre1 = prompt("Ingrese el nombre del nuevo alumno");
        apellido1 = prompt("Ingrese el apellido del nuevo alumno");
        alert("Ingrese las 4 notas de este semestre");
        for(let i=0; i<4; i++){
            suma = (suma + (Number(prompt("ingrese la nota numero " ))))
        }
        promedio1 = suma/4;
        deporte1  = prompt("ingrese deporte que practica el alumno");
        let rta = prompt("el alumno obtuvo credito extra? si/no");
        while ((rta!=="si" && (rta!=="no"))){
            alert("ingrese si o no");
            rta = prompt("el alumno obtuvo credito extra? si/no");
        }
        if (rta=="si"){
            credito1 = true
        }
        else{
            credito1= false
            
        }
            
    }

        nuevoAlumno = {
            legajo: leg,
            nombre: nombre1,
            apellido : apellido1,
            promedio : promedio1,
            deporte : deporte1,
            credito : credito1
        }
        alumnos.push((nuevoAlumno));
}


// funcion para buscar deporte, devuelve que alumno(s) tiene coincidencias
function buscarDeporte(){
        
    let busqueda = prompt("Ingrese valor a buscar")
    const coincidencia = alumnos.filter((alumnos) => alumnos.deporte.includes(busqueda))
    
    console.log(coincidencia) 

}


//  ejecucion


do{
    alumnoNuevo();
    let opc = prompt("desea registrar a otro alumno? si/no");
    while ((opc!=="si" && (opc!=="no"))){
        alert("ingrese si o no");
        opc = prompt("desea registrar a otro alumno? si/no");
    }
    if (opc=="si"){
        seguir = true
    }
    else{
        seguir= false
        
    }
}
while(seguir)

// HASTA ACA FUNCIONA PERFECTOOO


// busqueda por deporte

do{
    let opc2 = prompt("desea hacer una busqueda por deporte? si/no");
    while ((opc2!=="si" && (opc2!=="no"))){
        alert("ingrese si o no");
        opc2 = prompt("desea hacer una busqueda por deporte? si/no");
    }
    if (opc2=="si"){
        buscarDeporte()
    }
}
while(opc2=="si")


// CREDITO EXTRA 
// si el alumno hizo credito extra, se incrementa su promedio

alumnos.forEach((alumnos)=>{

if(alumnos.credito){
    alumnos.promedio=(alumnospromedio+(alumnos.promedio*0.06))

}
}
)

