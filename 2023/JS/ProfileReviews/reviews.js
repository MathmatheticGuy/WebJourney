const reviews = [
    {
        id:1,
        name: "AI",
        job: "Professional Anime Girl",
        img:"profile_img/ahegaoProfile.jpg",
        info: '" Yamete Kudasai "',
    },
    {
        id:2,
        name: "Abandoned",
        job: "Psychology",
        img:"profile_img/ahegaoProfile2.jpg",
        info: "You focus on the trivial and lose sight of what is most important; change is impossible in this fog of ignorance",
    },
    {
        id:3,
        name: "Adoft",
        job: "Fuhrer",
        img:"profile_img/hitlerProfile.jpg",
        info: "How can you keep moving forward if you keep regretting the past?",
    },
    {
        id:4,
        name: "Kaneki Ken",
        job: "Bartender",
        img:"profile_img/Kaneki.jpg",
        info: "Never trust anyone too much; remember, the devil was once an angel ",

    },
    {
        id:5,
        name: "Picolo",
        job: "Hero",
        img:"profile_img/Picolo.png",
        info: "Sometimes, we have to look beyond what we want and do what’s best.",

    },
    {
        id:6,
        name: "Sanae Furukawa",
        job: "Student",
        img:"profile_img/SanaeFurukawa.png",
        info: "If your life can change once, your life can change again",

    },
    {
        id:7,
        name: "Kenshin Himura",
        job: "Assassin ",
        img:"profile_img/KenshinHimura.png",
        info: " You can die anytime, but living takes true courage ",
    },
    {
        id:8,
        name: "Saitama",
        job: "Hero ",
        img:"profile_img/Saitama.jpg",
        info: " Human strength lies in the ability to change yoursel ",
    },
    
    {
        id:9,
        name: "Armin Arlert",
        job: "Commander",
        img:"profile_img/ArminArlert.jpg",
        info: " People, who can’t throw something important away, can never hope to change anything ",
    },
    
    {
        id:10,
        name: "Itachi Uchiha",
        job: "Ninja ",
        img:"profile_img/ItachiUchiha.jpg",
        info: " People’s lives don’t end when they die, it ends when they lose faith. ",
    },
    
    {
        id:11,
        name: "Rosette Christopher",
        job: "Militia Novice",
        img:"profile_img/RosetteChristopher.jpg",
        info: " What is important is to know fear and yet take a step forward ",
    },
    
    {
        id:12,
        name: "Vegeta",
        job: "Warrior",
        img:"profile_img/Vegeta.png",
        info: " Push through the pain; giving up hurts more ",
    },
    {
        id:13,
        name: "Canaan",
        job: "Agent",
        img:"profile_img/Canaan.png",
        info: " You should never give up on life, no matter how you feel. No matter how badly you want to give up ",
    },
    {
        id:14,
        name: "Shoyo Hinata", 
        job: "Professional Volleyball Player",
        img:"profile_img/ShoyoHinata.jpg",
        info: " The future belongs to those who believe in the beauty of their dreams ",
    
    }
]

const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const arrowPrevIcon = document.querySelector(".prev-btn i");
const arrowNextIcon = document.querySelector(".next-btn i");


// set starting item 
let currentItem = 0;
 
// load initial item
window.addEventListener("DOMContentLoaded", () =>{
    console.log("All Script Loaded");

    showPerson(currentItem);    
});

// show person based on item
function showPerson(person){
    const item = reviews[person];    
    const maxColor = "white"
    arrowPrevIcon.style.color="springgreen";
    arrowNextIcon.style.color="springgreen";
    
    
    if (person == 0){
        arrowPrevIcon.style.color = maxColor;
    }
    else if (person === reviews.length-1){
        arrowNextIcon.style.color = maxColor;
    }

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
let random = () => {
    return Math.floor(Math.random()*reviews.length);
};

prevBtn.addEventListener("click", () => {
    if (currentItem > 0) {
        currentItem-=1;
        console.log(currentItem);
        showPerson(currentItem); 
    }
});

nextBtn.addEventListener("click", () => {
    if (currentItem < reviews.length-1) {
        currentItem+=1;
        console.log(currentItem);
        showPerson(currentItem); 
    }    
});

randomBtn.addEventListener("click", () => {
    const randomItem = Math.floor(Math.random()*reviews.length);
    currentItem = randomItem;
    showPerson(currentItem);
});

