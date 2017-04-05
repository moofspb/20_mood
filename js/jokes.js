function getRandomJoke() {
  $.getJSON('jokes.json', function (data) {
    var jokes = (data["jokes"]);
    var item = jokes[Math.floor(Math.random() * jokes.length)];
    var joke = item['phrase'];
    $(".joke-content").append(joke)
  });
}

getRandomJoke();

$(".action-button").click(function () {
  $(".joke-content").empty();
  $(getRandomJoke)
});
