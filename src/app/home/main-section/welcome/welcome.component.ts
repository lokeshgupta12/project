import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MainSection } from '../main-section-component'
import { CourseDialogComponent } from '../../../course-dialog/course-dialog.component'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private dialog : MatDialog
    ) { }

  ngOnInit() {
  }
  //listConfig = 
  courses = [
    {
        id: 1,
        description: "Angular for Beginners",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
        category: 'BEGINNER',
        lessonsCount: 10
    },
    {
        id: 2,
        description: 'Angular Security Course - Web Security Fundamentals',
        longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
        category: 'ADVANCED',
        lessonsCount: 11
    }]

    editCourse({description, longDescription, category}) {

        const dialogRef = this.dialog.open(CourseDialogComponent,
            {
              disableClose : true,
              autoFocus: true,
              data: {
                  description, longDescription, category
              }
            });

        dialogRef.afterClosed().subscribe(
            val => console.log("Dialog output:", val)
        );

    }

  openDialog(): void {
    let dialogRef = this.dialog.open(MainSection, {
      //width: '100%',
      height : '600px',
      disableClose: true,
      data: {
        name: "Lovelesh",
        animal: "Rabbit"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }
}