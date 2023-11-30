import { useLogout } from "@/firebase";
import { CaretDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import React from 'react';
import './Navbar.css';


const Navbar = () => {
    const [logout, logoutState] = useLogout();

    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">


                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        Overview <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="Checkin" href="/checkin">
                                Let your users check
                            </ListItem>
                            <ListItem title="Dashboard" href="/dashboard">
                                Check who is checked in
                            </ListItem>
                            <ListItem title="Form" href="/form">
                                Register new customers
                            </ListItem>
                            <ListItem title="User admin" href="/admin">
                                Manager registered users
                            </ListItem>
                            <ListItem title="Calendar" href="/calendar">
                                View training schedule
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                        User name

                        <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                        <ul className="List two">
                            <ListItem title="User profile" href="/">

                            </ListItem>
                            <NavigationMenu.Link className="NavigationMenuLink" href="/"
                                onClick={() => {
                                    logout();
                                }}
                                disabled={logoutState.isLoading}
                            >
                                Logout
                            </NavigationMenu.Link>

                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Indicator className="NavigationMenuIndicator">
                    <div className="Arrow" />
                </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
        </NavigationMenu.Root>
    );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <NavigationMenu.Link asChild>
            <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
                <div className="ListItemHeading">{title}</div>
                <p className="ListItemText">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
));

export default Navbar;