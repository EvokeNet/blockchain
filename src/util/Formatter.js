class Formatter {
  format(amount) {
    const formattedValue = Number(amount).toLocaleString() + '.0'
    const tickerSymbol = 'EVC';

    return `${ formattedValue } ${ tickerSymbol }`
  }
}

export default Formatter;
