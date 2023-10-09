import React, { useContext, useState } from "react";
import { Card, CardContent, Container, Grid, Typography, Button, Box } from "@mui/material";
import axios from "axios";
import SelectCountry from "./SelectCountry";
import InputAmount from "./InputAmount";
import Chart123 from "./Chart123";
import { RealTableChartContext } from "../../pages/charts/RealTableChart";
import './charts.css';

export default function CurrencyParentComponent() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(RealTableChartContext);
  const [resultCurrency, setResultCurrency] = useState(0);
  const [chartDataHistory, setChartDataHistory] = useState([]); // Store chart data history

  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  const [disableAmount, setDisableAmount] = useState(false);
  const [disableFromCurrency, setDisableFromCurrency] = useState(false);
  const [disableToCurrency, setDisableToCurrency] = useState(true);
  const [disableAddToChartButton, setAddToChartButton] = useState(true);

  const handleConvertClick = () => {
    if (firstAmount) {
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: "fca_live_49jfgbN2zuQFEuPN1zO2POWSlUPvm7dgOj175GRN",
          base_currency: codeFromCurrency,
          currencies: codeToCurrency,
        },
      })
        .then((response) => {
          const newResultCurrency = response.data.data[codeToCurrency];

          // Prepare chart data for the current conversion with a timestamp
          const currentChartData = {
            id: Date.now(), // Unique identifier based on timestamp
            toCountry: toCurrency,
            convertedValue: newResultCurrency * firstAmount,
          };

          // Update chart data history with the current conversion data
          setChartDataHistory((prevChartDataHistory) => [
            ...prevChartDataHistory,
            currentChartData,
          ]);

          setResultCurrency(newResultCurrency);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleLock = async () => {
    if (firstAmount > 0) {
      setDisableAmount(!disableAmount);
      setDisableFromCurrency(!disableFromCurrency);
      setDisableToCurrency(!disableToCurrency);
      setAddToChartButton(!disableAddToChartButton);
    }
    setChartDataHistory([]);
    setResultCurrency(0);
  };

  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem', marginTop:'5rem', padding:'1rem'}} >
      <Container maxWidth="md" xs={12} md={3} style={{ width: '50%', marginLeft:'0', padding:'0%'}}>
        <Card variant="outlined" style={{ borderRadius: 0}}>
          <CardContent style={{display: 'flex', flexDirection: 'column'}}>
            <Grid container spacing={2} style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
            <Typography variant="h5" sx={{ marginBottom: "1rem", textAlign:'center', color:"purple", fontWeight:'bold', padding:'1rem'}}>
              Compare Currenices!
            </Typography>
              <InputAmount disabled={disableAmount} />
              <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" disabled={disableFromCurrency}  />
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLock}
                  sx={{ marginTop: "1rem", width: "100%" }}
                >
                  Lock Amount and Base
                </Button>
              </Grid>
              <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" disabled={disableToCurrency}  />
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleConvertClick}
                  sx={{ marginTop: "1rem", width: "100%" }}
                  disabled={disableAddToChartButton}
                >
                  Convert
                </Button>
              </Grid>
            </Grid>
            {resultCurrency !== 0 && (
              <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
                <Typography>
                  {firstAmount} {fromCurrency} =
                </Typography>
                <Typography variant="h5" sx={{ marginTop: "5px", fontWeight: "bold" }}>
                  {resultCurrency * firstAmount} {toCurrency}
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
      <Chart123 xs={12} md={8} chartDataHistory={chartDataHistory} />
    </div>
  );
}
