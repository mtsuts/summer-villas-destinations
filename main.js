document.addEventListener("DOMContentLoaded", async () => {
  const searchInput = document.getElementById("search-input");

  try {
    window.destinationTable = await initDestinationTable("#table");

    searchInput.addEventListener("input", (event) => {
      window.destinationTable.filter(event.target.value);
    });
  } catch {
    document.getElementById("table").innerHTML = `
      <p class="ranking-table__empty">
        Unable to load destination data. Please run the site from a local server.
      </p>
    `;
  }
});
