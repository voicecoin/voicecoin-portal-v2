var app = new Vue({
	el: '#voicecoin',
	data: {
		lang: 'en',
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
				},
				sl: {
					h2: 'Our Solution',
					h4: 'We propose a blockchain solution to underpin the voice-based Internet',
					p1: ' Under this new system, chatbot developers will register voice domains on the blockchain, follow a set of simple instructions, and then their chatbots will be launched. In this way, any global user will be able to talk to any registered chatbot. Smart device manufacturers will no longer need to ask chatbot developers to register their chatbots. This solution preserves developer resources, while giving users a more convenient way to surf an open, voice-based internet. As traditional browser-based web sites evolve into chatbots, the traditional domain name system evolves into a decentralized voice domain system, and cryptocurrency becomes the global standard for chatbot payments.',
					p2: '',
					i: [{
							h4: 'Awesome Experience',
							p: 'People can talk to a wide variety of unique voice chatbot',
						},
						{
							h4: 'Fast and Simple',
							p: 'Developers publish chatbot in one stop',
						},
						{
							h4: 'Customizability',
							p: 'A global voice chatbot economy opens up',
						},
					]
				},
				sch: {
					h2: 'Schematic',
					h4: '',
					p1: 'Voiceweb is a blockchain platform for voice chatbot development and voicecoin is cryptocurrency for Voiceweb.',
					i: [{
							p: 'You can register your voice chatbot name on Voiceweb VNS and fill in chatbot URL address.',
						},
						{
							p: 'You can use chatbot browser to find any chatbot by searching the chatbot name to access your favorite applications, brands and skills with just your voice.',
						},
						{
							p: 'The chatbot directory will be open, decentralized, and interconnected for easy development and access to your own chatbot and others.',
						},
					]
				},
				feat: {
					h2: 'Voiceweb Blockchain Features',
					i: [{
							h4: 'Decentralized Platform',
						},
						{
							h4: 'Secure Transactions',
						},
						{
							h4: 'Interconnected Synergy',
						},
						{
							h4: 'Trusted Support',
						},
						{
							h4: 'World Wide Communication',
						},
						{
							h4: 'Fast Uptime',
						},
					]
				},
				team: {
					h2: 'Our Team',
					i: [{
							h4: 'George Zhao',
							h5: 'Founder, CEO',
							p1: "A serial entrepreneur, George Zhao developed China's first email system named Kaili. Earlier in his career, George was in charge of the certificates products of Shenda and the streaming media business of Youku, a subsidiary of Alibaba Group. He also operated the earliest Chinese Q & A community of technologies. One of his patents, as a result of his startup in Shanghai was acquired by Tencent and he was reported by sina.com as the inventor mobile IM basic technology and the creator of WeChat. He received his MBA from University of Illinois at Chicago, and studied artificial intelligence and blockchain technology at Stanford University and UC Berkeley. After setting up the Voicebot artificial intelligence platform, he founded Voiceweb based on blockchain technology in Silicon Valley.",
						},
						{
							h4: 'Elaine Shao',
							h5: 'CMO',
							p1: 'Founder of California Angel and advertisement analyst who provided consulting services at Google. She was also the media marketing Supervisor for Leo Burnett.',
						},
						{
							h4: 'Yong Duan',
							h5: 'Ai & Big Data Scientist',
							p1: 'Yong Duan is the big data expert of WiFi master key with 16 years of proficient experience in big data, business intelligence(BI), data mining, machine learning and deep learning technology. After a couple of years of working for the domestic pioneer data mining enterprise named Huayuan Data, he co-founded the Shuyun Co.,Ltd which is successfully obtained the investment of the Sequoia capital A round and Alibaba C round and became its CTO.',
						},
						{
							h4: 'Kyle Bao',
							h5: 'Ph.D., Cryptologist',
							p1: 'Designing next generation cryptogram standard for NIST. Master quantum proof cryptography.',
						},
						{
							h4: 'Joyce Zhang',
							h5: 'CFO',
							p1: 'Joyce Zhang is the president of the Alumni Association of Central University of Finance and Economics in Chicago with 20 years of professinal experience in finance, investment and business management. She is a certified public accountant registered in China, a certified international internal auditor and a senior economic analyst.',
						},
						{
							h4: 'Craig Watts',
							h5: 'CSO',
							p1: 'Craig Watts is an expert on the Digital Marketing. He is not only the co-founder of Madhouse but also the general manager of digital intelligence for GroupM (WPP). He holds a Ph.D. in Media Studies from Osaka University and an M.A. in English from the University of Chicago.',
						},
						{
							h4: 'Terry Fogarty',
							h5: 'Legal Counsel',
							p1: '',
						},
						{
							h4: 'Chelsea Rustrum',
							h5: 'Community Strategist',
							p1: '',
						},
						{
							h4: 'David Passiak',
							h5: 'Keynote Speaker, Innovator, Futurist',
							p1: '',
						},
						{
							h4: 'Monette Stephens',
							h5: 'Strategic Advisory',
							p1: '',
						},
						{
							h4: 'Amanda Rivera',
							h5: 'Millennial Business Strategist',
							p1: '',
						},
					]
				},
				dev: {
					h2: 'Developer Community',
					i: [{
							h4: 'Squall Zhao',
							p: 'Blockchain, AI and microservice expert, 10 years C++ development experience.',
						},
						{
							h4: 'Gavin Zhang',
							p: 'Working in Shanghai Futures Exchange, developed bidding system.',
						},
						{
							h4: 'Yoky Xu',
							p: '8+ years experience, game server developer, master real media development.',
						},
						{
							h4: 'Kevin Liu',
							p: 'Client developer, also dedicated in developing large scale passport system.',
						},
						{
							h4: 'Eric Chan',
							p: '10+ years software development experience, Voice based chatbot platform developer.',
						},
					]
				},
				aa: {
					h2: 'Advisors & Angels',
					i: [{
							h4: 'Ruxiong Li',
							h5: 'Startup Mentor',
							p1: "Startup Mentor,Founder of Federal Software, China’s biggest software circulation company; Executive Director of China software industry association. Optics Valley Startup Cafe, Founder",
						},
						{
							h4: 'Bing Liu',
							h5: 'AI Advisor',
							p1: "AI Advisor,Bing Liu is the professor of computer science who specializes in data mining, machine learning and natural language processing. Two of his research papers published in KDD-1998 and KDD-2004 were received KDD Test-of-Time awards in 2014 and 2015. In 2013, he was elected the chair of SIGKDD, ACM Special Interest Group on Knowledge Discovery and Data Mining. Besides. he is an AI Scientis and the Fellow of IEEE.",
						},
						{
							h4: 'Pierre He',
							h5: 'Ph.D.',
							p1: "Co-founder of iex.ec. 100 Talent Professor at the CNIC ​ (Computer Network Information Center)​​",
						},
						{
							h4: 'Ken Huang',
							h5: 'Blockchain Security Consultant',
							p1: "Blockchain Security Consultant Huawei VP, Chief Blockchain Scientist and Chief Identity Management System Architect, CISSP, Commit Member of ACM, Chinese Electric Academy Blochchain Expert Committee Member.",
						},
						{
							h4: 'Zong Ling',
							h5: 'Ph.D., Scientist in IBM',
							p1: "Senior Software Engineer / Scientist in IBM Software Group / Almaden Research Center. Over past 14 years, Dr. Ling has been working on evaluating the performance of IBM Tivoli Storage Products and distributed clouding storage systems.",
						},
						{
							h4: 'Liren Chen',
							h5: 'SEO Expert',
							p1: "A former Googler, involved in multi-language search engines, and Google+ for 7 years. Led mobile search at Qihoo 360 and the Pangu search engine. Graduate of Carnegie Mellon University.",
						},
					],
				},
				foot: {
					paper: 'White Paper',
					saft: 'SAFT',
					git: 'GitHub',
					contact: 'Contact',
					vf: 'Voiceweb Foundation',
					dot: '.',
					right: 'All Rights Reserved.',
				},
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
				},
				sl: {
					h2: '解决方案',
					h4: '一场颠覆性的语音革命已经到来',
					p1: '我们首当其冲提出：区块链解决方案来支持语音互联网。我们创造并实现一个真正意义上的说比写快的语音区块链新生代！',
					p2: '全球化开启语音万维网新纪元，开发者一站式发布语音服务，全世界的公众可以免费享用任何语音服务，实现了真正意义上的语音服务共享。任何用户，可以在世界的任何地方，与已注册的语音服务通话。 智能设备制造商将不再需要请开发者注册他们的语音服务。该方案节省了大量开发资源的同时，也为用户提供了更便捷的方式来浏览开放的语音万维网。随着传统的基于浏览器的网站演变成语音服务，传统域名系统将会进化成去中心化的语音域名系统，加密货币将成为语音服务支付的全球标准。非同凡响，不负众望，就是我们要完成的底层技术。',
					i: [{
							h4: '智能',
							p: '智能助理，随唤随到',
						},
						{
							h4: '高效',
							p: '一站开发，省时省力',
						},
						{
							h4: '定制化',
							p: '全球开启人工智能新经济',
						},
					]
				},
				sch: {
					h2: '技术原理',
					h4: '语音网络区块链如何工作？',
					p1: '语音链是语音万维网上连接所有语音对话服务的基础共链，语音币是语音网络的加密货币。',
					i: [{
							p: '您可以在语音网络上注册聊天机器人的全球唯一域名，在这里，唯您独尊。',
						},
						{
							p: '使用语音浏览器呼叫语音服务助理 – 只用语音访问您最喜爱的应用、品牌和功能。',
						},
						{
							p: '语音服务全球开放、高度互联，声声有力，尽情享受在语音万维网冲浪的酣畅体验吧！',
						},
					]
				},
				feat: {
					h2: '语音网络区块链功能',
					i: [{
							h4: '去中心化平台',
						},
						{
							h4: '安全交易',
						},
						{
							h4: '互联协同',
						},
						{
							h4: '可信赖的支持',
						},
						{
							h4: '世界范围的交流',
						},
						{
							h4: '快速且正常地运行',
						},
					]
				},
				team: {
					h2: '核心团队',
					i: [{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
						{
							h4: '',
							h5: '',
							p1: '',
						},
					]
				},
				dev: {
					h2: '语音万维网社区开发者',
					i: [{
							h4: 'Squall Zhao',
							p: '区块链，人工智能和微服务专家，10年C++开发经验',
						},
						{
							h4: 'Gavin Zhang',
							p: '工作于上海期货交易所',
						},
						{
							h4: 'Yoky Xu',
							p: '8年游戏服务器开发经验，专注 RealMedia 开发',
						},
						{
							h4: 'Kevin Liu',
							p: '客户开发人员，同时致力于开发大规模护照系统',
						},
						{
							h4: 'Eric Chan',
							p: '基于语音的聊天平台开发者，10年软件开发经验',
						},
					]
				},
				aa: {
					h2: '顾问 & 天使投资人',
					i: [{
							h4: '',
							h5: '',
							p1: "",
						},
						{
							h4: '',
							h5: '',
							p1: "",
						},
						{
							h4: '',
							h5: '',
							p1: "",
						},
						{
							h4: '',
							h5: '',
							p1: "",
						},
						{
							h4: '',
							h5: '',
							p1: "",
						},
						{
							h4: '',
							h5: '',
							p1: "",
						},
					],
				},
				foot: {
					paper: '白皮书',
					saft: 'SAFT',
					git: 'GitHub',
					contact: '联系我们',
					vf: '语音网基金会',
					dot: '',
					right: '版权所有',
				},
			}
		}
	},
	methods: {
		changeLang: function (e) {
			e.stopPropagation();
			if (this.lang === 'zh') {
				this.lang = 'en';
			} else {
				this.lang = 'zh';
			}
		}
	}
});