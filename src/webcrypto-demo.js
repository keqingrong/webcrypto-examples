const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA18mEghLW9MYhEqiVqAXS
5ISd0r5ogWWA+CnGaEqfyrwdqV1HJ3wYHQJcDe3WuAq88QkILeS7gbDiEytLpt/l
UH0SM/MUOiT1CGpPKh/SQgo7LS53nn0SE7tL83mcYWZnqb+4gfZfI7vNo7OXqYzD
KT+T69E1Sp+RbgF8uW0bfVaoPrWdL7hN0H+NdAmAe6oxRKrZFDlsfs8XsxbaCzuO
gB21iWTOo+JCWZuLubtFGZ3HmPuL9prOZW3VJTDuDMK4j64Xn9xvogjRMRyUUMuk
lQJwT6d0SMHqTU+Dd3VGgBloHCMwxbWOCccPkEJ/jH+diiAWfF8Ly/L3pEBoSraR
DQIDAQAB
-----END PUBLIC KEY-----`;

const privateRsaKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA18mEghLW9MYhEqiVqAXS5ISd0r5ogWWA+CnGaEqfyrwdqV1H
J3wYHQJcDe3WuAq88QkILeS7gbDiEytLpt/lUH0SM/MUOiT1CGpPKh/SQgo7LS53
nn0SE7tL83mcYWZnqb+4gfZfI7vNo7OXqYzDKT+T69E1Sp+RbgF8uW0bfVaoPrWd
L7hN0H+NdAmAe6oxRKrZFDlsfs8XsxbaCzuOgB21iWTOo+JCWZuLubtFGZ3HmPuL
9prOZW3VJTDuDMK4j64Xn9xvogjRMRyUUMuklQJwT6d0SMHqTU+Dd3VGgBloHCMw
xbWOCccPkEJ/jH+diiAWfF8Ly/L3pEBoSraRDQIDAQABAoIBADO+Q8L5B4hsVhPm
TvSaaOaZEkstk1ur3lAjnEr30fdIQoiRMHW8YP/bx/0jEgDRulrGAqsWlQvVQXC9
Sge62n8BbrL8T9ZddFBPRaphNQbW8zezU8WyUfpfSCga+i+04Zinu3OWg1vLNdVS
RETI1yd18l9yrCe3uaS6QJEqI5RbGVR9Alx8gXRYcch0Q4jGqGH1WepBfwzYizrl
2/tnK/guprrXLuhDbDxTUgOap5U/SGjmcFePqDHmcacHybnSncJhEUTr9UOu3h3f
QYOCcg7LTxss4TVbkOQKzBPqhW7Ukg1zOzEC2ocJcWnUaJHaGH67jdpxfzC4N3p/
+9jne/UCgYEA+VXSk7FVzimEE0qaddoi0chL7UZjQeZzZ35U4PPIt2XbkiiXlqq2
HIilFUGad9aLzNBYCToqRcsh7VGqsGeh0xvPyZ6FkLEVkWVGzQYylnDIP02YByCF
bFvrOOwrTAwrq/dUEHI+bQTwok9e9bhylAwVRary49hD/OItexsXDvsCgYEA3Y4g
+YmcYOpHVqJ4DNiFcrsTc2jpi/S2t26FbKZX7D3PRxQC3cRzvCE3IRPRlGUFaMF1
DBQY1NC6U98Iy0+IzUMEWRUtU/FrowYdf3B09pkrH+lp2Mx6OkeraYAF0IhS6kLL
byqgCoYiFldKa6vFUnV03xaZ43bpFVT8yFK9QZcCgYA33IWIN3Ps85o2pEFE5DFm
5MQ2Dc4RJqt2ZXRozdWLWVO/RD7qL6cLb4Xk5ETSUowRwB/pOVHdPyyDugdO7Hjy
DkoYdt6f0zzszU72gkv1LqF+pUjJV/zskQ97OlZc/GEQbyIzaRUZYcDz7GpvDPsG
tkpRyIIQkBRzZM0hxqj83wKBgQC1DVS9F0uHl2w8zAA23yoOm/pFMdLI4G4AcHzw
UO9AyzH778p31/aMIsiea0e1cOh+trkj6bhxETFzIKxbGN++famr8rZcBsnjKzgn
0IqEip7HMUOiO1cXEUJusIQP6Zd4gKUmbzrh3sM0ZpkWbASQYhPjyuBvFdlb6Vu5
iIPIeQKBgQDuQX86qeyZdIi5d+55Okkpl53q0tWxZQFD03ITYayTFeaFWcRzdlxV
VeG0SBT8sODQUr1vm0Q4Xlf9WLTS+L+xcWXC6Wsl/EquVPTZBIy+5N9IXcprspf6
C8r2VdIsNBCwCG35sNMfam9abSLj5uTewLC7Kv3hdDUr5CMRAOJ7bw==
-----END RSA PRIVATE KEY-----`;

