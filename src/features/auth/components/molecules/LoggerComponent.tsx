<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';
import { logger, LOGGER_EVENTS, setUserInfo } from '../../../../utils/logger';

=======
// src/components/MyComponent.tsx

import React, { useEffect } from 'react';
import { logger, LOGGER_EVENTS, setUserInfo } from '../../../../utils/logger'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
>>>>>>> 33b6491 (feat(KAN-34): Global logger component created and added a button to test the component in console)
=======
import React, { useEffect } from 'react';
import { logger, LOGGER_EVENTS, setUserInfo } from '../../../../utils/logger';

>>>>>>> effb40aea1c9d85182cf72ca61164e0e3f3c53a2

const LoggerComponent: React.FC = () => {
  useEffect(() => {
    // Establece la información del usuario
    setUserInfo('usuario01@ejemplo.com', 'userId123456');
  }, []);

  const handleClick = () => {
    // Registra un evento de clic
    logger(LOGGER_EVENTS.ERROR, new Error('Algo salió mal. Vueleve a intentarlo'), 'MyModule', 'Desktop', {
        method: 'GET',
        url: '/api/data',
        statusCode: 500,
        responseTime: 120,
      });
  };

  return (
    <button onClick={handleClick}>Click the logger component here and look at the error in the console</button>
  );
};

export default LoggerComponent;
