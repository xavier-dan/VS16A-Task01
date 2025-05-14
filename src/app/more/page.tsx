import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Demo from '@/components/demo/Demo';
import style from './start.module.scss';

export default function Start() {
    return (
        <>
            <Header />
            <main className={style.container}>
                <h2>Saiba Mais</h2>
                <Demo />
            </main>
            <Footer />
        </>
    )
}