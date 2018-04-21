function theBeatlesPlay(musicians, instruments) {
  var playArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    playArray.push('${ musician } plays ${ instrument }');
  }
  return playArray;
}