// JavaScript to handle active state for category buttons
const buttons = document.querySelectorAll('.category-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        this.classList.add('active');
    });
});







document.querySelectorAll('.apply-button').forEach(button => {
    button.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        const email = this.getAttribute('data-email');

        if (link) {
            // If link exists, open it in a new tab
            window.open(link, '_blank');
        } else {
            // If no link, open the mail client with the provided email address
            window.location.href = `mailto:${email}`;
        }
    });
}); 



// Search function
document.getElementById("searchInput").addEventListener("keyup", function() {
    const filter = this.value.toLowerCase();
    const jobItems = document.querySelectorAll(".vacancy-item");
    
    let noMatch = true; // Flag to check if any match is found

    jobItems.forEach(item => {
        const title = item.querySelector(".job-title").textContent.toLowerCase();
        const company = item.querySelector(".company-name").textContent.toLowerCase();
        const tags = item.querySelector(".job-tags").textContent.toLowerCase();
        // Check if the title or company name includes the search input
        if (title.includes(filter) || company.includes(filter) || tags.includes(filter)) {
            item.style.display = ""; // Show item
            noMatch = false; // Set flag to false if there's a match
        } else {
            item.style.display = "none"; // Hide item
        }
    });

    // Show or hide no match message based on the flag
    const noMatchMessage = document.getElementById("no-match-message");
    noMatchMessage.style.display = noMatch ? "block" : "none";
});
