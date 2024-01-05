import Container from "../container/Container";
import Link from "next/link";
import { Rubik_Glitch } from "next/font/google";

const font = Rubik_Glitch({ subsets: ['latin'], weight: ['400'] })

const Header = () => {
    return ( 
        <header className="w-full bg-orange-600">
            <Container>
                <div className="h-11 flex items-center justify-around">
                    <Link href={'/'} title="Logo">
                        <h1 className={`${font.className} text-xl`}>Logo</h1>
                    </Link>

                    <div className="h-full flex gap-3 items-center font-semibold">
                        <Link className="hover:opacity-75 transition duration-500" href={'/'}>Home</Link>
                        <Link className="hover:opacity-75 transition duration-500" href={'/'}>About</Link>
                        <Link className="hover:opacity-75 transition duration-500" href={'/'}>Donate</Link>
                        <Link className="hover:opacity-75 transition duration-500" href={'/'}>Contact</Link>
                    </div>
                </div>
            </Container>
        </header>
     );
}
 
export default Header;