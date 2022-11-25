function changetext(val) {
    document.getElementById('screen').textContent += val.innerHTML;
}
function get_info() {
    alert("developer name: Lotem Elzaer \n version: II \n description: a calculator");
}
// function displayButtonInfo(val) {
//     alert(val);
// }
// function changemode() {
//     var element = document.body;
//     element.classList.toggle("dark_mode");
// }
function sciMod() {
    var e = document.body;
    e.classList.toggle("scimod");
}
function Reset() {
    document.getElementById('screen').textContent = '';
}
function oneBack() {
    document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.slice(0, -1);
}
function calculate() {
    let ans = eval(document.getElementById('screen').textContent);
    document.getElementById('screen').textContent = ans;
}
function configSettings() {
    const data = window.location.search;
    let params = new URLSearchParams(data);
    const colors = params.get("colors");
    const fonts = params.get("fonts");
    const mode = params.get("mode");
    if (colors) {
        document.body.style.background = colors;
    }
    if (fonts) {
        document.body.style.fontFamily = fonts;
    }
    if (mode === "dark") {
        let element = document.body;
        element.classList.toggle("dark_mode");
    }
}
document.querySelectorAll('.op').forEach(item => {
    item.addEventListener('click', event => {
        changetext(item);
    });
});
const nums = (document.querySelectorAll('.numbers'));
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function () { changetext(nums[i]); });
}
document.getElementById('equal').addEventListener('click', () => calculate());
document.getElementById('settings').addEventListener('click', () => configSettings());
document.getElementById('back').addEventListener('click', () => oneBack());
document.getElementById('C').addEventListener('click', () => Reset());
document.getElementById('sci').addEventListener('click', () => sciMod());
