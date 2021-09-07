import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  const component = shallow(<TripSummary 
    id={'someId'} 
    image={'someImage'}
    name={'someName'} 
    cost={'someCost'}
    days={21}
    tags={['tag1', 'tag2', 'tag3']} 
  />);   
  
  it('should generate correct link', () => {
    const expectedLink = `/trip/${'someId'}`;
    const renderedLink = component.find('Link').prop('to');
    
    expect(renderedLink).toEqual(expectedLink);
    
    //console.log(component.debug());
  });

  it('should generate <img> with proper src and alt', () => {
    const expectedSrc = 'someImage';  
    const expectedAlt = 'someName';

    const renderedSrc = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');

    expect(renderedSrc).toEqual(expectedSrc);
    expect(renderedAlt).toEqual(expectedAlt);
  });

  
  it('should render correct props: name, cost and days', () => {
    const expectedName = 'someName';
    const expectedDays = 21;
    const expectedCost = 'someCost';
    
    const renderedName = component.find('.title').text();
    const renderedDays = component.find('.details span').at(0).text(); 
    const renderedCost = component.find('.details span').at(1).text(); 
    
    expect(renderedName).toEqual(expectedName);
    
    expect(renderedDays).toContain(expectedDays);
    expect(renderedCost).toContain(expectedCost);

    //console.log(component.find('.details span').at(1).text(), renderedDays);
  });

  it('should render tags in spans in proper order', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should only render tags div if tags is truthy', () => {
    const componentWithNoTags = shallow(<TripSummary />);

    expect(componentWithNoTags.find('.tags').exists()).toEqual(false);

    //console.log(componentWithNoTags.debug(), component.debug());
  });

});