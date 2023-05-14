const button = document.querySelector('button');




button.addEventListener('click', async () => {
    const userData = {
        name: document.getElementById('user-name').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        url: document.getElementById('url-addres').value,
        phone: document.getElementById('number-phone').value
    }

    let result = await fetch('register', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(userData)
    })

    

})
