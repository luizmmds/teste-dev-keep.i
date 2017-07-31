# teste-dev

Este teste consiste na implementação de 5 pequenas funções em JS.

Cada um dos arquivos contém uma breve explicação da função que precisa ser
implementada e logo em seguida um teste para a função em questão:

- **equação-primeiro-grau.js**: você deve implementar a função calcularX(a, b, r) que encontra a raiz (valor de x) de equações do primeiro grau no formato ax + b = r.

- **maximo-e-minimo.js**: você deve implementar as funções obterMinimo(lista) e obterMaximo(lista). As duas funções recebem uma lista (array) de números inteiros e devem retornar o menor e maior número da lista respectivamente.

- **datas.js**: você deve implementar a função datasNoIntervalo(inicio, fim). A função recebe dois parametros, inicio e fim, que são objetos Date do JS e deve retornar uma lista (array) com todas as datas entre inicio e fim, incluindo estas duas.

- **dados-total.js**: você deve implementar a função calcularTotal(dados). A função recebe os dados que estão no arquivo ./dados/dados.json e precisa retornar a soma do campo 'valor' de todas as linhas.

- **dados-total-grupos.js**: você deve implementar a função calcularTotalPorGrupo(dados). A função recebe os dados que estão no arquivo ./dados/dados.json e precisa retornar a soma do campo 'valor' agrupada pelo campo 'grupo'.

## Entrega

Crie seu próprio repositório no Github com a resolução e nos envie o link.

## Testes

Para executar o teste de cada função, basta executar o respectivo arquivo, por exemplo: `node arquivo.js`.

## Instalação

Apenas clone esse repositório.

Não há dependências a serem instaladas, além do próprio NodeJS. Mas você pode utilizar
libs externas se desejar. Nesse caso, não esqueça de adicionar ao package.json.

## Dependências

- NodeJS (6.11.x ou +)

## Referências

- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://nodejs.org/api/fs.html
- https://nodejs.org/api/path.html
- https://nodejs.org/api/assert.html
