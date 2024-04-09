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