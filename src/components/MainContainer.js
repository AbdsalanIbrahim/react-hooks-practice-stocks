const [sortOption, setSortOption] = useState("Alphabetically");
const [filterOption, setFilterOption] = useState("All");

const handleSortChange = (option) => setSortOption(option);
const handleFilterChange = (type) => setFilterOption(type);

const filteredStocks = stocks
  .filter((stock) => filterOption === "All" || stock.type === filterOption)
  .sort((a, b) => {
    if (sortOption === "Alphabetically") {
      return a.ticker.localeCompare(b.ticker);
    } else {
      return a.price - b.price;
    }
  });

return (
  <div>
    <SearchBar onSortChange={handleSortChange} onFilterChange={handleFilterChange} />
    <StockContainer stocks={filteredStocks} onBuyStock={handleBuyStock} />
    <PortfolioContainer portfolio={portfolio} onSellStock={handleSellStock} />
  </div>
);
