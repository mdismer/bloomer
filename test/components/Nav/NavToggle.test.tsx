import  React from 'react';
import { shallow } from 'enzyme';

import { NavToggle } from './../../../src/components/Nav/NavToggle';

describe('NavToggle', () => {
    it('should render a span with .nav-toggle', () => {
        const component = shallow(<NavToggle />);
        expect(component.contains(
            <span className='nav-toggle'>
                <span />
                <span />
                <span />
            </span>
        )).toBe(true);
    });

    it('should render a p with .nav-toggle', () => {
        const component = shallow(<NavToggle tag='p'/>);
        expect(component.contains(
            <p className='nav-toggle'>
                <span />
                <span />
                <span />
            </p>
        )).toBe(true);
    });

    it('should render a span with .nav-toggle and modifiers', () => {
        const component = shallow(<NavToggle isActive />);
        expect(component.hasClass('nav-toggle')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
    });

    it('should render a span with .nav-toggle, modifiers and custom classNames', () => {
        const component = shallow(<NavToggle isActive className='custom' />);
        expect(component.hasClass('nav-toggle')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a span with .nav-toggle and custom classNames', () => {
        const component = shallow(<NavToggle className='custom' />);
        expect(component.hasClass('nav-toggle')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
