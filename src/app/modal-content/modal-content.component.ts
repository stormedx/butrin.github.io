import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard'; // Import the Clipboard service

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { snippets: string[] },
    private clipboard: Clipboard // Inject the Clipboard service
  ) {}

  closeModal() {
    this.dialogRef.close();
  }

  copySnippetToClipboard(snippet: string) {
    // Use the Clipboard service to copy the snippet to the clipboard
    this.clipboard.copy(snippet);

    // You can also show a message or perform any other action after copying
    // For example, you can set a flag to display a "Copied!" message
    // this.snippetCopied = true;
  }
}
