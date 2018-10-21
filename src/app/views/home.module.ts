import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {en_US, NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './home.component';
import {CoreModule} from '../@core/core.module';

// 初始化语言环境，这里的语言，仅对组件内部描述语言有效
const isEnglish: boolean = localStorage.getItem('language') === 'en_US';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        NgZorroAntdModule,
        CoreModule
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [{provide: NZ_I18N, useValue: isEnglish ? en_US : zh_CN}]
})
export class HomeModule {
}
