import { Component,OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
calculateTotal() {
throw new Error('Method not implemented.');
}
  title = 'amazom_eCommerce';
  registerObj: any = {
    "CustId": 0,
    "Name": "",
    "MobileNo": "",
    "Password": ""
  }
  loginObj: any = {
    "UserName": "",
    "UserPassword": ""
  }
  loggedObj: any = {};
  cartItems: any[]= [];
  loginModelClass: string = '';

  constructor(private productSrv: ProductService,private router: Router, private route: ActivatedRoute) {
    const localData = localStorage.getItem('amazon_user');
    if(localData != null) {
      const parseObj =  JSON.parse(localData);
      this.loggedObj = parseObj;
      this.getCartData(this.loggedObj.custId)
    }
    this.productSrv.cartUpdated.subscribe((res: boolean)=>{
      if(res) {
        this.getCartData(this.loggedObj.custId)
      }
    })
    this.productSrv.showLogin.subscribe((res: boolean)=>{
      if(res) {
         this.loginModelClass = 'show';
      }
    })
  }
  searchProducts(): void {
    
    console.log('Recherche activée');
}
ngOnInit() {
  
  this.route.fragment.subscribe(fragment => {
    if (fragment) {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  });
}

  getCartData(id: number) {
    this.productSrv.getAddtocartdataByCust(id).subscribe((res: any)=>{
      this.cartItems = res.data;
    })
  }

  openRegister(): void {
    
    console.log('Register opened');
  }
  onLogin() {
    this.productSrv.login(this.loginObj).subscribe((res: any)=> {
      if(res.result) {
        alert("User Login Success");
        this.loggedObj = res.data;
        this.loginModelClass = '';
        localStorage.setItem('amazon_user', JSON.stringify(res.data));
        this.getCartData(this.loggedObj.custId)
      } else {
        alert(res.message)
      }
    })
  }
  removeItem(cartId: number) {
    this.productSrv.removeProductFromCart(cartId).subscribe((res: any)=> {
      if(res.result) {
        alert("Item Removed"); 
        this.getCartData(this.loggedObj.custId)
      } else {
        alert(res.message)
      }
    })
  }
  
}
