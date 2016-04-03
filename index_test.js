import test from 'ava';
import {Something} from './';

test('ava test - 0', t => {
  let s = new Something();
  s.doIt();

  t.pass();
});

test('ava test - 1', t => {
  let s = new Something();
  s.doIt();

  t.pass();
});

test('ava test - 2', t => {
  let s = new Something();
  s.doIt();
  
  t.pass();
});
