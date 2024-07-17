import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import Slider from '~/components/Slider/Slider'
import { sortMinToMax } from '~/untils/format'
import NewsInTheCenter from '~/components/Intro/Intro'
import { mockData } from '~/apis/mock'
import Box from '@mui/material/Box'
import NewsInTheLeft from '~/components/AboutComponent/About'
function Other() {
	const data = mockData.otherPage
	const newsList = sortMinToMax(data.newsList, 'order')
	return (
		<Box>
			<Header />
			<Slider slide={data.slide} otherPage />
			{
				newsList.map((item, index) => {
					if (item.isCenter) {
						return (
							<NewsInTheCenter key={index} intro={item} darkTheme={item.isDark} />
						)
					}
					return (<NewsInTheLeft key={index} about={item} darkTheme={item.isDark} />)
				})
			}
			<Footer />
		</Box>
	)
}
export default Other
