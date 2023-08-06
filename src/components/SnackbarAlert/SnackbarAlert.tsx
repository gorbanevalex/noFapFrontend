import { Close } from '@mui/icons-material'
import { Alert, AlertColor, IconButton, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'

type Props = {
	alert: {
		msg?: string | null
		severity?: AlertColor | null
	}
}

const SnackbarAlert = ({ alert }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useEffect(() => {
		if (alert?.msg && alert?.severity) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}, [alert])

	const errorSnackbarAction = (
		<IconButton
			size='small'
			aria-label='close'
			color='inherit'
			onClick={() => setIsOpen(false)}
		>
			<Close />
		</IconButton>
	)

	return (
		<Snackbar
			open={isOpen}
			autoHideDuration={5000}
			action={errorSnackbarAction}
			onClose={() => setIsOpen(false)}
			sx={{ marginBottom: '60px' }}
		>
			<Alert
				onClose={() => {
					setIsOpen(false)
				}}
				severity={alert?.severity}
				sx={{ width: '100%' }}
			>
				{alert?.msg}
			</Alert>
		</Snackbar>
	)
}

export default SnackbarAlert
