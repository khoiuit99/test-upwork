import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class BreadCrumbService {
    breadCrumb: string[] = ['Start', 'Mobile']

    constructor() { }

    addBreadCrumb(data: string) {
        this.breadCrumb.push(data)
    }

    removeBreadCrumb(index: number) {
        this.breadCrumb.splice(index);
    }
}
