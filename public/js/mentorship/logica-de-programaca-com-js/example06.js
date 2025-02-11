function submitExample06(event, targetId) {
  $textarea = document.querySelector("#" + targetId + " .textarea");
  $form = document.querySelector("#" + targetId + " .form");

  return submitCodeGeneric(
    event,
    $textarea,
    function () {
      var newScript = document.createElement("script");
      newScript.classList.add("target-script");
      newScript.innerHTML = $textarea.value;

      var $script = document.querySelector("#" + targetId + " .target-script");

      if ($script) {
        $script.remove();
      }

      $textarea.appendChild(newScript);

      return (
        traduzir("en", "ola") === "Hello" &&
        traduzir("pt", "ola") === "Olá" &&
        traduzir("en", "tudo bem") === "How are you" &&
        traduzir("pt", "tudo bem") === "Como você está"
      );
    },
    function () {
      var parag = document.createElement("p");
      parag.innerHTML =
        "EN: " +
        traduzir("en", "ola") +
        "! " +
        traduzir("en", "tudo bem") +
        "?";
      $form.appendChild(parag);

      var parag = document.createElement("p");
      parag.innerHTML =
        "PT: " +
        traduzir("pt", "ola") +
        "! " +
        traduzir("pt", "tudo bem") +
        "?";
      $form.appendChild(parag);
    }
  );
}
