import { useState } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { isEmail, isName, isPass } from '../../utils/validate'
import Input from '../input'
import {
	StyledButton,
	StyledForm,
	StyledTitle,
	StyledWrapper,
} from './components'

export interface MyForm {
	name: string
	email: string
	password: string
}

const TEXT = 'Место для указания результатов проверки ввода'

const Form = () => {
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<MyForm>({
		defaultValues: {},
	})

	const submit: SubmitHandler<MyForm> = data => {
		alert(
			`Имя-${data.name} Пароль-${data.password} Логин-${data.email} успешно отправлены!`
		)
		setData({
			name: '',
			email: '',
			password: '',
		})
	}
	const error: SubmitErrorHandler<MyForm> = data => {
		console.log(data)
	}

	return (
		<StyledForm onSubmit={handleSubmit(submit, error)}>
			<StyledWrapper>
				<StyledTitle>Войти</StyledTitle>
				<Input
					error={Boolean(errors.name)}
					type={'text'}
					data={data}
					inputName={'name'}
					placeholder={'Имя'}
					register={register}
					text={TEXT}
					setData={setData}
					validate={isName}
				/>
				<Input
					error={Boolean(errors.email)}
					type={'text'}
					data={data}
					inputName={'email'}
					placeholder={'Логин (почта)'}
					register={register}
					text={TEXT}
					setData={setData}
					validate={isEmail}
				/>
				<Input
					error={Boolean(errors.password)}
					type={'password'}
					data={data}
					inputName={'password'}
					placeholder={'Пароль'}
					register={register}
					text={TEXT}
					setData={setData}
					validate={isPass}
				/>
			</StyledWrapper>
			<StyledButton>Зарегистрироваться</StyledButton>
		</StyledForm>
	)
}

export default Form
