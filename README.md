# WEB DEV

Para desenvolver o GreenCycle, utilizamos o Figma como ferramenta de design e prototipagem, permitindo uma visualização clara e colaborativa de como a aplicação deveria se parecer e funcionar. No front-end, optamos por utilizar o React para criar componentes reutilizáveis e manter um estado consistente em toda a aplicação. 

Além disso, seguimos a metodologia BEM (Block, Element, Modifier) para garantir uma estrutura de código organizada e escalável. Durante o desenvolvimento, dois contextos principais foram criados: um para lidar com a autorização dos usuários e outro para gerenciar o carrinho de compras. 

Para isso, aproveitamos o hook useContext do React, que nos permitiu compartilhar dados e funcionalidades entre componentes sem a necessidade de passar props manualmente. Além disso, utilizamos o hook useState para controlar o estado local de certos componentes, como a abertura e o fechamento de popups e menus. Isso nos proporcionou uma maneira simples e eficaz de lidar com a interatividade da interface do usuário. 

No backend, construímos rotas, modelos e controladores para lidar com usuários e produtos. Usando o conceito de API RESTful, garantimos uma comunicação eficiente entre o front-end e o back-end. As rotas foram implementadas para realizar operações CRUD (Create, Read, Update, Delete) nos modelos de usuário e produto. Para conectar o front-end ao back-end, utilizamos o fetch API.
