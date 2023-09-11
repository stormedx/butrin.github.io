import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from './modal-content.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  openModal(snippets: string[]) {
    this.dialog.open(ModalContentComponent, {
      data: { snippets },
      width: '500px'
    });
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
