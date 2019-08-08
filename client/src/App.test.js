import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from "@testing-library/react";
import App from './App';

afterEach(cleanup)

describe("<App />", () => {

  it('renders without crashing using ReactDOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    render(<App />)

  })

  it("renders titles and buttons", () => {
    const app = render(<App />);

    
    app.getByText('Strike');
    app.getByText('Ball');
    
  });

  
  

})