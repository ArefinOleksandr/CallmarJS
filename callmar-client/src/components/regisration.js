import React, { useState } from 'react';
import './style/style.css';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [url, setUrl] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Отправка данных на сервер
    const userData = {
      username: username,
      email: email,
      password: password,
      url: url,
      phone: phone
    };
    fetch('http://localhost:3000/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (response.ok) {
          // Данные успешно отправлены на сервер
          console.log('Данные успешно отправлены');
        } else {
          // Ошибка при отправке данных на сервер
          console.log('Ошибка при отправке данных');
        }
      })
      .catch(error => {
        // Произошла ошибка при выполнении запроса
        console.log('Произошла ошибка', error);
      });
    console.log(userData);
    // Дополнительные действия, например, отправка данных на сервер или перенаправление пользователя
  }

  return (
    <div className='register'>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Имя пользователя:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Адрес вашего сайта:
          <input type="url" value={url} onChange={handleUrlChange} />
        </label>
        <label>
          Ваш телефон:
          <input type="tel" value={phone} onChange={handlePhoneChange} />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegistrationPage;