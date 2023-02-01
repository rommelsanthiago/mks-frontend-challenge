function formatCurrency(currency: string) {
    const formattedCurrency = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseInt(currency));
  
    return formattedCurrency;
}
  
export { formatCurrency };
  