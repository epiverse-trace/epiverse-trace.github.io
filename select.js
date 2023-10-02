// Wait for the DOM content to fully load before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class 'tag' and 'item'
    const tags = document.querySelectorAll('.tag');
    const items = document.querySelectorAll('.item');

    // Get counter
    const resultCount = document.getElementById('result-count');

    // Initialize counter
    updateGlobalCounter();

    tags.forEach(tag => {
        // Add a click event listener to each tag
        tag.addEventListener('click', function() {
            // Toggle the 'selected' class on the clicked tag
            tag.classList.toggle('selected');

            // Get all currently selected tags
            const selectedTags = document.querySelectorAll('.tag.selected');
            const selectedTagNames = Array.from(selectedTags).map(tag => tag.dataset.tag);

            // Loop through all items and show/hide them based on selected tags
            items.forEach(item => {
                const itemTags = item.dataset.tags.split(';');
                const showItem = selectedTagNames.every(tag => itemTags.includes(tag));
                item.style.display = showItem ? 'block' : 'none';
            });

            // Compute available tags based on displayed items
            const availableTags = Array.from(items).reduce((tags, item) => {
                const itemTags = item.dataset.tags.split(';');
                const isVisible = getComputedStyle(item).display !== 'none';
                if (isVisible) {
                    return tags.concat(itemTags.filter(tag => !tags.includes(tag)));
                }
                return tags;
            }, []);

            // Show/hide tags based on availability
            tags.forEach(tag => {
                const tagName = tag.innerText;
                const tagIsAvailable = availableTags.includes(tagName);
                tag.style.display = tagIsAvailable ? 'inline-block' : 'none';
            });

            // Call the functions to update counters
            updateGlobalCounter();
            updateTagCounters();

            // Log selected tags to the console
            console.clear();
            console.log('Selected Tags:', selectedTagNames.join(', '));
        });
    });

    function updateGlobalCounter() {
        const visibleItems = document.querySelectorAll('.item:not([style*="display: none"])');
        const count = visibleItems.length;

        const resultText = count === 1 ? `${count} resource matches these conditions` : `${count} resources match these conditions`;
        resultCount.textContent = resultText;
    }
});
