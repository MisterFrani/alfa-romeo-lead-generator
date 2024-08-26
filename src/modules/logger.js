const isDevMode = import.meta.env.MODE === "development";

// Define the Logger class
class Logger {
  // Static method for debug logging
  static debug(...args) {
    isDevMode && console.debug(String.fromCodePoint(0x2728), ...args);
  }

  // Static method for info logging
  static info(...args) {
    isDevMode && console.info(String.fromCodePoint(0x2728), ...args);
  }

  // Static method for general logging
  static log(...args) {
    isDevMode && console.log(String.fromCodePoint(0x2728), ...args);
  }

  // Static method for warning logging
  static warn(...args) {
    isDevMode && console.warn(String.fromCodePoint(0x1f915), ...args);
  }

  // Static method for error logging
  static error(...args) {
    isDevMode && console.error(String.fromCodePoint(0x1f92f), ...args);
  }
}

// Export the Logger class as the default export
export default Logger;
