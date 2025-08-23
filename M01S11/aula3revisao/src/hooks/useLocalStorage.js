import { useEffect, useState } from "react";

function useLocalStorage({ key, value }) {
  const [valorAtual, setValorAtual] = useState(value);

  const alteraValor = (novoValor) => {
    localStorage.setItem(key, JSON.stringify(novoValor));
    setValorAtual(novoValor);
  };

  useEffect(() => {
    const valorRecuperado = localStorage.getItem(key);
    if (valorRecuperado) {
      setValorAtual(JSON.parse(valorRecuperado));
    }
  }, [key]);

  return [valorAtual, alteraValor];
}

export default useLocalStorage;
