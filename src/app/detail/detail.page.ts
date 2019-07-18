import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id;
  imovel;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.imovel = this.http.get("https://5d262d00eeb36400145c59b3.mockapi.io/imovel/" + this.id).subscribe(
      (data) => {
        this.imovel = data
      }
    )
    
  }

  ngOnInit() {
  }

}
