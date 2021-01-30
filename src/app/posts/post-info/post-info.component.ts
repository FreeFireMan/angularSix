import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPosts} from '../interface/i-posts';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  post: IPosts;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(() => {
      this.post = this.router.getCurrentNavigation().extras.state as IPosts;
    });
  }

  ngOnInit(): void {
  }

}
