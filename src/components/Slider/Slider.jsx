import { Box } from '@mui/material'
function Slider() {
	return (
		<Box sx={{
			position: 'relative',
			width: '100%',
			height: '600px'
		}}>
			<img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/323165685_608106891081119_7820470230397909435_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=Cyb2ES7JnlkQ7kNvgFOzthe&_nc_ht=scontent.fsgn5-8.fna&oh=00_AYDz87ZbRDi3INAvyt8nYxbVrOixWCD9n-ho39pedvs6Vw&oe=6693B42B"
				alt=""
				style={{
					position: 'absolute',
					top: 0,
					minWidth: '100%',
					maxWidth: '100%',
					minHeight: '100%',
					maxHeight: '100%',
					objectFit: 'cover',
					objectPosition: 'center center',
					filter: ' brightness(50%)'
				}}
			/>
		</Box>
	)
}
export default Slider
