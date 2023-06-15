import { test } from './testRunner.js'
import { expect } from './assertion.js'
import { Cipher } from '../js/services/cipher.js';

const defaultCipher = new Cipher();

test('cipher default', ()=>{
  const cipheredResult = defaultCipher.cipher('hola mundo');

  return expect(cipheredResult).toBe('hoberlai mufatndober');
})

test('dechiper default', ()=>{
  const decipherResult = defaultCipher.decipher('hoberlai mufatndober');
  
  return expect(decipherResult).toBe('hola mundo');
})
