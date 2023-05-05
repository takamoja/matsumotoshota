import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: Props) => {
    return (
        <div>
            <nav className="flex flex-rows gap-x-4 p-2 font-bold">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/news">News</Link>
            </nav>
            <div className="p-4">{children}</div>
        </div>
    );
};

type Props = {
    children?: ReactNode;
};

export default Layout;
