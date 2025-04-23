//your code here!
const infiList = document.getElementById('infi-list');
let itemCount = 0;

// Function to add items
function addItems(count) {
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        itemCount++;
        li.textContent = `Item ${itemCount}`;
        infiList.appendChild(li);
    }
}

// Load initial 10 items
addItems(10);

// Detect scroll to bottom and add more items
infiList.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = infiList;
    
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        addItems(2);
    }
});

