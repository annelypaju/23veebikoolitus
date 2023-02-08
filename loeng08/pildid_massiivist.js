const kassid = [
    '<a href="https://fotojutud.ee/wp-content/uploads/2021/05/cat-2083492_1920-1068x651.jpg">Kass1</a>',
    '<a href="https://fotojutud.ee/wp-content/uploads/2021/05/kitten-3669244_1920-1536x1025.jpg">Kass2</a>',
    '<a href="https://fotojutud.ee/wp-content/uploads/2021/05/cat-2143332_1920-1536x1042.jpg">Kass3</a>'

]

function teeKassidHTML(index) {
    let kassid = kassid[index]
    //return '<img src="' + kassid + '">'
    //return `<img src="${kassid}">`
    return `
    <div class="pildiYmbris">
    <img src="${pildiAadress}">
               </div> 
               `        
}


let kassidLoeteluHTML = ''
for (let i = 0; i < pildid.length; i++) {
    kassidLoeteluHTML += teeKassidHTML(i)
}

document.getElementById("kassid").innerHTML = kassidLoeteluHTML