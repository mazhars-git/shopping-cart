let shop = document.getElementById("shop");

let ShopItemData = [{
        id: 'aljfldkj',
        name: 'Casual Shirt',
        price: 45,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. animi voluptatem, placeat.',
        img: 'images/child.jpg'
    }, {
        id: 'bsljdkls',
        name: 'T-Shirt',
        price: 100,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. animi voluptatem, placeat.',
        img: 'images/male.jpg'
    }, {
        id: 'lsdjfk',
        name: 'Simple Dress',
        price: 115,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. animi voluptatem, placeat.',
        img: 'images/female.jpg'
    }, {
        id: 'jjkjfkjls',
        name: 'Party Dress',
        price: 250,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. animi voluptatem, placeat.',
        img: 'images/female1.jpg'
}];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML= ShopItemData.map((y) =>{
        let {id, name, price, desc, img } = y;
        return `
        <div id=product-id-${id} class="item">
            <img width="210px" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h4>$ ${price}</h4>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    }).join(""));
};

generateShop();

let increment = (id) =>{
    let selectedItem = id;

    basket.push({
        id: selectedItem.id,
        item: 1,
    })
    console.log(basket);
};

let decrement = (id) =>{
    let selectedItem = id;
};

let update = () =>{};