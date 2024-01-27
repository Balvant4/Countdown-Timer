const endDate = "28 January 2024 01:51 PM"
document.getElementById("countdown").innerText = endDate
let boxes = document.querySelectorAll("input")

function clock(){
    let end = new Date(endDate) 
    let now = new Date()
    const diff = (end - now) / 1000;

    if(diff < 0) return

    boxes[0].value = Math.floor(diff / 3600 / 24)
    boxes[1].value = Math.floor(diff / 3600) % 24
    boxes[2].value = Math.floor(diff / 60) % 60
    boxes[3].value = Math.floor(diff) % 60
}
clock()


setInterval(
    () => {
        clock()
    },1000
)