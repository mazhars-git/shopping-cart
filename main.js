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

let generateShop = () => {
    return (shop.innerHTML= ShopItemData.map((e) =>{
        let {id, name, price, desc, img } = e;
        return `
        <div id=product-id-${id} class="item">
            <img width="210px" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h4>$ ${price}</h4>
                    <div class="buttons">
                        <i class="bi bi-dash"></i>
                        <div id=${id} class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    }).join(""));
};

generateShop();