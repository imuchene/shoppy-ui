import { API_URL } from '../common/constants/environment';

export const getProductImage = (productId: string) => {
  return `${API_URL}/images/products/${productId}.jpeg`;
};
