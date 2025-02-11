function submitExample05(event, targetId) {
  $textarea = document.querySelector("#" + targetId + " .textarea");
  $scenario = document.querySelector("#" + targetId + " .scenario");

  submitCode(event, targetId, $scenario, $textarea, [
    [
      "var $lista = [",
      'pegarElemento("example05_Boy01"),',
      'pegarElemento("example05_Girl01"),',
      'pegarElemento("example05_Girl02"),',
      "]",
      "for (var contador = 0; contador < $lista.length; contador++) {",
      "var $elemento = $lista[contador];",
      "disfarcar($elemento);",
      "}",
    ],
  ]);
}
