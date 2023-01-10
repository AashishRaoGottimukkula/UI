async function getData() {
    const response = fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const dataContainer = document.getElementById('data-container');
    const table = document.createElement('table');
    const headers = ['ID', 'Title', 'Body'];
    const headerRow = document.createElement('tr');
    headers.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.body}</td>`;
        table.appendChild(row);
    });
    dataContainer.appendChild(table);
}

getData();