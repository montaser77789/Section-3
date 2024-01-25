var circ = document.querySelector(".cir");
var rect = document.querySelector(".rec");
const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date , current year and months 
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY",
                "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),  // getting first day of months
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),  // getting last date of months
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),  // getting last day of months
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();  // getting last date of previous months
    let LiTag = "";
    for (let i = firstDayofMonth; i > 0; i--) {
        LiTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                      && currYear === new Date().getFullYear() ? "active" : "";
        LiTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        LiTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]}`,
    circ.innerText = `${currMonth + 1}`,
    rect.innerText = `${currYear}`,
    daysTag.innerHTML = LiTag;
}
renderCalendar();

prevNextIcon.forEach(icons => {
    icons.addEventListener("click", () => {
        currMonth = icons.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});
circ.style = "padding : 15px 0 0 20px ";
var x = document.querySelector(".inp1")
var y = document.querySelector(".inp2")
var inp = document.querySelector("input[type=number]")
