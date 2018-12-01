import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ChatParentsComponent } from './chat-parents/chat-parents.component';
import { ChatKidComponent } from './chat-kid/chat-kid.component';
import { WelcomeFunKidComponent } from './welcome-fun-kid/welcome-fun-kid.component';
import { StaffMainComponent } from './staff-main/staff-main.component';
import { ProfileComponent } from './profile/profile.component';
import { BuddyComponent } from './buddy/buddy.component';
import { ForumComponent } from './forum/forum.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MainComponent } from './main/main.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Messages2Component } from './messages2/messages2.component';
import { ChatParents2Component } from './chat-parents2/chat-parents2.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
    //HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false })
  ],
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    CreateAccountComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    LoginComponent,
    NewsComponent,
    ChatParentsComponent,
    ChatKidComponent,
    WelcomeFunKidComponent,
    StaffMainComponent,
    ProfileComponent,
    BuddyComponent,
    ForumComponent,
    Messages2Component,
    ChatParents2Component,
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
