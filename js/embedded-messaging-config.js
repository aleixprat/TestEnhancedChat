/**
 * APSP 25/01/2026
 * Configuración del deployment de Embedded Messaging.
 * Nota:
 * - Estos valores no son secretos y el widget los necesita para funcionar en cliente.
 * - Se externalizan para facilitar mantenimiento y gestión por entorno (DEV / PROD).
 */
window.EMBEDDED_MESSAGING_CONFIG = {
  orgId: "00DUE000005T6S9",
  deploymentName: "Xat",
  siteEndpoint: "https://uvic--dev.sandbox.my.site.com/ESWXat1765448025141",
  scrt2URL: "https://uvic--dev.sandbox.my.salesforce-scrt.com",
  language: "es",

  //Nombre del campo Hidden Pre-Chat definido en Messaging Settings
  hiddenFieldName: "tipologiaURL",
};
