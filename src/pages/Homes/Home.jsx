import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import Slider from '~/components/Slider/Slider'
import Intro from '~/components/Intro/Intro'
import { mockData } from '~/apis/mock'
function Home() {
	return (
		<div>
			<Header />
			<Slider slide={mockData.page.slide} />
			<Intro intro={mockData.page.intro} />
			<Footer />
		</div>
	)
}
export default Home
