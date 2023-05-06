import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'animatedLogin';
  passwordType: string ='password';
  noEntering:boolean=true;
  passwordShown: boolean= false;
  passwordHide: boolean= false;
  userNameEntering: boolean= false;
  userName:any;
  password:any;
  gifUrls:string[]=[]
  constructor() {
  
  }
  ngOnInit(): void {
    this.gifUrls=[
      'assets/animations/Ani-1.gif',
      'assets/animations/Ani-2.gif',
      'assets/animations/Ani-3.gif',
      'assets/animations/Ani-4.gif'
    ]
  }
  public inputval(){
    this.userNameEntering=true;
    this.noEntering=false;
    this.passwordHide=false;
    this.passwordShown=false
    // console.log(this.userNameEntering,'username')
  }
  
  public passwordEnter(){
    if(this.passwordShown==true){
      this.passwordHide=false;
    }
    else{
      this.passwordHide=true;
      this.noEntering=false;
      this.userNameEntering=false;
      this.passwordShown=false;
    }
    // console.log(this.userNameEntering,'username');
  }
 

  public togglePassword(){

    if (this.passwordShown){
      this.passwordShown=false;
      this.passwordHide=true;
      this.noEntering=false;
      this.userNameEntering=false;
      this.passwordType='password';
    }
    else{
      this.passwordShown=true;
      this.noEntering=false;
      this.userNameEntering=false;
      this.passwordType='text';
      this.passwordHide=false;
    }
  }
public clear(){
  window.location.reload();
}

}
