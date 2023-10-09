
import { Grid, InputAdornment, TextField } from "@mui/material"
import { React, useContext } from "react"
import { RealTableChartContext } from "../../pages/charts/RealTableChart";


export default function InputAmount(props) {
    const { firstAmount, setFirstAmount} = useContext(RealTableChartContext);
    const { disabled } = props;

  return (
      <Grid item>
      <TextField
        disabled = {disabled}
        value={firstAmount}
        onChange={e => setFirstAmount(e.target.value)}
        label="Amount"
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
        InputLabelProps={{
          style: { color: 'Purple' }
        }}
      />
    </Grid>
  )
}
