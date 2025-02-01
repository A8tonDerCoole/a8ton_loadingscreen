document.getElementById("discord-button").addEventListener("click", function () {
    const discordLink = this.getAttribute("data-discord-link");

    const tempInput = document.createElement("input");
    tempInput.value = discordLink;
    document.body.appendChild(tempInput);

    tempInput.select();

    document.execCommand("copy");

    document.body.removeChild(tempInput);
});
