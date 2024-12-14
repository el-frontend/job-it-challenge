interface CurrencyFormatOptions {
    amount: number;
    options?: Intl.NumberFormatOptions;
  }
  
  export const fCurrency = ({
    amount,
    options = { style: 'currency', currency: 'USD', currencyDisplay: 'code' },
  }: CurrencyFormatOptions) => {
    return new Intl.NumberFormat('en-US', options).format(amount);
  };
  