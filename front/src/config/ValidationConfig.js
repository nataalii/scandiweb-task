export const ValidationConfig = {
  sku: {
    required: 'SKU field is required',
    minLength: {
      value: 3,
      message: 'SKU must be at least 3 characters long',
    },
  },
  name: {
    required: 'Name field is required.',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters long',
    },
  },
  price: {
    required: 'Price field is required',
  },
  productType: {
    required: 'Type field is required',
  },
  size: {
    required: 'Size is required',
  },
  weight: {
    required: 'Weight is required',
  },
  height: {
    required: 'Height is required',
  },
  width: {
    required: 'Width is required',
  },
  length: {
    required: 'Length is required',
  },
};
