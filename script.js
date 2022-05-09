const card = document.getElementById("tarot");
const btn = document.getElementById("card-btn");
const closeBtn = document.getElementById("close-btn");
const empty = document.getElementById("empty");

//buttons
btn.addEventListener("click", function () {
  document.getElementById("close-btn").style.display = "none";
  getCard();
  btn.textContent = "Nova carta";
});

closeBtn.addEventListener("click", function () {
  render();
});

//carregamento inicial da página
function onLoad() {
  closeBtn.style.display = "none";
}

//function to select new card
function render() {
  //card.innerHTML = "" //impede que o id da carta continue aparecendo
  closeBtn.style.display = "none"; //remove o botao 'fechar'
  btn.style.display = "block"; //mostra o botao mostrar
}

function clear() {
  document.getElementById("close-btn").style.display = "block";
}

//main function (random # and show cards)
let getCard = () => {
  let id = Math.floor(Math.random() * 22);
  card.innerHTML = id;
  console.log(id);
  empty.style.display = "none";

  if (id === 0) {
    card.innerHTML = `
        <style>
        .fool{display:block;}
        </style>
        `;
  } else if (id === 1) {
    card.innerHTML = `
        <style>
        .magician{display:block;}
        </style>
        `;
  } else if (id === 2) {
    card.innerHTML = `
        <style>
        .h-priestess{display:block;}
        </style>
        `;
  } else if (id === 3) {
    card.innerHTML = `
        <style>
        .empress{display:block;}
        </style>
        `;
  } else if (id === 4) {
    card.innerHTML = `
        <style>
        .emperor{display:block;}
        </style>
        `;
  } else if (id === 5) {
    card.innerHTML = `
        <style>
        .pope{display:block;}
        <style>`;
  } else if (id === 6) {
    card.innerHTML = `
        <style>
        .lovers{display: block;}
        </style>`;
  } else if (id === 7) {
    card.innerHTML = `
    <style>
    .car{display:block;}
    </style>`;
  }else if (id === 8){
      card.innerHTML = `
      <style>
      .strength{display:block;}
      </style>`
  }else if(id === 9){
      card.innerHTML = `
      <style>
      .hermit{display:block;}
      </style>`
  }else if(id === 10){
      card.innerHTML = `
      <style>
      .wheel{display:block;}
      </style>`
  }else if(id === 11){
      card.innerHTML = `
      <style>
      .justice{display:block;}
      </style>`
  }else if(id === 12){
      card.innerHTML = `
      <style>
      .hanged{display:block;}
      </style>`
  } else if (id === 13) {
      card.innerHTML = `
      <style>
      .death{display:block;}
      </style>`
  } else if (id === 14) {
      card.innerHTML = `
      <style>
      .temper{display:block;}
      </style>`
  }else if(id === 15){
      card.innerHTML = `
      <style>
      .devil{display:block;}
      </style>`

  }else if(id === 16){
      card.innerHTML = `
      <style>
      .tower{display:block;}
      </style>`
  }else if(id === 17){
    card.innerHTML = `
    <style>
      .star{display:block;}
    </style>`
  }else if(id === 18){
    card.innerHTML = `
    <style>
      .moon{display:block;}
    </style>`
  }else if(id === 19){
    card.innerHTML = `
    <style>
      .sun{display:block;}
    </style>`
  }else if(id === 20){
    card.innerHTML = `
    <style>
      .judge{display:block;}
    </style>`
  }else if(id === 21){
    card.innerHTML = `
    <style>
      .world{display:block;}
    </style>`
  }
};

//     } else if (id === 4) {
//         card.innerHTML = getElementByClassName("emperor");
//             `
//         <style>
//             .emperor {display: block;}
//         </style>
//         `

//     } else if (id === 5) {
//         card.innerHTML = `
//         <style>
//             .emperor {display: block;}
//         </style>
//         `

//     } else if (id === 6) {
//         card.innerHTML =
//             `
//         <style>
//             .lovers {display: block;}
//         </style>
//         `

//     } else if (id === 7) {
//         `
//         <style>
//             .car {display: block;}
//         </style>
//         `
//     } else if (id === 8) {
//         card.innerHTML =
//             `
//         <style>
//             .strength{display: block;}
//         </style>
//         `

//     } else if (id === 9) {
//         card.innerHTML = `
//         <style>
//             .hermit {display: block;}
//         </style>
//         `
//     } else if (id === 10) {
//         card.innerHTML =
//             `
//         <style>
//             .wheel {display: block;}
//         </style>
//         `

//     } else if (id === 11) {
//         card.innerHTML = `
//         <style>
//             .justice {display: block;}
//         </style>
//         `
//     } else if (id === 12) {
//         card.innerHTML =
//             `
//         <style>
//             .card {display: block;}
//         </style>
//         `

//     } else if (id === 13) {
//         card.innerHTML = `
//         <style>
//             .death {display: block;}
//         </style>
//         `
//     } else if (id === 14) {
//         card.innerHTML =
//             `
//         <style>
//             .temper {display: block;}
//         </style>
//         `

//     } else if (id === 15) {
//         card.innerHTML = `
//         <style>
//             .devil {display: block;}
//         </style>
//         `
//     } else if (id === 16) {
//         card.innerHTML =
//             `
//         <style>
//             .tower {display: block;}
//         </style>
//         `
//     } else if (id === 17) {
//         card.innerHTML = `
//         <style>
//             .star {display: block;}
//         </style>
//         `
//     } else if (id === 18) {
//         card.innerHTML = `
//         <style>
//             .moon {display: block;}
//         </style>
//         `
//     } else if (id === 19) {
//         card.innerHTML = `
//         <style>
//             .sun {display: block;}
//         </style>
//         `

//     } else if (id === 20) {
//         card.innerHTML =
//             `
//         <style>
//             .judge {display: block;}
//         </style>
//         `
//     } else {
//         card.innerHTML = `
//         <style>
//             .world{display: block;}
//         </style>
//         `
//     }
// }

// funcionou
// let getCard = () => {
//     let id = Math.floor(Math.random() * 23)
//     card.innerText = id
//     console.log(id)
//     if (id === 10 || id === 20 || id === 7) {
//         card.textContent = "é 10 ou é 20 ou é 7"
//     } else {
//         card.innerText = id
//     }
// }

//CÓDIGO QUE FUNCIONA ATÉ AQUI

// const card = document.getElementById("tarot")
// const btn = document.getElementById("card-btn")

// btn.addEventListener("click", function () {
//     getCard()
//     btn.textContent = "Nova carta"

// })

// let getCard = () => {
//     let id = Math.floor(Math.random() * 23)
//     card.innerText = id
// }

// const url = "https://rws-cards-api.herokuapp.com/api/v1/cards"
// const card = document.getElementById("tarot")
// const btn = document.getElementById("card-btn")

// btn.addEventListener("click", function () {
//     getCard()
// })
// let getCard = () => {
//     let id = Math.floor(Math.random() * 23)
//     const finalUrl = url + id;
//     console.log(finalUrl)
//     card.innerText = id
// }
