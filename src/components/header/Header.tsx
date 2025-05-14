import React from 'react';
import styles from './header.module.scss';
import NavBar from '../navbar/NavBar';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div>
                    <h1>Mooi</h1>
                </div>
                <NavBar />
            </header>
        </>
    )
}