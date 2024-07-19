import Header from '~/components/Header/Header'
import Slider from '~/components/Slider/Slider'
import Intro from '~/components/Intro/Intro'
import About from '~/components/AboutComponent/About'
import ProductList from '~/components/ProductList/ProductList'
import Footer from '~/components/Footer/Footer'

import Box from '@mui/material/Box'
import { getHomePage, getBestSeller } from '~/apis/mock'

function Home() {
	const homePage = getHomePage()
	const topBestSeller = getBestSeller('top', 4, 'sold')
	const bottomBestSeller = getBestSeller('bottom', 4, 'sold')

	return (
		<div style={{ overflow: 'hidden' }} >

			<Header />

			<Slider slide={homePage.slide} homePage />

			<Intro intro={homePage.intro} />

			<ProductList products={topBestSeller} homePage />

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
					<img src={homePage.thumbShirt}
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
					<img src={homePage.thumbPant}
						alt=""
						style={{
							width: '100%',
							padding: '12px'
						}}
					/>
				</Box>
			</Box>

			<ProductList products={bottomBestSeller} homePage />


			<About about={homePage.about} homePage />

			<Footer />

		</div>
	)
}
export default Home
