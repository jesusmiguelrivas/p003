import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/App.vue';

describe('App.vue', () => {
  it('renders code', () => {
    const expected = `
    1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz
    fizz: 4
    buzz: 3
    fizzbuzz: 1
    lucky: 2
    integer: 10`;
    const wrapper = shallowMount(Home);
    expect(
      wrapper
        .find("code")
        .text()
      ).equal(expected);
  })
})
