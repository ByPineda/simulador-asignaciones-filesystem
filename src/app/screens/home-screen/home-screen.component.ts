import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  constructor(
    private router: Router
  ){

  }
  navegarContigua(){
    this.router.navigate(['/contigua']);
  }
  
  navegarFat(){
    this.router.navigate(['/fat']);
  }

  navegarIndexada(){
    this.router.navigate(['/indexada']);
  }

  navegarInodo(){
    this.router.navigate(['/inodo']);
  }

  navegarVinculada(){
    this.router.navigate(['/vinculada']);
  }
}
