import { useEffect } from "react";

interface UseGoogleLoginProps {
  onSuccess: (token: string) => void;
  onFailure?: (error: string) => void;
};

interface Google {
  accounts: {
    id: {
      initialize: (config: { client_id: string; callback: (response: { credential: string }) => void }) => void;
      renderButton: (element: HTMLElement | null, options: { type: string, theme: string; size: string, shape: string, locale: string }) => void;
    };
  };
}

declare global {
  interface Window {
    google: Google;
  }
}

const GOOGLE_CLIENT_ID = "829003031438-vgol9hppn83kroa16dpi4rqt7dhej7kc.apps.googleusercontent.com";

export default function useGoogleLogin({ onSuccess, onFailure }: UseGoogleLoginProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!window.google) {
        onFailure?.("Não foi possível carregar o script Google.");
        return;
      }

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: responseCredential,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("logarGoogle"),
        {
          type: "icon",
          theme: "outline",
          size: "medium",
          shape: "circle",
          locale: "pt-br"
        }
      );
    };

    const responseCredential = (response: { credential: string }) => {
      if (response.credential) {
        onSuccess(response.credential);
      } else {
        onFailure?.("Erro ao obter credencial.");
      }
    };

    return () => {
      document.body.removeChild(script);
    };

  }, [onSuccess, onFailure]);
}
