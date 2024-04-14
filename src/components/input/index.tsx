import { Dispatch } from 'react'
import { UseFormRegister } from 'react-hook-form'
import img from '../../assets/noun-magic-2704149 1.svg'
import { generatePassword } from '../../utils/passGen'
import { MyForm } from '../form'
import { StyledImg, StyledInput, StyledText } from './components'

interface InputType {
	placeholder: string
	data: { name: string; email: string; password: string }
	register: UseFormRegister<MyForm>
	error: boolean
	setData: Dispatch<{ name: string; email: string; password: string }>
	type: string
	text: string
	validate: (value: string) => boolean
	inputName: 'name' | 'email' | 'password'
}

const Input = ({
	placeholder,
	data,
	register,
	error,
	setData,
	type,
	text,
	validate,
	inputName,
}: InputType) => {
	return (
		<div style={{ position: 'relative' }}>
			<StyledInput
				placeholder={placeholder}
				value={data[inputName]}
				{...register(inputName, { required: true, validate: validate })}
				type={type}
				onChange={e => setData({ ...data, [inputName]: e.target.value })}
				error={error}
			/>
			{inputName === 'password' && (
				<StyledImg
					onClick={() => setData({ ...data, password: generatePassword(8) })}
					src={img}
				/>
			)}
			<StyledText>{text}</StyledText>
		</div>
	)
}

export default Input
