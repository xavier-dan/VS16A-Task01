import React from 'react';
import styles from './navbar.module.scss';
import TextMenu from "../textmenu/TextMenu";
import {
    FaHome,
    FaLeaf,
    FaBookOpen,
    FaEnvelope,
    FaInfo,
    FaBars,
    FaTimes,
} from "react-icons/fa";

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>

                <input type="checkbox" id="menu" className={styles.menu} />

                <label htmlFor="menu" className={styles.menuIcon}>
                    <FaBars className={styles.abrir} />
                    <FaTimes className={styles.fechar} />
                </label>
                <div className={styles.menuItems}>
                    <TextMenu texto="Home" href="/home" icon={<FaHome />} />
                    <TextMenu texto="Produtos" href="/products" icon={<FaLeaf />} />
                    <TextMenu texto="Feed" href="/feed" icon={<FaBookOpen />} />
                    <TextMenu texto="Contato" href="/contact" icon={<FaEnvelope />} />
                    <TextMenu texto="Saiba Mais" href="/more" icon={<FaInfo />} />
                </div>
            </nav>
        </>
    );
}