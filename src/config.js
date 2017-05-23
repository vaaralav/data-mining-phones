//@flow

export type PhoneSearch = {
  device: string,
  brand: string
};

export const PhonesToSearch: Array<PhoneSearch> = [
  {device: 'iphone 6s', brand: 'apple'},
  {device: 'iphone 7 plus', brand: 'apple'},
  {device: '3t', brand: 'oneplus'},
  {device: '3', brand: 'oneplus'},
  {device: 'lumia 950', brand: 'microsoft'},
  {device: 'elite x3', brand: 'hp'},
  {device: 'r9s', brand: 'oppo'},
  {device: 'galaxy s7', brand: 'samsung'},
  {device: 'p10', brand: 'huawei'}
];