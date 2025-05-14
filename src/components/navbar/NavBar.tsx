import Link from "next/link";
import React from 'react';
import styles from './navbar.module.scss';

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <Link href='/home' className={styles.link}>Home</Link>
                <Link href='/products' className={styles.link}>Produtos</Link>
                <Link href='/more' className={styles.link}>Saiba Mais</Link>
            </nav>
        </>
    );
}