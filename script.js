const cardsContainer = document.getElementById('cards-container')
const data = [
    {
        image: 'https://www.arlekino-karnaval.ru/media/catalog/product/cache/1/big_image/838x1116/9df78eab33525d08d6e5fb8d27136e95/k/o/kostyum-ulybchivogo-santy-deluxe.jpg',
        name: 'Форма дед мороза',
        price: 4500.00,
    },
    {
        image: 'https://cdn1.ozone.ru/s3/multimedia-1/6032758777.jpg',
        name: 'Мишка',
        price: 2500.00,
    },
    {
        image: 'https://avatars.mds.yandex.net/get-mpic/1636931/img_id553747194833284485.jpeg/orig',
        name: 'Шары для Елки',
        price: 1500.00,
    },
    {
        image: 'https://i.pinimg.com/originals/e1/9b/42/e19b4203a796d67c46c6a16f4fc80ffd.jpg',
        name: 'Елка',
        price: 25000.00,
    },
    {
        image: 'https://i.pinimg.com/736x/44/0e/26/440e2606d26888e891b133fe24b21687.jpg',
        name: 'Wine Bottle',
        price: 2350.00,
    },
    {
        image: 'https://cdn.culture.ru/images/b5a87e4d-9bdb-515c-84c2-36010bd50e66',
        name: 'Подаркий',
        price: 5000.00,
    },
    {
        image: 'https://static.wikia.nocookie.net/918a080d-b15a-4772-89fe-61dfc4e1f619',
        name: 'Santa cap',
        price: 230.00,
    },
    {
        image: 'https://static.wikia.nocookie.net/918a080d-b15a-4772-89fe-61dfc4e1f619',
        name: 'Santa cap',
        price: 230.00,
    },

]
data.forEach((item) => {
    const card = document.createElement('div')
    const cardImage = document.createElement('img')
    const cardName = document.createElement('h2')
    const cardPrice = document.createElement('span')

    cardImage.src = item.image;
    cardName.textContent = item.name
    cardPrice.textContent = item.price + '$'

    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(cardPrice);

    card.classList.add('card')

    cardsContainer.appendChild(card)
})

const section1 = document.getElementById('section1')

const make = [
    {
        image: 'https://img.freepik.com/premium-vector/merry-christmas-vector-background-with-christmas-elements_9327-412.jpg?w=740',
        name: 'CHRISMAS GIFTS',
    },
    {
        image: 'https://img.freepik.com/premium-vector/merry-christmas-vector-background-with-christmas-elements_9327-412.jpg?w=740',
        name: 'CHRISMAS GIFTS',
    },
    {
        image: 'https://img.freepik.com/premium-vector/merry-christmas-vector-background-with-christmas-elements_9327-412.jpg?w=740',
        name: 'CHRISMAS GIFTS',
    },
    {
        image: 'https://img.freepik.com/premium-vector/merry-christmas-vector-background-with-christmas-elements_9327-412.jpg?w=740',
        name: 'CHRISMAS GIFTS',
    },
]
make.forEach((itam) => {
    const sec = document.createElement('div')
    const secimg = document.createElement('img')
    const secName = document.createElement('h2')

    secimg.src = itam.image
    secName.textContent = itam.name

    sec.appendChild(secimg)
    sec.appendChild(secName)
    sec.classList.add('sec')

    section1.appendChild(sec)
})


const section2 = document.getElementById('section2')

const talk = [
    {
        image: 'https:img.freepik.com/premium-vector/merry-christmas-vector-background-with-christmas-elements_9327-412.jpg?w=740',
        name: 'CHRISMAS GIFTS',
        price: 1233
    },
    {
        image:  'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlGk3nvrczC2ZUFm6kp2JmRpvXdYc13_BhuB6TA-_IpjryaqcQ',
        name: 'CHRISMAS GIFTS',
        price: 1233,
    },
    {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_aqnrF2KZXZqzFFNxwvzO6f0Puf9GqyniyCnUnYG9H4u9kX3b',
        name: 'CHRISMAS GIFTS',
        price: 1233,
    },
    {
        image: 'https://scontent.fala8-1.fna.fbcdn.net/v/t1.6435-9/80434657_103806967784246_8590921356441288704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JRV-VTcwvUkQ7kNvgEcRcN9&_nc_zt=23&_nc_ht=scontent.fala8-1.fna&_nc_gid=A1F23Eb_ljI82pGuD8u7Fa3&oh=00_AYBHwry88IIr0PphR7mErthqvpXka1ur2rKce108eo-Tog&oe=67931822',
        name: 'CHRISMAS GIFTS',
        price: 1233,
    },
  
]
talk.forEach((itm) => {
    const ces = document.createElement('div')
    const cesimg = document.createElement('img')
    const cesprice = document.createElement('span')
    const cesName = document.createElement('h2')

    cesName.classList.add('sss')

    cesimg.src = itm.image
    cesName.textContent = itm.name
    cesprice.textContent = itm.price + '$'

    ces.appendChild(cesimg);
    ces.appendChild(cesName);
    ces.appendChild(cesprice);

    ces.classList.add('ces')

    section2.appendChild(ces)


})

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150 && window.scrollY < 400) {
        header.style.backgroundColor = "red"
        header.style.background = 'linear-gradient(-355deg, rgba(255,0,0,1) 35%, rgba(255,173,173,1) 120%)'
        header.style.transform = "translateY(-50vh)"
    } else if (window.scrollY > 500) {
        header.style.background = '#ff0000'
        header.style.background = 'linear-gradient(-355deg, rgba(255,0,0,1) 35%, rgba(255,173,173,1) 120%)'
        header.style.transform = "translateY(0vh)"
    } else {
        header.style.background = "rgba(255, 255, 255, 0)"
        header.style.transform = "translateY(0vh)"
    }
})
const NUMBER_OF_SNOWFLAKES = 200;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.classList.add('snows')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');


const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway; // next
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
animate()
