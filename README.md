# AluraGeek

Este é um projeto, referente ao curso de Formação Front End da Oracle + Alura, de uma página de e-commerce desenvolvido utilizando HTML, CSS e JavaScript. O projeto simula uma API usando o JSON Server para realizar operações CRUD (Create, Read, Update, Delete) com os dados dos produtos. 

## Funcionalidades

- **Exibição de produtos**: Lista de produtos obtida a partir de uma API simulada.
- **Adicionar produtos**: Possibilidade de adicionar produtos ao catálogo via API.
- **Deletar produtos**: Remoção de produtos do catálogo.
- **Manipulação do DOM**: Atualização dinâmica da página com os dados dos produtos.
  
## Tecnologias Utilizadas

- **HTML**: Estrutura e layout da página.
- **CSS**: Estilização da página para uma interface agradável e responsiva.
- **JavaScript**: Manipulação do DOM e requisições à API.
- **JSON Server**: Simulação de API para operações com os produtos.

## Requisitos

- Node.js instalado
- JSON Server instalado globalmente

## Como Executar

1. **Clonar o repositório**:
    ```bash
    git clone https://github.com/matheus-marconi/AluraGeek.git
    ```
    
2. **Instalar JSON Server** (caso ainda não esteja instalado):
    ```bash
    npm install -g json-server
    ```

3. **Iniciar o JSON Server**:
    ```bash
    json-server --watch db.json
    ```
    
4. **Abrir o arquivo `index.html`** no navegador.

5. **Para adicionar a imagem ao produto**: coloque a imagem na pasta `imagens` do projeto. Já com a página carregada, insira o caminho `imagens/nomeDaImagem.extensão` no campo "Imagem" do formulário de adição de produtos.

## Estrutura de Arquivos

- `index.html`: Página principal do e-commerce.
- `styles.css`: Estilos para a página.
- `.js`: Scripts para manipulação de eventos e dados.
- `db.json`: Arquivo JSON utilizado pelo JSON Server para simular a API.

## Endpoints da API

Os endpoints configurados no JSON Server permitem interações simples com os produtos:
- **GET** `/produtos`: Retorna a lista de produtos.
- **POST** `/produtos`: Adiciona um novo produto.
- **DELETE** `/produtos/:id`: Remove um produto pelo ID.

---

Desenvolvido por Matheus Marconi Santos https://github.com/matheus-marconi mmarconi05@gmail.com
