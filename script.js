var adviceBtn = document.getElementsByClassName("add-advice")[0];
var startupBtn = document.getElementsByClassName("add-startup")[0];
var searchBtn = document.getElementsByClassName("search-marvel")[0];

var container = document.querySelector('.btn-container');
var dataPack = document.getElementsByClassName('data')[0];


//  button 1:
adviceBtn.addEventListener('click', async () => {
    await fetch(
        `https://api.adviceslip.com/advice`
    ).then(res => res.json())
        .then(
            (result) => {
                container.style.display = 'none';
                dataPack.innerHTML = result.slip.advice;
                var backBtn = document.createElement('button', 'button');
                backBtn.className = "backBtn";
                backBtn.innerHTML = "Go Back";
                backBtn.addEventListener('click', () => {
                    dataPack.innerHTML = '';
                    container.style.display = "flex";
                });
                dataPack.append(backBtn);
            });
});



