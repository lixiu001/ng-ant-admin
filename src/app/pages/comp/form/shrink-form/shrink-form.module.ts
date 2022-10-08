import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { BaseShrinkComponent } from './base-shrink/base-shrink.component';
import { MoreShrinkComponent } from './more-shrink/more-shrink.component';
import { ResetQueryButtonComponent } from './reset-query-button/reset-query-button.component';
import { ShrinkFormRoutingModule } from './shrink-form-routing.module';
import { ShrinkFormComponent } from './shrink-form.component';

@NgModule({
  declarations: [ShrinkFormComponent, ResetQueryButtonComponent, BaseShrinkComponent, MoreShrinkComponent],
  imports: [ShrinkFormRoutingModule, SharedModule]
})
export class ShrinkFormModule { }
