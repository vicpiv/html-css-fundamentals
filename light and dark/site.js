document.querySelector("#switch")
    .addEventListener("click", changeTheme)

var theme = localStorage.setItem("theme")
function setTheme(theme) {
    let css = document.querySelector("#darkcss")
    css.disabled = theme == "light" ? true : false

    localStorage.setItem("theme", theme)

}

function changeTheme() {
    theme = theme == "light" ? "dark" : "light"
    setTheme(theme)
}