import { StudentModel } from "./StudentModel";

export class GlobalResponseModel {
    data: StudentModel;
    status: number;

    constructor() {
        this.data = new StudentModel();
        this.status = 1;
    }
}