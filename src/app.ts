export function greet(name: string): string {
  return `Welcome, ${name}!`;  // This will conflict
}

export function add(a: number, b: number): number {
  return a + b;
}
