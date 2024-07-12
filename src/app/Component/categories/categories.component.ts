import { Component ,OnInit} from '@angular/core';
import { NewsService } from '../../news.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent  implements OnInit{
  newsData: any;
  searchQuery: string = '';
  filteredNews: any[] = [];
  category: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  paginatedNews: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getFilteredNews();
  }

  getFilteredNews(): void {
    this.newsService.getFilteredNews(this.category).subscribe(
      (data) => {
        this.newsData = data;
        this.filteredNews = this.newsData.articles;
        this.updatePaginatedNews();
      }
    );
  }

  searchNews(): void {
    if (this.searchQuery) {
      this.filteredNews = this.newsData.articles.filter((article: any) =>
        article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredNews = this.newsData.articles;
    }
    this.updatePaginatedNews();
  }

  updatePaginatedNews(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedNews = this.filteredNews.slice(start, end);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedNews();
  }

  get totalPages(): number {
    return Math.ceil(this.filteredNews.length / this.itemsPerPage);
  }
}
