// visitor chart data
export const clientData = {
   icon: "fas fa-user-plus",
   title: "Client",
   total: 41,
	trade: 30,  
   data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
		chartdata: [250, 310, 150, 420, 250, 450],
		borderColor: "#0387d2",
		pointBackgroundColor: "#fff",
		height:70,
		pointBorderColor:"#0387d2",
		borderWidth:4,
		shadowColor: 'rgba(0,0,0,0.4)'
   }
}
// Revenue chart data
export const revenueData = {
   icon: "fas fa-coins",
   title: "Revenue",
   total: 4381,
   trade: 60,
   data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
		chartdata: [250, 310, 150, 420, 250, 450],
		borderColor: "#ef6c01",
		pointBackgroundColor: "#fff",
		height:70,
		pointBorderColor:"#ef6c01",
		borderWidth:4,
		shadowColor: 'rgba(0,0,0,0.4)'
   }
}
// Sales chart data
export const salesData = {
   icon: "fas fa-shopping-cart",
   title: "Sales",
   total: 2611,
   trade: 611,
   data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
		chartdata: [250, 310, 150, 420, 250, 450],
		borderColor: "#43a047",
		pointBackgroundColor: "#fff",
		height:70,
		pointBorderColor:"#43a047",
		borderWidth:4,
		shadowColor: 'rgba(0,0,0,0.4)'
   }
}

export const socailData = [
	{ 
		icon: 'fab fa-facebook-square',
		iconColor:'#3c5a9a',
		platform: 'Facebook', 
		count: '94,478',
		countType: 'Likes',
		monthCount: '256 Likes',
		growthRate: '0.35%',
		labels: ['2017','2018','2019','2020'],
		seriesData:{
			data: [85,6,78,65],
			type: 'line',
			showSymbol: false,
			symbolSize:10,
			smooth: true
		} 
	},
	{ 
		icon: 'fab fa-twitter-square',
		iconColor:'#1bb1e9',
		platform: 'Twitter', 
		count: '36,468',
		countType: 'Followers',
		monthCount: '365 Followers',
		growthRate: '0.56%',
		labels: ['2017','2018','2019','2020'],
		seriesData:{
			data: [52,5,45,35],
			type: 'line',
			showSymbol: false,
			symbolSize:10,
			smooth: true
		} 
	},
	{ 
		icon: 'fab fa-instagram',
		iconColor:'#99327d',
		platform: 'Instagram', 
		count: '24,468',
		countType: 'Followers',
		monthCount: '795 Followers',
		growthRate: '0.88%',
		labels: ['2017','2018','2019','2020'],
		seriesData:{
			data: [41,5,35,25],
			type: 'line',
			showSymbol: false,
			symbolSize:10,
			smooth: true
		} 
	}
]
