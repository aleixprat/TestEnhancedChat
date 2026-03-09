function getLastPathUrlSegment() {
  var path = window.location.pathname || "/";
  var segments = path.split("/").filter(function (str) {
    return str && str.length > 0;
  });

  var last = "";
  if (segments.length > 0) {
    last = segments[segments.length - 1];
  }

  try {
    return decodeURIComponent(last);
  } catch (e) {
    return last;
  }
}

function getHostURL() {
  return window.location.host || "";
}

window.addEventListener("onEmbeddedMessagingReady", function () {
  try {
    var lastSegment = getLastPathUrlSegment();
    var host = getHostURL();

    embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({
      tipologiaURL: lastSegment,
      hostURL: host,
    });

    console.log("Hidden prechat fields enviados:", {
      tipologiaURL: lastSegment,
      hostURL: host,
    });
  } catch (e) {
    console.error(
      "[EmbeddedMessagingReady] Error inicializando Embedded Messaging Ready:",
      e
    );
  }
});

function initEmbeddedMessaging() {
  try {
    embeddedservice_bootstrap.settings.language = "es";

    embeddedservice_bootstrap.init(
      "00DUE000005T6S9",
      "Xat",
      "https://uvic--dev.sandbox.my.site.com/ESWXat1765448025141",
      {
        scrt2URL: "https://uvic--dev.sandbox.my.salesforce-scrt.com",
      }
    );
  } catch (err) {
    console.error(
      "[EmbeddedMessaging] Error inicializando Embedded Messaging:",
      err
    );
  }
}
