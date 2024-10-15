const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles time after 30 - 6:43', () => {
    const timeInWords = convertTimeToWords('6:43');
    expect(timeInWords).toBe('seventeen to seven');
  });

  it('Handles times exactly 45 - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times exactly 15 - 5:15', () => {
    const timeInWords = convertTimeToWords('5:15');
    expect(timeInWords).toBe('quarter past five');
  });

  it('Handles times before 30 - 1:17', () => {
    const timeInWords = convertTimeToWords('1:17');
    expect(timeInWords).toBe('seventeen past one');
  });

  it("Handles oclock - 4:00", () => {
    const timeInWords = convertTimeToWords('4:00');
    expect(timeInWords).toBe("four o'clock");
  });
});
