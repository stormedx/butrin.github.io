import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.css']
})
export class ColorSwatchComponent implements AfterViewInit {
    colorsRow1 = [
    { hex: '#3B3030' }, // Background
    { hex: '#DFC6C6' }, // Foreground
    { hex: '#8C7378' }, // Black
    { hex: '#BFACA4' }, // Bright Black
    { hex: '#6699CC' }, // Blue
    { hex: '#87CEFA' }, // Bright Blue
    { hex: '#6FC3B2' }, // Cyan
    { hex: '#64DBDB' }, // Bright Cyan
    { hex: '#6FC3B2' }, // Green
    { hex: '#B2D8B2' }, // Bright Green
  ];
  colorsRow2 = [
    { hex: '#C8A2C8' }, // Purple
    { hex: '#D8BFD8' }, // Bright Purple
    { hex: '#E68A8A' }, // Red
    { hex: '#F2B1B1' }, // Bright Red
    { hex: '#E2CEBE' }, // White
    { hex: '#F2F2F2' }, // Bright White
    { hex: '#F7DCB4' }, // Yellow
    { hex: '#F7DCB4' }, // Bright Yellow
    { hex: '#ECB9B1' }, // Cursor
    { hex: '#E39D93' }, // Selection Background
  ];
  showNotification = false;

  copyToClipboard(hex: string) {
    const el = document.createElement('textarea');
    el.value = hex;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    // Show the notification
    this.showNotification = true;

    // Automatically hide the notification after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      this.showNotification = false;
    }, 2000);
  }

  codeBlockVisible = true;
  modalContent = ''; // Modal properties
  selectedTerminalType = '';

  showCodeBlock(terminalType: string) {
    let codeToCopy = '';

    if (terminalType === 'Windows') {
      codeToCopy = 'Your Windows Terminal code here...';
    } else if (terminalType === 'Linux') { // Fix the typo here
      codeToCopy = 'Your Linux Terminal code here...';
    }

    const codeBlock = document.querySelector('.modal pre code');
    if (codeBlock) {
      codeBlock.textContent = codeToCopy;
      this.codeBlockVisible = true;
    }
  }

  hoveredColor: any = null;

  hoverColor(color: any) {
    this.hoveredColor = color;
  }

  unhoverColor() {
    this.hoveredColor = null;
  }

  ngAfterViewInit() {
  }
}
