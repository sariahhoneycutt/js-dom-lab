// Let's grab the hero div
const hero = document.querySelector(`.hero`);

// Let's modify the background image property
hero.style.backgroundImage = `url('./assets/sf.jpg')`;

const name = document.querySelector(`.hero h1 span`);
console.log(name)

const greeting = document.querySelector(`.hero h3`);
greeting.innerHTML = `Here's my really cheesy greeting.`

const profilePic = document.querySelector(`.profile-img`)
profilePic.src = `https://avatars.githubusercontent.com/u/24390149?v=4`

//my favorite things array
const favorites= [{
    img: `./assets/kitchen.jpg`,
    title: `Cooking`,
    desc: `I love to cook. When I was younger, I worked in kitchens and had a great time with a wide variety of people. Now, it's a way to keep exploring new cultures and challenge myself.`
  },
  {
    img: `./assets/cuba.jpg`,
    title: `Traveling`,
    desc: `Travelling is by far one of my favorite activiites. During COVID, it became harder - obviously - to get around. However, I'm happy to say I'm a traveller and not a tourist whenever I go somewhere.`
  },
  {
    img: `./assets/xfit.jpg`,
    title: `Exercising`,
    desc: `I like to lift heavy things and put them down. Wheter it's running, oly-lifting, or even hopping on a spin bike, I love it. No disc sports...I'm not a dog.`
  }
]

//grab the gallery
const gallery = document.querySelector(`.info-gallery`);

//Map over the favorites array and generage an infot-item for each
//then place them in the gallery
favorites.map((favorite) => {
  //create a new element
  let newEl = document.createElement(`div`);
  //Add the correct class
  newEl.classList.add(`info-item`);
  //let's generate the HTML for the items
  newEl.innerHTML = `
  <img src= "${favorite.img}" alt="${favorite.title}" class="item-img"/>
  <h4>${favorite.title}</h4>
  <p>${favorite.desc}</p>
  `
  //We need to add it to the DOM
  gallery.appendChild(newEl);
})
