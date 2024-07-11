import { Box, Button, Typography } from '@mui/material'
function Slider({ slide }) {
	return (
		<Box sx={{
			position: 'relative',
			width: '100%',
			height: '600px',
		}}>
			<img src={slide.thumb}
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
			<Box sx={{
				position: 'absolute',
				top: '32%',
				right: '24%',
				minWidth: '500px',
				maxWidth: '520px',
				textAlign: 'center'
			}}>
				<Box sx={{
					'& .MuiTypography-root': {
						color: 'primary.main',
						fontFamily: 'fontFamily',
						letterSpacing: '4px',
						m: '0 0 20px 0'
					}

				}}>

					<Typography variant="body1"
						sx={{
							fontWeight: 'bold'
						}} >
						{slide.title}
					</Typography>

					<Typography variant="h2"
						sx={{
							fontWeight: 'bold',
							fontSize: '40px'
						}} >
						{slide.heading}
					</Typography>

					<Typography variant="body1"
						sx={{
							fontSize: '16px'
						}} >
						{slide.content}
					</Typography>

					<Typography variant="body1"
						sx={{
							fontWeight: '300',
							fontSize: '16px'

						}} >
						{slide.description}
					</Typography>

				</Box>

				<Box sx={{
					display: 'flex',
					mt: '32px',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					'& .MuiButton-root': {
						textTransform: 'uppercase',
						fontSize: '14px',
						fontWeight: '700',
						boxShadow: 'none',
						minWidth: '200px',
						border: '1px solid #fff',
						borderRadius: '0px',
						py: '8px',
						transition: 'all linear .4s',
						'&:hover': {
							backgroundColor: 'primary.main',
							color: 'primary.dark'
						}
					}
				}}>

					<Button variant="outlined" > shop Shirts</Button>
					<Button variant="outlined" > shop Pants</Button>
				</Box>
			</Box>
		</Box>
	)
}
export default Slider
