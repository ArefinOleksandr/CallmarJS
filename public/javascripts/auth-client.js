const button = document.querySelector('main>button');

button.addEventListener('click', async () => {
    if(
        document.querySelector('#user_email') && 
        document.querySelector('#user_password')
    ){
        const userData = {
            email: document.querySelector('#user_email').value,
            password: document.querySelector('#user_password').value
        }
        console.log(userData);
        let result = await fetch('auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userData)
        }).then((res) => {
            console.log(res.headers.get('token'))
            console.log(res.headers)
            window.location.replace('/account/calls')

        })
        
        
    }
}
)