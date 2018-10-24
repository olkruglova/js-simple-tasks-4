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
/*
task6: Дана таблица с числами. По нажатию на кнопку в последний ряд таблицы в каждую ячейку запишите сумму чисел в столбце таблицы, расположенном над определенной ячейкой.
*/
$('.btn6').on('click', function(){
    var rows = $('.tr2');
    var arr = [];
	for (var i = 0; i < rows.length-1; i++) {
		for(var j = 0; j < rows[i].children.length; j++) {
			if (arr[j] == undefined) {
				arr[j] = 0;
			}
			arr[j] += Number(rows[i].children[j].innerHTML);
		}
	}
	for (var k = 0; k < rows[rows.length-1].children.length; k++) {
		rows[rows.length-1].children[k].innerHTML = arr[k];
	}
    //var elementChildrens = document.querySelector('.tr22').children;
    //for (var i=0, child; child=elementChildrens[i]; i++) {
    //elementChildrens - коллеция детей списка
    //child - последовательно, каждый из элементов elementChildrens
    //console.log(child.innerHTML);
});
/*
task8:  Дана таблица с числами. По нажатию на ячейку она активируется и становится красного цвета. Активировать можно много ячеек. Под таблицей кнопка. По нажатию по этой кнопке в абзац ниже выведите сумма активированных ячеек. Реализуйте кнопку 'сбросить активированные ячейки'.
*/
let items = $('.item3');
let summ = 0;
let needToSum;
items.on('click', function(){
    $(this).addClass('colored');
});
$('.btn7').on('click', function(){
    $('.item3.colored').each(function() {
        summ += Number($(this).text());
    });
    $('.sum-items').val(summ);
})
$('.btn8').on('click', function(){
    items.removeClass('colored');
    $('.sum-items').val(0);
})





