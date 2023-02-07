
const ylesanded = [
    'Pesta hambad',
    'Toita kassa',
    'Jaluata koera',
    'Praadida omletti',
    'Minna tööle'
]

function valjastaYlesanne(index) {
return '<li>' + ylesanded[index] + '</li>'
}

function LisaYlesanne() {
    //Lugeda sisestusvälja väärtus
    let uusYlesanne = document.getElementById('uusYlesanne').value
    

    //Lisa loetud ülesanne massiivi
    ylesanded.push(uusYlesanne)
    //loo uuesti kogu väljund
    valjastaYlesanded()
    //Tühjenda sisestuskast
    document.getElementById('uusYlesanne').value = ''
}

function valjastaYlesanded() {


let valjundElement = document.getElementById('valjund')
let valjundHTML = ''

valjundHTML += '<ol>'

for (let i = 0; i < ylesanded.length; i++) {
    valjundHTML += valjastaYlesanne(i)



}

valjundHTML += '</ol>'

valjundElement.innerHTML = valjundHTML


}

valjastaYlesanded()