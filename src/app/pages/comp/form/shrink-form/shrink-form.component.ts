import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PageHeaderType } from '@app/shared/components/page-header/page-header.component';
@Component({
  selector: 'app-shrink-form',
  templateUrl: './shrink-form.component.html',
  styleUrls: ['./shrink-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShrinkFormComponent implements OnInit {
  pageHeaderInfo: Partial<PageHeaderType> = {
    title: '可折叠表单示例',
    breadcrumb: ['首页', '组件', '可折叠表单']
  };
  constructor() { }

  ngOnInit(): void { }
}
