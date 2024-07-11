export const mockData = {
	page: {
		_id: 'home-page',
		thumbShirt: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720702797/316940281_458793726367701_2108490475932759507_n_ca2j1n.jpg',
		thumbPant: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720702797/301693442_5406775299416357_2643294596215212952_n_ovueay.jpg',
		slide: {
			title: 'BEST SELLERS ITEMS',
			content: 'UP TO 15% OFF',
			description: 'The return of the most sought-after items.',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720702953/323165685_608106891081119_7820470230397909435_n_qf7xu8.jpg',
		},
		intro: {
			title: '𝑂̛̉ 𝑐𝑎́𝑖 𝑇𝑖𝑒̣̂𝑚 𝐶𝑢̉, 𝑐𝑜́ 𝑛ℎ𝑢̛̃𝑛𝑔 𝑚𝑜́𝑛 𝑐𝑢̃',
			content: 'Có những món đã cũ trước khi gặp Củ, tụi nó theo Củ một thời gian dài giờ thì đã cũ hơn Nhưng với tất cả tình cảm dành cho những món đồ có giá trị theo thời gian, thì tụi nó vẫn luôn được trân quý Đó cũng là lý do mà hơn 4 năm về trước tụi mình đã chọn khởi nghiệp bằng những gì đã cũ',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720579851/hihiii_smyeu7.png',
		},
		about: {
			title: '',
			content: '',
			thumb: '',
		},
		bestSeller: [
			{
				_id: 'column-id-01',
				boardId: 'board-id-01',
				title: 'To Do Column 01',
				cardOrderIds: ['card-id-01', 'card-id-02', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-06', 'card-id-07'],
				cards: [
					{
						_id: 'card-id-01',
						boardId: 'board-id-01',
						columnId: 'column-id-01',
						title: 'Title of card 01',
						description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)',
						cover: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/143241398_1679734608875887_5534046199329662909_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NX7TsKXvVmcQ7kNvgHbM94D&_nc_ht=scontent.fsgn5-9.fna&oh=00_AYCm1TlWJMwgI_3B2P9FY5Od-spLQtWb1uphmVaGBr1UaQ&oe=668FE31B',
						memberIds: ['test-user-id-01'],
						comments: ['test comment 01', 'test comment 02'],
						attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
					},
					{ _id: 'card-id-02', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
					{ _id: 'card-id-03', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
					{ _id: 'card-id-04', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
					{ _id: 'card-id-05', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
					{ _id: 'card-id-06', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
					{ _id: 'card-id-07', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
				]
			},
			{
				_id: 'column-id-02',
				boardId: 'board-id-01',
				title: 'Inprogress Column 02',
				cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
				cards: [
					{ _id: 'card-id-08', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
					{ _id: 'card-id-09', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
					{ _id: 'card-id-10', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
				]
			},
			{
				_id: 'column-id-03',
				boardId: 'board-id-01',
				title: 'Done Column 03',
				cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
				cards: [
					{ _id: 'card-id-11', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
					{ _id: 'card-id-12', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
					{ _id: 'card-id-13', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
				]
			}
		]
	},
	products: [
		{
			_id: 'product_01',
			name: '',
			thumb: '',
			description: '',
			price: 0,
			savePercent: 0,
			quantity: 0,
			type: '',
			size: '',
			sold: 0
		}
	]
}
