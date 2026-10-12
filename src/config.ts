export const loadConfig = () => {
  return { port: Number(process.env['PORT']) || 3000 };
};
console.log('config.ts');

export interface Config {
  a: number;
  b: string;
  c: boolean;
}