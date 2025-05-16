'use client';

import React from "react";
import styles from './demo.module.scss';
import useWindow from "@/app/hooks/useWindow";

export default function Demo() {

    const { width, height } = useWindow();

    return (
        <div className={styles.cartaoDemo}>
            <h2>Mooi</h2>
            <p>Largura da Janela: {width} <br /> Altura da Janela: {height}</p>
            <img src="https://images.squarespace-cdn.com/content/v1/639cc5472f1c4f62f122a7e6/d8b9e76d-9a3f-4388-a47f-a38337825c43/Joya+Mooi+-+SOHO+2+%28by+Boris+Lutters%29.jpg" alt="Imagem demonstrativa Mooi" />
            <p>Descubra uma curadoria especial de produtos pensados para inspirar seu dia a dia. Design, qualidade e estilo em cada detalhe. <br/> Explore o novo. Viva o belo.</p>
        </div>
    );
}