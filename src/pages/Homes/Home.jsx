import Header from '~/components/Header/Header'
import Slider from '~/components/Slider/Slider'
import Intro from '~/components/Intro/Intro'
import About from '~/components/AboutComponent/About'
import BestSeller from '~/components/BestSeller/BestSeller'
import Footer from '~/components/Footer/Footer'

import Box from '@mui/material/Box'
import { mockData } from '~/apis/mock'
import { maxForQuantityAndType } from '~/untils/format'

function Home() {
	const topList = mockData.products.filter(item => item.type === 'top')
	const bottomList = mockData.products.filter(item => item.type === 'bottom')
	const topBestSeller = maxForQuantityAndType(topList, 4, 'sold')
	const bottomBestSeller = maxForQuantityAndType(bottomList, 4, 'sold')

	return (
		<div style={{ overflow: 'hidden' }} >

			<Header />

			<Slider slide={mockData.homePage.slide} homePage />

			<Intro intro={mockData.homePage.intro} />

			<BestSeller bestSeller={topBestSeller} />

			<Box sx={{
				display: 'flex',
				maxWidth: '100%',
				flexDirection: {
					xs: 'column',
					md: 'row'
				},
				p: {
					xs: '0',
					md: '20px'
				},
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
				<Box sx={{
					flex: {
						xs: '0 0 100%',
						md: '0 0 50%'
					},
					maxWidth: {
						xs: '100%',
						md: '50%'
					}
				}}>
					<img src={mockData.homePage.thumbShirt}
						alt=""
						style={{
							width: '100%',
							padding: '12px'
						}}
					/>

				</Box>
				<Box sx={{
					flex: {
						xs: '0 0 100%',
						md: '0 0 50%'
					},
					maxWidth: {
						xs: '100%',
						md: '50%'
					}
				}}>
					<img src={mockData.homePage.thumbPant}
						alt=""
						style={{
							width: '100%',
							padding: '12px'
						}}
					/>
				</Box>
			</Box>

			<BestSeller bestSeller={bottomBestSeller} />


			<About about={mockData.homePage.about} homePage />

			<Footer />

		</div>
	)
}
export default Home
