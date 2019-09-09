import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  windowsWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowsWidth = event.target.innerWidth;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.windowsWidth = window.innerWidth;
  }

  onClickChat(chatId: string) {
    if (!chatId || !this.windowsWidth) {
      return;
    }

    if (this.windowsWidth > 600) {
      // Get Room Data
      return;
    }

    // Navigate to chatId
    this.router.navigate(['chat', chatId]);
  }
}
