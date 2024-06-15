import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

    // const observable = new Observable<number>((observer: Observer<number>) => {
    //   let count = 0;

    //   const intervalId = setInterval(() => {
    //     count++;
    //     observer.next(count);

    //     if (count === 3) {
    //       observer.complete();
    //       clearInterval(intervalId);
    //     }
    //   }, 1000);
    // });

    // // Subscribe to the observable
    // observable.subscribe(
    //   (value: number) => console.log(`Next: ${value}`),
    //   (error: any) => console.error(`Error: ${error}`),
    //   () => console.log('Complete')
    // );


}
