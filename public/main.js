//*Collaborated with Eric, Asiah, Vanessa, Zahmir, Nyah*/
var complete = document.querySelectorAll(".completeButton");

// function setInterval(() => {
  
// }, 1000);

Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(e){
        console.log("I been clicked")
        //this.parentNode.querySelector('.orderName').value
        const name = this.parentNode.childNodes[1].innerText
        const order= this.parentNode.childNodes[3].innerText
        const barista = document.getElementById("completeOrder").value
        console.log(name, order, barista, "1st request")
        fetch('orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'order': order,
            'barista': barista,
            'complete': true
            // 'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
