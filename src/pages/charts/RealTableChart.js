import { React, createContext, useState } from "react";
import ResponsiveAppBar from "../../components/navbar/Navbar";

export const RealTableChartContext = createContext();
const RealTableChart = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("🇺🇸 USD - United States");
  const [toCurrency, setToCurrency] = useState("🇦🇺 AUD - Australia");
  const [firstAmount, setFirstAmount] = useState("");

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount
  };
  return (
    <div>
    <ResponsiveAppBar />
    <RealTableChartContext.Provider value={value}>
      {children}
    </RealTableChartContext.Provider>
    </div>
  );
};

export default RealTableChart;
