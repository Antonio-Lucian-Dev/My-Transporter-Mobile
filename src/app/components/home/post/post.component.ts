import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Post } from '../../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  isUserAdmin = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    const userRole = this.authService.getUserInfo() ? this.authService.getUserInfo().role : null;
    this.isUserAdmin = userRole && userRole === 'ADMIN';
  }

}
