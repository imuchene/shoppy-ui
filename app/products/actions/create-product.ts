'use server';

import { revalidateTag } from 'next/cache';
import { getHeaders, post } from '../../common/util/fetch';
import { API_URL } from '@/app/common/constants/environment';

export default async function createProduct(formData: FormData) {
  const response = await post('products', formData);
  const productImage = formData.get('image');

  if (productImage instanceof File && !response.error) {
    await uploadProductImage(response.data.id, productImage);
  }

  revalidateTag('products');
  return response;
}

async function uploadProductImage(productId: string, file: File) {
  const formData = new FormData();
  const headers = await getHeaders();
  formData.append('image', file);

  await fetch(`${API_URL}/products/${productId}/image`, {
    body: formData,
    method: 'POST',
    headers: headers,
  });
}
