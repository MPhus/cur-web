export const mockData = {
	page: {
		_id: 'home-page',
		thumbShirt: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720702797/316940281_458793726367701_2108490475932759507_n_ca2j1n.jpg',
		thumbPant: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720702797/301693442_5406775299416357_2643294596215212952_n_ovueay.jpg',
		slide: {
			title: 'RESTOCK ALERT',
			heading: 'BEST SELLERS ITEMS',
			content: 'UP TO 15% OFF',
			description: 'The return of the most sought-after items.',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720702953/323165685_608106891081119_7820470230397909435_n_qf7xu8.jpg'
		},
		intro: {
			title: '𝑂̛̉ 𝑐𝑎́𝑖 𝑇𝑖𝑒̣̂𝑚 𝐶𝑢̉, 𝑐𝑜́ 𝑛ℎ𝑢̛̃𝑛𝑔 𝑚𝑜́𝑛 𝑐𝑢̃',
			content: 'Có những món đã cũ trước khi gặp Củ, tụi nó theo Củ một thời gian dài giờ thì đã cũ hơn Nhưng với tất cả tình cảm dành cho những món đồ có giá trị theo thời gian, thì tụi nó vẫn luôn được trân quý Đó cũng là lý do mà hơn 4 năm về trước tụi mình đã chọn khởi nghiệp bằng những gì đã cũ',
			// thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720708214/slideDone_c8vkzs.png'
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720579851/hihiii_smyeu7.png'
		},
		about: {
			title: 'Chào những Củ\'er',
			content: 'Tụi mình đã cùng nhau đi chung một đoạn đường dài gần 7 năm rồi đấy!\nĐã có rất nhiều sự thay đổi từ vị trí, concept đến nhân sự. Nhưng có một điều tụi mình chưa bao giờ thay đổi đó là niềm tin yêu vào mảng “thời trang sử dụng lại”!\nTụi mình luôn tin rằng, giá trị thời gian cũng như giá trị bảo vệ tài nguyên thiên nhiên rất đáng được bảo tồn và phát huy!\nSau đại dịch thị biến động của thị trường và khủng hoảng kinh tế đã ảnh hưởng đến giá thành của các sản phẩm may mặc cũng như các sản phẩm “sử dụng lại” rất nhiều!\nNhưng sau khi suy nghĩ thật kỹ thì tụi mình đã chấp nhận có những điều chỉnh tích cực về giá thành các sản phẩm trong cửa hàng để cùng mọi người vượt qua giai đoạn kinh tế khó khăn này và cũng như để mọi người đừng lãng quên đi những món đồ “sử dụng lại”!\nCảm ơn mọi người đã luôn đồng hành và gắn bó với tụi mình, và giờ đây là sự điều chỉnh giá như một món quà mà tụi Củ gửi đến tất cả các bạn, hãy cùng tụi mình “sử dụng lại” những món đồ xứng đáng được tái sinh nhé ',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720750456/about_dqdwwa.jpg'
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
			brand: 'converse',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720758661/khaki_o_goqqb2.jpg',
			description: 'Dài x Rộng: 70x50 cm',
			price: 150,
			savePercent: 0,
			quantity: 20,
			type: 'top',
			color: 'orange',
			fabric: 'kaki',
			size: 'L',
			sold: 45
		},
		{
			_id: 'product_02',
			brand: 'converse',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720758662/khaki_y_ugidku.jpg',
			description: 'Dài x Rộng: 70x50 cm',
			price: 150,
			savePercent: 40,
			quantity: 20,
			type: 'top',
			color: 'camo',
			fabric: 'kaki',
			size: 'L',
			sold: 15
		},
		{
			_id: 'product_03',
			brand: 'converse',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720758662/khaki_pink_aozjml.jpg',
			description: 'Dài x Rộng: 70x50 cm',
			price: 150,
			savePercent: 20,
			quantity: 20,
			type: 'top',
			color: 'pink',
			fabric: 'kaki',
			size: 'L',
			sold: 25
		},
		{
			_id: 'product_04',
			brand: 'test',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720762826/334075973_178099261626996_6418107235310057503_n_abp6xe.jpg',
			description: 'Dài x Rộng: 70x50 cm',
			price: 150,
			savePercent: 0,
			quantity: 20,
			type: 'bottom',
			color: 'test',
			fabric: 'test',
			size: 'L',
			sold: 0
		},
		{
			_id: 'product_05',
			brand: 'test',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720762826/334075973_178099261626996_6418107235310057503_n_abp6xe.jpg',
			description: 'Dài x Rộng: 70x50 cm',
			price: 150,
			savePercent: 0,
			quantity: 20,
			type: 'bottom',
			color: 'test',
			fabric: 'test',
			size: 'L',
			sold: 1
		},
		{
			_id: 'product_06',
			brand: 'test',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720762826/334075973_178099261626996_6418107235310057503_n_abp6xe.jpg',
			description: 'Dài x Rộng: 70x50 cm',
			price: 150,
			savePercent: 0,
			quantity: 20,
			type: 'top',
			color: 'test',
			fabric: 'test',
			size: 'L',
			sold: 2
		},
		{
			_id: 'product_07',
			brand: 'test',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720762826/334075973_178099261626996_6418107235310057503_n_abp6xe.jpg',
			description: 'Dài x Rộng: 70x50 cm',
			price: 150,
			savePercent: 0,
			quantity: 20,
			type: 'top',
			color: 'test',
			fabric: 'test',
			size: 'L',
			sold: 3
		},
		{
			_id: 'product_08',
			brand: 'converse',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720758661/khaki_blue_gwm1vb.jpg',
			description: 'Dài x Rộng: 70x50 cm',
			price: 150,
			savePercent: 0,
			quantity: 20,
			type: 'top',
			color: 'blue',
			fabric: 'kaki',
			size: 'L',
			sold: 6
		},
		{
			_id: 'product_09',
			brand: 'converse',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720762798/294757488_5296362010457687_1139796798119014841_n_xooyaf.jpg',
			description: 'Dài x Eo: 70x50 cm',
			price: 150,
			savePercent: 0,
			quantity: 20,
			type: 'bottom',
			color: 'yellow',
			fabric: 'corduroy',
			size: 'L',
			sold: 8
		},
		{
			_id: 'product_10',
			brand: 'converse',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720762799/294771353_5296362290457659_917166969787422662_n_giojt5.jpg',
			description: 'Dài x Eo: 70x50 cm',
			price: 150,
			savePercent: 0,
			quantity: 20,
			type: 'bottom',
			color: 'camo',
			fabric: 'jogger',
			size: 'L',
			sold: 25
		},
		{
			_id: 'product_11',
			brand: 'converse',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720762799/294775739_5296362133791008_4782380351381171519_n_nijkyw.jpg',
			description: 'Dài x Eo: 70x50 cm',
			price: 150,
			savePercent: 0,
			quantity: 20,
			type: 'bottom',
			color: 'black',
			fabric: 'jogger',
			size: 'L',
			sold: 10
		},
		{
			_id: 'product_12',
			brand: 'converse',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720762800/294819816_5296361847124370_7921932272008092541_n_kjzfww.jpg',
			description: 'Dài x Eo: 70x50 cm',
			price: 150,
			savePercent: 15,
			quantity: 20,
			type: 'bottom',
			color: 'green',
			fabric: 'jogger',
			size: 'L',
			sold: 15
		}
	]
}
