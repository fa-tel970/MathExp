import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExpression, IOperation } from '../app.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-operationlist',
  templateUrl: './operationlist.component.html',
  styleUrls: ['./operationlist.component.css'],
})
export class OperationlistComponent implements OnInit {
  numbers: IExpression[] = [];
  private _add: IOperation = { value: 0 };
  private _multiply: IOperation = { value: 0 };
  failedAdd: boolean = false;
  failedMultiply: boolean = false;

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.httpClient.get('assets/numbers.json').subscribe(
      (data) => {
        this.numbers = data as IExpression[];
      },
      (err) => {
        // HANDLE file not found
        if (err.status === 404) {
          this.snackBar.open("Server Error!", '', {
            duration: 4000,
            verticalPosition: 'bottom',
            panelClass: ['error-snackbar']
          })
        }
      }
    );

    this.httpClient.get('assets/add.json').subscribe(
      (data) => {
        this._add = data as IOperation;
      },
      (err) => {
        // HANDLE file not found
        if (err.status === 404) {
          this.failedAdd = true;
        }
      }
    );

    this.httpClient.get('assets/multiply.json').subscribe(
      (data) => {
        // console.log(data);
        // this.failedMultiply = true;
        this._multiply = data as IOperation;
      },
      (err) => {
        // HANDLE file not found
        if (err.status === 404) {
          this.failedMultiply = true;
        }
      }
    );
  }

  getValue(action: string) {
    return action === 'add' ? this._add.value : this._multiply.value;
  }

  getResult(number1: number, action: string) {
    let number2 = action === 'add' ? this._add.value : this._multiply.value;
    let result = action === 'add' ? number1 + number2 : number1 * number2;
    return result;
  }

}
