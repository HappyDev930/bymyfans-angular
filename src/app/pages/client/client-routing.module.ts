import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const clientRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'oneCall', 
    loadChildren: () => import('./one-call/one-call.module').then(m => m.OneCallModule) 
  },
  { 
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) 
  },
  { 
    path: 'request-service', 
    loadChildren: () => import('./request-service/request-service.module').then(m => m.RequestServiceModule) 
  },
  { 
    path: 'crowd-funding', 
    loadChildren: () => import('./crowd-funding/crowd-funding.module').then(m => m.CrowdFundingModule) 
  },
  { 
    path: 'private-message', 
    loadChildren: () => import('./private-message/private-message.module').then(m => m.PrivateMessageModule) 
  },
  { 
    path: 'referral-program', 
    loadChildren: () => import('./referral-program/referral-program.module').then(m => m.ReferralProgramModule) 
  },
  { 
    path: 'favorites', 
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule) 
  },
  { 
    path: 'subscriptions', 
    loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule) 
  },
  { 
    path: 'account-settings', 
    loadChildren: () => import('./account-settings/account-settings.module').then(m => m.AccountSettingsModule) 
  },
  { 
    path: 'other-profile/:id', 
    loadChildren: () => import('./other-profile/other-profile.module').then(m => m.OtherProfileModule)
  },
  { 
    path: 'estore-management', 
    loadChildren: () => import('./estore-management/estore-management.module').then(m => m.EstoreManagementModule)
  },
  { 
    path: 'user-estore-management/:id', 
    loadChildren: () => import('./other-estore-management/other-estore-management.module').then(m => m.OtherEstoreManagementModule) 
  },
  { 
    path: 'security-privacy', 
    loadChildren: () => import('./security-privacy/security-privacy.module').then(m => m.SecurityPrivacyModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
