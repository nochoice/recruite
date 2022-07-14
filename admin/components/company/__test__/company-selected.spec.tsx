import React from 'react';
import { MockCompany } from '../../../../mocks/company';
import { render } from '../../../../tests/test-utils';
import CompanySelected from '../company-selected';

describe('CompanySelected', () => {
  it('should render', () => {
    const { container } = render(<CompanySelected company={MockCompany} />);
  
    expect(container).toMatchSnapshot();
  });

  it('should have right data', () => {
    const { getByText, getByTestId } = render(<CompanySelected company={MockCompany} />);
    
    expect(getByText(MockCompany.name)).toBeTruthy();
    expect(getByTestId('company-logo')).toBeTruthy();
  });

});
