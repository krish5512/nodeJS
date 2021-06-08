console.log('Client side JS file');
fetch('http://localhost:3000/weather?address=vaishali').then((response) => {
        response.json().then((data) => {
            if(data.error)
            {
                console.log(error)
            }
            else{
                console.log(data)
            }
        })  
});