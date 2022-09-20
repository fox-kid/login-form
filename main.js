function moveLabel() {
    const usernameInputValue = document.getElementById("username").value;
    const passwordInputValue = document.getElementById("password").value;
    const usernameLabel = document.getElementById("usernameLabel");
    const passwordLabel = document.getElementById("passwordLabel");
    
    usernameInputValue != "" ? usernameLabel.style.setProperty("margin-top", "-20px") : usernameLabel.style.removeProperty("margin-top");
    
    passwordInputValue != "" ? passwordLabel.style.setProperty("margin-top", "-20px") : passwordLabel.style.removeProperty("margin-top");
}

function colorCheckbox() {
    const checkboxInputChecked = document.getElementById("rememberMe").checked;
    const checkmarkBox = document.getElementById("checkmark");

    checkboxInputChecked 
        ? (checkmarkBox.style.setProperty("background-color", "#6c63ff"), checkmarkBox.setAttribute("selected", "1"))
        : (checkmarkBox.style.setProperty("background-color", "rgb(230, 230, 230)"), checkmarkBox.removeAttribute("selected"));
}