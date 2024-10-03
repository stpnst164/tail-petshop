

### Проект: Интернет-зоомагазин Хвость  
🐶 Интернет-зоомагазин товаров для животных. Любой владелец может зайти на сайт и приобрести понравившийся товар для своего питомца  
Была выполнена реализация MERN Fullstack приложения. MongoDB + Express + React + Node
  
- 1. Знакомство со стеком MERN и применение его в проекте
  

- 2. Прокачивание навыков frontend, разработка React приложения


-  3. Знакомство с Admin Panel и ее разработка

 
- 4. Применение навыков работы с backend, а именно, работа с базой данных mongodb и express

 

### Шаги открытия проекта  
- 1. Данный проект необходимо скачать локально себе на компьютер
  2. Проект можно открыть в любом редакторе кода, у меня это VsCode
  3. В проекте есть 3 папки:
     Папка admin - Admin Panel, на этой странице реализованы следующие страницы:
     1. Добавление товара - в поля формы вводятся данные о товаре и при отправлении формы товар также добавляется в mongodb (коллекция goods)
     2. Получение списка добавленных товаров, данные берутся из коллекции 
     3. Заказы - временно не работает, позже будет реализована и эта страница

    <image 
    src="/frontend/src/assets/screenshots/screenshot1.png" 
    alt="Скриншот папок проекта"
    align="center">


    


 4. Сначала нужно перейти в папку backend, открыть терминал и прописать следующее:
    cd backend
    npm run server (при этом, обязательно! должна запущена mongodb (сама база данных)
    <image 
    src="/frontend/src/assets/screenshots/screenshot2.png" 
    alt="Скриншот команд для запуска бд"
    align="center">

    Это нужно для того, чтобы проект подключился к нашей базе и данные были переданы на сайт

  6. После того, как  в терминале написано, что база данных подключена, можно переходить к папке frontend:
     cd frontend
     npm run dev
     <image 
    src="/frontend/src/assets/screenshots/screenshot3.png" 
    alt="Скриншот команд для запуска сайта"
    align="center">

     Запускается сайт и можно перейти по ссылке на локальный хост и посмотреть сам сайт

     <h3>Страницы сайта</h3>
     
      <h4>Домашняя страница:<h4>
       <image 
      src="/frontend/src/assets/screenshots/screenshot4.png" 
      alt="Скриншот главной страницы сайта"
      align="center">

      <h4>Акции дня</h4>
       <image 
      src="/frontend/src/assets/screenshots/promotions.png" 
      alt="Акции дня"
      align="center">

      <h4>Популярные категории</h4>
       <image 
      src="/frontend/src/assets/screenshots/categories.png" 
      alt="Популярные категории"
      align="center">

      Здесь при клике на стрелочку в карточке категории можно перейти на страницу определенной категории животных:
         <image 
        src="/frontend/src/assets/screenshots/arrow_categories.png" 
        alt="Стрелка - переход на определенную категорию"
        align="center">

      <h4>Страница определенной категории животных (собак):<h4>
       Здесь высвечиваются карточки с разделами товаров категории:
         <image 
        src="/frontend/src/assets/screenshots/dogs_categories.png" 
        alt="Страница категории собак"
        align="center">
  
      А также высвечивается общий каталог всех товаров:
       <image 
        src="/frontend/src/assets/screenshots/all_catalog.png" 
        alt="Общий каталог"
        align="center">

      При клике в карточке товара на кнопку "В корзину":
       <image 
        src="/frontend/src/assets/screenshots/card.png" 
        alt="Карточка товара"
        align="center">

      Высвечивается счетчик товара - товар добавлен:
       (Добавление товара в саму корзину пользователя пока не реализовано)
       <image 
        src="/frontend/src/assets/screenshots/click_cart.png" 
        alt="Карточка товара"
        align="center">

      При клике на  "+" и "-" можно добавить еще один товар или удалить:
       <image 
        src="/frontend/src/assets/screenshots/good_counter.png" 
        alt="Счетчик"
        align="center">

      При клике на раздел - отображаются товары именно этого раздела:
        <image 
        src="/frontend/src/assets/screenshots/personal_ctg.png" 
        alt="Персональный раздел"
        align="center">


      <h4>Новинки</h4>
      <image 
        src="/frontend/src/assets/screenshots/news.png" 
        alt="Новинки"
        align="center">

      <h4>Популярные бренды</h4>
      <image 
        src="/frontend/src/assets/screenshots/brands.png" 
        alt="Бренды"
        align="center">

      <h4>Контакты</h4>
      <image 
        src="/frontend/src/assets/screenshots/contacts.png" 
        alt="Контакты"
        align="center">

      <h4>Подвал сайта</h4>
      <image 
        src="/frontend/src/assets/screenshots/footer.png" 
        alt="Подвал сайта"
        align="center">
      
      <h4>Авторизация</h4>
      В навигации есть иконка пользователя - при клике появится окно авторизации:
       <image 
        src="/frontend/src/assets/screenshots/screenshot5.png" 
        alt="Иконка пользователя в навигации"
        align="center">
        <image 
        src="/frontend/src/assets/screenshots/screenshot6.png" 
        alt="Окно авторизации (вход)"
        align="center">

      После входа пользователя, ему будет доступен свой личный кабинет:
       <image 
        src="/frontend/src/assets/screenshots/screenshot7.png" 
        alt="Профиль пользователя"
        align="center">
       <image 
      src="/frontend/src/assets/screenshots/screenshot8.png" 
      alt="Опции профиля"
      align="center">

      Если пользователь еще не зарегистрирован, при клике "Нажать здесь" высветится окно с регистрацией:
       <image 
        src="/frontend/src/assets/screenshots/screenshot9.png" 
        alt="Регистрация пользователя"
        align="center">


      <h4></h4>

      

   8. Чтобы добавить товар или отследить список товаров, можно перейти в папку admin:
      cd admin
      npm run dev

      Появится также ссылка с админ частью

      На странице добааления товара можно заполнить данные о новои товаре и при кнопке Отправить, данные отправятся в бд
      На странице списка товаров можно посмотреть все добавленные товары
  

<br/>  


## Используемые технологии в проекте  
<table><tr><td valign="top" width="33%">



### Frontend  
<div align="center">  
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
</div>

</td><td valign="top" width="33%">



### Backend  
<div align="center">  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>  
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
<a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="50" /></a>  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
<a href="https://www.gnu.org/software/bash/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg" alt="Bash" height="50" /></a>  
</div>
