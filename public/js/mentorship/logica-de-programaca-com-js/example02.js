function submitExample02(event, targetId) {
  $textarea = document.querySelector("#" + targetId + " .textarea");
  $scenario = document.querySelector("#" + targetId + " .scenario");

  submitCode(event, targetId, $scenario, $textarea, [
    ['var $boy = pegarElemento("example02_Boy01")', "disfarcar($boy)"],
  ]);
}
