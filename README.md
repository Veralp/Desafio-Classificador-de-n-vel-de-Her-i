# Classificador de Nível de Herói 🦸‍♂️

Este projeto é um programa simples que classifica heróis com base em sua quantidade de experiência (XP). A classificação vai de **Ferro** a **Radiante**, dependendo do nível de XP fornecido pelo usuário.

## 📝 Funcionalidades

- Solicita o nome do herói.
- Solicita a quantidade de XP do herói.
- Classifica o herói em uma das seguintes categorias:
  - **Ferro**: XP menor que 1.000
  - **Bronze**: XP entre 1.001 e 2.000
  - **Prata**: XP entre 2.001 e 5.000
  - **Ouro**: XP entre 5.001 e 7.000
  - **Platina**: XP entre 7.001 e 8.000
  - **Ascendente**: XP entre 8.001 e 9.000
  - **Imortal**: XP entre 9.001 e 10.000
  - **Radiante**: XP maior ou igual a 10.001

## 🚀 Como executar

### Pré-requisitos
- Node.js instalado. [Clique aqui para baixar](https://nodejs.org/).
- Editor de código como [VS Code](https://code.visualstudio.com/).

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/Veralp/Desafio-Classificador-de-n-vel-de-Her-i.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd Desafio-Classificador-de-n-vel-de-Her-i
   ```
3. Instale as dependências necessárias:
   ```bash
   npm install readline-sync
   ```
4. Execute o programa:
   ```bash
   node index.js
   ```

### Exemplo de execução
1. O programa pedirá o nome do herói:
   ```
   Digite o nome do herói:
   ```
   Exemplo de entrada:
   ```
   Batman
   ```

2. Em seguida, o programa pedirá o XP do herói:
   ```
   Digite a quantidade de XP do herói:
   ```
   Exemplo de entrada:
   ```
   7500
   ```

3. A saída será exibida no terminal:
   ```
   O Herói de nome Batman está no nível de Platina
   ```

## 📂 Estrutura do Projeto

```plaintext
├── index.js          # Arquivo principal com a lógica do programa
├── README.md         # Documentação do projeto
└── package.json      # Arquivo de configuração do Node.js
```

## 🛠️ Tecnologias Utilizadas

- **JavaScript**: Linguagem principal do projeto.
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **readline-sync**: Biblioteca para entrada de dados via terminal.

## 📚 Aprendizados

Este projeto foi criado para praticar:
- Variáveis
- Estruturas condicionais (`if-else`)
- Entrada e saída de dados no terminal
- Manipulação de strings e números

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie um branch para sua feature (`git checkout -b feature/sua-feature`).
3. Faça o commit das mudanças (`git commit -m 'Adicionei nova feature'`).
4. Faça um push para o branch (`git push origin feature/sua-feature`).
5. Abra um Pull Request.
😊
