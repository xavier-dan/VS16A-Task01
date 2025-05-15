import React from 'react';
import styles from './infoContato.module.scss';

export default function InfoContato() {
    return (
        <div className={styles.container}>
            <h2>NOSSOS CONTATOS</h2>
            <h3>Sede</h3>
            <p>R. Joaquim Mooi, 2305 <br /> Pinheiros, São Paulo (SP), 01010-111</p>
            <div className={styles.telefone}>
                <a href="tel:+551115052025">(11) 1505-2025</a>
            </div>
        </div>
    );
}