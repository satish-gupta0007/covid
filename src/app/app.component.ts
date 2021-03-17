import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    constructor(private router: Router,private activeRoute:ActivatedRoute,private titleService: Title,) {
    }

    ngOnInit() {
        this.subscription = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => window.scrollTo(0, 0));
    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    getTitle() {
        this.subscription = this.router.events.pipe(
          filter(event => event instanceof NavigationEnd),
          map(() => {
            let child = this.activeRoute.firstChild;
            while (child) {
              if (child.firstChild) {
                child = child.firstChild
              } else if (child.snapshot.data && child.snapshot.data['title']) {
                return child.snapshot.data['title'];
              }
              else {
                return null
              }
            }
            return null
          })
        ).subscribe((data: any) => {
          if (data) {
            this.titleService.setTitle(data)
          }
        })
      }


}