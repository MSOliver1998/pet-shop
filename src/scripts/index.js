function click(){
    let button=document.querySelector('.render-button')
    button.addEventListener('click',renderPets)
}

function renderPets(){
    let ul=document.querySelector('.container-cards')
    ul.innerText=''
    cont=0

    pets.forEach(el=>{
        if (el.tomouBanho==true && el.raca=="Poodle"){
            cont++
        }
        let card= document.createElement('li')
        let nome=document.createElement('h2')
        let raca=document.createElement('p')

        card.classList.add('card')
        nome.innerText=el.nome
        raca.innerText=el.raca

        card.append(nome,raca)
        ul.append(card)

    })
    let contador=document.querySelector('.span-counter')
    contador.innerText=cont
    console.log(cont)
}

click()