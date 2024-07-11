import { ReactComponent as LogoIcon } from '~/assets/svgIcon/curlogob.svg'
import { Button, SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from 'react';

function Header() {
	const [blur, setBlur] = useState(false)

	useEffect(() => {
		function handleScroll() {
			setBlur(window.scrollY > 120);
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<Box sx={{
			height: '80px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			overflowX: 'auto',
			paddingX: 2,
			backgroundColor: blur ? 'primary.dark' : 'transparent',
			p: '0 64px',
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			zIndex: '9',
			borderBottom: '1px solid #fff'
		}}>
			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				maxWidth: '350px',
				minWidth: '350px',
				'& .MuiButton-root': {
					textTransform: 'uppercase',
					fontSize: '16px',
					borderBottom: '1px solid transparent',
					boxShadow: 'none',
					borderRadius: '0px',
					'&:hover': {
						borderBottom: '1px solid #fff'
					}
				}
			}}>

				<Button variant="text" >Shirts</Button>
				<Button variant="text" >Pants</Button>
				<Button variant="text" >About CUR</Button>


			</Box>
			<Box sx={{

			}}>
				<SvgIcon component={LogoIcon} inheritViewBox sx={{
					height: '100%',
					width: '64px'
				}} />
			</Box>

			<Box sx={{
				display: 'flex',
				maxWidth: '350px',
				minWidth: '350px',
				justifyContent: 'flex-end'
			}}>
				<Button variant="text" sx={{
					textTransform: 'uppercase',
					fontSize: '16px',
					borderBottom: '1px solid transparent',
					boxShadow: 'none',
					borderRadius: '0px',
					'&:hover': {
						borderBottom: '1px solid #fff'
					},
					'& .MuiButton-icon': {
						mb: '8px'
					}
				}} endIcon={<LocalMallIcon />}>Card</Button>

			</Box>
		</Box >
	);
}
export default Header
