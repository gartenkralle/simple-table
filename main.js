import { loadTable } from "./table.js";

const headerData = ['Name', 'Email', 'Actions'];
const jsonData = await (await fetch('customers.json')).json();
const targetElement = document.getElementById('customers');

await loadTable(jsonData, headerData, targetElement);