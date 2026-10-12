export const loadConfig = () => {
  return { port: Number(process.env['PORT']) || 3000 }
}
console.log('config.ts');
export type Config = { a: number, b: string, c: boolean }