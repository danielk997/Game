import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class

StorageService {
  constructor() {}

  static setItem(name: string, item: any): void {
    switch (typeof item) {
      case 'string':
        localStorage.setItem(name, item);
        break;
      case 'number':
        localStorage.setItem(name, item.toString());
        break;
      case 'object':
        localStorage.setItem(name, JSON.stringify(item));
    }
  }

  static getItem(name: string): string | undefined | any {
    if (!localStorage.getItem(name)) return undefined;

    const item = localStorage.getItem(name);

    try {
      return JSON.parse(item!);
    } catch (e) {
      return item!;
    }
  }
}
