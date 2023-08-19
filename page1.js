function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function toggleMessage() {
    var messageBox = document.getElementById('messageBox');
    messageBox.classList.toggle('show-message');
  }
function showMessage() {
    var messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'block';
  }
  
function hideMessage() {
    var messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'none';
  }
  function showMessage() {
    var messageBox = document.getElementById('messageBox');
    messageBox.classList.toggle('show-message');
  
    var circle = document.querySelector('.circle');
    var circlePosition = circle.getBoundingClientRect();
    messageBox.style.left = circlePosition.left + 'px';
    messageBox.style.top = (circlePosition.top + circlePosition.height) + 'px';
  }/*สิ้นสุด*/