import React, { useState, useEffect } from "react";
import ButtonComponent from "../../atoms/Button";
import TextComponent from "../../atoms/Typography";
import { Stack, Divider } from '@mui/material';
import SliderComponent from "../../atoms/Slider";
import Header from "../../molecules/SummaryField";
import './index.css';

interface InfoProps {}

const Main: React.FC<InfoProps> = () => {
  const fixedValue = 283442.64;
  const maxValue = 880000.00;

  const [sliderValue, setSliderValue] = useState(fixedValue);
  const [payBackAmount, setPayBackAmount] = useState<number>(0);
  const [ratePercentage, setRatePercentage] = useState<number>(0);
  const [totalPayout, setTotalPayout] = useState<number>(0);
  const [interestAmount, setInterestAmount] = useState<number>(0);

  useEffect(() => {
    const rate = 0.12; 
    let payBackAmountCalc;
    if (sliderValue > 5000 && sliderValue < 850000.00) {
      payBackAmountCalc = sliderValue + 4560.20;
    } else {
      payBackAmountCalc = sliderValue ;
    }
    const interest = payBackAmountCalc * rate;
    const ratePercentageCalc = rate * 100;
    const totalPayoutCalc = payBackAmountCalc - interest;

    setPayBackAmount(payBackAmountCalc);
    setRatePercentage(ratePercentageCalc);
    setTotalPayout(totalPayoutCalc);
    setInterestAmount(interest);
  }, [sliderValue]);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleReset = () => {
    setSliderValue(fixedValue);
  };

  return (
    <Stack className="stack-container" direction='column' spacing={2}>
      <Header />
      <Stack direction='row' spacing={28}>
        <TextComponent label='Term' variant='body1' className="body-primary"></TextComponent>
        <TextComponent label='12 months' variant='body1' className="body-secondary"></TextComponent>
      </Stack>
      <Stack direction='row' spacing={23}>
        <TextComponent label='Selected contracts' variant='body1' className="body-primary"></TextComponent>
        <TextComponent label='3' variant='body1' className="body-secondary"></TextComponent>
      </Stack>
      <Stack direction='row' spacing={17}>
        <TextComponent label='Slide to autoselect' variant='body1' className="body-primary"></TextComponent>
        <ButtonComponent size='small' label="Reset" type='reset' id='buttonStyles' onClick={handleReset} />
      </Stack>
      <SliderComponent color='primary' value={sliderValue} min={0} max={maxValue} onChange={handleSliderChange} />
      <Stack direction='row' spacing={1}>
        <TextComponent label={`$${sliderValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`} variant='body1' className="text-primary"></TextComponent>
        <TextComponent label='selected of' variant='body1' className="body-primary"></TextComponent>
        <TextComponent label={`$${maxValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`} variant='body1' className="body-secondary"></TextComponent>
      </Stack>
      <Stack direction='row' spacing={15}>
        <TextComponent label='Pay back amount' variant='body1' className="body-primary"></TextComponent>
        <TextComponent label={`$${payBackAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`} variant='body1' className="body-secondary"></TextComponent>
      </Stack>
      <Stack direction='row' spacing={18}>
        <TextComponent label='Rate %' variant='body1' className="body-primary"></TextComponent>
        <Stack direction='row'>
          <TextComponent label={`(${ratePercentage.toFixed(2)}%)`} variant='body2'></TextComponent>
          <TextComponent label={`$${interestAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`} variant='body1' className="body-secondary"></TextComponent>
        </Stack>
      </Stack>
      <Divider />
      <Stack direction='column'>
        <Stack direction='row' spacing={7}>
          <TextComponent label='Total Payout' variant='body1' className="body-primary"></TextComponent>
          <TextComponent label={`$${totalPayout.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`} variant='h4' className="body-secondary"></TextComponent>
        </Stack>
        <Stack>
          <ButtonComponent label='Review Your Credit' variant='contained' color='primary' id='buttonStyle'/>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Main;
