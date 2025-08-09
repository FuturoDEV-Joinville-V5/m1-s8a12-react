import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  // verifica se tem e recupera dados guardados
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // salva dados quando o state muda
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  // disponibiliza o dado e função de atualização
  return [storedValue, setStoredValue];
}

export default useLocalStorage;
