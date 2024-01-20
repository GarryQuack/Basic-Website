/*function btntog() {
    var t = document.getElementById("photo");
    if (t.style.display == 'block') {
        t.style.display = 'none';
    }
    else {
        t.style.display = 'block';
    }
}*/ var t = document.getElementById("photo");
const toggle = document.querySelector(".toggle input");
toggle.addEventListener("click", ()=>{
    const onOff = toggle.parentNode.querySelector(".onoff");
    onOff.textContent = toggle.checked ? "OFF" : "ON";
    t.style.display = toggle.checked ? "none" : "block";
});

//# sourceMappingURL=photo.922c870f.js.map
