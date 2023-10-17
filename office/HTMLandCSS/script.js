// function myFunction() {
//     document.body.style.backgroundColor = "red";

//   }
 let button= document.getElementById("butn")

  button.addEventListener("click", function(){
    

  document.body.style.backgroundColor ="green"

  })
  
  
    
        // Function to toggle image visibility
        function toggleImage() {
            var image = document.getElementById('image');
            var checkbox = document.getElementById('toggleCheckbox');
            
            if (checkbox.checked) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }
        
        {/* // Function to display an alert when a link is clicked */}
        function showAlert(message) {
            alert(message);
        }
   

