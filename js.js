/*
task1: В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li).
*/
let c = document.getElementById('input');
c.addEventListener('blur', listOfCountries);
function listOfCountries(){
    let countries = c.value;
    countries = countries.split(',');
    console.log(countries);
    for (var i=0;i<countries.length;i++) {
        console.log(countries[i]);
        let ul = document.createElement("UL");
        document.getElementById('task1').appendChild(ul);
        ul.innerHTML = '<li>' + countries[i] + '</li>';
    }
}