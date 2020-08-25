(function (window) {
var names = ["Chandler", "Joey", "Monica", "Ross", "Janice", "Rachel", "Judi", "Jack", "Phoebe", "Gunther"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
    if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
