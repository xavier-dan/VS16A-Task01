import React from 'react';
import styles from './formContato.module.scss';

export default function FormContato() {
    return (
        <div>
            <form className={styles.form}>
                <h2>FALE COM UM ESPECIALISTA</h2>
                <div className={styles.row}>
                    <input type="text" placeholder="NOME" required />
                    <input type="text" placeholder="TELEFONE" required />
                </div>
                <div className={styles.row}>
                    <input type="text" placeholder="E-MAIL" required />
                    <input type="text" placeholder="ASSUNTO" required />
                </div>
                <div className={styles.row}>
                    <textarea placeholder="MENSAGEM" name="mensagem" required></textarea>
                </div>
                <button>ENVIAR</button>
            </form>
        </div>
    );
}