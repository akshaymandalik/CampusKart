import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Category, subcategory } from 'src/app/shared/models/Categories';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-all-sub-categories',
  templateUrl: './all-sub-categories.component.html',
  styleUrls: ['./all-sub-categories.component.css'],
})
export class AllSubCategoriesComponent {
  categories?: Category[];
  subcategories?: subcategory[];

  constructor(
    productService: ProductService,
    public dialogRef: MatDialogRef<AllSubCategoriesComponent>
  ) {
    productService.getAllCategories().subscribe((serverCategories) => {
      this.categories = serverCategories;
    });
    productService.getAllSubCategories().subscribe((serversubCategories) => {
      this.subcategories = serversubCategories;
    });
  }
  onClose() {
    this.dialogRef.close();
  }
}
