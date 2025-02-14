import  React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Button, Container, Control, Field, Icon, Image } from './../../../src';
import { Navbar, NavbarBrand, NavbarBurger, NavbarDivider, NavbarDropdown, NavbarEnd,
  NavbarItem, NavbarLink, NavbarMenu, NavbarStart } from './../../../src';
import { isActive } from './../utils';

const brand = require('./../../assets/logo.png');
const pkg = require('./../../../package.json');

const NavbarItems = ({ location }: RouteComponentProps<{}>) => {
    const pages = [
        {
            href: '/documentation/overview',
            title: 'Overview',
        },
        {
            href: '/documentation/grid',
            title: 'Grid',
        },
        {
            href: '/documentation/elements',
            title: 'Elements',
        },
        {
            href: '/documentation/components',
            title: 'Components',
        },
        {
            href: '/documentation/layout',
            title: 'Layout',
        },
    ];

    return (
        <div>
            {pages.map((page, i) => (
                <NavbarItem isActive={isActive(location, page.href)} key={i} href={'#' + page.href}>{page.title}</NavbarItem>
            ))}
        </div>
    );
};

class NavBar extends React.Component<RouteComponentProps<{}>, { isActive: boolean, isDropdownOpen: boolean }> {
    state = { isActive: false, isDropdownOpen: false };

    onClickNav = () => {
        this.setState((state) => ({ isActive: !state.isActive }));
    }

    onClickDropdown = () => {
        this.setState((state) => ({ isDropdownOpen: !state.isDropdownOpen }));
    }

    render() {
        return (
            <Container>
                <Navbar>
                    <NavbarBrand>
                        <NavbarItem href="http://bloomer.js.org">
                            <img src={brand} style={{ marginRight: 5 }} /> Bloomer
                        </NavbarItem>
                        <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden="desktop">
                            <Icon className="fa fa-github" />
                        </NavbarItem>
                        <NavbarItem href="https://twitter.com/AlgusDark" isHidden="desktop">
                            <Icon className="fa fa-twitter" style={{ color: '#55acee' }} />
                        </NavbarItem>
                        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                    </NavbarBrand>
                    <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                        <NavbarStart>
                            <NavbarItem href="#/">Home</NavbarItem>
                            <NavbarItem onClick={this.onClickDropdown} hasDropdown isActive={this.state.isDropdownOpen}>
                                <NavbarLink isActive={isActive(this.props.location, 'documentation')}>Documentation</NavbarLink>
                                <NavbarDropdown>
                                    <NavbarItems {...this.props} />
                                    <NavbarDivider />
                                    <NavbarItem>
                                        <div>
                                            version <p className="has-text-info">{pkg.version}</p>
                                        </div>
                                    </NavbarItem>
                                </NavbarDropdown>
                            </NavbarItem>
                        </NavbarStart>
                        <NavbarEnd>
                            <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden="touch">
                                <Icon className="fa fa-github" />
                            </NavbarItem>
                            <NavbarItem href="https://twitter.com/AlgusDark" isHidden="touch">
                                <Icon className="fa fa-twitter" style={{ color: '#55acee' }} />
                            </NavbarItem>
                            <NavbarItem>
                                <Field isGrouped>
                                    <Control>
                                        {/* tslint:disable-next-line */ }
                                        <Button id="twitter" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bloomer.js.org" target="_blank"
                                         href="https://twitter.com/intent/tweet?text=bloomer: a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                            <Icon className="fa fa-twitter" />
                                            <span>Tweet</span>
                                        </Button>
                                    </Control>
                                </Field>
                            </NavbarItem>
                        </NavbarEnd>
                    </NavbarMenu>
                </Navbar>
            </Container>
        );
    }
}

export default withRouter<{}>(NavBar);
