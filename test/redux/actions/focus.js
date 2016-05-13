import {FOCUS} from '../../../src/redux/constants';
import {focus} from '../../../src/redux/actions';

describe('focus()', () => {

  it('should return a focus action', () => {

    const action = focus(null, 'personal-details', 'firstName');

    expect(action).to.have.property('type', FOCUS);
    expect(action).to.have.property('meta').property('form', 'personal-details');
    expect(action).to.have.property('meta').property('field', 'firstName');

  });

});
