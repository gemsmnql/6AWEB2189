import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nSelectPipe, KeyValuePipe, LowerCasePipe, NgFor, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, AsyncPipe, DecimalPipe, PercentPipe, KeyValuePipe, I18nSelectPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
 presentDate = new Date();
 time$ = interval(1000).pipe(map(val => new Date()));
 price = 20000;
 fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

 decimalNum1 = 8.7589623;
 decimalNum2 = 5.43;

 percentValue = 0.75;

 studentInfo = {
  studNum: 20961145,
  studName: 'James Mananquil',
  studAge: 20,
  studCourse: "BSIT Web Dev"
 }

 gender = 'male';

  genderMap = {
    male: 'Mr.',
    female: 'Ms.',
    other: 'Mx.'
  };



}


