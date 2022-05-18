// let elForm = document.querySelector('.form'),
//     elInput = document.querySelector('input');

// elInput.addEventListener('paste', (e) => {
//     e.preventDefault();
//     console.log('no paste');
//     elInput.textContent == '';
// })



// elInput.addEventListener('paste', (e) => {
//     e.preventDefault();
//     console.log('no paste');
//     if (elInput == '') {
//         // console.log('no paste');
//     }
// })


// let form = document.querySelector('.form'),
//     elFormName = document.querySelector('.form__name'),
//     elFormPrice = document.querySelector('.form__price'),
//     formBtn = document.querySelector('.form__button'),
//     parent = document.querySelector('.parent');

// function listen(e) {
//     e.preventDefault();

//     childName = document.createElement('span');
//     childPrice = document.createElement('span');

//     childName.innerHTML = '!';

//     elFormName.value == childName;
//     elFormPrice.value == childPrice;







// elFormName.textContent === childName;
// elFormPrice.textContent == childPrice;


// // childName.innerHTML = 'salom'

// // parent.appendChild(childName)
// // parent.appendChild(childPrice)

// form.appendChild(parent)

// console.log(e.target);

// }






let form = document.querySelector('.form'),
    elFormName = document.querySelector('.form__name'),
    elFormPrice = document.querySelector('.form__price'),
    formBtn = document.querySelector('.form__button'),
    parent = document.querySelector('.parent'),
    products = document.querySelector(".products"),
    prices = document.querySelector(".prices");



form.addEventListener('submit', (e) => {
    e.preventDefault();


    //     product
    let childName = document.createElement('span');

    childName.setAttribute("class", "new__child--name")

    if (elFormName.value !== "") {
        childName.textContent = elFormName.value;
    } else {
        alert('You did not enter anything in the product section')
    }

    products.append(childName)
    parent.append(products)


    //     prices
    let childPrice = document.createElement('span');

    childPrice.setAttribute("class", "new__child--price")

    if (elFormPrice.value !== "") {
        childPrice.textContent = elFormPrice.value;
    } else {
        alert('You did not enter anything in the price section')
    }

    prices.append(childPrice)
    parent.append(prices)



    elFormName.value = "";
    elFormPrice.value = "";

});




//      new prices summ

let elSummPrices = document.querySelector('.summ-prices');

let total = null;
formBtn.addEventListener('click', e => {
    let allPrice = Number(elFormPrice.value);
    total += allPrice;
    elSummPrices.className = 'total';
    elSummPrices.textContent = total;
});



let formName = document.querySelector('.form__name')

formName.addEventListener('paste', (e) => {
    e.preventDefault();
    alert('Davlat nazoratidasiz !!!');
    if (formName == '') {
        // console.log('no paste');
    }
})


let formPrice = document.querySelector('.form__price')

formPrice.addEventListener('paste', (e) => {
    e.preventDefault();
    alert('Davlat nazoratidasiz !!!');
    if (formPrice == '') {
        // console.log('no paste');
    }
})







////      !    O'xshamadi

// elSummButton.addEventListener('submit', (e) => {
//     e.preventDefault();

//     //new prices

//     let summInputSpan = document.createElement('span');




//     summInputSpan.textContent = elFormPrice.value;

//     summInputSpan.forEach(summ => {
//         total += summ

//     });

//     elSummPrices.appendChild(summInputSpan);



// })