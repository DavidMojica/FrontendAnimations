//Css
const cssBg = document.getElementById("background_animation")
//script
const src_cursor_follower = document.getElementById('src_cursor_follower');

const middle_section = document.getElementById('middle_section');
const btn_card_magic_1 = document.getElementById('card_magic_1');
const secret_bg_1 = document.getElementById('secret_bg_1');
const disable_sbg1 = document.getElementById('disable_sbg1');
const btn_loading_animation_1 = document.getElementById('btn_loading_animation_1');
const btn_a_press_animation = document.getElementById('btn_a_press_animation');
const btn_bg_fire_bubbles = document.getElementById('btn_bg_fire_bubbles');
const cf_magic_trace = document.getElementById('cf_magic_trace');
const blind_footer = document.getElementById('i-blind_footer');
const hiding_footer = document.getElementById('hiding_footer');
/*ICONS*/
blind_footer.addEventListener('click', function () {
    hiding_footer.style.opacity = hiding_footer.style.opacity === '0' ? '1' : '0';
    blind_footer.classList.toggle('fa-eye-slash');
    blind_footer.classList.toggle('fa-eye');
});

/*BACKGROUNDS*/
btn_bg_fire_bubbles.addEventListener('click', () => {
    cssBg.setAttribute('href', "bg_fire_bubbles/style.css")
});

secret_bg_1.addEventListener('click', () => {
    const card = createMagicCard_1() || document.getElementById('magic_card_1');
    (card || document.getElementById('magic_card_1')).style.display = "contents";
});

disable_sbg1.addEventListener('click', () => {
    if (document.getElementById('magic_card_1').style.display == "contents") {
        document.getElementById('magic_card_1').style.display = "grid";
    }
});

/*CARDS*/
btn_card_magic_1.addEventListener('click', createMagicCard_1);

function createMagicCard_1() {
    const cards = document.getElementsByClassName('cards');

    if (cards.length === 0) {
        const card = document.createElement('div');
        card.classList.add('card_magic_1', 'cards');
        card.id = 'magic_card_1';
        middle_section.appendChild(card);

        const things = document.querySelectorAll('.things');
        things.forEach(thing => card.appendChild(thing));

        return card;
    } else {
        const magicCard = document.getElementById('magic_card_1');
        if (magicCard) magicCard.style.display = 'grid';

        return false;
    }
}

function deleteCard() {
    const card = document.querySelector('.cards');
    card?.remove();
}

function verificarCarta() {
    const card = document.querySelector('.cards');
    return card || false;
}

/*LOADS*/
btn_loading_animation_1.addEventListener('click', () => {
    const loadings = document.getElementsByClassName('loadings');

    if (loadings.length === 0) {
        const h1 = document.createElement('h1');
        h1.setAttribute('data-text', 'Loading...');
        h1.classList.add('loading_animation', 'loadings', 'things');
        h1.textContent = 'Loading...';

        const targetNode = verificarCarta() || middle_section;
        targetNode.appendChild(h1);
    }
});

function deleteLoading() {
    const loading = document.querySelector('.loadings');
    loading?.remove();
}

/*FORMS - BUTTONS*/

btn_a_press_animation.addEventListener('click', () => {
    const buttons = document.getElementsByClassName('buttons');

    if (buttons.length === 0) {
        const button = document.createElement('button');
        button.classList.add('btn_press_animation', 'buttons', 'things');
        button.textContent = 'Golpeame';

        const targetNode = verificarCarta() || middle_section;
        targetNode.appendChild(button);
    }
});

function deleteButtons() {
    const button = document.querySelector('.buttons');
    button?.remove();
}

function CssCambiarRuta(archivo, ruta) {
    document.getElementById(archivo)?.setAttribute('href', ruta);
}

function JScambiarRuta(archivo, ruta) {
    const scriptElement = document.getElementById(archivo);
    if (scriptElement) scriptElement.src = ruta;
}