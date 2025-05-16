import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Demo from '@/components/demo/Demo';
import LoginPage from '@/components/login/Login';

export default function Start() {
    return (
        <>
            <Header />
            <main>
                <Demo />
            </main>
            <Footer />
        </>
    )
}