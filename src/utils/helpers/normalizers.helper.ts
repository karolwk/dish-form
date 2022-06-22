import formatString from 'format-string-by-pattern';

const normalizePrepTime = (value: string) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');
  return formatString('00:00:00', onlyNums);
};

const normalizeToInt = (value: string) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');
  return Number.parseInt(onlyNums);
};

const normalizeToFloat = (value: string) => {
  if (!value) return value;

  return Math.abs(Number(value));
};

export { normalizePrepTime, normalizeToFloat, normalizeToInt };
