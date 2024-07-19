import Image from '../../atoms/Image';
import Typography from '../../atoms/Typography';
import { Stack } from '@mui/material';
import './index.css';

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
    <Stack direction='row' spacing={2}>
      <Stack>
        <Image src={src} alt={alt} />
      </Stack>
      <Stack direction='column' >
        <Stack direction='row' className='flexRow'>
          <Typography variant='body1' label={name} />
          <Typography variant='body1' label={value} />
        </Stack>
        <Stack direction='row' className='flexRow'>
          <Typography variant='caption' label={description} />
          <Typography variant='caption' label={percentage} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CryptoDescription;
