import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NAV_TABS } from 'constants';

import Header from "components/Header";
import Container from 'components/common/Container';
import Logo from "components/Logo";
import Greeting from 'components/Greeting';
import Loader from "components/common/Loader";
import Navbar from "components/Navbar";

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Greeting />
                <Logo />
                <Navbar tabs={ NAV_TABS }/>
            </Header>
            <Container>
                <Suspense fallback={<Loader type="dual-rings"/>}>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    )
}

export default SharedLayout;