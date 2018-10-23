/*
task1: В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li).
*/
let c = document.getElementById('input');
c.addEventListener('change', listOfCountries);
function listOfCountries(){
    let countries = c.value;
    countries = countries.split(',');

    for (var i=0;i<countries.length;i++) {
        let ul = document.createElement("UL");
        document.getElementById('task1').appendChild(ul);
        ul.innerHTML = '<li>' + countries[i] + '</li>';
        c.value = '';
    }
}
/*
task2: В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так, чтобы введенные страны записывались в абзац под инпутом через запятую. То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны
*/
let kraj = document.getElementById('input2');
let button = document.querySelector('.btn1');

button.onclick = function () {
    let p = document.querySelector('.countries');
    p.innerHTML += kraj.value + ', ';
    kraj.value = '';
}
/*
task3: На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
*/
let but = document.querySelector('.btn2');

but.onclick = function skrot(){
    let news = document.querySelectorAll('.news');
    let str = '';
    for(var i=0; i<news.length; i++){
        str = news[i].innerHTML.slice(0, 30)+'...';
        news[i].innerHTML = str;
    }
}
/*
task4: Дана таблица с числами. По нажатию на кнопку найдите ячейку, в которой хранится максимальное число, и сделайте ее фон красным.
*/
function max(){
    let item = document.querySelectorAll('.item');
    let maxi = '';
    let n = 0;
    for(i=0;i<item.length;i++){
        if(+item[i].innerHTML > maxi){
            maxi = +item[i].innerHTML;
            n = i;
        }
    }
    item[n].style.backgroundColor = 'orange';
}

function min(){
    let items = document.querySelectorAll('.item');
    let mini = '';
    let arr = [];
    let n = 0;
    for(i=0;i<items.length;i++){
        arr.push(items[i].innerHTML)
    }
    mini = Math.min.apply(Math, arr);
    for(i=0;i<items.length;i++){
        if(items[i].innerHTML == mini){
            n=i;
        }
    }
    items[n].style.backgroundColor = 'yellow';
}
/*
task5: Дана таблица с числами. По нажатию на кнопку в инпут под таблицей выведите эти числа через запятую в порядке возрастания.
*/
$('.btn5').on('click', function(){
    var items = $('.item1');
    var arr = [];
    var output = document.querySelector('.lista-liczb');
    console.log(output.value);
    for(var i=0;i<items.length;i++){
        arr.push(items[i].innerHTML);
    }
    console.log(arr);
    var arrNew = arr.sort(function(a, b) {
        return a - b;
        });
    var str = arr.join(', ');
    output.value = str;
    console.log(str);
})



