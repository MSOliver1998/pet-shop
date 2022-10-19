function click(){
    let button=document.querySelector('.render-button')
    button.addEventListener('click',renderPets)
}

function renderPets(){
    let ul=document.querySelector('.container-cards')
    ul.innerText=''

    pets.forEach(el=>{
        
        let card= document.createElement('li')
        let nome=document.createElement('h2')
        let raca=document.createElement('p')

        card.classList.add('card')
        nome.innerText=el.nome
        raca.innerText=el.raca

        if(el.tomouBanho==false){
            card.classList.add('sem-banho')
        }

        card.addEventListener('click',(event)=>{
            event.currentTarget.classList.toggle('sem-banho')

            if(el.tomouBanho==false){
                el.tomouBanho=true
            }
            else{
                el.tomouBanho=false
            }
            quantidade()
        })

        card.append(nome,raca)
        ul.append(card)
    })
    quantidade()
}

function quantidade(){

    let banho=pets.filter(el=>el.tomouBanho==false)
    let contador=document.querySelector('.span-counter')
    contador.innerText=banho.length
}

click()