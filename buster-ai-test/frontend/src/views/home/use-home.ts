import { useState, useEffect } from 'react';
import api from '../../services/api';

export const useHome = () => {
  const [credit, setCredit] = useState(0);
  const [index, setIndex] = useState(0);
  const [fibonacci, setFibonacci] = useState<number | null>(null);

  useEffect(() => {
    api
      .getCredit()
      .then(cred => {
        setCredit(cred);
      })
      .catch(err => {
        alert(`Error: ${err.response.data.message}`);
      });
  }, []);

  const handleChangeIndex = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api
      .getFibonacci(index)
      .then(([num, newCredit]) => {
        setFibonacci(num);
        setCredit(newCredit);
      })
      .catch(err => {
        alert(`Error: ${err.response.data.message}`);
      });
  };

  const handleAddCredit = (amount: number) => {
    api
      .addCredit(amount)
      .then(newCredit => {
        setCredit(newCredit);
      })
      .catch(err => {
        alert(`Error: ${err.response.data.message}`);
      });
  };

  return {
    credit,
    fibonacci,
    index,
    handleAddCredit,
    handleChangeIndex,
    handleSubmit,
  };
};
