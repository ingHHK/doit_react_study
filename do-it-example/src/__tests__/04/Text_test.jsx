import React from 'react';
import { shallow } from 'enzyme';

import Text from '../../04/Text';

describe('<Text>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Text>테스트</Text>);
    }).not.toThrow();
  });

  it('contains <sapn>', () => {
    expect(shallow(<Text>테스트</Text>).find('span')).toHaveLength(1);
  });
});
