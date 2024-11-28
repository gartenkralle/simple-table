import { Table } from "/components/table.js";
import { Modal } from "/components/modal.js";

const headerData = ["Name", "Email", "Salary"];

const response = await fetch("data/customers.json");
const bodyData = await response.json();

const sourceElement = document.querySelector("#modal-button");

const table = new Table(headerData, bodyData);
const modal = new Modal();

const button = document.createElement('button');
button.innerText = "Button inside modal";

modal.add(table.htmlElement);
modal.add(button);

modal.connect(sourceElement);