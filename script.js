const header = document.querySelector(".header");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const btnText = button.innerText;

        if (btnText === "=") {
            try {
                header.value = eval(header.value);
            } catch {
                header.value = "Error";
            }
        } else if (btnText === "AC") {
            header.value = "";
        } else if (btnText === "⌫") {
            header.value = header.value.slice(0, -1);
        } else {
            header.value += btnText;
        }
    });
});
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
