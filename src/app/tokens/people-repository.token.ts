import { InjectionToken } from "@angular/core";
import { IPeopleRepositoryInterface } from "../interfaces/people-repository.interface";

export const PEOPLE_REPOSITORY_TOKEN = 
    new InjectionToken<IPeopleRepositoryInterface>("PEOPLE_REPOSITORY_TOKEN");