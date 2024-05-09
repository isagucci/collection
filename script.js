window.addEventListener('load', function () {
    var loadingScreen = document.querySelector('.loading-screen');
    var gif = loadingScreen.querySelector('img');

    loadingScreen.addEventListener('animationend', function() {
      loadingScreen.style.display = 'none';
    });
    setTimeout(function() {
      loadingScreen.style.animation = 'loadingAnimation 4s ease-in-out forwards';
    }, 2000); 
  
    
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 10000); 
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll('.box');

    // Loop through each box element
    boxes.forEach(function(box) {
        // Select the <a> tag within the current box
        var link = box.querySelector('a');

        // Add event listener for mouseover
        box.addEventListener('mouseover', function() {
            // Change color of <a> tag to white
            link.style.color = 'white';
        });

        // Add event listener for mouseout (to revert the color)
        box.addEventListener('mouseout', function() {
            // Revert color of <a> tag to original color
            link.style.color = ''; // This will revert to the default color defined in CSS
        });
    });
});


  
function filterItems() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const items = document.querySelectorAll('.box');
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id.replace('Checkbox', ''));
    
    items.forEach(item => {
        const category = item.dataset.category;
        if (selectedCategories.includes(category) || selectedCategories.includes('all')) {
            item.style.display = 'block'; 
        } else {
            item.style.display = 'none'; 
        }
    });
}


const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterItems);
});