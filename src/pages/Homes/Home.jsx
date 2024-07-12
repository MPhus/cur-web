import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import Slider from '~/components/Slider/Slider'
import Intro from '~/components/Intro/Intro'
import About from '~/components/AboutComponent/About'
import BestSeller from '~/components/BestSeller/BestSeller'

import { mockData } from '~/apis/mock'
import { Box } from '@mui/material'
import { maxForQuantityAndType } from '~/untils/format'
function Home() {
	const topList = mockData.products.filter(item => item.type === 'top')
	const bottomList = mockData.products.filter(item => item.type === 'bottom')
	const topBestSeller = maxForQuantityAndType(topList, 4, 'sold')
	const bottomBestSeller = maxForQuantityAndType(bottomList, 4, 'sold')

	return (
		<div >
			<Header />
			<Slider slide={mockData.page.slide} />

			<Intro intro={mockData.page.intro} />

			<BestSeller bestSeller={topBestSeller} />

			<Box sx={{
				display: 'flex',
				maxWidth: '100%',
				p: '20px',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
				<Box sx={{
					flex: '0 0 50%',
					maxWidth: '50%'
				}}>
					<img src={mockData.page.thumbShirt}
						alt=""
						style={{
							width: '100%',
							padding: '12px'
						}}
					/>

				</Box>
				<Box sx={{
					flex: '0 0 50%',
					maxWidth: '50%'
				}}>
					<img src={mockData.page.thumbPant}
						alt=""
						style={{
							width: '100%',
							padding: '12px'
						}}
					/>
				</Box>
			</Box>

			<BestSeller bestSeller={bottomBestSeller} />


			<About about={mockData.page.about} />

			<Footer />

		</div>
	)
}
export default Home
