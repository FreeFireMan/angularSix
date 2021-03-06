import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from '../interface/i-posts';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPosts;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  infoPost(): void {
    this.router.navigate([this.post.id], {
      relativeTo: this.activatedRoute,
      state: this.post
    });
  }
}
