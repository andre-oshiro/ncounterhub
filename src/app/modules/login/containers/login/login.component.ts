import { Component, OnInit } from '@angular/core';

import { SOCIAL_NETWORK_SERVICES } from 'src/app/shared/constants/social-network-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}

  readonly socialNetworkServices = [
    { label: SOCIAL_NETWORK_SERVICES.FACEBOOK, backgroundColor: '#2e59b3', labelColor: '#ffffff' },
    { label: SOCIAL_NETWORK_SERVICES.GOOGLE, backgroundColor: '#ce3421', labelColor: '#ffffff' },
    { label: SOCIAL_NETWORK_SERVICES.TWITTER, backgroundColor: '#09b7f7', labelColor: '#ffffff' },
    { label: SOCIAL_NETWORK_SERVICES.GITHUB, backgroundColor: '#383535', labelColor: '#ffffff' }
  ];

  ngOnInit() {}
}
