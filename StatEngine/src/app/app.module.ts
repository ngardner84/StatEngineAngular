import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Component Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { BugReportComponent } from './bug-report/bug-report.component';

//Materials Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

//Other Imports
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './authInterceptor';
import { SearchComponent } from './search/search.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MyAccountComponent,
    SearchComponent,
    DeleteAccountComponent,
    PasswordresetComponent,
    UserComponent,
    BugReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatFormFieldModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
