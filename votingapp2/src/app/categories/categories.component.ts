import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  event = 'vote';
      vote = '';
      voted = false;
      catData = [
        {
          name: 'Séga',
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/catSega.jpg'
        },
        {
          name: 'Bollywood',
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/catBolly.jpeg',
        },
        {
          name: 'Internationale',
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/catInt.jpg',
        },
        {
          name: "Choix Du Public-Canada",
          image: 'https://mru230mouv.ca/wp-content/uploads/2021/12/ca-flag-scaled.jpg',
        },
      ];
      voteCount = {
        salah: 0,
        kane: 0,
        eriksen: 0,
        kevin: 0,
      };
      
      castVote(player:any) {
        this.http
          .post(`http://localhost:4000/vote`, { player })
          .subscribe((res: any) => {
            this.vote = res.player;
            this.voted = true;
          });
      }
      

  ngOnInit(): void {
  }

}
