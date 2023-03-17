export class Category {
  id: number;
  name: string;
  is_visible: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.is_visible = data.done;
  }

  toString() {
    return "Product{" +
      "id=" + this.id +
      ", name='" + this.name + '\'' +
      ", isVisible=" + this.is_visible +
      '}';
  }

  serialize() {
    return {
      id: this.id,
      name: this.name,
      isVisible: this.is_visible,
    }
  }

  deserialize(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.is_visible = data.isVisible;
  }
}
