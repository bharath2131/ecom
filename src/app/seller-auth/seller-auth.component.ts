import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { SignUp } from '../datatype';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService){}
  showLogin=false
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data:SignUp): void{
    console.warn(data);
    this.seller.userSignUp(data)
  }
  login(data:SignUp): void{
    console.warn(data);
  }                                                                                        
                                  
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
 }
                                                                           
