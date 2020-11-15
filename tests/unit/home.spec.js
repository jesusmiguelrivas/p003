import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/App.vue';

describe('App.vue', () => {
  it('renders code', () => {
    const expected = `1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz\nfizz: 4\nbuzz: 3\nfizzbuzz: 1\nlucky: 2\ninteger: 10`;
    const wrapper = shallowMount(Home);
    expect(
      wrapper
        .find("code")
        .text()
      ).equal(expected);
  })
})
