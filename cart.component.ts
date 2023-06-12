import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public product:any=[];
  public gr:number=0;
  public text:string='';
  public c:string='';
  constructor(private cartservice:CartService, private http:HttpClient,private router:Router){}
  ngOnInit():void{
    this.cartservice.getProducts().subscribe(res=>{
      this.product=res;
    })
  }
gt()
{
  this.cartservice.getProducts().subscribe(res=>{
    this.product=res;
    this.gr=this.cartservice.gettotal()
  })
}
  booknow(){
  if (confirm("a confirmation mail will be sent to your email id") == false) {
    this.text = "Your  orderd is cancelled😒😒😒!";
  }
  else{
    this.text="your order is confirmed 😊😊";
  }
    this.http.post('http://localhost:3336/carti',{data:this.product})
    .subscribe(response => {
        console.log("done");
    },(error)=>{
      alert("Error in booking");
    });
    this.router.navigate(['/success']);
  }
  removeit(a:any){
    if(confirm('Are you sure to delete? '))
    this.cartservice.removecon(a);
  }
  cancel(){
    let Oid= prompt("Please enter your order id");
    this.http.post('http://localhost:3336/cancel',{Oid})
    .subscribe(response => {
        console.log("done");
        alert("order cancelled 🥲🥲🥲🥲")
    },(error)=>{
      this.router.navigate(['/login']);
      alert("login or sign up to place the order");
    });
  }
  emptycart(){
    this.car
tservice.removeallit(); 
  }
}
