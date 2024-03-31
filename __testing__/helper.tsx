export function spyFn<T extends (...args: any[]) => any>(
  obj: any,
  method: string,
  mockImpl: T
): jest.SpyInstance {
  const spy = jest.spyOn(obj, method);
  spy.mockImplementation(mockImpl);
  return spy;
}
