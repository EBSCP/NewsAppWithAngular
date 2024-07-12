import { Component, OnInit } from '@angular/core';
import { NewsService} from "../../news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsData: any;
  searchQuery: string = '';
  filteredNews: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe(
      (data) => {
        this.newsData = data;
        this.filteredNews = this.newsData.articles;  // Başlangıçta tüm haberleri göster
        console.log(this.newsData);
      }
    );
  }

  filterNews(): void {
    this.filteredNews = this.newsData.articles.filter((article: any) =>
      article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
