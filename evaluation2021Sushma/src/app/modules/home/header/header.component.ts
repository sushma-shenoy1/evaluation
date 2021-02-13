import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search = ''
  header = 1
  constructor(private apiHandler: ApiHandlerService) { }

  ngOnInit(): void {
  }
  searching(search) {
    let params = [

    ]
    // this.apiHandler.getData('https://api.pexels.com/v1/',)
  }
  selectHeader(event) {
    if (event == 2) {
      this.header = 2
    } else {
      this.header = 1

    }
  }
}
