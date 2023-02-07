const koikUudised = [
    {
        pealkiri: "Õhtupoolik looduses",
        kuupaev: "07.02.2023",
        sisu: "Mis saaks parem olla kui peale pikka seminaripäeva veeta õhtupoolik looduses?",

        
    },
    {
        pealkiri: "ATV matkad",
        kuupaev: "08.02.2023",
        sisu: "Korraldame aastaringselt ATV matkasid nii algajatele kui ka kogenud sõitjale looduskaunitel metsaradadel koos kogenud matkajuhiga."
           
    },
    {
        pealkiri: "Loodusmatkad",
        kuupaev: "09.02.2023",
        sisu: "Loodusmatk väikestele ja suurtele"
    },
]


function teeUudisHtml(uudisObj) {
    let uudisHtml = '';
    uudisHtml += '<div class="postitus pt-3">';
    uudisHtml +=    '<div class="d-flex justify-content-between">';
    uudisHtml +=        '<h3>'+uudisObj.pealkiri+'</h3>';
    uudisHtml +=        '<div class="postitus-kuupaev">'+ uudisObj.kuupaev+'</div>';
    uudisHtml +=    '</div>';
    uudisHtml +=    '<div class="postitus-sisu">';
    uudisHtml +=        uudisObj.sisu;
    uudisHtml +=    '</div>';
    uudisHtml += '</div>';

    return uudisHtml;
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