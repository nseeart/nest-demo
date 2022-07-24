export function isNumber(num: string | number | undefined): boolean {
  return !Number.isNaN(Number(num));
}

export function getNumber(num) {
  return isNumber(num) ? Number(num) : num;
}
