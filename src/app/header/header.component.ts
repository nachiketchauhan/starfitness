import { Component } from '@angular/core';
import { SizeProp } from '@fortawesome/angular-fontawesome';
import { faDumbbell,faHome,faCalendarDays,faUsers,faUser,faLeaf,faBlog,faLocationDot} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  faDumbbell = faDumbbell;
  faHome=faHome;
  faCalendarDays=faCalendarDays;
  faUsers=faUsers;
  faUser=faUser;
  faLeaf=faLeaf;
  faBlog=faBlog;
  faLocationDot=faLocationDot;
size: SizeProp="2x";


}
