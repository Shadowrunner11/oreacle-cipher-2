import { test } from './testRunner.js';
import { $ as glob$ } from './DOMtools.js';
import { expect } from './assertion.js';

const PRIMARY_BLUE = 'rgb(10, 56, 113)'
const WHITE = 'rgb(255, 255, 255)'

const iframe = glob$('iframe')

const content = iframe.contentWindow.document

const $ = selector => glob$(selector,content)

test('button.primary', ()=>{
   /**
   * @type {HTMLElement}
   */
  const button = $('.action-btn.cta-primary');

  return expect(button).cssToHave({
    color: WHITE,
    'background-color': PRIMARY_BLUE
  })
})

test('button primary hover', ()=>{
  const button = $('.primary.is-hover');

  return expect(button).cssToHave({
    color: WHITE,
    'background-color': 'rgb()'
  }, )
}, false)

test('button secondary', ()=>{
  /**
   * @type {HTMLElement}
   */
  const button = $('.secondary');

  return expect(button).cssToHave({
    color: 'rgb(255,255,255)',
    'background-color': 'rgb()'
  })
}, false)

test('button secondary', ()=>{
  /**
   * @type {HTMLElement}
   */
  const button = $('.secondary.is-hover');

  return expect(button).cssToHave({
    color: 'rgb(255,255,255)',
    'background-color': 'rgb()'
  })
}, false)

