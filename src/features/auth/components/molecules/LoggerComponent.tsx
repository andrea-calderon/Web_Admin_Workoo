// src/components/MyComponent.tsx

import React, { useEffect } from 'react';
import { logger, LOGGER_EVENTS, setUserInfo } from '../../../../utils/logger'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

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
