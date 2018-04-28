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
				},
				wel: {
					title: 'VOICECOIN',
					sub1: 'Voiceweb, voice-driven decentralized smart internet based on voicechain,',
					sub2: 'an universal bridge between chatbot and IoT.',
					sub3: 'Voicecoin is the money of Voiceweb.',
					buy: 'Buy Token',
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
				},
				wel: {
					title: 'VOICECOIN',
					sub1: '语音币，基于区块链技术的分布式智能语音网络',
					sub2: '机器人与物联网之间的桥梁',
					sub3: '语音币是语音网络的通用货币',
					buy: '购 买',
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