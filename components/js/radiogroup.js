import { UIElement } from "./base/uielement.js";
import { Utils } from "./helper/utils.js";

export class Radiogroup extends UIElement {
    constructor(header) {
        super();

        this.htmlElement = document.createElement("fieldset");
        this.htmlElement.classList.add("sc-fieldset");

        if (header !== undefined) {
            const legend = document.createElement("legend");
            legend.classList.add("sc-legend");
            legend.textContent = header;
            this.htmlElement.appendChild(legend);
        }

        this.groupName = Utils.getUId();
    }

    add(name) {
        const container = document.createElement("div");
        container.classList.add("sc-radio-group-item");

        const input = document.createElement("input");
        input.classList.add("sc-input");
        input.type = "radio";
        input.name = this.groupName;
        input.id = Utils.getUId();

        const label = document.createElement("label");
        label.classList.add("sc-radio-label");

        label.textContent = name;
        label.setAttribute("for", input.id);

        container.appendChild(input);
        container.appendChild(label);

        this.htmlElement.appendChild(container);
    }

    set(label) {
        const inputElement = Array.from(this.htmlElement.querySelectorAll('label')).find(el => el.textContent.trim() === label).parentElement.querySelector("input");

        inputElement.checked = true;
    }

    get() {
        return this.htmlElement.querySelector('input[type="radio"]:checked')?.parentElement.querySelector("label").textContent;
    }
}
