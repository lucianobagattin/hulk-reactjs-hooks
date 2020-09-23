
export const AnalyticsData = [
	{
		id: 1,
		sectionName: "users",
		noOfVistors: "14k",
		usersThisWeekorMonth: 'users this week',
		CompareWithLast: "11.2",
		textofusers: 'vs last week',
		dataFromLast: "Last 7 Days",
		status: true,
		labels: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'],
		seriesData: {
			data: [60, 30, 100, 60, 160, 80, 100],
			type: 'line',
			showSymbol: false,
			symbolSize: 10,
			smooth: true
		},
		title: "Users right now",
		usersCount: 18,
		usersDataType: "Users visits per minute",
		datasets: {
			data: [{
				type: 'bar',
				data: [48, 78, 15, 26, 34, 28, 84, 20, 34, 85, 45, 50],
			}],
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		},
		listingData: [
			{
				trandingPage: '/about.html',
				users: 4,
			},
			{
				trandingPage: '/contact.html',
				users: 5
			},
			{
				trandingPage: 'plan.html',
				users: 9
			},
			{
				trandingPage: '/',
				users: 4,
			},
			{
				trandingPage: 'payment.html',
				users: 2,
			},
			{
				trandingPage: 'terms.html',
				users: 12,
			},
			{
				trandingPage: 'faq.html',
				users: 10
			}
		],
	},
	{
		id: 2,
		sectionName: "revenue",
		noOfVistors: "$24k",
		usersThisWeekorMonth: 'this month',
		CompareWithLast: "0.43 ",
		textofusers: 'vs last month',
		dataFromLast: "Last 30 Days",
		status: false,
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		seriesData: {
			data: [60, 80, 30, 60, 180, 100, 120],
			type: 'line',
			showSymbol: false,
			symbolSize: 10,
			smooth: true
		},
		title: "Revenue Today",
		usersCount: "$94",
		usersDataType: "Users buying plan per minute",
		datasets: {
			data: [{
				type: 'bar',
				data: [33, 45, 75, 80, 55, 40, 96, 64, 30, 75, 34, 30],
			}],
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		},
		listingData: [
			{
				trandingPage: 'Revenue Sources',
				users: "Income",
			},
			{
				trandingPage: 'Direct',
				users: "$2.00"
			},
			{
				trandingPage: 'Google ads',
				users: "$2.00"
			},
			{
				trandingPage: 'Yahoo',
				users: "$10.00",
			},
			{
				trandingPage: 'Affiliate',
				users: "$10.00",
			},
			{
				trandingPage: 'Paid',
				users: "$10.00",
			},
			{
				trandingPage: 'Mail',
				users: "$18.00",
			}
		],
	},
	{
		id: 3,
		sectionName: "conversionRate",
		noOfVistors: "22% ",
		usersThisWeekorMonth: 'this month',
		textofusers: 'vs last month',
		CompareWithLast: "73.43",
		dataFromLast: "Last 30 Days",
		status: true,
		labels: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'],
		seriesData: {
			data: [40, 140, 50, 160, 100, 25, 80],
			type: 'line',
			showSymbol: false,
			symbolSize: 10,
			smooth: true
		},
		title: "Today Conversion Rate",
		usersCount: "10%",
		usersDataType: "Conversion rate per hour",
		datasets: {
			data: [{
				type: 'bar',
				data: [33, 47, 24, 48, 57, 48, 35, 32, 74, 25, 41, 27],
			}],
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		},
		listingData: [
			{
				trandingPage: 'Last Weeks Day',
				users: "Conversion rate",
			},
			{
				trandingPage: 'Sunday',
				users: "10%"
			},
			{
				trandingPage: 'Monday',
				users: "34%"
			},
			{
				trandingPage: 'Tuesday',
				users: "12%",
			},
			{
				trandingPage: 'Wednesday',
				users: "29%",
			},
			{
				trandingPage: 'Thursday',
				users: "28%",
			},
			{
				trandingPage: 'Friday',
				users: "73%",
			}
		],
	},
	{
		id: 4,
		sectionName: "sessions",
		noOfVistors: "67k",
		usersThisWeekorMonth: 'this month',
		textofusers: 'vs last month',
		CompareWithLast: "04.02%",
		dataFromLast: "Last 7 Days",
		status: true,
		labels: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'],
		seriesData: {
			data: [60, 10, 100, 60, 160, 25, 60],
			type: 'line',
			showSymbol: false,
			symbolSize: 10,
			smooth: true
		},
		title: "Today Sessions",
		usersCount: "230",
		usersDataType: "New sessions per hour",
		datasets: {
			data: [{
				type: 'bar',
				data: [24, 17, 25, 40, 52, 41, 30, 40, 32, 46, 55, 30],
			}],
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		},
		listingData: [
			{
				trandingPage: 'Last Weeks Day',
				users: "New Sessions",
			},
			{
				trandingPage: 'Sunday',
				users: "10K"
			},
			{
				trandingPage: 'Monday',
				users: "34K"
			},
			{
				trandingPage: 'Tuesday',
				users: "12K",
			},
			{
				trandingPage: 'Wednesday',
				users: "29K",
			},
			{
				trandingPage: 'Thursday',
				users: "28K",
			},
			{
				trandingPage: 'Friday',
				users: "73K",
			}
		],
	}
]
