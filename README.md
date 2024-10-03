

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
    align="center"
    caption="Скриншот папок проекта">


    


 4. Сначала нужно перейти в папку backend, открыть терминал и прописать следующую команду:
    cd backend
    npm run server (при этом, обязательно! должна запущена mongodb (сама база данных)

    Это нужно для того, чтобы проект подключился к нашей базе и данные были переданы на сайт

  5. После того, как  в терминале написано, что база данных подключена, можно переходить к папке frontend:
     cd frontend
     npm run dev

     Запускается сайт и можно перейти по ссылке на локальный хост и посмотреть сам сайт

   6. Чтобы добавить товар или отследить список товаров, можно перейти в папку admin:
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
