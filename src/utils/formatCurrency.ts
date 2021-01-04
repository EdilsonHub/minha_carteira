const formatCurrency = (currency: number | string): string => {
    if(typeof currency === 'string') {
        currency = Number(currency);
    }
    return currency.toLocaleString(
        'pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        }
    );
} 

export default formatCurrency;