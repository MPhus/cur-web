import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function About({ about }) {
	return (
		<Box sx={{
			maxWidth: '100%',
			margin: '80px auto 40px',
			display: 'flex',
			alignItems: 'center'
		}}>
			<Box>
				<img src={about.thumb}
					alt=""
					style={{
						maxWidth: '900px',
						minWidth: '900px',
						maxHeight: '900px',
						minHeight: '900px',
						margin: ' 0 40px'
					}}
				/>
			</Box>
			<Box sx={{
				p: '0 80px',
				textAlign: 'left',
				fontFamily: 'fontCustom',
				maxWidth: '880px',
				'& .MuiTypography-root.MuiTypography-h1': {
					maxWidth: '500px',
					fontWeight: '300',
					fontSize: '40px',
					lineHeight: '44px',
					letterSpacing: '4px',
					p: '8px 0'
				},
				'& .MuiButtonBase-root': {
					color: 'primary.main',
					backgroundColor: 'primary.dark',
					textTransform: 'uppercase',
					fontSize: '16px',
					p: '8px',
					minWidth: '160px',
					maxWidth: '160px',
					borderRadius: 'none',
					mt: '16px',
					'&:hover': {
						opacity: 0.8
					}
				}

			}}>
				<Typography variant="h1">{about.title}</Typography>

				<Box sx={{
					'& .MuiTypography-root.MuiTypography-body1': {
						fontSize: '16px',
						letterSpacing: '2px',
						fontFamily: 'fontPE',
						m: '8px 0'
					}
				}}>
					{about.content.split('\n').map((content, index) =>
						<Typography
							variant="body1"
							component="p" key={index}
						>
							{content}
						</Typography>
					)}
				</Box>
				<Button variant="contained">Read More</Button>

			</Box>


		</Box >
	)
}
export default About
