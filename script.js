document.getElementById("invia").addEventListener("click", async () => {
    const form = document.getElementById("form-dati");
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    const response = await fetch("https://script.google.com/macros/s/AKfycbz8mocryGjDqrcKPbfWSMl1JfymO_oUw8UZLjdS9GippvpBS8FfTurM512blJLNnogs4g/execc", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();
    if (result.success) alert("PDF generato e salvato con successo!");
    else alert("Errore durante la generazione del PDF.");
});
