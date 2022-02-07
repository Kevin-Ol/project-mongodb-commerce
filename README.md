
# Projeto MongoDB Commerce

Projeto feito como critério avaliativo na escola de programação **Trybe**.

Projeto para praticar querys de atualização de documentos em um banco de dados não-relacional MongoDB. Nele foi possível aprender a realizar alterações em um ou
mais documentos, selecionando os documentos desejados através de determinados parâmetros, e atualizar campos simples como strings, números e datas, ou campos
complexos como arrays utilizando seus operadores próprios, bem como renomear, adicionar e excluir campos através do MongoDB.

## Instruções para reproduzir o projeto

### Pré requisitos

1. Possuir `mongodb` instalado

2. Clone o repositório
  * `git clone git@github.com:Kevin-Ol/project-mongodb-commerce.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd project-mongodb-commerce`

3. Instale as dependências
  * `npm install`

---

### Instruções para restaurar o banco de dados `commerce`

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como **_Connection refused_**, tente reiniciar sua instância.

2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `commerce`:
   ```sh
   DBNAME=commerce ./scripts/resetdb.sh assets/produtos
   ```

- A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

---

# Requisitos do projeto

Todos os arquivos devem estar dentro de uma pasta chamada challenges na raíz do projeto.

1 - Inclua o campo `criadoPor` em todos os documentos, colocando `"Ronald McDonald"` no valor desse campo.

2 - Inclua o campo `valorUnitario` em todos os documentos em que esse campo não existe e atribua a ele o valor `"0.00"`, com o tipo `NumberDecimal`.

3 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo.

Para isso, escreva no arquivo `desafio3.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua o campo `avaliacao` do tipo `NumberInt` e com o valor `0` em todos os documentos da coleção.

2. Crie uma query que incremente o valor do campo `avaliacao` em `5` em todos os sanduíches de carne do tipo `bovino`. Dica: utilize como filtro o campo `tags`.

3. Crie uma query que incremente o valor do campo `avaliacao` em `3` em todos os sanduíches de `ave`.

4. Crie uma query que retorne o `nome` e `avaliacao` de todos os sanduíches.

4 - Atribua a data corrente ao campo `ultimaModificacao` no sanduíche `Big Mac`.

5 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

6 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

7 - Remova o item `cebola` de todos os sanduíches.

8 - Remova o **primeiro** `ingrediente` do sanduíche `Quarteirão com Queijo`.

9 - Remova o **último** `ingrediente` do sanduíche `Cheddar McMelt`.

10 - Adicione a quantidade de vendas dos sanduíches por dia da semana.

Para isso, escreva no arquivo `desafio10.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua um _array_ com sete posições em todos os sanduíches. Cada uma delas representará um dia da semana, e cada posição iniciará em `0`. O _array_ deve se parecer como abaixo:
   ```json
   "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
   ```

- O primeiro item desse _array_ representa as vendas no **domingo**, o segundo item representa as vendas na **segunda-feira**, e assim até chegar ao último item, que representa as vendas no **sábado**.

2. Crie uma query que incremente as vendas de `Big Mac` às **quartas-feiras** em `60`.

3. Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo `bovino` e `pão` aos **sábados** em `120`.

4. Crie uma query que retorne o `nome` e `vendasPorDia` de todos os documentos.

11 - Insira os elementos `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.

12 - Ordene em todos os documentos os elementos do _array_ `valoresNutricionais` pelo campo `percentual` de forma descendente.

13 - Adicione o elemento `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

14 - Adicione o elemento `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

15 - Conte quantos produtos contêm `Mc` no nome, sem considerar letras maiúsculas ou minúsculas.

16 - Conte quantos produtos têm `4` ingredientes.

17 - Conte quantos documentos contêm as palavras `frango` ou `hamburguer` utilizando o operador `$text`.

18 - Conte quantos documentos contêm a **expressão** `feito com` utilizando o operador `$text`.

19 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos.

20 - Remova o campo `curtidas` do item `Big Mac`.

21 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`.

22 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`.
