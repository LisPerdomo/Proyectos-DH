let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function(promedio){
    return promedio.aprobado === true
})
console.log(aprobados)

let desaprobados = estudiantes.filter(function(promedio){
    return promedio.aprobado===false
})
console.log(desaprobados);
