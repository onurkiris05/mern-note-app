function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (!val) {
    throw new Error(`Expected 'value' to be defined, but received ${val}`);
  }
}

export default assertIsDefined;
