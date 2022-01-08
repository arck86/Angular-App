import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
  @Input() rating: number = 0;
  cropWidth: number = 0;

  ngOnChanges(): void {
    console.log(this.rating);
    this.cropWidth = this.rating * 75/5;
    
    console.log(this.cropWidth);
  }
}