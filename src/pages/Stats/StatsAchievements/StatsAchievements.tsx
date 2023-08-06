import { AccessTime } from '@mui/icons-material'
import { Box, Card, ListItem, Stack, Typography } from '@mui/material'
import { useStyles } from './StatsAchievements.style'

const StatsAchievements = () => {
	const classes = useStyles()

	return (
		<Box mt={3}>
			<Typography component='h2' variant='h2' mb={1}>
				Достижения
			</Typography>
			<Stack
				className={`${classes.stack} ${classes.achievementList}`}
				direction='row'
				spacing={2}
				overflow='auto'
			>
				{/* Вот это в map */}
				<ListItem className={classes.achievementCard}>
					<Card>
						<AccessTime />
						<Typography component='p'>Заголовок</Typography>
						<Typography component='p' variant='subtitle2'>
							Описание
						</Typography>
					</Card>
				</ListItem>
			</Stack>
		</Box>
	)
}

export default StatsAchievements
