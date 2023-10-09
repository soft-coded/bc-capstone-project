import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material"
import useAxios from "./hooks/axios_route_file";

const SelectCountry = (props) => {
  const { value, setValue, label, disabled } = props;
  const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");

  if(loaded) {
    return (
      <Grid item>
        <Skeleton variant="rounded" height={60}/>
      </Grid>
    )
  }
  if(error) {
    return "Something went wrong!"
  }

  const dataFilter = data.filter(item => "currencies" in item);
  const dataCountries = dataFilter.map(item => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
  });

  return (
    <Grid item>
      <Autocomplete
        value={value}
        disableClearable
        disabled={disabled} // Add the disabled prop here
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={dataCountries}
        renderInput={(params) => <TextField {...params} label={label} InputLabelProps={{
          style: { color: 'Purple' }
        }}/>}
        
      />
    </Grid>
  )
}

export default SelectCountry