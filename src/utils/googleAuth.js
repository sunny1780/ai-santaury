const GOOGLE_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

let googleScriptPromise;
let initializedClientId = '';
let activeCredentialHandler = null;
let activeErrorHandler = null;

function loadGoogleScript() {
  if (window.google?.accounts?.id) {
    return Promise.resolve(window.google);
  }

  if (googleScriptPromise) {
    return googleScriptPromise;
  }

  googleScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${GOOGLE_SCRIPT_SRC}"]`);

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.google), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Unable to load Google Sign-In')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.src = GOOGLE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google);
    script.onerror = () => reject(new Error('Unable to load Google Sign-In'));
    document.head.appendChild(script);
  });

  return googleScriptPromise;
}

export async function mountGoogleButton(container, options) {
  const { clientId, text = 'continue_with', onCredential, onError } = options;

  if (!container) {
    return undefined;
  }

  if (!clientId) {
    throw new Error('Google Sign-In client ID is not configured');
  }

  const google = await loadGoogleScript();

  if (!google?.accounts?.id) {
    throw new Error('Google Sign-In is unavailable');
  }

  activeCredentialHandler = onCredential;
  activeErrorHandler = onError;

  if (initializedClientId !== clientId) {
    google.accounts.id.initialize({
      client_id: clientId,
      callback: (response) => {
        if (!response?.credential) {
          activeErrorHandler?.(new Error('Google did not return a valid credential'));
          return;
        }

        activeCredentialHandler?.(response.credential);
      },
    });
    initializedClientId = clientId;
  }

  container.innerHTML = '';
  google.accounts.id.renderButton(container, {
    type: 'standard',
    theme: 'outline',
    size: 'large',
    shape: 'pill',
    text,
    width: container.offsetWidth || 430,
    logo_alignment: 'left',
  });

  return () => {
    activeCredentialHandler = null;
    activeErrorHandler = null;
    container.innerHTML = '';
  };
}
