import React from 'react';
import '../setupTests';
import regeneratorRuntime from 'regenerator-runtime';
import { mount } from 'enzyme';

import Dashboard from '../src/Dashboard';

describe('Dashboard tests', () => {
  let dashboard;

  beforeAll(() => {
    dashboard = mount(<Dashboard />);
  });

  it('Displays greeting based on time', () => {
    let expected;

    const date = new Date();
    const hourOfDay = date.getHours();
    if (hourOfDay < 12) {
      expected = 'Morning';
    } else if (hourOfDay < 16) {
      expected = 'Afternoon';
    } else if (hourOfDay < 24) {
      expected = 'Evening';
    } else {
      expected = 'Hello';
    }

    const containsElement = dashboard
      .find('[data-testid="greetingText"]')
      .text();
    expect(containsElement).toEqual(expect.stringContaining(expected));
  });
});
