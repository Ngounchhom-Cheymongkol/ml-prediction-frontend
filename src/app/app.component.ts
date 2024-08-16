import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
