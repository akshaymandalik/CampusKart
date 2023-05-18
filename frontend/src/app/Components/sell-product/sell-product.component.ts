import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { IMAGE_BASE_PATH } from 'src/app/shared/constants/urls';
import { Category } from 'src/app/shared/models/Categories';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.css'],
})
export class SellProductComponent implements OnInit {
  sellerForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  imageUrl1!: string;
  imageUrl2!: string;
  imageUrl3!: string;
  imageUrl4!: string;
  subcategoryData!: string[];
  categories?: Category[];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.productService.getAllCategories().subscribe((serverCategories) => {
      this.categories = serverCategories;
    });
  }

  user = this.userService.currentUser;

  get fc() {
    return this.sellerForm.controls;
  }

  ngOnInit(): void {
    this.sellerForm = this.formBuilder.group({
      pName: ['', [Validators.required]],
      pPrice: ['', [Validators.required]],
      pDesc: ['', [Validators.required]],
      pCat: ['', [Validators.required]],
      pSubCat: ['', [Validators.required]],
      pMobile: ['', [Validators.required]],
      pImage1: ['', [Validators.required]],
      pImage2: ['', [Validators.required]],
      pImage3: ['', [Validators.required]],
      pImage4: ['', [Validators.required]],
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      this.returnUrl = params['returnUrl'];
    });
  }

  setImagePath() {
    this.imageUrl1 = IMAGE_BASE_PATH + this.fc.pImage1.value.substring(12);
    this.imageUrl2 = IMAGE_BASE_PATH + this.fc.pImage2.value.substring(12);
    this.imageUrl3 = IMAGE_BASE_PATH + this.fc.pImage3.value.substring(12);
    this.imageUrl4 = IMAGE_BASE_PATH + this.fc.pImage4.value.substring(12);
  }

  splitCategory() {
    const subcategoryInput = document.getElementById(
      'subcategoryData'
    ) as HTMLInputElement;

    const dataSubategory = subcategoryInput.value;

    this.subcategoryData = dataSubategory.split(',');
    console.log(this.subcategoryData);
  }

  addProduct() {
    this.isSubmitted = true;
    if (this.sellerForm.invalid) {
      console.log('Invalid Form');
      return;
    }

    this.setImagePath();
    this.splitCategory();

    this.productService
      .postProduct({
        name: this.fc.pName.value,
        price: this.fc.pPrice.value,
        imageUrl: this.imageUrl1,
        imageUrl1: this.imageUrl2,
        imageUrl2: this.imageUrl3,
        imageUrl3: this.imageUrl4,
        desc: this.fc.pDesc.value,
        category: this.fc.pCat.value,
        subcategory: this.subcategoryData,
        seller_name: this.user.name,
        seller_mobile: this.fc.pMobile.value,
        seller_address: this.user.address,
        seller_email: this.user.email,
      })
      .subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }
}
