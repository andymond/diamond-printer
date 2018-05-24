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

  print_diamond() {
    let letters = this.letter_range('A', this.letter)
    let spaces = letters.length
    let gap_spaces = 0
    let printout

    letters.forEach((letter) => {
      --spaces
      let lspace = ' '.repeat(spaces)
      let gap = ' '.repeat(gap_spaces)
      if (letter != letters[0]) {
        ++gap_spaces
        printout = lspace + letter + gap + letter
      } else {
        printout = lspace + letter
      }
      ++gap_spaces
      console.log(printout)
    })

    --gap_spaces
    --gap_spaces

    let backwards = letters.reverse()
    backwards.shift()
    backwards.forEach((letter) => {
      ++spaces
      --gap_spaces
      --gap_spaces
      let lspace = ' '.repeat(spaces)
      if (letter != backwards[backwards.length -1]) {
        let gap = ' '.repeat(gap_spaces)
        printout = lspace + letter + gap + letter
      } else {
        printout = lspace + letter
      }
      console.log(printout)
    })
  }
}

x = new Printer('T')
x.print_diamond()
y = new Printer('z')
y.print_diamond()
