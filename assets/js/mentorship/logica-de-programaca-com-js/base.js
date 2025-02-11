function validarCodigo(codigo, linhas) {
  var valido = true

  for (var i = 0; i < linhas.length; i++) {
    var linha = linhas[i]

    valido = valido && codigo.includes(linha)
  }

  return valido
}

function pegarElemento(id) {
  return document.getElementById(id)
}

function encontrar(elemento1, elemento2) {
  elemento1.classList.remove("to-left")
  elemento1.classList.add("to-right")
  elemento2.classList.remove("to-right")
  elemento2.classList.add("to-left")
}

function disfarcar(elemento1) {
  document.querySelector("#" + elemento1.id + " figure").classList.toggle("is-mirrored")
  document.querySelector("#" + elemento1.id + " img").src = "/assets/images/mentorship/disfarce-01.webp"
}

function pegarCodigo(elemento1, codigo) {
  $codigo = document.querySelector("#" + elemento1.id + " .codigo")
  return $codigo.innerHTML
}

function fantasia(elemento1, fantasia) {
  elemento1.fantasia = fantasia;

  return elemento1;
}

function removerDaFila(elemento, time) {
  if (!time) {
    elemento.remove()
  } else {
    setTimeout(function () {
      elemento.remove()
    }, time);
  }
}

function removerDoCarnaval(elemento) {
  console.log(elemento.id)

  document.getElementById(elemento.id).remove()
}

function submitCode(event, targetId, $scenario, $textarea, ...lines) {
  event.preventDefault();

  $textarea.parentElement.classList.toggle("is-loading");

  setTimeout(function () {
    $textarea.classList.remove("is-shake-error-animated");
    $textarea.classList.remove("is-success");

    if (
      lines.some(line => validarCodigo($textarea.value, line))
    ) {
      var newScript = document.createElement('script');
      newScript.classList.add("target-script")
      newScript.innerHTML = $textarea.value

      var $script = document.querySelector("#" + targetId + " .target-script")

      if ($script) {
        $script.remove()
      }

      $scenario.appendChild(newScript);

      $textarea.classList.add("is-success");
    } else {
      $textarea.classList.add("is-shake-error-animated");
    }

    $textarea.parentElement.classList.toggle("is-loading");
  }, 1000);
}

document.querySelectorAll(".has-popup-label").forEach(function (elem) {
  var text = document.createElement("span");
  text.innerHTML = elem.id;
  text.classList.add("tooltip");

  elem.appendChild(text);

  elem.addEventListener("mouseover", function () {
    text.classList.add("is-shown");
  });

  elem.addEventListener("mouseout", function () {
    text.classList.remove("is-shown");
  });
});
