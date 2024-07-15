import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Intro({ intro }) {
	return (
		<Box sx={{
			maxWidth: {
				xs: '100%',
				md: '960px',
				lg: '1200px'
			},
			margin: '80px auto 40px',
			textAlign: 'center',
			padding: {
				xs: ' 0 32px',
				md: 'none'
			},
			'& .MuiTypography-root.MuiTypography-h1': {
				fontWeight: '300',
				fontSize: '32px',
				lineHeight: '44px',
				letterSpacing: '4px',
				p: '32px 0'
			},
			'& .MuiTypography-root.MuiTypography-body1': {
				fontSize: '16px',
				letterSpacing: '2px',
				fontFamily: 'fontPE',
				mb: '16px'
			}
		}}>
			<Typography variant="h1">{intro.title}</Typography>
			<Box>
				{intro.content.split('\n').map((content, index) =>
					<Typography variant="body1" component="p" key={index}>
						{content}
					</Typography>
				)}
			</Box>

			{/* <Typography variant="body1">

				{intro.content}

			</Typography> */}

			<img src={intro.thumb}
				alt=""
				style={{
					maxWidth: '100%'
				}}
			/>
		</Box >
	)
}
export default Intro
