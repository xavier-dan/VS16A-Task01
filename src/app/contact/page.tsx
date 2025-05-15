import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import FormContato from '@/components/formcontato/FormContato';
import InfoContato from '@/components/infocontato/InfoContato';
import style from './start.module.scss';

export default function Start() {
    return (
        <>
            <Header />
            <main className={style.container}>
                <div className={style.divContainer}>
                    <InfoContato />
                    <FormContato />
                </div>
            </main>
            <Footer />
        </>
    )
}