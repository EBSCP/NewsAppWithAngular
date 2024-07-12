import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 title = 'news';

  newsData: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe(
      (data) => {
        this.newsData = data;
        console.log(data); // Gelen veriyi konsola yazdırabiliriz
      },
      (error) => {
        console.error('Hata oluştu:', error);
        // Hata durumunda kullanıcıya bilgi verebilir veya başka bir işlem yapabilirsiniz
      }
    );
  }
}
