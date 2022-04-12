import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  condition: any = {
    city: 'All',
    date: 'Desc'
  };

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  filterPosts(event: any): void {
    this.condition = event;
    this.findPosts();
    console.log(event);
  }

  findPosts(): void {
    this.postService.findAllPostsBasedOnCondition(this.condition).subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

}
