import { AccessTime } from '@mui/icons-material'
import { Button, Card, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { theme } from 'themes/theme'
import { UserAuthResponse } from 'types'
import { convertMillisecondsToTime } from 'utils/functions'
import gigachad from '../../../static/Gigachad.png'
import { useStyles } from './StatsHeader.style'

type Props = {
	milliseconds: number
	userData: UserAuthResponse
}

const StatsHeader = ({ milliseconds, userData }: Props) => {
	const classes = useStyles()

	const [formattedDate, setFormattedDate] = useState(null)

	useEffect(() => {
		const convertedTime = convertMillisecondsToTime(milliseconds)
		setFormattedDate(
			`${convertedTime.years} г. ${convertedTime.days} д. ${convertedTime.hours} ч. ${convertedTime.minutes} мин. ${convertedTime.seconds} сек.`
		)
	}, [milliseconds])

	return (
		<Container>
			<Card
				sx={{
					backgroundColor: `${theme.palette.primary.main}`,
					overflow: 'visible',
				}}
				className={classes.customCard}
			>
				<Typography className={classes.cardTitle} variant='h5' component='p'>
					👋 Привет, {userData?.name}
				</Typography>
				<div className={classes.cardTime}>
					<AccessTime className={classes.clockIcon} />
					<div>
						<Typography component='p'>Ты на воздержании уже</Typography>
						<Typography variant='h6' component='p'>
							{formattedDate}
						</Typography>
					</div>
				</div>
				<Button
					sx={{
						marginTop: '20px',
						boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
					}}
					size='medium'
					variant='contained'
				>
					Поделиться
				</Button>
				<img
					src={gigachad}
					alt='Gigachad'
					loading='lazy'
					className={classes.cardImage}
				/>
			</Card>
		</Container>
	)
}

export default StatsHeader
