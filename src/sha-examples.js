/** @type {Crypto} */
const webcrypto =
  typeof module === 'object' && typeof require === 'function'
    ? require('crypto').webcrypto
    : window.crypto;
const { subtle } = webcrypto;

(async () => {
  const plaintext = 'hello world';
  const sha1 = await sha1sum(plaintext);
  const sha256 = await sha256sum(plaintext);
  console.log(sha1);
  console.log(sha256);
})();

/**
 * sha1sum
 * @param {string} data
 * @returns
 *
 * ```sh
 * $ echo -n "hello world" | sha1sum
 * 2aae6c35c94fcfb415dbe95f408b9ce91ee846ed
 * ```
 */
async function sha1sum(data) {
  return digest('SHA-1', data);
}

/**
 * sha256sum
 * @param {string} data
 * @returns
 *
 * ```sh
 * $ echo -n "hello world" | sha256sum
 * b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
 * ```
 */
async function sha256sum(data) {
  return digest('SHA-256', data);
}

/**
 * `subtle.digest()` shorthand
 * @param {'SHA-1'|'SHA-256'|'SHA-384'|'SHA-512'} algorithm
 * @param {string} data
 * @returns
 */
async function digest(algorithm, data) {
  const bytes = new TextEncoder().encode(data);
  const buffer = await subtle.digest(algorithm, bytes);
  return bufferToHex(buffer); // Buffer.from(buffer).toString('hex');
}

/**
 * ArrayBuffer to Hex
 * @param {ArrayBuffer} buffer
 * @returns
 */
function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
