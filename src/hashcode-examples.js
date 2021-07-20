/**
 * Java String.hashCode()
 * @param {string} str
 * @returns
 */
function hashCode(str) {
  var hash = 0;
  if (str.length == 0) return hash;
  for (var i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char; // hash * 31 + c
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

/**
 *
 * @param {string} str
 * @returns
 */
function djb2Code(str) {
  var hash = 5381;
  for (var i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = (hash << 5) + hash + char; /* hash * 33 + c */
  }
  return hash;
}

/**
 *
 * @param {string} str
 * @returns
 */
function sdbmCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = char + (hash << 6) + (hash << 16) - hash;
  }
  return hash;
}

/**
 *
 * @param {string} str
 * @returns
 */
function loseCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash += char;
  }
  return hash;
}

/**
 * https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
 * @param {string} str
 * @returns
 */
function hashCode2(str) {
  var hash = 0, i = 0, len = str.length;
  while (i < len) {
    hash = ((hash << 5) - hash + str.charCodeAt(i++)) | 0;
  }
  return hash;
}

const plaintext = 'hello world';
console.log(hashCode(plaintext));
console.log(hashCode2(plaintext));
console.log(djb2Code(plaintext));
console.log(sdbmCode(plaintext));
console.log(loseCode(plaintext));
