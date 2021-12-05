import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  public constructor(
    private parent: Element,
    private collection: Collection<T, K>
  ) {}

  protected abstract renderItem(model: T, itemParent: Element): void;

  public render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");

    this.collection.models.forEach((model) => {
      const itemParent = document.createElement("div");
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    });

    this.parent.append(templateElement.content);
  }
}
