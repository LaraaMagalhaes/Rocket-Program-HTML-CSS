// Padrão Factory Method: escolhe qual classe instanciar com base em uma condição

// Classe base
class Logger {
    log(texto) {
      console.log("Logger genérico:", texto);
    }
  }
  
  // Subclasse para logs em arquivo
  class FileLogger extends Logger {
    log(texto) {
      console.log("Logger de arquivo:", texto);
    }
  }
  
  // Subclasse para logs no console
  class ConsoleLogger extends Logger {
    log(texto) {
      console.log("Logger de console:", texto);
    }
  }
  
  // Função fábrica que escolhe qual logger criar
  function CreateLogger(type) {
    if (type === "console") {
      return new ConsoleLogger();
    } else if (type === "file") {
      return new FileLogger();
    } else {
      return new Logger(); // Caso não seja especificado, retorna o genérico
    }
  }
  
  // Dependendo do ambiente, escolhemos um logger
  const env = "desenvolvimento"; 
  const tipoLogger = env === "desenvolvimento" ? "console" : "file";
  
  const logger = CreateLogger(tipoLogger);
  logger.log("Olá!"); // Vai imprimir de acordo com o tipo
  