
// Overview section data
export const OverviewData = [
	{
		id: 1,
		labels: ['12AM', '01AM', '02AM', '03AM', '04AM', '05AM', '06AM', '07AM', '08AM', '09AM', '10AM', '11AM', '12PM', '01PM'],
		datasets: [
			{
				label: 'Revenue',
				fill: false,
				lineTension: 0.5,
				borderColor: '#fafafa',
				data: [10, 40, 30, 10, 50, 100, 70, 80, 35, 65, 25, 75, 80, 140]
			},
			{
				label: 'Ecommerce Conversion Rate',
				fill: false,
				lineTension: 0.5,
				borderColor: '#64c4ed',
				data: [145, 100, 125, 90, 80, 110, 75, 55, 90, 35, 60, 40, 50, 15]
			}
		],
		value: "hourly"
	},
	{
		id: 2,
		labels: ['Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [
			{
				label: 'Revenue',
				fill: false,
				lineTension: 0.5,
				borderColor: '#fafafa',
				data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140]
			},
			{
				label: 'Ecommerce Conversion Rate',
				fill: false,
				lineTension: 0.5,
				borderColor: '#64c4ed',
				data: [145, 135, 125, 115, 105, 95, 85, 75, 65, 55, 45, 35, 25, 15]
			}
		],
		value: "daily"
	},
	{
		id: 3,
		labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14'],
		datasets: [
			{
				label: 'Revenue',
				fill: false,
				lineTension: 0.5,
				borderColor: '#fafafa',
				data: [10, 33, 45, 75, 15, 45, 95, 75, 87, 100, 115, 95, 133, 140]
			},
			{
				label: 'Ecommerce Conversion Rate',
				fill: false,
				lineTension: 0.5,
				borderColor: '#64c4ed',
				data: [145, 88, 55, 100, 75, 84, 48, 25, 80, 75, 65, 46, 25, 15]
			}
		],
		value: "weekly"
	},
	{
		id: 4,
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nevomber', 'December', 'January', 'February'],
		datasets: [
			{
				label: 'Revenue',
				fill: false,
				lineTension: 0.5,
				borderColor: '#fafafa',
				data: [10, 100, 75, 80, 78, 65, 80, 120, 95, 75, 133, 88, 125, 140]
			},
			{
				label: 'Ecommerce Conversion Rate',
				fill: false,
				lineTension: 0.5,
				borderColor: '#64c4ed',
				data: [145, 100, 125, 90, 80, 110, 75, 55, 90, 35, 60, 40, 50, 15]
			}
		],
		value: "monthly"
	},
];
// Revenue data
export const revenueData = {
	chartData: {
		label: ["A", "B", "C", "D", "E"],
		data: [5, 50, 15, 45, 5]
	},
	total: '$15,858',
	avg: "18%",
	avgType: "increase"
}
// Visitors data
export const visitorsData = {
	chartData: {
		labels: ["A", "B", "C", "D", "E"],
		data: [50, 5, 50, 20, 45]
	},
	total: 458,
	avg: "33%",
	avgType: "increase"
}
// Orders data
export const ordersData = {
	chartData: {
		label: ["A", "B", "C", "D", "E"],
		data: [5, 50, 15, 45, 5]
	},
	total: 376443,
	avg: '2%',
	avgType: "decrease"
}
// Active users data
export const activeUsersData = {
	chartData: {
		label: ["A", "B", "C", "D", "E"],
		data: [5, 50, 15, 45, 5]
	},
	total: 93,
	avg: '2%',
	avgType: "decrease"
}
// Marketing data
export const Marketing = [
	{
		id: 1,
		campaign: "Internal Promotion",
		mobileordesktop: "Mobile",
		transaction: "543",
		revenue: "$8,360",
		avgordervalue: "$89"
	},
	{
		id: 2,
		campaign: "Order Coupon Code",
		mobileordesktop: "Desktop",
		transaction: "543",
		revenue: "$15,362",
		avgordervalue: "$189"
	},
	{
		id: 3,
		campaign: "Affiliation",
		mobileordesktop: "Mobile",
		transaction: "3243",
		revenue: "$5,3622",
		avgordervalue: "$9"
	},
	{
		id: 4,
		campaign: "Internal Promotion",
		mobileordesktop: "Desktop",
		transaction: "43",
		revenue: "$1,362",
		avgordervalue: "$119"
	},
	{
		id: 5,
		campaign: "Affiliation",
		mobileordesktop: "Mobile",
		transaction: "543",
		revenue: "$4,362",
		avgordervalue: "$24"
	},
	{
		id: 6,
		campaign: "Internal Promotion",
		mobileordesktop: "Mobile",
		transaction: "1243",
		revenue: "$3,3622",
		avgordervalue: "$19"
	},
	{
		id: 7,
		campaign: "Internal Promotion",
		mobileordesktop: "Desktop",
		transaction: "413",
		revenue: "$5,362",
		avgordervalue: "$11"
	},
	{
		id: 8,
		campaign: "Affiliation",
		mobileordesktop: "Mobile",
		transaction: "543",
		revenue: "$4,362",
		avgordervalue: "$24"
	}
]
// Marketing data
export const RevenueByCountries = [
	{
		id: 1,
		name: "India",
		title: "70% of total revenue",
		value: 70
	},
	{
		id: 2,
		name: "USA",
		title: "65% of total revenue",
		value: 65
	},
	{
		id: 3,
		name: "UAE",
		title: "30% of total revenue",
		value: 30
	},
	{
		id: 4,
		name: "Canada",
		title: "50% of total revenue",
		value: 50
	},
	{
		id: 5,
		name: "Japan",
		title: "10% of total revenue",
		value: 10
	},
	{
		id: 6,
		name: "Iran",
		title: "60% of total revenue",
		value: 60
	}
]
// Top seller product data
export const TopSellerProduct = [
	{
		id: 1,
		title: "Product 1",
		price: "$59",
		rating: 5,
		image: "product1.jpg",
		sales: "88,935",
		data: [
			{ value: 90, name: 'Product 1' },
			{ value: 50, name: 'Product 2' },
			{ value: 50, name: 'Product 3' },
			{ value: 50, name: 'Product 4' },
			{ value: 50, name: 'Product 5' },
			{ value: 50, name: 'Product 6' },
			{ value: 50, name: 'Product 7' },
			{ value: 50, name: 'Product 8' }
		],
		color: ['#e2f4fe', '#b3e5fc', '#81d5fa', '#4fc2f8', '#29b7f7', '#03a9f5', '#039be6', '#0287d2']
	}
]

