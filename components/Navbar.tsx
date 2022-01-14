import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src='/icon.png' />
                {/* <p className="name">Sümeyye Beyza Yıldız</p> */}
            </div>
            <Link href={"/"}><a>Home</a></Link>
            <Link href={"/about"}><a>About</a></Link>
            <Link href={"/contact-me"}><a>Contact Me</a></Link>
        </nav>
    )
}
