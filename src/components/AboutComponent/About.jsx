import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

function About({ about }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useEffect(() => {
		const hadleResize = (event) => {
			setWindowWidth(event.srcElement.innerWidth)
		}
		window.addEventListener('resize', hadleResize)
		return () => {
			window.removeEventListener('resize', hadleResize)
		}
	}, [])
	const numberOfP = Math.floor(windowWidth / 300)

	return (
		<Box sx={{
			maxWidth: '100%',
			margin: '80px auto 40px',
			display: {
				xs: 'none',
				sm: 'flex'
			},
			alignItems: 'center',
			padding: '0 20px'
		}}>
			<Box sx={{
				flex: '0 0 50%',
				maxWidth: '50%'
			}}>
				<img src={about.thumb}
					alt=""
					style={{
						maxWidth: '100%',
						minWidth: '100%'
					}}
				/>
			</Box>
			<Box sx={{
				p: {
					xs: '0 12px',
					md: '0 80px'
				},
				textAlign: 'left',
				fontFamily: 'fontCustom',
				flex: '0 0 50%',
				maxWidth: '50%',
				'& .MuiTypography-root.MuiTypography-h1': {
					maxWidth: '500px',
					fontWeight: '300',
					fontSize: {
						xs: '32px',
						md: '40px'
					},
					lineHeight: '44px',
					letterSpacing: '4px',
					p: '8px 0'
				},
				'& .MuiButtonBase-root': {
					color: 'primary.main',
					backgroundColor: 'primary.dark',
					textTransform: 'uppercase',
					fontSize: {
						xs: '12px',
						md: '16px'
					},
					p: '0',
					minWidth: {
						xs: '80px',
						md: '160px'
					},
					maxWidth: '160px',
					borderRadius: 'none',
					mt: '16px',
					'&:hover': {
						opacity: 0.8
					}
				},
				'& a': {
					textDecoration: 'none',
					color: 'primary.main',
					p: '8px',
					width: '100%'
				}
			}}>
				<Typography variant="h1">{about.title}</Typography>

				<Box sx={{
					'& .MuiTypography-root.MuiTypography-body1': {
						fontSize: '16px',
						letterSpacing: '2px',
						fontFamily: 'fontPE',
						m: '8px 0',
						overflow: 'hidden'
					}
				}}>
					{about.content.split('\n').map((content, index) => {
						if (index >= numberOfP - 1) return
						return (
							<Typography
								variant="body1"
								component="p" key={index}
							>
								{content}
							</Typography>
						)
					}
					)}
				</Box>
				<Button variant="contained"><Link to='/about-cur'>Read more</Link></Button>

			</Box>


		</Box >
	)
}
export default About
