import Button from '@mui/lab/LoadingButton'
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material'
import i18n from 'i18nConfig'
import { useEffect, useState } from 'react'
import { getRandomNumber } from 'utils/functions'

type Props = {
	open: boolean
	onAccept: () => void
	onReject: () => void
	onClose?: () => void
	isLoading?: boolean
}

const ResetTimerDialog = ({
	open,
	onAccept,
	onReject,
	onClose,
	isLoading,
}: Props) => {
	const { t } = i18n
	const [currentMotivationPhrase, setCurrentMotivationPhrase] =
		useState<String>('')

	useEffect(() => {
		if (open) {
			setCurrentMotivationPhrase(
				t(
					`resetTimerDialog.description.${getRandomNumber(
						0,
						Number(t('resetTimerDialog.description.length'))
					)}`
				)
			)
		}
	}, [open])

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>
				{t('resetTimerDialog.title')}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					{currentMotivationPhrase}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onReject} disabled={isLoading}>
					{t('resetTimerDialog.reject')}
				</Button>
				<Button onClick={onAccept} loading={isLoading} autoFocus>
					{t('resetTimerDialog.accept')}
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default ResetTimerDialog