const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDXyYSCEtb0xiES
qJWoBdLkhJ3SvmiBZYD4KcZoSp/KvB2pXUcnfBgdAlwN7da4CrzxCQgt5LuBsOIT
K0um3+VQfRIz8xQ6JPUIak8qH9JCCjstLneefRITu0vzeZxhZmepv7iB9l8ju82j
s5epjMMpP5Pr0TVKn5FuAXy5bRt9Vqg+tZ0vuE3Qf410CYB7qjFEqtkUOWx+zxez
FtoLO46AHbWJZM6j4kJZm4u5u0UZnceY+4v2ms5lbdUlMO4MwriPrhef3G+iCNEx
HJRQy6SVAnBPp3RIwepNT4N3dUaAGWgcIzDFtY4Jxw+QQn+Mf52KIBZ8XwvL8vek
QGhKtpENAgMBAAECggEAM75DwvkHiGxWE+ZO9Jpo5pkSSy2TW6veUCOcSvfR90hC
iJEwdbxg/9vH/SMSANG6WsYCqxaVC9VBcL1KB7rafwFusvxP1l10UE9FqmE1Btbz
N7NTxbJR+l9IKBr6L7ThmKe7c5aDW8s11VJERMjXJ3XyX3KsJ7e5pLpAkSojlFsZ
VH0CXHyBdFhxyHRDiMaoYfVZ6kF/DNiLOuXb+2cr+C6mutcu6ENsPFNSA5qnlT9I
aOZwV4+oMeZxpwfJudKdwmERROv1Q67eHd9Bg4JyDstPGyzhNVuQ5ArME+qFbtSS
DXM7MQLahwlxadRokdoYfruN2nF/MLg3en/72Od79QKBgQD5VdKTsVXOKYQTSpp1
2iLRyEvtRmNB5nNnflTg88i3ZduSKJeWqrYciKUVQZp31ovM0FgJOipFyyHtUaqw
Z6HTG8/JnoWQsRWRZUbNBjKWcMg/TZgHIIVsW+s47CtMDCur91QQcj5tBPCiT171
uHKUDBVFqvLj2EP84i17GxcO+wKBgQDdjiD5iZxg6kdWongM2IVyuxNzaOmL9La3
boVsplfsPc9HFALdxHO8ITchE9GUZQVowXUMFBjU0LpT3wjLT4jNQwRZFS1T8Wuj
Bh1/cHT2mSsf6WnYzHo6R6tpgAXQiFLqQstvKqAKhiIWV0prq8VSdXTfFpnjdukV
VPzIUr1BlwKBgDfchYg3c+zzmjakQUTkMWbkxDYNzhEmq3ZldGjN1YtZU79EPuov
pwtvheTkRNJSjBHAH+k5Ud0/LIO6B07sePIOShh23p/TPOzNTvaCS/UuoX6lSMlX
/OyRD3s6Vlz8YRBvIjNpFRlhwPPsam8M+wa2SlHIghCQFHNkzSHGqPzfAoGBALUN
VL0XS4eXbDzMADbfKg6b+kUx0sjgbgBwfPBQ70DLMfvvynfX9owiyJ5rR7Vw6H62
uSPpuHERMXMgrFsY3759qavytlwGyeMrOCfQioSKnscxQ6I7VxcRQm6whA/pl3iA
pSZvOuHewzRmmRZsBJBiE+PK4G8V2VvpW7mIg8h5AoGBAO5Bfzqp7Jl0iLl37nk6
SSmXnerS1bFlAUPTchNhrJMV5oVZxHN2XFVV4bRIFPyw4NBSvW+bRDheV/1YtNL4
v7FxZcLpayX8Sq5U9NkEjL7k30hdymuyl/oLyvZV0iw0ELAIbfmw0x9qb1ptIuPm
5N7AsLsq/eF0NSvkIxEA4ntv
-----END PRIVATE KEY-----`;

const plaintext = 'keqingrong@outlook.com';
/** @type {Crypto} */
const webcrypto =
  typeof module === 'object' && typeof require === 'function'
    ? require('crypto').webcrypto
    : window.crypto;
const { subtle } = webcrypto;

(async () => {
  const encrypted = await encrypt(plaintext, publicKey);
  console.log(encrypted);

  const decrypted = await decrypt(encrypted, privateKey);
  console.log(decrypted);
})();

/**
 * RSA encrypt
 * @param {string} plaintext
 * @param {string} pk PEM-encoded RSA public key
 * @returns {Promise<string>}
 */
async function encrypt(plaintext, pk) {
  const publicKey = await importPublicKey(pk);
  const encryptedBuffer = await subtle.encrypt(
    {
      name: 'RSA-OAEP',
    },
    publicKey,
    new TextEncoder().encode(plaintext)
  );
  const encrypted = arrayBufferToBase64(encryptedBuffer);
  return encrypted;
}

/**
 * RSA decrypt
 * @param {string} ciphertext
 * @param {string} sk PEM-encoded RSA private key
 * @returns {Promise<string>}
 */
async function decrypt(ciphertext, sk) {
  const privateKey = await importPrivateKey(sk);
  const decryptedBuffer = await subtle.decrypt(
    {
      name: 'RSA-OAEP',
    },
    privateKey,
    base64ToUint8Array(ciphertext)
  );
  const decrypted = new TextDecoder().decode(decryptedBuffer);
  return decrypted;
}

/**
 * PEM-encoded RSA public key string to CryptoKey
 * @param {string} pem PEM-encoded RSA public key (SubjectPublicKeyInfo format)
 * @returns {Promise<CryptoKey>}
 */
async function importPublicKey(pem) {
  const pemHeader = `-----BEGIN PUBLIC KEY-----`;
  const pemFooter = `-----END PUBLIC KEY-----`;
  const pemContent = pem
    .replace(pemHeader, '')
    .replace(pemFooter, '')
    .replace(/\n/g, '');
  const publicKeyData = base64ToUint8Array(pemContent);
  const publicKey = await subtle.importKey(
    'spki',
    publicKeyData,
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256',
    },
    false,
    ['encrypt']
  );
  return publicKey;
}

/**
 * PEM-encoded RSA private key string to CryptoKey
 * @param {string} pem PEM-encoded RSA private key (PKCS #8 format)
 * @returns {Promise<CryptoKey>}
 */
async function importPrivateKey(pem) {
  const pemHeader = `-----BEGIN PRIVATE KEY-----`;
  const pemFooter = `-----END PRIVATE KEY-----`;
  const pemContent = pem
    .replace(pemHeader, '')
    .replace(pemFooter, '')
    .replace(/\n/g, '');
  const privateKeyData = base64ToUint8Array(pemContent);
  const privateKey = await subtle.importKey(
    'pkcs8',
    privateKeyData,
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256',
    },
    false,
    ['decrypt']
  );
  return privateKey;
}

/**
 * base64 string to Uint8Array
 * @param {string} base64
 */
function base64ToUint8Array(base64) {
  const byteString = atob(base64);
  const bytes = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    bytes[i] = byteString.charCodeAt(i);
  }
  return bytes;
}

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

/**
 * Convert an ArrayBuffer into a string
 * @param {ArrayBuffer} buf
 */
function ab2str(buf) {
  // return String.fromCharCode.apply(null, new Uint16Array(buf));
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/**
 * Convert a string into an ArrayBuffer
 * from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
 * @param {string} atr
 */
function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}
