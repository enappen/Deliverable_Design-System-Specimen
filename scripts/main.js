/* Light and Dark Mode Function */
function themeSwitch() {
    var element = document.body;
    element.classList.toggle("dark-mode")

    const button = 
        document.querySelector("#themeSwitchButton");
    if (themeSwitchButton.innerText == "Dark Mode") {
        themeSwitchButton.innerText = "Light Mode";
        themeSwitchButton.style.backgroundColor = "#000000";
        themeSwitchButton.style.color = "#faf9f5";
    } else {
        themeSwitchButton.innerText = "Dark Mode";
        themeSwitchButton.style.backgroundColor = "#faf9f5";
        themeSwitchButton.style.color = "#000000";
    }
}
