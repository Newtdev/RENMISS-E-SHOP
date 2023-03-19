import currency from 'currency.js';

export const FormatCurrency = ({amount}) => {
  return currency(amount, {symbol: 'R'}).format();
};
