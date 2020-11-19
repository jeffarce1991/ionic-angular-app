import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  

  constructor(private authService: AuthService, private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.loadingController.create({
      keyboardClose: true, message: "Logging in..."
    }).then(it => {
      it.present();
      setTimeout(() => {
        this.router.navigateByUrl('/places/tabs/discover')
        this.isLoading = false;
        it.dismiss();
      }, 1500)
    });
    this.authService.login();

    
  }
}
