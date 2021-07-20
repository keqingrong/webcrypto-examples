/** @type {Crypto} */
const webcrypto =
  typeof module === 'object' && typeof require === 'function'
    ? require('crypto').webcrypto
    : window.crypto;
const { getRandomValues, subtle } = webcrypto;

(async () => {
  const plaintext = 'hello';
  const key = await subtle.generateKey(
    {
      name: 'AES-CBC',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );
  const iv = getRandomValues(new Uint8Array(16));

  const ciphertext = await subtle.encrypt(
    {
      name: 'AES-CBC',
      iv,
    },
    key,
    new TextEncoder().encode(plaintext)
  );

  const decrypted = await subtle.decrypt(
    {
      name: 'AES-CBC',
      iv: iv,
    },
    key,
    ciphertext
  );

  console.log(arrayBufferToBase64(ciphertext));
  console.log(new TextDecoder().decode(decrypted));
})();

/**
 * ArrayBuffer to base64 string
 * @param {ArrayBuffer} buffer
 * @returns
 */
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
