function submitExample01(event, targetId) {
  $textarea = document.querySelector("#" + targetId + " .textarea")
  $scenario = document.querySelector("#" + targetId + " .scenario")

  submitCode(event, targetId, $scenario, $textarea, [[
    'var $girl01 = pegarElemento("example01_Girl01")',
    'var $girl02 = pegarElemento("example01_Girl02")',
    'encontrar($girl01, $girl02)',
  ]]);
}
