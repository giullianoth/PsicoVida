# PsicoVida - Site Institucional | Institutional Website Project

[![HTML 5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS 3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)

---
**Disponível em | _Avaliable in_: Português - BR | _English_**

Este é um projeto front-end de um site institucional fictício para um consultório psicológico. O layout é uma vídeo-aula ministrada pela Escola de Sites, construído na plataforma WordPress. Para tornar o projeto mais desafiador, minha versão foi construída com as linguagens HTML, CSS e JavaScript.

*This is a front-end project for a fictitious institutional website for a psychological office. The layout is a video lesson taught by Escola de Sites, built on the WordPress platform. To make the project more challenging, my version was built with HTML, CSS and JavaScript languages.*

## Conteúdo | Content

- [Status do projeto | Project status](#status-do-projeto--project-status)
- [Layout](#layout)
- [Tecnologias utilizadas | Technologies used](#tecnologias-utilizadas--technologies-used)
- [Como instalar | How to install](#como-instalar--how-to-install)
- [Autor | Author](#autor--author)

---

## Status do projeto | Project status

Layout do projeto finalizado, com algumas funcionalidades a serem implementadas. Aberto a correções e propostas de melhoria.

*Finished project layout, with some features to be implemented. Open to corrections and suggestions for improvement.*

## Layout

Construído a partir do método *mobile-first*, o projeto é responsivo, ou seja, é adaptável aos mais variados tamanhos e resoluções de telas, conforme demonstrado a seguir.

*Built from the mobile-first method, the project is responsive, that is, it is adaptable to the most varied sizes and screen resolutions, as shown below.*

![Captura de tela em 375px | Screenshot in 375px](assets/images/screenshots/Screenshot-375px.jpeg)

Captura de tela em 375px | Screenshot in 375px

---

![Captura de tela em 768px | Screenshot in 768px](assets/images/screenshots/Screenshot-768px.jpeg)

Captura de tela em 768px | Screenshot in 768px

---

![Captura de tela em 1440px | Screenshot in 1440px](assets/images/screenshots/Screenshot-1440px.jpeg)

Captura de tela em 1440px | Screenshot in 1440px

---

Você também pode conferir a página acessando [este link](https://psicovida.vercel.app/).

**Observação:** Por se tratar de um projeto para fins acadêmicos, alguns links contidos na página não funcionarão

*You can also check the page by accessing [this link](https://psicovida.vercel.app/).*

*__Note:__ As it is a project for academic purposes, some links contained on the page will not work.*

## Tecnologias utilizadas | Technologies used

Foram utilizadas as seguintes tecnologias para a construção desta página:

*The following technologies were used to build this page:*

- [HTML 5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS 3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Sass](https://sass-lang.com/)

Vale lembrar que foram aplicados o uso de tags semânticas ao HTML, para tornar a página com acessibilidade facilitada e seguir as boas práticas do desenvolvimento web.

O uso do preprocessador CSS (nesse caso o Sass) torna mais produtiva a aplicação das folhas de estilo, o que possibilita a manutenibilidade posteriormente.

*It is worth remembering that the use of semantic tags was applied to the HTML, to make the page easier to access and follow the good practices of web development.*

*Using the CSS preprocessor (in this case Sass) makes the application of stylesheets more productive, which enables later maintainability.*

## Como instalar | How to install

Para baixar e instalar o projeto no seu computador, siga os seguintes passos:

- Instale o editor [VS Code](https://code.visualstudio.com/) (recomendo fortemente, mas se há outro editor do seu gosto, não tem problema) e abra o projeto nele.
- Se você está usando VS Code, instale a extensão "[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)", ela que vai converter seu Sass em CSS. Após instalado:
    - Clique no ícone de engrenagem, depois em "Configurações de extensão" e depois em "settins.json";
    - Em ```settings.json``` acrescente os seguintes parâmetros:
    ```json
    "liveSassCompile.settings.formats":[ 
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "assets/styles/css"
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "assets/styles/css"
        },
    ]
    ```
    - Depois, na parte inferior do editor, clique em "Watch Sass".
- Se você não está usando VS Code, você precisa instalar o [Node JS](https://nodejs.org/en) para usar o Sass.
    - Depois de instalar o Node JS, abra o prompt de comando e navegue até o diretório do projeto.
    ```
    cd [caminho do projeto]
    ```
    - Instale o Sass com o ```npm```.
    ```
    npm install -g sass
    ```
    - Ative o compilador com o seguinte comando: (Para criar a versão minificada do CSS utilize a flag ```--style=compressed```)
    ```
    sass assets/styles/scss/style.scss:assets/styles/css/style.css --watch
    ```
- Divirta-se!

*To download and install the project on your computer, follow these steps:*

- *Install the [VS Code](https://code.visualstudio.com/) editor (I highly recommend it, but if there's another editor you like, no problem) and open the project in it.*
- *If you are using VS Code, install the "[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)" extension, which will convert your Sass into CSS. After installed:*
    - *Click on the gear icon, then on "Extension settings" and then on "settins.json";*
    - *In ```settings.json``` add the following parameters:*
    ```json
    "liveSassCompile.settings.formats":[ 
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "assets/styles/css"
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "assets/styles/css"
        },
    ]
    ```
    - *Then, at the bottom of the editor, click on "Watch Sass".*
- *If you are not using VS Code, you need to install [Node JS](https://nodejs.org/en) to use Sass.*
    - *After installing Node JS, open the command prompt and navigate to your project directory.*
    ```
    cd [project path]
    ```
    - *Install Sass with ```npm```.*
    ```
    npm install -g sass
    ```
    - *Activate the compiler with the following command: (To create the minified version of the CSS use the flag ```--style=compressed```)*
    ```
    sass assets/styles/scss/style.scss:assets/styles/css/style.css --watch
    ```
- *Enjoy it!*

## Autor | Author

Feito com :heart: por este cara sonhador:

*Made with :heart: by this dreamy guy:*

| <img src="https://avatars.githubusercontent.com/u/106249494?v=4" width="100px" style="border-radius: 50%"> **Giulliano Guimarães** |
| ---------------------------------------------------------------------------------------------------------------------------------- |
|[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/giullianoth) [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/giullianoth/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giullianoth/) [![GMail](https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white)](mailto:llthguimaraes@gmail.com) |
---