const search = document.getElementById('search');
const list = document.querySelector('.auto-complete-list');

search.addEventListener('keyup', event => {
    const search_value = search.value.trim();

    // Check if the search value is not empty
    if(!search_value) {
        list.style.display = 'none';
        return;
    }

    fetch('suggetions.json').then(response => response.json())
        .then(data => {
            let empty_arr = data.filter(temp => {
                return temp.toLocaleLowerCase().startsWith(search_value.toLocaleLowerCase());
            });

            empty_arr = empty_arr.map(temp => {
                return data = '<li>' + temp + '</li>';
            });

            displaySuggetions(empty_arr)
        })
})

function displaySuggetions(items) {
    if(!items.length) return;

    console.log(items)
    list.innerHTML = items.join('');
    list.style.display = 'block';
}