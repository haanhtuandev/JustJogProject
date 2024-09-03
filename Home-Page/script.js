document.getElementById("settings-icon").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("show-sidebar");
});

document.getElementById("sidebar-settings-icon").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("show-sidebar");
});

const show_result_btn = document.getElementById("caloriesForm");
const result_panel = document.getElementById("result-panel")
const cancel_btn = document.querySelector(".quick-start-button")
show_result_btn.addEventListener('click',()=>{
    result_panel.classList.remove('content')


})
cancel_btn.addEventListener('click',()=>{
    result_panel.classList.add("content")
    result_panel.style.transform = "TranslateY(250%)";

})