import makeRequest from 'axiosConfig'
import i18n from 'i18nConfig'
import { setUserData } from 'storage/userStorage'
import { ApiRoute } from 'utils/constant'

type Props = {
	setIsLoading: (isLoading: boolean) => void
	setServerMessage: (serverMessage: object) => void
	handleDialog: () => void
}

export const useResetTimer = ({
	setIsLoading,
	setServerMessage,
	handleDialog,
}: Props) => {
	const { t } = i18n

	const resetTimer = () => {
		setIsLoading(true)
		const timer = new Date()
		makeRequest
			.patch(ApiRoute.USER_TIMER_RESET, { timer: timer.valueOf() })
			.then(res => {
				setServerMessage({
					msg: t('resetTimerAlert.msg'),
					severity: 'success',
				})
				setUserData(res.data)
				setIsLoading(false)
				handleDialog()
			})
			.catch(error => {
				setServerMessage({
					msg: error.response.data.msg,
					severity: 'error',
				})
				setIsLoading(false)
			})
	}

	return { resetTimer }
}
