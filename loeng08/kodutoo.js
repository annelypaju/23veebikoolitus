const kassid = [
    '<a href="https://fotojutud.ee/wp-content/uploads/2021/05/cat-2083492_1920-1068x651.jpg">Kass1</a>',
    '<a href="https://fotojutud.ee/wp-content/uploads/2021/05/kitten-3669244_1920-1536x1025.jpg">Kass2</a>',
    '<a href="https://fotojutud.ee/wp-content/uploads/2021/05/cat-2143332_1920-1536x1042.jpg">Kass3</a>'

]

function teeKassidHTML(index) {
    let pilt = kassid[index]
    return '<div class="rida">' + pilt + '</div>'
}


let kassidLoeteluHTML = ''
for (let i = 0; i < pildid.length; i++) {
    kassidLoeteluHTML += teeKassidHTML(i)
}

document.getElementById("Kassid").innerHTML = kassidLoeteluHTML