function theBeatlesPlay(musicians, instruments) {
  var playArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var bla = '${ musician } plays ${ instrument }';
    playArray.push('bla');
  }
  return playArray;
}