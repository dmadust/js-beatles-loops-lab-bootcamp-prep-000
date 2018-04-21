function theBeatlesPlay(musicians, instruments) {
  var playArray = [];
  for (var i = 0; i < musicians.length; i++) {
    playArray.push(`${ musicians[i] } plays ${ instruments[i] }`);
  }
  return playArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
  }
  return facts;
}