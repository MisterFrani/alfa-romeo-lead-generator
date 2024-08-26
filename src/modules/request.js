import Logger from "./logger";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const requestInterceptor = async (url, options) => {
  Logger.info("Fetch interceptor: request configuration", { url, options });

  if (
    options.method &&
    ["POST", "PUT", "PATCH"].includes(options.method.toUpperCase())
  ) {
    const data = options.data ?? {};
    Logger.info("Data sent:", data);

    options.body = JSON.stringify(data);
    delete options.data;
  }

  return { url, options };
};

const responseInterceptor = async (response) => {
  Logger.info("Fetch interceptor: response success", response);
  const contentLength = response.headers.get("content-length");

  if (contentLength === "0" || contentLength === null) {
    return response;
  }

  return response.json();
};

const errorInterceptor = (error) => {
  Logger.error("Fetch interceptor: request/response failure", error);
  throw error;
};

const middleware =
  (baseURL) =>
  async (endpoint, options = {}) => {
    try {
      const { url, options: finalOptions } = await requestInterceptor(
        `${baseURL}${endpoint}`,
        { ...defaultHeaders, ...options }
      );
      const response = await fetch(url, finalOptions);

      if (!response.ok && finalOptions.mode !== "no-cors") {
        return errorInterceptor(
          new Error(`HTTP error! status: ${response.status}`)
        );
      }

      return await responseInterceptor(response);
    } catch (error) {
      return errorInterceptor(error);
    }
  };

const apisFactory = () => ({
  geoGov: middleware(import.meta.env.VITE_API_GEOGOV),
  zapier: middleware(import.meta.env.VITE_API_ZAPIER),
});

const apis = apisFactory();
export { apis };
