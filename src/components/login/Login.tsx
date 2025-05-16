'use client';

import React from "react";
import useGoogleLogin from "@/app/hooks/useGoogleLogin";
import styles from './login.module.scss'

const Login: React.FC = () => {
  const seSucesso = (token: string) => {
    console.log("Token JWT:", token);
  };

  const seFalha = (error: string) => {
    console.error("Erro no login com Google:", error);
  };

  useGoogleLogin({ onSuccess: seSucesso, onFailure: seFalha });

  return (
    <div id="logarGoogle" className={styles.logarGoogle}></div>
  );
};

export default Login;
