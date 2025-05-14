import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.infosFooter}>
                    <div>
                        <h2>Assine Nossa Newsletter</h2>
                        <p>Assine para receber informações exclusivas sobre nossos produtos, eventos e mais.</p>
                        <form className={styles.newsletterForm}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name='email' required/>
                            <button type='submit'>Assinar</button>
                        </form>
                    </div>
                    <div>
                        <h2>Precisa de ajuda?</h2>
                        <button>Centro de Ajuda</button>
                        <p>Se você estiver usando um leitor digital e encontrar dificuldades, por favor nos contate.</p>
                    </div>
                </div>
                <hr />
                <div className={styles.copyright}>
                    <p>&copy; Mooi, Inc. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}