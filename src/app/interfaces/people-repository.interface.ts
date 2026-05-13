import { Observable } from "rxjs";

export interface IPeopleRepositoryInterface {
    Post(name: string, surname: string, dateOfBirth: Date): Observable<boolean>;
}