import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthToolbarComponent } from './auth-toolbar/auth-toolbar.component';

@NgModule({
    declarations: [AppComponent, WelcomeComponent, SignInComponent, ListComponent, AuthToolbarComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: WelcomeComponent },
            { path: 'sign-in', component: SignInComponent },
            { path: 'list', component: ListComponent },
        ]),
        HttpClientModule,
        AngularFireModule.initializeApp({
            apiKey: 'AIzaSyBxDW1Vy5g8GXyt6iY0S7nw_tRnjOJRvEo',
            authDomain: 'sunstar-views.firebaseapp.com',
            databaseURL: 'https://sunstar-views.firebaseio.com',
            projectId: 'sunstar-views',
            storageBucket: 'sunstar-views.appspot.com',
            messagingSenderId: '213571294940',
            appId: '1:213571294940:web:679930766d51f0f6930619',
            measurementId: 'G-JSG6T6RZMH',
        }),
        AngularFireAuthModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
