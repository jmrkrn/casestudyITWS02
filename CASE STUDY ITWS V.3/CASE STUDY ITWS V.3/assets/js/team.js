document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the class 'jump-animation'
    var teamMembers = document.querySelectorAll('.jump-animation');
  
    // Index to keep track of the current team member
    var currentMemberIndex = 0;
  
    // Set interval to trigger the jump animation for each team member
    var jumpInterval = setInterval(function () {
      // Remove 'jump-animation' class from the current team member
      teamMembers[currentMemberIndex].classList.remove('jump-animation');
  
      // Move to the next team member
      currentMemberIndex++;
  
      // If all team members have been animated, reset the index
      if (currentMemberIndex === teamMembers.length) {
        currentMemberIndex = 0;
      }
  
      // Add 'jump-animation' class to the next team member
      teamMembers[currentMemberIndex].classList.add('jump-animation');
  
    },980); // Adjust the delay (in milliseconds) between animations as needed
  });