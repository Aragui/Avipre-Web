import { ReactNode } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;