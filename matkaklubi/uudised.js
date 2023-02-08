const Uudised = [
    {
        nimi: 'Õhtupoolik looduses',
        pildiAadress: './assets/pilt1.jpg',
        kuupaev: '06.02.2023',
        sisu: 'Mis saaks parem olla kui peale pikka seminaripäeva veeta õhtupoolik looduses?',
        autor: 'Autor: internet',


    },
    {
        nimi: "ATV matkad",
        pildiAadress: './assets/pilt2.jpg',
        kuupaev: "07.02.2023",
        sisu: "Korraldame aastaringselt ATV matkasid nii algajatele kui ka kogenud sõitjale looduskaunitel metsaradadel koos kogenud matkajuhiga.",
        autor: "Autor: internet",

    },
    {
        nimi: "Loodusmatkad",
        pildiAadress: './assets/pilt3.jpg',
        sisu: "Loodusmatk väikestele ja suurtele",
        autor: "Autor: internet",
        kuupaev: "08.02.2023",

    },
]


function looUudisedHTML(uudis) {
    return `
    <div class="col-4 card">
        <img class="card-img-top" src="${uudis.pilt}"
        <div class="card-body">
        <div class="card-title"> ${uudis.pealkiri} <span class="komm">
          ${uudis.kommentaarid}</span>
        </div>
        <div class="card-text"> 
        <div class="pikk"> 
             ${uudis.tekst}
        </div>
    <div>
    <button class="uudisnupp" >Vaata edasi</button>
    </div>
    </div>
    </div>
    `
}

function naitaUudiseid() {

    let valjundElement = document.getElementById("valjund")
    let valjundHTML = ''
    valjundHTML += '<div class="row">'
    for (let i = 0; i < uudised.length; i++) {
        valjundHTML += looUudisHTML(Uudised[i])
    }
    valjundHTML += '</div>'
    valjundElement.innerHTML = valjundHTML
    }
    
    naitaUudiseid()

let UudisedHtml = ''

for (let uudis of uudised) {
    UudisedHtml += koostaUudisedHtml(uudis)
}

document.querySelector('.uudis').innerHTML = UudisedHtml