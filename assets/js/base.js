document.addEventListener('DOMContentLoaded', function () {
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        var target = el.dataset.target;
        var $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  var urlInfo = window.location.href.split('/')

  var activeRouter = (urlInfo[3] || 'home') + '-navitem';

  var elmList = document.getElementsByClassName(activeRouter);

  for (var i = 0; i < elmList.length; i++) {
    var elm = elmList[i];

    elm.classList.toggle('is-active');
  }
});

function smoothScroll(selector) {
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  var winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight

  var block = 'end';

  if (scrollTop > winHeight / 2) {
    block = 'start';
  }

  var element = document.querySelector(selector);
  element.scrollIntoView({
    behavior: 'smooth',
    block: block
  });
}

function expandView(target) {
  var $highlights = document.querySelector("#" + target + " .is-highlight");
  var $button = document.querySelector("#" + target + " .button.has-icon");

  $button.classList.toggle('is-flipped');

  $highlights.classList.toggle('is-expanded');

  setTimeout(function () {
    smoothScroll("#" + target);
  }, 250)
}

function showDescription(id) {
  var cleanUpElm = document.getElementsByClassName('event is-active');

  if (cleanUpElm.length) {
    cleanUpElm[0].classList.toggle('is-active');
  }

  var elm = document.getElementById(id);
  elm.classList.toggle('is-active');

  var description = document.getElementById("timelineDescription");
  description.innerHTML = elm.children[1].innerHTML;

  // Scroll to the element
  smoothScroll(".timeline");
}

function checkURLForTag() {
  var tag = window.location.hash.substr(1);

  if (tag) {
    filterPosts(tag);
  }
}

function getTagFromEvent(event) {
  event.preventDefault();

  return event.target.href.split('#')[1];
}

function filterPosts(tag) {
  var $posts = document.querySelectorAll(".images-section-item");

  for (var i = 0; i < $posts.length; i++) {
    var $post = $posts[i];

    var tags = $post.dataset.tags.toLowerCase().replace(/\ /g, "-").split(',');

    if (tags.indexOf(tag) < 0) {
      $post.classList.add('is-hidden');
    } else {
      $post.classList.remove('is-hidden');
    }
  }
}
