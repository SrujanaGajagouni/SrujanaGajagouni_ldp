import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Image from '../../atoms/Image';
import Typography from '../../atoms/Typography';

const Container = styled(Stack)({
  flexDirection: 'row',
  gap: '16px',
});

const TextContainer = styled(Stack)({
  flexDirection: 'column',
});

const Row = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '330px',
});

interface CryptoProps {
  src: string;
  alt: string;
  name: string;
  value: string;
  description: string;
  percentage: string;
}

const CryptoDescription: React.FC<CryptoProps> = ({ src, alt, name, value, description, percentage }) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
      <TextContainer>
        <Row>
          <Typography variant='body1' label={name} />
          <Typography variant='body1' label={value} />
        </Row>
        <Row>
          <Typography variant='caption' label={description} />
          <Typography variant='caption' label={percentage} />
        </Row>
      </TextContainer>
    </Container>
  );
}

export default CryptoDescription;
