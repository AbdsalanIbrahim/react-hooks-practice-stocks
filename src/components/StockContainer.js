import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer({ onBuyStock, stocks }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onStockClick={onBuyStock} />
      ))}
    </div>
  );
}

export default StockContainer;
