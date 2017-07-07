import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpAppService {

    constructor(private http: Http) { }

    getList() {
        return this.http.get('http://localhost:4000/Home/Index')
            .map((response: any) => {
                let array = response.json();
                return array;
            })
            .catch((error: any): any => { (console.log("Error Post request login:" + error)) });
    }
}