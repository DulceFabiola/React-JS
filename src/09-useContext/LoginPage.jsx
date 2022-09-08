import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  //indicarle que contexto se utilizará
  //destructuración de los children que retorna el hook 'user'
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
        onClick={() => setUser({
          id: 123,
          name: 'Fa',
          email: 'fa@gmail.com'
        })}
        className='btn btn-primary'
      >
        Establecer usuario
      </button>



    </>
  )
}
