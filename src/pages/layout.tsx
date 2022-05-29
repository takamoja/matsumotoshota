import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: Props) => {
    return (
        <div>
            <nav className="flex flex-rows gap-x-4 p-2 font-bold">
                <Link href="/">
                    <a href="">Home</a>
                </Link>
                <Link href="/about">
                    <a href="">About</a>
                </Link>
                <Link href="/news">
                    <a href="">News</a>
                </Link>
            </nav>
            <div className="p-4">{children}</div>
        </div>
    );
};

type Props = {
    children?: ReactNode;
};

export default Layout;
