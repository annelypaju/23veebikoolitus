let matkad = [
{
    nimi: 'Meie matkad',
    kirjeldus: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quaerat vero fugiat ab consectetur impedit repellat beatae animi id officia, distinctio error dicta nesciunt neque earum sit, dolorem quisquam fugit?',
    pildiAadress: './assets/golden_hours_at_yerevan_by_rikitza_de3loic.jpg'
},
{
    nimi: 'ATV reisid',
    kirjeldus: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quaerat vero fugiat ab consectetur impedit repellat beatae animi id officia, distinctio error dicta nesciunt neque earum sit, dolorem quisquam fugit?',
    pildiAadress: './assets/golden_hours_at_yerevan_by_rikitza_de3loic.jpg'
},
{
    nimi: 'Matkad looduses',
    kirjeldus: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quaerat vero fugiat ab consectetur impedit repellat beatae animi id officia, distinctio error dicta nesciunt neque earum sit, dolorem quisquam fugit?',
    pildiAadress: './assets/golden_hours_at_yerevan_by_rikitza_de3loic.jpg'
},

]

function koostaMatkaHtml(matk) {
    return `
    <div class="card">
                    <img class="card-img-top" src="${matk.pildiAadress}" alt="">
                <div class="card-body">
                    <h4>${matk.nimi}</h4>
                    <p>
                    ${matk.kirjeldus}
                    </p>
                </div>
                </div>

    `
}

let matkadeHtml = ''

for (let matk of matkad) {
    matkadeHtml += koostaMatkaHtml(matk)
}

document.querySelector('.matkad').innerHTML = matkadeHtml