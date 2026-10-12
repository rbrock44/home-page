import { signal } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/**
 * Search and sort for a fixed list shown in a mat-table. Each search word has to appear in at
 * least one of the row's `searchableText`, case-insensitively. Rows with no value in the sorted
 * column always sort last.
 */
export abstract class SearchableTableService<T> {
  dataSource: MatTableDataSource<T>;
  // the table is destroyed when a search finds nothing, so its count can't come from the table
  rowCount = signal(0);
  sort: MatSort = new MatSort();

  protected constructor(public list: T[]) {
    this.dataSource = new MatTableDataSource<T>(this.getList());
    this.rowCount.set(this.dataSource.data.length);
  }

  protected abstract searchableText(row: T): string[];

  sortData(sort: MatSort): void {
    this.dataSource.data = this.sortTable(this.dataSource.data, sort);
  }

  sortTable(data: T[], sort: MatSort): T[] {
    switch (sort?.direction) {
      case 'asc':
        data = this.sortRows(data, sort.active as keyof T)
        sort.direction = 'asc';
        break;
      case 'desc':
        data = this.sortRows(data, sort.active as keyof T, false)
        sort.direction = 'desc';
        break;
      default:
        data = this.sortRows(data, 'date' as keyof T, false)
        if (sort?.direction)
          sort.direction = '';
    }

    return data
  }

  search(value: string): void {
    this.dataSource.data = this.rowsByCriteria(value);
    this.rowCount.set(this.dataSource.data.length);
  }

  private rowsByCriteria(criteria: string): T[] {
    const crits = criteria.toUpperCase().trim().split(' ');

    const list = crits[0].trim() != ''
      ? this.getList().filter(it => this.matchesAllCriteria(crits, it))
      : this.getList();

    return this.sortTable(list, this.sort);
  }

  private matchesAllCriteria(criteria: string[], row: T): boolean {
    const text = this.searchableText(row).map(it => it.toUpperCase());
    return criteria.every(it => text.some(value => value.indexOf(it) > -1));
  }

  private sortRows(data: T[], column: keyof T, asc: boolean = true): T[] {
    return data.sort((a: T, b: T) => {
      let value1 = a[column];
      let value2 = b[column];
      if (value1 == null || value2 == null) {
        return value1 == null ? (value2 == null ? 0 : 1) : -1
      } else if (value1 > value2) {
        return asc ? 1 : -1
      } else if (value1 < value2) {
        return asc ? -1 : 1
      } else {
        return 0
      }
    });
  }

  private getList(): T[] {
    return structuredClone(this.list);
  }
}
