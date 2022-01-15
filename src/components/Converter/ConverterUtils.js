const conversion = (currency, baseValue, currencies) => {
  const currencyCode = currencies.find((money) => {
    return money.name === currency;
  });
  return Math.round(baseValue * currencyCode.rate * 100) / 100;
};

export { conversion };