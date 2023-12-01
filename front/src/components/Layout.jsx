import { SessionProvider } from "../context/SessionContext";
import NavBar from "./NavBar";

const Layout = ({ children, ...rest }) => {
  return (
    <SessionProvider>
      <div {...rest}>
        <NavBar/>
        {children}
      </div>
    </SessionProvider>)
};

export default Layout;
