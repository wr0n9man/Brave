import {useState} from 'react'
import React from 'react';
import InputMask from 'react-input-mask';
import {InfoTooltip} from './InfoTooltip';
import { useRouter } from 'next/router';
import style from '../styles/payOperator/PayOperator.module.css';


export  function PayOperator(){
	const router = useRouter()
	const [isInfoTooltip, setIsInfoTooltip]= useState<boolean>(false);
	const [result, setResult]= useState<boolean>(false);
	const [num , setNum] = useState<string>('')
	const [value , setValue] = useState<number>(0)

	function handleEditNumber(values){
		setNum(values.target.value)
	}

	function handleClosePopup(){
		setIsInfoTooltip(!isInfoTooltip)
		result&&router.push('/home')
	}

	function handleEditValue(values){
		setValue(values.target.value)
	}

	function handleSubmit(e){
		e.preventDefault()		
		if (Math.floor(Math.random() * (100 - 0))>=50){
			setIsInfoTooltip(true)
			setResult(true)
		}else{
			setIsInfoTooltip(true)
			setResult(false)
		}
   
	}

	return(
		<>
		<InfoTooltip open={isInfoTooltip} result={result} handleClosePopup={handleClosePopup}/>
		<form name={`payOperator__form`} className={style.payOperator__form} onSubmit={handleSubmit}>
			<span>Номер телефона</span>
            <InputMask mask="8(999)999-99-99" maskChar="_" type="tel" name="tel" value={num} pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}" onChange={handleEditNumber} required placeholder="8(999)999-99-99" className={style.payOperator__input} />
			<span>Сумма пополнения</span>
			<input type="number" min="1" max="1000" required placeholder="Сумма пополнения" className={style.payOperator__input} value={value} onChange={handleEditValue}/>
			<button type="submit" className={style.payOperator__button}>Оплатить</button>
		</form>
		</>
	)
}