export function canIterate(value) {
  try {
  	return Boolean(value[Symbol.iterator]());
  } catch {
  	return false;
  }
}