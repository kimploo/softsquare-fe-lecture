/**
 * country-code-emoji, Copyright (c) 2019 Kelvin Liu, MIT
 * 위 코드의 일부를 변형하여 사용합니다.
 * https://github.com/thekelvinliu/country-code-emoji/blob/main/LICENSE
 */
const CC_REGEX = /^[a-z]{2}$/i;
const OFFSET = 127397;

export function countryCodeEmoji(cc) {
  if (!CC_REGEX.test(cc)) {
    const type = typeof cc;
    throw new TypeError(
      `cc argument must be an ISO 3166-1 alpha-2 string, but got '${
        type === 'string' ? cc : type
      }' instead.`,
    );
  }

  const codePoints = [...cc.toUpperCase()].map(c => c.codePointAt() + OFFSET);
  return String.fromCodePoint(...codePoints);
}