document.addEventListener("DOMContentLoaded", function () {
  // Media control buttons
  const volumeUpBtn = document.getElementById("volumeUp");
  const volumeDownBtn = document.getElementById("volumeDown");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const stopBtn = document.getElementById("stop");
  const nextTrackBtn = document.getElementById("nextTrack");
  const previousTrackBtn = document.getElementById("previousTrack");

  // Status message element for feedback
  const statusDiv = document.createElement("div");
  statusDiv.id = "status";
  statusDiv.style.marginTop = "20px";
  statusDiv.style.padding = "10px";
  document.body.appendChild(statusDiv);

  // Function to send API requests
  function sendMediaCommand(endpoint) {
    // Show loading status
    statusDiv.textContent = `Sending ${endpoint} command...`;
    statusDiv.style.color = "blue";

    fetch(`/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(
              `Server error: ${err.message || response.statusText}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        statusDiv.textContent = `Success: ${data.message}`;
        statusDiv.style.color = "green";
        setTimeout(() => {
          statusDiv.textContent = "";
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        statusDiv.textContent = `Error: ${error.message}`;
        statusDiv.style.color = "red";
      });
  }

  // Add event listeners
  if (volumeUpBtn)
    volumeUpBtn.addEventListener("click", () => sendMediaCommand("volume_up"));
  if (volumeDownBtn)
    volumeDownBtn.addEventListener("click", () =>
      sendMediaCommand("volume_down")
    );
  if (playBtn)
    playBtn.addEventListener("click", () => sendMediaCommand("play"));
  if (pauseBtn)
    pauseBtn.addEventListener("click", () => sendMediaCommand("pause"));
  if (stopBtn)
    stopBtn.addEventListener("click", () => sendMediaCommand("stop"));
  if (nextTrackBtn)
    nextTrackBtn.addEventListener("click", () =>
      sendMediaCommand("next_track")
    );
  if (previousTrackBtn)
    previousTrackBtn.addEventListener("click", () =>
      sendMediaCommand("previous_track")
    );
});
