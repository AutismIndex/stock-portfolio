const portfolio = [
    { name: 'Apple', ticker: 'AAPL', shares: 10, price: 145.09 },
    { name: 'Microsoft', ticker: 'MSFT', shares: 5, price: 258.36 },
    { name: 'Amazon', ticker: 'AMZN', shares: 2, price: 3399.44 },
];

const portfolioDiv = document.getElementById('portfolio');

portfolio.forEach(stock => {
    const stockDiv = document.createElement('div');
    stockDiv.innerHTML = `<strong>${stock.name} (${stock.ticker})</strong>: ${stock.shares} shares at $${stock.price.toFixed(2)} each`;
    portfolioDiv.appendChild(stockDiv);
});
