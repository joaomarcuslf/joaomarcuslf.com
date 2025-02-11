document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-gh-project]').forEach(function ($proj) {
    var repo = $proj.getAttribute('data-gh-project');

    fetch('https://api.github.com/repos/' + repo).then(function (response) {
      return response.json();
    }).then(function (data) {
      $proj.querySelector('.fork a').innerText = data.forks_count;
      $proj.querySelector('.star a').innerText = data.stargazers_count;
    });
  });
});
