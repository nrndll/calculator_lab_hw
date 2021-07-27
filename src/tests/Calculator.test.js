import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.find("#number1");
    const addOperator = container.find("#operator_add");    
    const button4 = container.find("#number4");
    const equalsOperator = container.find("#operator-equals");
    const runningTotal = container.find("#running-total");
    button1.simulate('click');
    addOperator.simulate('click');
    button4.simulate('click');
    equalsOperator.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button4 = container.find("#number4");
    const button7 = container.find("#number7");
    const subtractOperator = container.find("#operator-subtract");
    const equalsOperator = container.find("#operator-equals");
    const runningTotal = container.find("#running-total");
    button7.simulate('click');
    subtractOperator.simulate('click');
    button4.simulate('click');
    equalsOperator.simulate('click')
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.find("#number3");
    const button5 = container.find("#number5");
    const multiplyOperator = container.find("#operator-multiply");
    const equalsOperator = container.find("#operator-equals");
    const runningTotal = container.find("#running-total");
    button3.simulate('click');
    multiplyOperator.simulate('click');
    button5.simulate('click');
    equalsOperator.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.find("#number2");
    const button1 = container.find("#number1");
    const button7 = container.find("#number7");
    const divideOperator = container.find("#operator-divide");
    const equalsOperator = container.find("#operator-equals");
    const runningTotal = container.find("#running-total");
    button2.simulate('click');
    button1.simulate('click');
    divideOperator.simulate('click');
    button7.simulate('click');
    equalsOperator.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

})
