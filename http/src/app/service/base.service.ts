import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface IServerEntity {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends IServerEntity> {

  apiUrl: string = environment.apiUrl;
  entityName: string = ``;

  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(
    protected http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<T[]>(`${this.apiUrl}/${this.entityName}`)
      .subscribe(
        list => this.list$.next(list)
      );
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(
      `${this.apiUrl}/${this.entityName}`,
      entity
    );
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}/${this.entityName}/${entity.id}`,
      entity
    );
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(
      `${this.apiUrl}/${this.entityName}/${id}`
    ).pipe(
      tap( () => {
        const index = this.list$.value.findIndex( e => e.id === id );
        const exists = [...this.list$.value];
        exists.splice(index, 1);
        this.list$.next(exists);
      } ),
    );
  }
}
