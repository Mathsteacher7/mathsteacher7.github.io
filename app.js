const request = new XMLHttpRequest()
const request2 = new XMLHttpRequest()
const codewarsHonor = document.getElementById("codewars")
const projectEuler = document.getElementById("projectEuler")


function honor() {
    const codeWarsURL='https://cors-anywhere.herokuapp.com/https://www.codewars.com/api/v1/users/Mathsteacher7?access_key=Su-FKGsHrjGLgYsinWLA';
    request.open('GET', codeWarsURL, true)
    request.onload = function() {
        const data = JSON.parse(this.response)
        const honor = data.honor
        codewarsHonor.textContent += honor
    
    }
}
honor()
request.send()

function euler() {
    const projectEulerURL='https://cors-anywhere.herokuapp.com/http://projecteuler.net/profile/mathsteacher7.txt';
    request2.open('GET', projectEulerURL, true)
    
    request2.onload = function() {
        const data = JSON.stringify(this.response)
        const answered = data.slice(24, 26)
        projectEuler.textContent += answered
        
    }
}
euler()
request2.send()


