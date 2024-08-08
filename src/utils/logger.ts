import { createLogger, format, transports } from 'winston';
import { v4 as uuidv4 } from 'uuid';

// Formato personalizado para el logger
const customFormat = format.printf(
  ({
    level,
    message,
    timestamp,
    user,
    environment,
    module,
    version,
    device,
  }) => {
    return `${timestamp} [${environment}] [${module}] [${version}] [${device}] [${level}] [${user.email}, ${user.id}] ${message}`;
  },
);

// Crear una instancia del logger
const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
  ],
});

interface User {
  id: string;
  email: string;
}

// Función para agregar información del usuario a los logs
export const log = (
  level: string,
  message: string,
  user: User,
  module: string,
  version: string,
  device: string,
) => {
  const environment = process.env.NODE_ENV || 'development';
  logger.log({
    level,
    message,
    user,
    environment,
    module,
    version,
    device,
  });
};

export default logger;
