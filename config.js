// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'K',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '2fd20a18921a2edc47d47628805524b2', // Write here your API Key
	weatherIcons: 'Onedark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'zh_cn', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '23.129110',
	defaultLongitude: '113.264381',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'youtube',
			id: '1',
			links: [
				{
					name: 'X',
					link: 'https://x.com',
				},
				{
					name: 'youtube',
					link: 'https://www.youtube.com',
				},
				{
					name: 'bilibili',
					link: 'https://www.bilibili.com',
				},
				{
					name: 'nodeseek',
					link: 'https://www.nodeseek.com/?sortBy=postTime',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'github',
					link: 'https://github.com',
				},
				{
					name: 'gmail',
					link: 'https://mail.google.com',
				},
				{
					name: 'qmail',
					link: 'https://mail.qq.com',
				},
				{
					name: 'grok',
					link: 'https://grok.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'bitcoin',
			id: '1',
			links: [
				{
					name: 'coinmarketcap',
					link: 'https://coinmarketcap.com/zh',
				},
				{
					name: 'binance',
					link: 'https://www.binance.com/zh-CN/my/wallet/account/overview',
				},
				{
					name: 'okx',
					link: 'https://www.okx.com/zh-hans/balance/overview',
				},
				{
					name: 'bybit',
					link: 'https://www.bybit.com/en/cards',
				},
			],
		},
		{
			icon: 'twitch',
			id: '2',
			links: [
				{
					name: 'qbittorrent',
					link: 'http://192.168.1.1:8080',
				},
				{
					name: 'odin',
					link: 'https://odin.fun',
				},
				{
					name: 'tyche',
					link: 'https://tyche.run/zh/lucky-pump',
				},
				{
					name: 'baby',
					link: 'https://tyche.baby/scan',
				},
			],
		},
	],
};
