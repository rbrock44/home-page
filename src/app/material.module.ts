import {MatDialogModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatSortModule, MatTableModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatOptionModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule,
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatOptionModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule,
  ]
})
export class MaterialModule {
}
