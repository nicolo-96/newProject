import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  private URL = '../assets/film.json';

  header: string = 'CineMille';
  subtitle: string = 'Storico programmazione';
  footer: any = {email:'CineMille@fake', address: "via roma"};

  title: string = "Titolo";
  dateBegin: string = "Inizio programmazione";
  dateEnd: string = "Fine programmazione";

  startDate: Date | undefined;
  endDate: Date | undefined;
  dateFormat="dd/mm/yy";

  films: any[] = [];
  list: any[] = [];
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.httpClient.get(this.URL).subscribe((data: any) => {
      this.films = data.films;
      this.list = data.films;
      console.log(this.films);
      this.filterByNow();
      // this.list = this.formatDateList(this.list);
      // this.films = this.formatDateList(this.films);
    });

  }

  filterByNow(){
    let temp: any[] = [];
    this.list.forEach(film => {
      if(new Date(film.dateBegin).getTime() <= new Date().getTime()){
        temp.push(film);
      }
    });
    this.list = temp;
  }

  clickButton(){
    this.router.navigate(["home"])
  }

  onSelectDate(e: any, index: number){
    if(index == -1){
      this.startDate = e;
    } else {
      this.endDate = e;
    }
  }

  clickButtonFilter(){
    if(this.startDate && this.endDate){
      console.log("FILTER");
      let t1 = this.startDate.getTime();
      let t2 = this.endDate.getTime();

      let temp: any[] = [];
      for (let i = 0; i < this.films.length; i++) {
        const film = this.films[i];
        if( new Date(film.dateEnd).getTime() >= t1 &&
            new Date(film.dateBegin).getTime() <= t2
          ){
          temp.push(film);
        }
      }
      this.list = temp;
      // this.list = this.formatDateList(this.list);
      console.log(this.list);
    }
  }

  formatDateItem(item: any){
    return new Date(item).toLocaleDateString();
  }

}
