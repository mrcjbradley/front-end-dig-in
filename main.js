document.addEventListener('DOMContentLoaded', main)
    
function main() {
    const input = document.querySelector(".theme-toggle-input");
    const label = document.querySelector(".theme-toggle-label");
    input.onchange = toggleDark;
    label.onclick = toggleDark;

    function toggleDark (event){
        event.preventDefault()
        document.body.classList.toggle('dark');
        if(event.target === label)input.checked = !input.checked;
    }
}
