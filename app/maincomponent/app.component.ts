import { Component, OnInit } from '@angular/core';
import { Task } from "../model/task"
import { HttpAppService } from "./app.service";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [HttpAppService]
})

export class AppComponent implements OnInit {

    tasks: Task[] = [];

    constructor(private httpService: HttpAppService) { }

    ngOnInit() {

        this.httpService.getList()
            .subscribe(
            (data: any) => {
                this.tasks = data;
                console.log("Login component:" + this.tasks)
            },
            (error: any) => { console.log("My Error Login:" + error) }
            )

    }
}