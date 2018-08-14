
(function () {

  ////////////////////////////////////////////////
  //  Tech Devs Account Event Listeber Service  //
  ////////////////////////////////////////////////

  // Constants
  window.techdevsorigin = "http://localhost:4200";
  const sessionIdKey = "techdevs-account-session";
  const sessionDisplayName = "techdevs-account-displayname";

  // Code
  console.log("TechDevs Event Listener: Initialising...");
  console.log("TechDevs Event Listener: Allowed Origin " + window.techdevsorigin);

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(event) {
    if (event.origin !== window.techdevsorigin) { return; }

    if (event.data && event.data.isLoggedIn !== null) {
      if (event.data.isLoggedIn) {
        setLoggedIn(event.data);
      } else {
        setLoggedOut();
      }
    }
    console.log("Event received: ", event.data);
  }

  function setLoggedIn(data) {
    // Set the sessionId and display name in the storage
    window.sessionStorage.setItem(sessionIdKey, data.sessionId);
    window.sessionStorage.setItem(sessionDisplayName, data.displayName);

    // Reload the page so it can pickup the latest login state
    window.location = window.location;
  }

  function setLoggedOut() {
    window.sessionStorage.removeItem(sessionIdKey);
    window.sessionStorage.removeItem(sessionDisplayName);
    window.location = window.location.origin;
  }

  console.log("TechDevs Event Listener: Loaded Succesfully!");

})();

