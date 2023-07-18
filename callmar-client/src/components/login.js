import React, { useState } from "react";
import './style/style.css';

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/users/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    const token = data.token; // Получение токена из ответа сервера
    alert(token);
    // Сохранение токена в хранилище (например, localStorage)
    localStorage.setItem("token", token);
    window.location.href = '/account';
  };
  

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};

export default Login;