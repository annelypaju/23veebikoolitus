let  nimi
nimi = prompt('Sisesta nimi')
let tervitus = 'Tere ' + nimi
alert(tervitus)
document.getElementById('teade').innerHTML = tervitus
nimi = prompt('Mis on sinu lemmikvärv?')
let vastus = 'Tänan, sinine on väga ilus värv'
document.getElementById('vastus').innerHTML = vastus
document.getElementById("vastus").style.color = "blue";

