const greet = document.getElementById('greeting');
const lang = document.getElementById('language');
const kata = document.getElementById('bucin');
const auth = document.getElementById('author');
const contain = document.querySelector('.container');
function greetMe(){
    fetch('https://www.greetingsapi.com/random')
    .then(response => response.json())
    .then(data => {
        greet.innerHTML = data.greeting;
        lang.innerHTML = data.language;
    })
    .catch(error => console.log(error));
}

function quoteMe(){
    fetch('https://favqs.com/api/qotd')
    .then(response=>response.json())
    .then(data =>{
        kata.innerHTML = (`"${data.quote.body}"`);
        auth.innerHTML = data.quote.author;
        console.log(data);
    })
    .catch(error => console.log(error));
}

setInterval(function(){
    const time = document.getElementById('time-zone');
    const day = document.getElementById('day');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    const dhea = 'Dhea';
    hours += hours < 10?'0': '';
    time.innerHTML = hours + ':' + minutes + ' ' + ampm;
    setTimeout=(minutes*60*1000);

    if(hours >= 6 && hours <= 12){
        day.innerHTML = (`Good Morning, ${dhea}`);
    }
    else if(hours >= 12 && hours <= 18){
        day.innerHTML = (`Good Afternoon, ${dhea}`);
    }
    else if(hours >= 18 && hours <= 21){
        day.innerHTML = (`Good Evening, ${dhea}`);
    }
    else{
        
        day.innerHTML = (`Good night, ${dhea}`);
    }

}, 1000);


greetMe();
quoteMe();

const timing = document.getElementById('timing');
let countDown = new Date('july 26, 2022 18:20:00').getTime();

const x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDown - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timing.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if(distance < 0){
        clearInterval(x);
        timing.innerHTML = 'AKHIRNYAAA';
    }
}, 1000);

// click next page
const count = document.querySelector('.CountDown').addEventListener('click', function(){
    const containe = document.querySelector('.container');
    const hitung = document.querySelector('.timer');
    containe.style.display = 'none';
    hitung.style.display = 'flex';
})

const backit = document.querySelector('.back').addEventListener('click', function(){
    const containe = document.querySelector('.container');
    const hitung = document.querySelector('.timer');
    containe.style.display = 'flex';
    hitung.style.display = 'none';
})
