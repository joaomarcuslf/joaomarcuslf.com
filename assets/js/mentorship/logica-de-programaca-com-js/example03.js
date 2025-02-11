function submitExample03(event, targetId) {
  $textarea = document.querySelector("#" + targetId + " .textarea")
  $scenario = document.querySelector("#" + targetId + " .scenario")

  submitCode(event, targetId, $scenario, $textarea, [[
    'var $boy01 = pegarElemento("example03_Boy01")',
    'var codigoBoy01 = pegarCodigo($boy01)',
    'var codigoAtual = "0001"',
    'if (codigoBoy01 == codigoAtual) {',
    'removerDaFila($boy01)',
    '}',
  ],
  [
    'var $boy01 = pegarElemento("example03_Boy01")',
    'var codigoBoy01 = pegarCodigo($boy01)',
    'var codigoAtual = "0001"',
    'if (codigoBoy01 === codigoAtual) {',
    'removerDaFila($boy01)',
    '}',
  ],
  [
    'var $boy01 = pegarElemento("example03_Boy01")',
    'var codigoBoy01 = pegarCodigo($boy01)',
    'var codigoAtual = "0001"',
    'if (codigoAtual === codigoBoy01) {',
    'removerDaFila($boy01)',
    '}',
  ],
  [
    'var $boy01 = pegarElemento("example03_Boy01")',
    'var codigoBoy01 = pegarCodigo($boy01)',
    'var codigoAtual = "0001"',
    'if (codigoAtual == codigoBoy01) {',
    'removerDaFila($boy01)',
    '}',
  ]]);
}
