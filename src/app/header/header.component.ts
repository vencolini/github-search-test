import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // init theme name var
  public theme_name: string = "default";

  constructor(private themeService: NbThemeService) {
    this.themeService.onThemeChange()
      .subscribe((theme: any) => {
        this.theme_name = theme.name;
        // console.log(`Theme changed to ${theme.name}`);
      });
   }

  ngOnInit(): void {
  }

  changeThemeTo(theme: string): void{
    this.themeService.changeTheme(theme);
  }

  isActiveTheme(current_theme:string) {
    if(this.theme_name == current_theme) {
      return true;
    } else {
      return false;
    }
  }

}
