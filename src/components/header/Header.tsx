import React from 'react';
import styles from './header.module.scss';
import NavBar from '../navbar/NavBar';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                    <h1>MOOI</h1>
            </header>
            <NavBar />
        </>
    )
}