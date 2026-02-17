import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import FloatingButtons from "./FloatingButtons";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <ScrollToTop />
    <Navbar />
    <main className="min-h-screen pt-[72px]">{children}</main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Layout;
