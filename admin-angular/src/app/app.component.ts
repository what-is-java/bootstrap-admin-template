import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menus = MENUS;
  activedMenu:any;
  enableSidebarNone = false;
  enableSidebarSimple = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.initSidebarAccordionItems(this.menus);
  }

  initSidebarAccordionItems(items) {
    for (let i = 0; i < items.length; i++) {
      this.route;
      this.router;
      let item = items[i];
      item.showItems = false;
      item.hasItems = item.items && item.items.length > 0;
      item.paths = [item.text];
      if (this.activedMenu == null) this.activedMenu = item;
      if (item.hasItems) {
        for (let j = 0; j < item.items.length; j++) {
          let subitem = item.items[j];
          subitem.paths = [item.text, subitem.text];
        }
      }
    }
  }

}

export const MENUS:any = [{
  router: 'home',
  text: 'HOME',
  icon: 'glyphicon glyphicon-home'
}, {
  router: 'basicinfo',
  text: '基础数据',
  icon: 'glyphicon glyphicon-cog',
  items: [{
    router: 'user',
    text: '用户管理'
  }, {
    router: 'role',
    text: '角色管理'
  }]
}, {
  router: 'shopinfo',
  text: '商家信息',
  icon: 'glyphicon glyphicon-cog',
  items: [{
    router: 'shop',
    text: '商家管理'
  }, {
    router: 'shopproduct',
    text: '商品管理'
  }]
}];