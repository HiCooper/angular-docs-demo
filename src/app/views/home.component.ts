import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AnalyticsService} from '../@core/utils/analytics.service';
import {en_US, NzI18nService, zh_CN} from 'ng-zorro-antd';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    featureList = [
        {
            imgUrl: require('../../assets/img/intro.svg'),
            title: 'Introduction',
            desc: 'Install from scratch or based on ngx-admin'
        }, {
            imgUrl: require('../../assets/img/guides.svg'),
            title: 'Guides',
            desc: 'Theme System configuration, customisation and other articles'
        }, {
            imgUrl: require('../../assets/img/components.svg'),
            title: 'Components',
            desc: 'Native Angular components with configurable styles'
        }, {
            imgUrl: require('../../assets/img/themes.svg'),
            title: 'Theme System',
            desc: 'Three built-in themes & hundreds of variables to create your own.With hot-reload out of the box'
        }, {
            imgUrl: require('../../assets/img/auth.svg'),
            title: 'Auth',
            desc: 'Authentication layer with configurable Strategies'
        }, {
            imgUrl: require('../../assets/img/security.svg'),
            title: 'Security',
            desc: 'ACL list with helpful directives'
        },
    ];

    advantageList = [
        {
            title: 'Modular',
            desc: 'Each feature is a separate npm module. Use only what you need.'
        }, {
            title: 'Native',
            desc: 'Components are written in pure Angular with no 3rd-party dependencies.'
        },
        {
            title: 'Open',
            desc: 'Modules source code is free and available under MIT licence.',
        },
        {
            title: 'Extendable',
            desc: 'Can be used in a mix with any UI library.',
        }
    ];

    constructor(private router: Router, private analytics: AnalyticsService, private i18n: NzI18nService) {
        this.currentRouterUrl = router.url;
    }

    isCollapsed = false;
    currentRouterUrl: string;
    isEnglish = false;

    private static setLanguage(language: string): string {
        localStorage.setItem('language', language);
        return localStorage.getItem('language');
    }

    private static checkEnglish(): boolean {
        let language = localStorage.getItem('language');
        if (!language) {
            // 没有设置过语言 默认初始化为中文环境
            language = HomeComponent.setLanguage('zh_CN');
        }
        return language === 'en_US';
    }

    ngOnInit() {
        // this.analytics.trackEvent('bad thing!!!');
        this.isEnglish = HomeComponent.checkEnglish();
    }

    changeLanguage(): void {
        this.i18n.setLocale(this.isEnglish ? en_US : zh_CN);
        HomeComponent.setLanguage(this.isEnglish ? 'en_US' : 'zh_CN');
    }
}
