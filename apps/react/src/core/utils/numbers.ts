export const sumNumbs = (a: number, b: number): number => a + b;

export const fibonacci = (n: number): number => {
  if(n <= 1) return n;
  // return recursive call
  return fibonacci(n - 1) + fibonacci(n - 2);
};
