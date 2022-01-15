const conversion = (currency, baseValue, currencies) => {
  const currencyCode = currencies.find((money) => {
    return money.name === currency;
  });
  return Math.round(baseValue * currencyCode.rate * 100) / 100;
};

const filter = (currencies, search) => {
  let filteredCurrencies = currencies;
  if (search.length > 0) {
    filteredCurrencies = currencies.filter((money) => {
      return money.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  return filteredCurrencies;
};

export { conversion, filter };
