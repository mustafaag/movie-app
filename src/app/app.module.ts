import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
