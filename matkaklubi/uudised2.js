let uudis1 = {
    id: "1",
    pealkiri: 'Õhtupoolik looduses',
    kuupaev: '06.02.2023',
    tekst: 'Mis saaks parem olla kui peale pikka seminaripäeva veeta õhtupoolik looduses?',
    autor: 'Autor: internet',
  pilt: "./assets/pilt1.jpg",
    
}
let uudis2 = {
    id: "2",
    pealkiri: 'ATV matkad',
    kuupaev: '07.02.2023',
    tekst: "Korraldame aastaringselt ATV matkasid nii algajatele kui ka kogenud sõitjale looduskaunitel metsaradadel koos kogenud matkajuhiga.",
        autor: "Autor: internet",
   pilt: "./assets/pilt2.jpg",
    
}
let uudis3 = {
    id: "3",
    pealkiri: 'Loodusmatkad',
    kuupaev: '08.02.2023',
    tekst: "Loodusmatk väikestele ja suurtele",
    autor: "Autor: internet",
   pilt: "./assets/pilt3.jpg",
    
}



let uudised = [uudis1, uudis2, uudis3 ]

function looUudisHTML(uudis) {
    return `
    <div class="col-4 card">
        <img class="card-img-top" src="${uudis.pilt}"
        <div class="card-body">
        <div class="card-title"> ${uudis.pealkiri} <span class="bold">
          ${uudis.kuupaev}</span>
        </div>
        <div class="card-text"> 
                     ${uudis.autor}
        </div>
        <div class="card-text"> 
        <div class="pikk"> 
             ${uudis.tekst}
        </div>
    <div>
    <button class="uudisnupp" >Loe edasi...</button>
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
    valjundHTML += looUudisHTML(uudised[i])
}
valjundHTML += '</div>'
valjundElement.innerHTML = valjundHTML
}

naitaUudiseid()