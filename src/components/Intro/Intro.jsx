import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Intro({ intro }) {
	return (
		<Box sx={{
			maxWidth: '1200px',
			margin: '80px auto 40px',
			textAlign: 'center',
			'& .MuiTypography-root': {
				fontSize: '17px',
				letterSpacing: '4px',
				fontFamily: 'fontPE'
			},
			'& .MuiTypography-root.MuiTypography-h1': {
				fontWeight: '300',
				fontSize: '32px',
				lineHeight: '44px',
				letterSpacing: '4px',
				p: '32px 0'
			}
		}}>
			<Typography variant="h1">{intro.title}</Typography>

			<Typography variant="body1">

				{intro.content}

			</Typography>

			<img src={intro.thumb}
				alt=""
				style={{
				}}
			/>
		</Box >
	)
}
export default Intro
