import { ArrowForward } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Link, TextField, Typography } from '@mui/material'
import { SnackbarAlert } from 'components'
import i18n from 'i18nConfig'
import { FormProvider } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import AuthContainer from '../AuthContainer/AuthContainer'
import { useStyles } from './Login.style'
import { useGetForm } from './controllers/useGetForm'

const Login = () => {
	const classes = useStyles()
	const { t } = i18n

	const { methods, onSubmit, onChangeForm, serverMessage, isLoading } =
		useGetForm()

	const {
		register,
		handleSubmit,
		formState: { isDirty, errors, isValid },
	} = methods

	return (
		<AuthContainer>
			<FormProvider {...methods}>
				<form
					className={classes.form}
					onSubmit={handleSubmit(data => onSubmit(data))}
					onChange={onChangeForm}
				>
					<div className={classes.title}>
						<Typography variant='h1' component='h2'>
							{t('loginPage.title')}
						</Typography>
						<Typography variant='subtitle2' component='p'>
							{t('loginPage.subtitle')}
						</Typography>
					</div>
					<TextField
						{...register('login')}
						label={t('auth.login')}
						helperText={errors.login?.message}
						error={!!errors.login}
						className={classes.textField}
						variant='standard'
					/>
					<TextField
						{...register('password')}
						label={t('auth.password')}
						helperText={errors.password?.message}
						error={!!errors.password}
						className={classes.textField}
						type='password'
						variant='standard'
					/>
					<LoadingButton
						type='submit'
						size='large'
						variant='contained'
						loading={isLoading}
						loadingPosition='end'
						endIcon={<ArrowForward />}
						disabled={!isDirty || !isValid || Boolean(serverMessage?.msg)}
						className={classes.button}
					>
						{t('loginPage.signIn')}
					</LoadingButton>
					<Typography className={classes.bottomText} component='p'>
						{t('loginPage.account') + ' '}
						<Link component={RouterLink} to='/registration' underline='none'>
							{t('registrationPage.signUp')}
						</Link>
					</Typography>
				</form>
				<SnackbarAlert alert={serverMessage} />
			</FormProvider>
		</AuthContainer>
	)
}

export default Login
