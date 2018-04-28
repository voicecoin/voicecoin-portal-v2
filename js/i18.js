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
				},
				prblm: {
					h2: 'Current Problem',
					h4: 'Google and Amazon are privatizing voice internet',
					p1: 'A lot of companies are developing post mobile smart devices. Many companies are developing this market, and one such example	are smart speaker manufacturers. These manufacturers require chatbot developers to register their chatbots as skill sets within the smart speakers. In this approach, chatbots must be registered on different smart speakers; therefore, chatbot developers must learn and utilize different accessing protocols to have their chatbot installed. Every smart device manufacturer requires the chatbot developers to register their chatbots and follow their specific standards so that the chatbots can be browsed by their end users. Traditional WWW web is going to die in voice internet, people will use less and less chance to input a domain name and URL address.',
					p2: '',
					i: [{
							h4: 'Hard to use',
							p: 'The current voice systems make it hard for users to find services',
						},
						{
							h4: 'Lack of Variety',
							p: 'Manufacturers are not providing enough variety of voice enabled applications for current consumers',
						},
						{
							h4: 'No Standard',
							p: 'Current voice app stores have no common standard. It is difficult for developers to create their own voice applications for these devices',
						},
					]
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
				},
				prblm: {
					h2: '当前痛点',
					h4: '谷歌和亚马逊正在私有化语音网络',
					p1: '许多公司正在开发后手机时代的智能设备，典型案例就是各种智能音箱制造商。这些制造商要求语音服务开发者将他们的语音服务作为技能注册到智能音箱中。这种方式的语音服务必须被指定注册于不同的智能音箱上，所以语音服务的开发者不得不学习并使用不同的协议来开发。在一定程度上，也大大束缚并局限了用户方的自由使用。而且每个智能设备制造商都要求语音开发者注册他们的语音服务并遵循特定标准，捆绑式的语音服务只限于他们的最终用户使用，而未真正考虑如何更方便广大用户的利益，给用户带来诸多选择上的不便。 如此一来，智能音箱用户找服务难，智能音箱生产商又很难在音箱里集成丰富的服务。',
					p2: '  基于种种设限的被控制，语音网打破了传统万维网的局限，人们会很大幅度的降低输入域名和网址的次数。新一代语音网的创新则为被控无奈而生，零设限，为世人开拓无限多的自由空间。',
					i: [{
							h4: '功能繁琐',
							p: '目前的语音系统让用户很难找到想要的服务',
						},
						{
							h4: '产品单调',
							p: ' 制造商没有为当前客户提供充足的语言方案',
						},
						{
							h4: '无统一标准',
							p: '目前的语音应用商店没有共同的标准,所以开发人员很难为这些设备创建自己的语音应用程序',
						},
					]
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