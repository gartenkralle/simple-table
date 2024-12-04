export class Modal {
    public htmlElement: HTMLDivElement;
  
    constructor() {
      this.htmlElement = document.createElement("div");
      this.htmlElement.classList.add("modal");
  
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
  
      this.htmlElement.appendChild(modalContent);
  
      document.body.appendChild(this.htmlElement);
  
      window.addEventListener("click", (e: MouseEvent) => {
        if (e.target === this.htmlElement) {
          this.htmlElement.classList.remove("fade-in");
          this.htmlElement.classList.add("fade-out");
        }
      });
  
      this.htmlElement.addEventListener("animationend", (event: AnimationEvent) => {
        if (event.animationName === "fadeOut") {
          this.htmlElement.style.display = "none";
          this.htmlElement.classList.remove("fade-out");
        }
      });
    }
  
    add(htmlElement: HTMLElement): void {
      const modalContent = this.htmlElement.querySelector<HTMLDivElement>(".modal-content");
      if (modalContent) {
        modalContent.appendChild(htmlElement);
      } else {
        console.error("Modal content element not found.");
      }
    }
  
    connect(sourceElement: HTMLElement): void {
      sourceElement.addEventListener("click", () => {
        this.htmlElement.style.display = "flex";
        this.htmlElement.classList.remove("fade-out");
        this.htmlElement.classList.add("fade-in");
      });
    }
  }
  