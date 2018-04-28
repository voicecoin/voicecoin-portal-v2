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
				},
				spe: {
					h2: 'Ask what you need',
					p1: 'Escape the screen and endless scrolling, get what you’re looking for by just ASKING.',
					p2: 'By 2020, Morgan Stanley predicts 75 billion IoT devices will be connected. We are going to step into the post mobile era, next generation internet is voice Internet. People will talk to the computer like the way we talk to people—minus the sassiness!',
					more: 'Read More',
					faq: 'FAQ'
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
					sub1: '语音币，去中心化的语音万维网',
					sub2: '机器人与物联网之间的桥梁',
					sub3: '语音币是语音网络的通用货币',
					buy: '购 买',
				},
				spe: {
					h2: '答你所想 不负众望',
					p1: ' ',
					p2: '摩根士丹利预计到2020年会有750亿台IoT设备联网。我们将进入后移动时代，而下一代互联网是语音互联网。语音链就在现在：极速而至。从此：人机交流会像人与人之间的交流一样畅快淋漓！有我们，世界为你们而改变！',
					more: '更多',
					faq: 'FAQ'
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