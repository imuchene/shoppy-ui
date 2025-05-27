import { Grid, Stack, Typography } from '@mui/material';
import getProduct from './get-product';
import Image from 'next/image';
import { getProductImage } from '../product-image';
import Checkout from '@/app/checkout/checkout';

interface SingleProductProps {
  params: Promise<{ productId: string }>;
}

export default async function SingleProduct(props: SingleProductProps) {
  const params = await props.params;
  const product = await getProduct(params.productId);

  return (
    <Grid container rowGap={3} marginBottom={'2rem'}>
      {product.imageExists && (
        <Grid size={{ md: 6, xs: 12 }}>
          <Image
            src={getProductImage(product.id)}
            width={0}
            height={0}
            className='h-auto w-full sm:w-3/4'
            sizes='100vh'
            alt='Picture of the product'
          />
        </Grid>
      )}
      <Grid size={{ md: 6, xs: 12 }}>
        <Stack gap={3}>
          <Typography variant='h2'>{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant='h4'>${product.price}</Typography>
          <Checkout productId={product.id} />
        </Stack>
      </Grid>
    </Grid>
  );
}
