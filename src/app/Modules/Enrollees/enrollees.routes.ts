import { Routes } from '@angular/router';
import { ApprovepageComponent } from './approvepage/approvepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListpageComponent } from './listpage/listpage.component';

export const enrolleeshome: Routes = [
    {path: 'homepage', component: HomepageComponent,
        children: [
            {path: 'approve', component: ApprovepageComponent},
            // {path: 'newacc/:uid', component: NewaccComponent},
            {path: 'list', component: ListpageComponent},
            {path: '', redirectTo: 'approve', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'homepage', pathMatch: 'full'}
];
