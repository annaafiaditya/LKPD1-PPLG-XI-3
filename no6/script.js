document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var searchInput = document.getElementById('searchInput').value;
    document.getElementById('resultText').textContent = 'You searched for: ' + searchInput;
    
    document.getElementById('searchInput').value = '';
});