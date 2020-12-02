export function makeId<T, N extends string | number | symbol>(
  value: Omit<T, N>,
): T {
  return value as T;
}
