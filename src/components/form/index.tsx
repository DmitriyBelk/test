import { useState } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { generatePassword } from '../../utils/passGen'
import {
	StyledButton,
	StyledForm,
	StyledImg,
	StyledInput,
	StyledText,
	StyledTitle,
	StyledWrapper,
} from './components'
import { isEmail, isName, isPass } from './validate'

interface MyForm {
	name: string
	email: string
	password: string
}

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
			`Имя-${data.name} Пароль-${data.password} Логин-${data.email} успешно отправленны!`
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
	console.log(data.password.length);

	return (
		<StyledForm onSubmit={handleSubmit(submit, error)}>
			<StyledWrapper>
				<StyledTitle>Войти</StyledTitle>
				<div>
					<StyledInput
						placeholder='Имя'
						value={data.name}
						{...register('name', { required: true, validate: isName })}
						type='text'
						onChange={e => setData({ ...data, name: e.target.value })}
						error={Boolean(errors.name)}
					/>
					<StyledText>Место для указания результатов проверки ввода</StyledText>
				</div>
				<div>
					<StyledInput
						placeholder='Логин (почта)'
						value={data.email}
						{...register('email', { required: true, validate: isEmail })}
						type='text'
						onChange={e => setData({ ...data, email: e.target.value })}
						error={Boolean(errors.email)}
					/>
					<StyledText>Место для указания результатов проверки ввода</StyledText>
				</div>
				<div style={{ position: 'relative' }}>
					<StyledInput
						placeholder='Пароль'
						value={data.password}
						{...register('password', { required: true, validate: isPass })}
						type='password'
						onChange={e => setData({ ...data, password: e.target.value })}
						error={Boolean(errors.password)}
					/>
					<StyledImg
						onClick={() => setData({ ...data, password: generatePassword(8) })}
						src='/src/assets/noun-magic-2704149 1.svg'
					/>
					<StyledText>Место для указания результатов проверки ввода</StyledText>
				</div>
			</StyledWrapper>
			<StyledButton>Зарегистрироваться</StyledButton>
		</StyledForm>
	)
}

export default Form
