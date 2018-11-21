import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  public status = "Player X's Turn"
  public state = new Array(9).fill(' ');
  public xTurn = true;
  public winner = false;
  public win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  onClick(event, val) {
    // alert(val);
    if (!this.winner && this.state[val] === ' ') {
      this.state[val] = this.xTurn ? "X" : "O";
      this.checkWinner();
      if (!this.winner) {
        this.status = this.xTurn ? "Player O's Turn" : "Player X's Turn";
      }
      this.xTurn = !this.xTurn;
    }
  }
  checkWinner() {

    for (let i = 0; i < this.win.length; i++) {
      let comp = this.win[i];
      console.log(comp[0]);
      if (this.state[comp[0]] != ' ' && this.state[comp[0]] === this.state[comp[1]] && this.state[comp[0]] === this.state[comp[2]]) {
        this.status = this.xTurn ? "Player X Winner" : "Player O winner";
        this.winner = true;
        break;
      }

    }
  }

}
