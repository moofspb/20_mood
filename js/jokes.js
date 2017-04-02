function getRandomJoke() {
  $.getJSON('jokes.json', function (data) {
    var jokes = (data["jokes"]);
    var item = jokes[Math.floor(Math.random() * jokes.length)];
    var joke = item['phrase'];
    $("p").append(joke)
  });
}

getRandomJoke();

$("a").click(function () {
  $("p").empty();
  $(getRandomJoke)
});
