import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  query<T>(entityName: string): T[] {
    let users: T[] = JSON.parse(localStorage.getItem(entityName) || '[]')
    return users
  }

  save<T>(entityName: string, entityToSave: T[]) {
    localStorage.setItem(entityName, JSON.stringify(entityToSave))
  }
}
