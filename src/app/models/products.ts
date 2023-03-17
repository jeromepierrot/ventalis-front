import {MatTableDataSource} from "@angular/material/table";

export class Product extends MatTableDataSource<any> {
  id: number;
  label: string;
  id_picture: number;
  description: string;
  unit_price_ht: number;
  min_order_qty: number;
  is_visible: boolean;

  constructor(data: any) {
    super();
    this.id = data.id;
    this.label = data.label;
    this.id_picture = data.id_picture;
    this.description = data.description;
    this.unit_price_ht = data.unit_price_ht;
    this.min_order_qty = data.min_order_qty;
    this.is_visible = data.done;
  }


  override toString() {
    return "Product{" +
      "id=" + this.id +
      ", title='" + this.label + '\'' +
      ", picture='" + this.id_picture + '\'' +
      ", description='" + this.description + '\'' +
      ", unitPriceHt=" + this.unit_price_ht +
      ", minOrderQuantity=" + this.unit_price_ht +
      ", isVisible=" + this.is_visible +
      '}';
  }

  serialize() {
    return {
      id: this.id,
      label: this.label,
      picture:this.id_picture,
      description: this.description,
      unitPriceHt: this.unit_price_ht,
      minOrderQuantity: this.min_order_qty,
      isVisible: this.is_visible,
    }
  }

  deserialize(data: any) {
    this.id = data.id;
    this.label = data.label;
    this.description = data.description;
    this.unit_price_ht = data.unitPriceHt;
    this.min_order_qty = data.minOrderQuantity;
    this.is_visible = data.isVisible;
  }
}
