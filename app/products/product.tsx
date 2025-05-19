import { Card, Stack, Typography } from '@mui/material';
import { Product as IProduct } from './interface/product.interface';
import Image from 'next/image';
import { API_URL } from '../common/constants/environment';

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <Card className='p-4'>
      <Stack gap={3}>
        <Typography variant='h4'>{product.name}</Typography>
        {product.imageExists && (
          <Image
            src={`${API_URL}/products/${product.id}.jpeg`}
            width='0'
            height='0'
            className='h-auto w-full'
            alt='Picture of the Product'
            sizes='100vw'
          />
        )}
        <Typography>{product.description}</Typography>
        <Typography>${product.price}</Typography>
      </Stack>
    </Card>
  );
}
