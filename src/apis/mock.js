export const mockData = {
	homePage: {
		_id: 'home-page',
		thumbShirt: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720702797/316940281_458793726367701_2108490475932759507_n_ca2j1n.jpg',
		thumbPant: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720702797/301693442_5406775299416357_2643294596215212952_n_ovueay.jpg',
		// slide: {
		// 	title: 'RESTOCK ALERT',
		// 	heading: 'BEST SELLERS ITEMS',
		// 	content: 'UP TO 15% OFF',
		// 	description: 'The return of the most sought-after items.',
		// 	thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720702953/323165685_608106891081119_7820470230397909435_n_qf7xu8.jpg'
		// },
		slide: {
			title: '138/8 𝑻𝒓𝒂̂̀𝒏 𝑯𝒖̛𝒏𝒈 Đ𝒂̣𝒐',
			heading: 'Trong con hẻm này có một tiệm đồ si dành riêng cho mấy gã Đàn Ông',
			content: 'Tụi tui vẫn luôn ở đây, cùng với tất cả những gì chỉn chu nhất có thể, để luôn sẵn sàng trở thành một phần đồng hành cùng hành trình của những gã Đàn Ông đạo mạo',
			description: '- 𝑇𝑖𝑒̣̂𝑚 𝐶𝑢̉ -',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1721112020/422409474_694375446142860_7560533461656277863_n_qdeo92.jpg'
		},
		intro: {
			title: '𝑂̛̉ 𝑐𝑎́𝑖 𝑇𝑖𝑒̣̂𝑚 𝐶𝑢̉, 𝑐𝑜́ 𝑛ℎ𝑢̛̃𝑛𝑔 𝑚𝑜́𝑛 𝑐𝑢̃',
			content: 'Có những món đã cũ trước khi gặp Củ, tụi nó theo Củ một thời gian dài giờ thì đã cũ hơn Nhưng với tất cả tình cảm dành cho những món đồ có giá trị theo thời gian, thì tụi nó vẫn luôn được trân quý Đó cũng là lý do mà hơn 4 năm về trước tụi mình đã chọn khởi nghiệp bằng những gì đã cũ',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1720708214/slideDone_c8vkzs.png'
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
	otherPage: {
		_id: 'about-page',
		slide: {
			title: 'Thị trấn bình thường',
			content: 'Trong Thị Trấn có một quầy nước bình thường, tiệm đồ si bình dị, Cái Túi và Con Gấu si bình lặng, khu vườn nhỏ bình yên … và mang đến những điều hạnh phúc bình thường\nMột ngày đẹp trời nào đó, nếu bạn muốn tìm đến những “điều bình thường rất thật” thì hãy Lạc đến tụi mình, Lạc đến Thị Trấn Bình Thường',
			description: '-Củ đi Lạc-',
			thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1721113088/351311852_811057347254034_1716949600595932988_n_br40az.jpg'

		},
		newsList: [
			{
				title: 'Hôm nay những đám mây như sà xuống chơi… ',
				content: 'Mấy nay cứ chiều là bầu trời âm u, những cơn mưa dầm làm tụi mình khó gặp nhau hơn!\nNhưng mà đây cũng là điều kiện để tụi mình chăm sóc lại khu vườn nhỏ trong Thị Trấn Bình Thường này…\nĐể rồi một ngày nắng đẹp, tụi mình sẽ chỉn chu và xinh xắn hơn để gặp lại mọi người',
				thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1721117919/slideCudiLac_pefkak.png',
				isDark: false,
				isCenter: false,
				order: 5
			},
			{
				title: 'Thong dong đêm số 8',
				content: 'Tụi mình quyết định vẫn thực hiện đêm nhạc và các bạn vẫn quyết định ngồi thong dong nghe tụi mình hát, nghe tụi mình hàn thuyên về những thanh âm cho một cuộc sống đầy tích cực\nMột sân khấu dựng tạm, một chiếc lều nhỏ, những chiếc ô cầm tay … và những tâm hồn hướng đến những điều tích cực đã làm nên một đêm nhạc chữa lành cho tất cả\nCảm ơn tất cả các Cậu. ',
				thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1721184766/428704794_775794591409278_2300054024883733401_n_zrprp9.jpg',
				isDark: false,
				isCenter: false,
				order: 3
			},
			{
				title: 'Đúng thời gian này 1 năm về trước, tụi mình bắt tay vào xây dựng Củ đi Lạc',
				content: 'Có một sự thật về ý tưởng ban đầu của tụi mình không phải là mô hình quán cafe\nNhưng vì một điều kì diệu nào đó, “Cà Phê Củ đi Lạc” của tụi mình đã ở đây suốt 1 năm vừa qua\nĐiều kỳ diệu nào đó ư ??? , tụi mình biết chắc chắn đó chính là những tình cảm, những sự ủng hộ mỗi ngày của tất cả các bạn đã dành cho\nBiết mình còn nhiều thiếu sót, nhưng thời gian tới tụi mình sẽ thật sự chuyển mình về cả chất lượng các món uống cho đến không gian thưởng thức để đáp lại những tình cảm chân thành của các bạn\nVẫn là Củ đi Lạc, bạn quán nước không gian mở hoàn toàn với các món nước truyền thống nhưng ở “nấc thang” cao hơn, một lần nữa Củ đi Lạc cảm ơn và luôn hẹn gặp lại.',
				thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1721187290/coffee_johdoz.png',
				isDark: false,
				isCenter: true,
				order: 1
			},
			{
				title: 'Nhóm Trà Tươi Giải Nhiệt của tụi mình nè',
				content: 'Dành cho những bạn không uống được cafe hoặc đang muốn một ngày thật ngọt - mát\nCác bạn có thể gọi Siro Hoa Bụp Giấm, Trà Cam Sả (hỏng có đào) hoặc đơn giản là Trà Chanh Đường\nVì là dòng thức uống từ trái cây tươi nên đôi lúc sẽ có sự “nhỉnh” hơn về hương vị, có gì mấy bạn cứ yêu cầu điều chỉnh cho hợp khẩu vị nhé.',
				thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1721186019/tropical_rheaee.png',
				isDark: true,
				isCenter: false,
				order: 2
			},
			{
				title: 'Một buổi sáng cùng những nỗi buồn thật đẹp…',
				content: 'Lâu lắm rồi mới có một buổi sáng chỉ mỗi tụi mình và 1 bạn khách quen duy nhất, cũng vắng, cũng lặng nhưng tự nhiên những khoảng lặng như vầy cũng giúp tụi mình yêu thêm nơi này!\nMột khoảng lặng cần thiết để chăm sóc, để ngắm nhìn những gì mà tụi mình đã và đang theo đuổi\nCảm ơn đã đi Lạc đến Thị trấn Bình Thường.',
				thumb: 'https://res.cloudinary.com/dwa6hiofs/image/upload/v1721189075/dark_e2szpy.png',
				isDark: true,
				isCenter: true,
				order: 4
			},
		],
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
