import { StudentModel } from "./StudentModel";

export class ListModels {
    data: Array<string>;
    status: number;

    constructor() {
        this.data = [];
        this.status = null;
    }
}