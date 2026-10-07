// Koppla in encore-API:t och hantera fel. / Connect the encore API and handle errors.
document.querySelector("#load").addEventListener("click", async () => {
  try {
  const response = await fetch('/api/encore');
    if (!response.ok) throw new Error("HTTP " + response.status);
    const track = await response.json();
    
    document.querySelector("#encore").textContent = track.artist + " - " + track.title;
    document.querySelector("#status").textContent = "OK";
  } catch (error) {
    document.querySelector("#status").textContent = error.message;
  }
});
