// import React from 'react';
import CryptoDescription from '../../molecules/CryptoDescription';
import Typography from '../../atoms/Typography';
import { Stack } from '@mui/material';
import './index.css';

const PriceCorrelationDescription = () => {
  const cryptoData = [
    { src: '/assets/icons/Bitcoin.svg', alt: 'bitcoin-image', name: 'Bitcoin', value: '$3,285,553.73', description: 'Moves tightly together', percentage: '100%' },
    { src: '/assets/icons/Ethereum.svg', alt: 'Ethereum-image', name: 'Ethereum', value: '$230,966.85', description: 'Moves tightly together', percentage: '86%' },
    { src: '/assets/icons/XRP.svg', alt: 'XRP-image', name: 'XRP', value: '$60.20', description: 'Moves tightly together', percentage: '10%' },
    { src: '/assets/icons/Tether.svg', alt: 'Tether-image', name: 'Tether', value: '$74.28', description: 'Moves tightly together', percentage: '2%' },
  ];

  return (
    <Stack className='PriceCorrelationClass'>
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
    </Stack>
  );
}

export default PriceCorrelationDescription;
