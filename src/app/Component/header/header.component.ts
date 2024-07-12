import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newsData: any;
  searchQuery: string = '';
  filteredNews: any[] = [];
  category: string = '';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getFilteredNews();
  }

  getFilteredNews(): void {
    this.newsService.getFilteredNews(this.category).subscribe(
      (data) => {
        this.newsData = data;
        this.filteredNews = this.newsData.articles;  // Başlangıçta tüm haberleri göster
        console.log(this.newsData);
      }
    );
  }

  searchNews(): void {
    if (this.searchQuery) {
      this.filteredNews = this.newsData.articles.filter((article: any) =>
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredNews = this.newsData.articles;  // Arama sorgusu boşsa tüm haberleri göster
    }
  }

  filterByCategory(): void {
    this.getFilteredNews();
  }
}
