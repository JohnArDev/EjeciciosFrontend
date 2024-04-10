var time = document.getElementById('time')
var date = document.getElementById('date')

var intervalo = setInterval(actualizarHora, 1000)

function actualizarHora() {
    var dateToday = new Date() 

    time.innerHTML = formatDate(dateToday.getHours()) + ':' + formatDate(dateToday.getMinutes()) + ':' +formatDate(dateToday.getSeconds())
}

function formatDate(value) {
    if (value < 10) {
        return '0'+value
    }
    return value
}