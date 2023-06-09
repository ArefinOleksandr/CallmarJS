const React = require('react');
const ReactDOM = require('react-dom/client');


const callmar1 = require('./img/Callmar11.png')
const exit = require('./img/Group 54.png')

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {page: 'index'};
    this.handler = this.handler.bind(this);
    this.indexPage = this.indexPage.bind(this);
    this.registerPage = this.registerPage.bind(this);
  }

  handler(page) {this.setState({page: page})}

  indexPage() {
    return(
      <>
        <header>
          <nav>
            <img src={callmar1} alt="" />
            <ul>
              
                <button onClick={() => this.handler('login')}>Войти</button>
                <button onClick={() => this.handler('register')}>Регистрация</button>
            </ul>
          </nav>
          <div>
            <h1>
                  Обратный звонок на сайт 
              </h1>
              <p>
                  Получайте в 3 раза больше звонков сразу после установки виджета на Ваш сайт
                  Сервис окупает свой годовой тариф в первую же неделю
              </p>
              <a href="/login">Подключить</a>
          </div>
        </header>
        <section className='steps-block'>
          <div className='steps'>
            <div className='left-step'>
              <h1>
                01
              </h1>
              <h2>
              Устанавливаете код на сайт
              </h2>
              <p>
              Вы устанавливаете на свой сайт специальный html-код. Это займет 3 минуты или мы поможем вам
              </p>
            </div>
            <div className='right-step'>
              <h1>
                02
              </h1>
              <h2>
              На Вашем сайте появится кнопка и всплывающее окно
              </h2>
              <p>
              Посетители заходят на Ваш сайт, видят кнопку или всплывающее окно и вводят свой телефон
              </p>
            </div>
            <div className='left-step'>
            <h1>
                03
              </h1>
              <h2>
              Сервис автоматически звонит менеджеру и клиенту
              </h2>
              <p>
              Как только менеджер взял трубку, сервис автоматически связывается с клиентом и соединяет его с менеджером. В среднем за 18,5 сек
              </p>
            </div>
            <div className='right-step'>
              <h1>
                04
              </h1>
              <h2>
              Клиент теперь Ваш !
              </h2>
              <p>
              Уже через 28 секунд Ваш сотрудник общается с клиентом и делает продажу!
              </p>
            </div>
          </div>
          <h1>
          Посмотрите видео как работает виджет
          </h1>
          <iframe  src="https://www.youtube.com/embed/JRA2JpqAjlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <footer>
          <div className='free-block'>
            <h2>
            Бесплатно 
О руб.
            </h2>
            <p>
            Тестовая версия на 14 дней и 20 руб. на балансе для проверки качества связи
            </p>
            <a href='/register'>Попробовать</a>
          </div>
          <div className='pay-block'>
            <h2>
            При оплате на 
1 год от 299 руб.
            </h2>
            <p>
            Платите только за наш сервис, связь оплачивается по минимальной цене 4 руб. за минуту.
            </p>
            <a href='/register'>Подключить</a>
          </div>
        </footer>
      </>
    )
  }
  registerPage(){
    return (
      <div className='register'>
      <img src={exit} onClick={() => this.handler('index')}></img>
        <h1>
          Регистрация
        </h1>
        <h2>
          После регистрации вы получите: <br/>
          10 минут связи - бесплатно
        </h2>
        <form>
          <p>
          Ваш Email
          </p>
          <input type='email' name='email'></input>
          <p>
          Ваше имя
          </p>
          <input type='text' name='name'></input>
          <p>
          Адрус вашего сайта
          </p>
          <input type='url' name='url'></input>
          <p>
          Ваш телефон
          </p>
          <input type='tel' name='phone'></input>
          <p>
          Ваш пароль
          </p>
          <input type='password'></input>
          <button>Зарегистрироваться</button>
        </form>
      </div>
    )
  }
  loginPage(){
    return (
      <div className='login'>
      <img src={exit} onClick={() => this.handler('index')}></img>
        <h1>
          Вход в личный кабинет
        </h1>
        <p>
          Ваш Email
        </p>
        <input type='email' name='email'></input>
        <p>
          Ваш пароль
        </p>
        <input type='password'></input>
        <button className='log-butt' >Войти</button>
        <button className='reg-butt' onClick={() => this.handler('register')}>Регистрация</button>
      </div>
    )
  }

  render(){

    return this.state.page ==='index'? this.indexPage() : (this.state.page ==='register'? this.registerPage(): this.loginPage());
  }
}
