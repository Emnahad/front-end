import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../service/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor(private service: ProjectsService) {
  }
  ngOnInit(): void {
    this.getProjects

  }
  getProjects() {
    this.service.getAllProjects().subscribe((res: any) => (
      console.log(res)
    ))
  }

}
