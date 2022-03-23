export default class GameTemplate {
  constructor(rowLength, columnLength) {
    this.rowLength = rowLength;
    this.columnLength = columnLength;
    this.gameDesk = document.querySelector('.gamedesk');
  }

  createColumn() {
    for (let j = 0; j < this.rowLength; j += 1) {
      const column = document.createElement('div');
      column.classList.add('gamedesk__string');
      this.gameDesk.appendChild(column);
    }
  }

  createRow() {
    const columns = document.querySelectorAll('.gamedesk__string');
    Array.from(columns).forEach((column) => {
      for (let i = 0; i < this.columnLength; i += 1) {
        const squer = document.createElement('div');
        squer.classList.add('string__square');
        column.appendChild(squer);
      }
    });
  }

  createGameDesk() {
    this.createColumn();
    this.createRow();
  }
}
