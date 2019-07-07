import { Component } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public name = null;
 public price = null;
  title = 'design';
  color = 'red';
  echo(message: any) {
    console.log('MESSAGE', message);
  }
}
