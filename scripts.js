/* Select the current year */
const yearSelect = document.querySelector("#year");
const Calendar = new Date();
const currentYear = new Date().getFullYear();
for (let i = 0; i < yearSelect.options.length; i++) {
    if (yearSelect.options[i].innerHTML == currentYear) {
        yearSelect.selectedIndex = i;
        break;
    }
}
/* Make the Redirect button work! */
var viewBtn = document.querySelector("#redirect");
viewBtn.addEventListener("click", () => {
    let yr = document.querySelector("#year").value;
    let open = document.querySelector("#openwith").value;
    let url = document.querySelector("#url").value;
    let Info = `${open}-${yr}_URL=${url}`;
    if (url.includes("archive") || url.includes("theoldnet") || url.includes("http") || url.includes("https")) {
        alert("Soooooory! URL's with the words archive, or theoldnet are restricted due to bugs.\nAnother reason could be that there is already a https");
    }
    else {
        location.assign(`nostalgia.html?${Info}`);
    }
});
