import  React from 'react';
import { shallow } from 'enzyme';

import { MessageBody } from './../../../src/components/Message/MessageBody';

describe('MessageBody', () => {
    it('should render a div with .message-body', () => {
        const component = shallow(<MessageBody>My MessageBody</MessageBody>);
        expect(component.contains(<div className='message-body'>My MessageBody</div>)).toBe(true);
    });

    it('should render a p with .message-body', () => {
        const component = shallow(<MessageBody tag='p'>My MessageBody</MessageBody>);
        expect(component.contains(<p className='message-body'>My MessageBody</p>)).toBe(true);
    });

    it('should render a div with .message and custom classNames', () => {
        const component = shallow(<MessageBody className='custom'><span>Any Content</span></MessageBody>);
        expect(component.hasClass('message-body')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});
