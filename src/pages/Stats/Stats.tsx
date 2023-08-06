import { Cancel } from '@mui/icons-material'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { SnackbarAlert } from 'components'
import ResetTimerDialog from 'components/Dialogs/ResetTimerDialog/ResetTimerDialog'
import { useGetTimer } from 'hooks/useGetTimer'
import { useResetTimer } from 'hooks/useResetTimer'
import i18n from 'i18nConfig'
import { useState } from 'react'
import { getUserData } from 'storage/userStorage'
import { ServerMessage } from 'types/models/snackbar/snackbar'
import { useStyles } from './Stats.style'
import StatsAchievements from './StatsAchievements/StatsAchievements'
import StatsHeader from './StatsHeader/StatsHeader'
import StatsHealth from './StatsHealth/StatsHealth'
import StatsSteps from './StatsSteps/StatsSteps'

const Stats = () => {
	const classes = useStyles()
	const { t } = i18n
	const userData = getUserData()
	const { actualTimer } = useGetTimer()
	const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [serverMessage, setServerMessage] = useState<ServerMessage | null>(null)

	const handleDialog = () => {
		setDialogIsOpen(prev => !prev)
	}

	const { resetTimer } = useResetTimer({
		setIsLoading,
		setServerMessage,
		handleDialog,
	})

	return (
		<Box className={classes.box}>
			<Stack className={classes.stack} spacing={3}>
				<StatsHeader milliseconds={actualTimer} userData={userData} />
				<Paper>
					<StatsSteps milliseconds={actualTimer} />
					<StatsAchievements />
					<StatsHealth milliseconds={actualTimer} />
					<Button
						startIcon={<Cancel />}
						onClick={handleDialog}
						variant='contained'
						size='large'
						sx={{
							backgroundColor: '#232323',
							width: '100%',
							color: 'white',
							textTransform: 'unset',
							justifyContent: 'flex-start',
						}}
						className={classes.timerResetButton}
					>
						<Box>
							<Typography>{t('resetTimerButton.title')}</Typography>
							<Typography variant='subtitle2'>
								{t('resetTimerButton.subtitle')}
							</Typography>
						</Box>
					</Button>
					<ResetTimerDialog
						open={dialogIsOpen}
						onAccept={resetTimer}
						onReject={handleDialog}
						isLoading={isLoading}
					/>
					<SnackbarAlert alert={serverMessage} />
				</Paper>
			</Stack>
		</Box>
	)
}

export default Stats
