const pildiAadressid = [
    './pildid/pilt1.jpg',
    './pildid/pilt2.jpg',
    './pildid/pilt3.jpg',
]

function teePildiHTML(pildiAadress) {
    //return '<img src="' + pildiAadress + '">'
    //return `<img src="${pildiAadress}">`
    return `
    <div class="pildiYmbris">
        <img src="${pildiAadress}">
    </div>
    `
}

let pildiGaleriiHTML = ''

for (let yksAadress of pildiAadressid) {
    pildiGaleriiHTML += teePildiHTML(yksAadress)
}

document.getElementById('valjund').innerHTML = pildiGaleriiHTML