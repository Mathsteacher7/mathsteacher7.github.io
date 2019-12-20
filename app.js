const request = new XMLHttpRequest()
const codewarsHonor = document.getElementById("codewars")

const url='https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/users/Mathsteacher7?access_key=Su-FKGsHrjGLgYsinWLA';

request.open('GET', url, true)

request.onload = function() {
    const data = JSON.parse(this.response)
    const honor = data.honor
    codewarsHonor.textContent += honor

}
request.send()



// document.addEventListener('DOMContentLoaded', () => {


// }
// )