export const KeywordSearchAnalysis = [
	{
		keywords: "Analytics",
		clicks: "1,50,362",
		cpc: '$5.43',
		trend: "13%",
		location:'India',
		trendHigh: false,
		competition:'High'
	},
	{
		keywords: "Sales",
		clicks: "7,362",
		cpc: '$5.432',
		trend: "31%",
		location:'India',
		trendHigh: true,		
		competition:'Low'
	},
	{
		keywords: "Revenue",
		clicks: "1,52,362",
		cpc: '$5.33',
		trend: "12%",
		location:'India',
		trendHigh: false,
		competition:'High'
	},
	{
		keywords: "Conversion Rate",
		clicks: "77,235",
		cpc:'$4.34',
		trend: "83%",
		location:'India',
		trendHigh: true,		
		competition:'Medium'
	},
	{
		keywords: "Users",
		clicks: "3,362",
		cpc: '$5.45',
		trend: "13%",
		location:'India',
		trendHigh: false,
		competition:'Low'
	},
	{
		keywords: "Admin Tempalate",
		clicks: "1,74,874",
		cpc: '$5.36',
		trend: "22%",
		location:'India',
		trendHigh: true,		
		competition:'High'
	},
	{
		keywords: "HTML",
		clicks: "24,874",
		cpc: '$5.37',
		trend: "16%",
		location:'India',
		trendHigh: false,
		competition:'Medium'
	},
	{
		keywords: "Javascript",
		clicks: "4,874",
		cpc: '$5.48',
		trend: "11%",
		location:'India',
		trendHigh: false,
		competition:'Low'
	}
]