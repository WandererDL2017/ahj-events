export default class GameTemplate {
  constructor(rowLength, columnLength) {
    this.rowLength = rowLength;
    this.columnLength = columnLength;
    this.gameDesk = document.querySelector('.gamedesk');
    this.columns = null;
  }

  createColumn() {
    for (let j = 0; j < this.rowLength; j += 1) {
      this.column = document.createElement('div');
      this.column.classList.add('gamedesk__string');
      this.gameDesk.appendChild(this.column);
    }
  }

  createRow() {
    this.columns = document.querySelectorAll('.gamedesk__string');
    Array.from(this.columns).forEach((column) => {
      for (let i = 0; i < this.columnLength; i += 1) {
        this.squer = document.createElement('div');
        this.squer.classList.add('string__square');
        column.appendChild(this.squer);
      }
    });
  }
}
