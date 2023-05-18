import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/shared/models/Categories';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AllSubCategoriesComponent } from '../../all-sub-categories/all-sub-categories.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories?: Category[];

  constructor(
    private productService: ProductService,
    private dialogRef: MatDialog
  ) {
    this.productService.getAllCategories().subscribe((serverCategories) => {
      this.categories = serverCategories;
    });
  }

  ngOnInit(): void {}
  openDialog() {
    this.dialogRef.open(AllSubCategoriesComponent, {
      position: { top: '120px' },
      disableClose: false,
      width: '100%',
    });
  }
}
