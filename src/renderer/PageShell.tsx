import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { Link } from "./Link";
import { ReactNode, StrictMode } from "react";
import { Box } from "../theme/Box";

export function PageShell({ children, pageContext }: { children: ReactNode; pageContext: PageContext }) {
    return (
        <StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Layout>
                    <Sidebar>
                        <Logo />
                        <Link className="navitem" href="/">
                            Home
                        </Link>
                        <Link className="navitem" href="/about">
                            About
                        </Link>
                        <Link className="navitem" href="/oui">
                            Oui
                        </Link>
                    </Sidebar>
                    <Content>{children}</Content>
                </Layout>
            </PageContextProvider>
        </StrictMode>
    );
}

function Layout({ children }: { children: ReactNode }) {
    return (
        <Box display="flex" maxWidth="75%" margin="auto">
            {children}
        </Box>
    );
}

function Sidebar({ children }: { children: ReactNode }) {
    return (
        <Box padding="8" display="flex" flexDirection="column" alignItems="center" lineHeight="7">
            {children}
        </Box>
    );
}

function Content({ children }: { children: ReactNode }) {
    return (
        <Box padding="8" paddingBottom="8" borderLeft="2px" borderColor="gray.200" minHeight="100vh">
            {children}
        </Box>
    );
}

function Logo() {
    return (
        <Box marginTop="8" marginBottom="4">
            <a href="/">
                <img src={logo} height={64} width={64} alt="logo" />
            </a>
        </Box>
    );
}
