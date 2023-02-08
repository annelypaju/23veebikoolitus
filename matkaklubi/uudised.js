const koikUudised = [
    {
        pealkiri: "Õhtupoolik looduses",
        pilt: "./pilt1.jpg",
        kuupaev: "06.02.2023",
        sisu: "Mis saaks parem olla kui peale pikka seminaripäeva veeta õhtupoolik looduses?",
        autor: "Autor: internet",
        
        
    },
    {
        pealkiri: "ATV matkad",
        pilt: "./pilt2.jpg",
        kuupaev: "07.02.2023",
        sisu: "Korraldame aastaringselt ATV matkasid nii algajatele kui ka kogenud sõitjale looduskaunitel metsaradadel koos kogenud matkajuhiga.",
        autor: "Autor: internet",
        
    },
    {
        pealkiri: "Loodusmatkad",
        pilt: "./pilt3.jpg",
        kuupaev: "08.02.2023",
        sisu: "Loodusmatk väikestele ja suurtele",
        autor: "Autor: internet",
        
    },
]


function teeUudisHtml(uudisObj) {
    let uudisHtml = '';
    uudisHtml += '<div class="postitus pt-4">';
    uudisHtml +=    '<div class="justify-content-left padding: 15px">';
    uudisHtml +=        '<h3>'+uudisObj.pealkiri+'</h3>';
    uudisHtml +=        '<div class="postitus-kuupaev">'+ uudisObj.kuupaev+'</div>';
    uudisHtml += '<div class="postitus-pilt">'+ uudisObj.pilt+'</div>';
    uudisHtml +=    '</div>';
    uudisHtml +=    '<div class="postitus-sisu">';
    uudisHtml +=        uudisObj.sisu;
    uudisHtml +=        '<h6>'+uudisObj.autor+'</h6>';
    uudisHtml +=    '</div>';
    uudisHtml += '</div>';

    return uudisHtml;
}

function teePiltHTML(index) {
    let pilt = pildid[index]
    //return '<img src="' + kassid + '">'
    return `<img src="${pildid}">`
}


function naitaUudiseid() {
    const uudisedElement = document.getElementById('uudistekonteiner');
    let koikUudisedHtml = '';
    for (uudis of koikUudised) {
        koikUudisedHtml += teeUudisHtml(uudis);
    }
    uudisedElement.innerHTML = koikUudisedHtml;
}

naitaUudiseid()