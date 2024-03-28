document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById('paintings');

  fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach(painting => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = painting.name;
        row.appendChild(nameCell);

        const yearCell = document.createElement('td');
        yearCell.textContent = painting.year;
        row.appendChild(yearCell);

        const artistCell = document.createElement('td');
        artistCell.textContent = painting.artist;
        row.appendChild(artistCell);

        table.appendChild(row);
      });
    })
    .catch(err => {
      console.error(err.message);
    });
});
