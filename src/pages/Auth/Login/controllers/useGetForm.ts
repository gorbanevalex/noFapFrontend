import { yupResolver } from '@hookform/resolvers/yup'
import makeRequest from 'axiosConfig'
import i18n from 'i18nConfig'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { setUserData, setUserToken } from 'storage/userStorage'
import { UserLogin } from 'types'
import { ServerMessage } from 'types/models/snackbar/snackbar'
import { ApiRoute } from 'utils/constant'
import { loginFormResolver } from 'validation'

const initialStateForm: UserLogin = {
	login: '',
	password: '',
}

export const useGetForm = () => {
	const { t } = i18n
	const [serverMessage, setServerMessage] = useState<ServerMessage | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	const methods = useForm({
		defaultValues: {
			...initialStateForm,
		},
		mode: 'onChange',
		resolver: yupResolver(loginFormResolver(t)),
	})

	const onSubmit = (data: UserLogin) => {
		setIsLoading(true)
		makeRequest
			.post(ApiRoute.LOGIN, { ...data })
			.then(res => {
				setUserData(res.data.user)
				setUserToken(res.data.token)
				setIsLoading(false)
				window.location.reload()
			})
			.catch(error => {
				setServerMessage({ msg: error.response.data.msg, severity: 'error' })
				setIsLoading(false)
			})
	}

	const onChangeForm = () => {
		if (serverMessage?.msg) {
			setServerMessage({ ...serverMessage, msg: null })
		}
	}

	return {
		methods,
		onSubmit,
		onChangeForm,
		serverMessage,
		isLoading,
	}
}
