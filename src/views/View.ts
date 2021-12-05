import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  protected regions: { [key: string]: Element } = {};

  constructor(protected parent: Element, protected model: T) {
    this.bindModel();
  }

  protected abstract template(): string;

  protected regionsMap(): { [key: string]: string } {
    return {};
  }

  protected eventsMap(): { [key: string]: () => void } {
    return {};
  }

  private bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  private bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  private mapRegions(fragment: DocumentFragment): void {
    Object.entries(this.regionsMap()).forEach(([key, selector]) => {
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    });
  }

  protected onRender(): void {}

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}