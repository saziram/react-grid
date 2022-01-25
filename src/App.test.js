import { render, screen } from '@testing-library/react';
import App from './App';
import {create} from 'react-test-renderer'; // ES6

describe('Testing Grid', () => {

  const rows = 5;
  const columns = 6; 

  const component = create( <App /> );
  const element = component.root.findByType("div");


  test('should matches the snapshot', () => {    
    expect(component.toJSON()).toMatchSnapshot();
  });



});
