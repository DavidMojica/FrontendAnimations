const middle_section          = document.getElementById('middle_section');
const btn_card_magic_1        = document.getElementById('card_magic_1');
const btn_loading_animation_1 = document.getElementById('btn_loading_animation_1');
const btn_a_press_animation   = document.getElementById('btn_a_press_animation');

/*CARDS*/
btn_card_magic_1.addEventListener('click', function(){
    if(document.getElementsByClassName('cards').length == 0){
        const card = document.createElement('div');
        card.setAttribute('class','card_magic_1 cards');
        middle_section.appendChild(card);

        //interacción con loading
        const things = document.querySelectorAll('.things');
        if(things.length >= 1)
            for(let thing of things)
                card.appendChild(thing);
    }
});

function deleteCard(){
    const card = document.querySelector('.cards');
    if(card) card.remove();
}

function verificarCarta(){
    const card = document.querySelector('.cards');
    if(card) return card;
    else return false;
}

/*LOADS*/
btn_loading_animation_1.addEventListener('click', function(){
    if(document.getElementsByClassName('loadings').length == 0){
        const h1 = document.createElement('h1');
        h1.setAttribute('data-text', "Loading...");
        h1.setAttribute('class', 'loading_animation loadings things')
        h1.textContent = "Loading...";
        
        //Interacción con card
        if(verificarCarta()){
            card = verificarCarta();
            card.appendChild(h1);
        } else middle_section.appendChild(h1);
    }
});

function deleteLoading(){
    const loading = document.querySelector('.loadings');
    if(loading) loading.remove();
}



/*FORMS*/
/*BUTTONS*/

btn_a_press_animation.addEventListener('click', function(){
    if(document.getElementsByClassName('buttons').length == 0){
        const button = document.createElement('button');
        button.setAttribute('class', 'btn_press_animation buttons things');
        button.textContent = "Golpeame";

        //Interacción con card
        if(verificarCarta()){
            card = verificarCarta();
            card.appendChild(button);
        } else middle_section.appendChild(button);
    }
});

function deleteButtons(){
    const button = document.querySelector('.buttons');
    if(button) button.remove();
}


function CssCambiarRuta(archivo, ruta){
    const a = document.getElementById(archivo);
    a.setAttribute("href", ruta)
}
