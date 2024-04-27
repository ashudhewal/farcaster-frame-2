// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://zizzamia.xyz';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0x19Fc2E165Ad465748F79a23565c3468d3ad73218';
