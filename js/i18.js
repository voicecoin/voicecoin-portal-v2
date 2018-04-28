var app = new Vue({
	el: '#voicecoin',
	data: {
		lang: 'zh',
		vc: {
			en: {
				header: {
					home: 'Home',
					team: 'Team',
					token: 'Token Sale',
					found: 'Foundation',
					test: 'Testnet',
					faq: 'FAQ',
					lang: '中文'
				}
			},
			zh: {
				header: {
					home: '首页',
					team: '团队',
					token: 'Token发行',
					found: '基金会',
					test: '测试网路',
					faq: 'FAQ',
					lang: 'ENG'
				}
			}
		}
	},
	methods: {
		changeLang: function (event) {
			if (this.lang == 'zh') {
				this.lang = 'en';
			} else {
				this.lang = 'zh';
			}
		}
	}
});
