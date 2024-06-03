# WEB DEV

Para desenvolver o GreenCycle, utilizamos o Figma como ferramenta de design e prototipagem, permitindo uma visualização clara e colaborativa de como a aplicação deveria se parecer e funcionar. No front-end, optamos por utilizar o React para criar componentes reutilizáveis e manter um estado consistente em toda a aplicação. 

Além disso, seguimos a metodologia BEM (Block, Element, Modifier) para garantir uma estrutura de código organizada e escalável. Durante o desenvolvimento, dois contextos principais foram criados: um para lidar com a autorização dos usuários e outro para gerenciar o carrinho de compras. 

Para isso, aproveitamos o hook useContext do React, que nos permitiu compartilhar dados e funcionalidades entre componentes sem a necessidade de passar props manualmente. Além disso, utilizamos o hook useState para controlar o estado local de certos componentes, como a abertura e o fechamento de popups e menus. Isso nos proporcionou uma maneira simples e eficaz de lidar com a interatividade da interface do usuário. 

No backend, construímos rotas, modelos e controladores para lidar com usuários e produtos. Usando o conceito de API RESTful, garantimos uma comunicação eficiente entre o front-end e o back-end. As rotas foram implementadas para realizar operações CRUD (Create, Read, Update, Delete) nos modelos de usuário e produto. Para conectar o front-end ao back-end, utilizamos o fetch API.

# Como usar o site

Bem-vindo ao Marketplace de Produtos Reciclados! Abaixo estão algumas instruções para você começar a explorar e utilizar nosso site:

1. **Navegação**: 
   - Acesse o site em [aqui](https://green-cycle.netlify.app/sobre).
   - Utilize o menu de navegação para explorar as diferentes páginas disponíveis.

2. **Registro/Login**:
   - Se é a sua primeira vez aqui, clique em "Registrar" para criar uma conta.
   - Se você já é um membro, basta clicar em "Login" para acessar sua conta.

3. **Busca e Compra**:
   - Utilize a barra de busca para encontrar produtos específicos ou navegue pelas categorias para descobrir novas opções.
   - Ao encontrar um produto que deseja comprar, clique no icone de "+" para adicioná-lo direto à sacola ou clique nele para ver mais detalhes e, em seguida, clique em "Adicionar ao carrinho" para iniciar o processo de compra.

4. **Carrinho e Checkout**:
   - Acesse sua sacola de compras clicando no ícone de sacola de compras no canto superior direito da página.
   - Caso possua cumpom de desconto, vocÊ pode inseri-lo no campo "cupom de desconto" e aplicá-lo clicando em "aplicar".
   - Revise os itens em seu carrinho e clique em "Finalizar Compra" para prosseguir para o processo de checkout.

5. **Suporte**:
   - Se você tiver alguma dúvida sobre um produto ou encontrar algum problema durante o processo de compra, entre em contato conosco clicando no icone de contato presente na barra de navegação de nosso site.

Esperamos que estas instruções facilitem sua experiência ao usar nosso Marketplace de Produtos Reciclados. Para mais informações sobre o site, consulte a seção "Sobre" do site.
