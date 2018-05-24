class Printer {
  constructor(letter) {
    this.letter = letter
  }

  letter_range(start, stop) {
    var letters = []
    for (var i = start.charCodeAt(0), end = stop.charCodeAt(0); i <= end; ++i ) {
      letters.push(String.fromCharCode(i));
    }
    return letters
  }
}
