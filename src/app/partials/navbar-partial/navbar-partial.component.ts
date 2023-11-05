import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar-partial',
  templateUrl: './navbar-partial.component.html',
  styleUrls: ['./navbar-partial.component.css']
})
export class NavbarPartialComponent {

  constructor(
    private router: Router
  ){

  }
  public returnHome(){
    this.router.navigate(['/']);
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
