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

  it('Gets greeting based on time', () => {
    const expected = 'Morning' || 'Afternoon' || 'Evening' || 'Hello';
    const containsElement = dashboard.find('[test-id="greetingText"]').text();
    expect(containsElement).toEqual(expect.stringContaining(expected));
  });
});
