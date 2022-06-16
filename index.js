console.log("hi")

fetch("http://www.boredapi.com/api/activity/")
.then(response => response.json())
.then(data => {
   document.getElementById("name").innerText = data.activity
})