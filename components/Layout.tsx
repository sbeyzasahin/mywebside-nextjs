import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface Props { }
export default function Layout(props: PropsWithChildren<Props>) {
    return (
        <div className="content">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}
