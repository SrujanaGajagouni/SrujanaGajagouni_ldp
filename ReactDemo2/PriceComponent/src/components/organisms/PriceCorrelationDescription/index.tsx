// import React from 'react';
import CryptoDescription from '../../molecules/CryptoDescription';
import Typography from '../../atoms/Typography';
import { Stack } from '@mui/material';
import cryptoData from '../../../constants';
import { styled } from '@mui/material/styles';

const PriceCorrelationContainer = styled(Stack)({
  width: '397px',
  height: '310px',
  borderRadius: '4px',
  gap: '16px',
  backgroundColor: '#ffffff',
  padding: '20px',
  justifyContent: 'space-between',
});

const PriceCorrelationDescription = () => {
  return (
    <PriceCorrelationContainer>
      <Typography variant='subtitle1' label='Price correlation with' />
      {cryptoData.map((crypto, index) => (
        <CryptoDescription
          key={index}
          src={crypto.src}
          alt={crypto.alt}
          name={crypto.name}
          value={crypto.value}
          description={crypto.description}
          percentage={crypto.percentage}
        />
      ))}
    </PriceCorrelationContainer>
  );
}

export default PriceCorrelationDescription;
