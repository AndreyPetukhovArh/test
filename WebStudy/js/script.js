let request = new XMLHttpRequest(),
    button = document.getElementsByTagName('button')[0],
    input = document.getElementsByTagName('input')[0],
    basket = document.getElementsByClassName('b-basket')[0],
    product = [],
    cards = document.getElementsByClassName('cards')[0],
    products = document.getElementsByClassName('products')[0];

request.open('GET', 'json/vue-practice.json');
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();

request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status == 200) {
        let data = JSON.parse(request.response);

        Vue.component('card-component', {
            data: function () {
                return {
                    card: {
                        "id": 2,
                        "title": "Носки тёмные, высокие",
                        "price": 780,
                        "qty": 3,
                    },
                    show: true,
                    name: 'card-component'
                }
            },
            template: '#card-component',
            methods: {
                add() {
                   this.show = false;

                }
            }
        });

        new Vue({
            el: '#app'
        });


    }
});

       /* data.cartItems.forEach((item) => {

            let card = new Card(item.id, item.title, item.price);
            card.createDiv(products, 'b-product', 'Добавить');

            products.addEventListener('click', function (e) {
                let target = e.target;
                if (target.tagName == 'BUTTON') {
                    input.value = target.parentNode.textContent.split(' ')[1];
                    if (item.id == input.value) {
                        for (let key in item) {
                            product.push(item[key]);
                        }
                        card.createDiv(cards, 'b-card', 'Удалить');
                    }
                }
            });
        });

        cards.addEventListener('click', function (e) {
            let target = e.target;
            if (target.tagName == 'BUTTON') {
                target.parentNode.style.display = 'none';
                console.log(target.tagName);
            }
        });
    }
});


class Card {
    constructor(id, title, price, qty) {
        this.id = id,
            this.title = title,
            this.price = price,
            this.qty = qty
    }

    createDiv(elm, cl, clBtn) {
        let elemCard = document.createElement('div'),
            delBtn = document.createElement('button');

        elemCard.classList.add(`${cl}`);
        elemCard.innerText = `id: ${this.id}\n Имя: ${this.title}\n Цена: ${this.price}`;
        delBtn.textContent = `${clBtn}`
        elm.appendChild(elemCard);
        elemCard.appendChild(delBtn);
    }
}*/

//создание экземпляра класса








//Короче создай объект/массив второй(корзину) и первый(главный экран).
//карточки ты можешь создавать, при клике добавлять, надо чтобы во втором окне
//сперва напиши обычную корзину, потом вью иначе не допрешь.
//на верстку забей