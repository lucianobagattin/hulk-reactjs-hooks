export default [
	{
		viewBy: 'View by Status',
		links: [
			{
				id: 1,
				name: 'module.inbox',
				icon: 'inbox',
				path: 'inbox'
			},
			{
				id: 2,
            name: 'module.drafts',
				icon: 'insert_drive_file',
				path: 'drafts'
			},
			{
				id: 3,
            name: 'module.sent',
				icon: 'send',
				path: 'sent'
			},
			{
				id: 4,
            name: 'module.spam',
				icon: 'error',
				path: 'spam'
			},
			{
				id: 5,
            name: 'module.trash',
				icon: 'delete',
				path: 'trash'
			}
		]
	},
	{
		viewBy: 'View By Actions',
		links: [
			{
				id: 6,
            name: 'module.primary',
				icon: 'inbox',
				path: 'inbox'
			},
			{
				id: 7,
            name: 'module.social',
				icon: 'people',
				path: 'inbox'
			},
			{
				id: 8,
            name: 'module.marketing',
				icon: 'local_offer',
				path: 'inbox'
			}
		]
	}
];