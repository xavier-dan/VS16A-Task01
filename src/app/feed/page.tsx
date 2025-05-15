import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Feed from '@/components/feed/Feed';
import style from './start.module.scss';

export default function Start() {
    return (
        <>
            <Header />
            <main className={style.container}>
                <h2>POSTS RECENTES</h2>
                <Feed />
            </main>
            <Footer />
        </>
    )
}