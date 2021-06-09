console.log('Client side JS file');
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;
    messageOne.textContent = 'Loading ....';
    messageTwo.textContent = '';
    if (location !== '') {
        const url = '/weather?address=' + location;
        fetch(url).then((response) => {
            response.json().then((data) => {
                console.log(data)
                if (data.error) {
                    messageOne.textContent = '';
                    messageTwo.textContent = data.error;
                } else {
                    console.log(data)
                    messageOne.textContent = 'The current for temperature is ' + data.temperature + ' with ' + data.desc[0] + ' at ' + data.address;
                    messageTwo.textContent = '';
                }
            })
        })
    } else {
        alert('No location entered')
    }

})