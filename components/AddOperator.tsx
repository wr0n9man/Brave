import {useState} from 'react'
import React from 'react';
import {InfoTooltip} from './InfoTooltip';
import { useRouter } from 'next/router';
import style from '../styles/payOperator/PayOperator.module.css';


export  function AddOperator(){
   const router = useRouter()
	const [isInfoTooltip, setIsInfoTooltip]= useState<boolean>(false);
	const [result, setResult]= useState<boolean>(false);
	const [name , setName] = useState<string>('')
	const [link, setLink] = useState<string>('')

	function handleEditName(values){
		setName(values.target.value)
	}

	
	function handleEditLink(values){
		setLink(values.target.value)
	}

	function handleClosePopup(){
		setIsInfoTooltip(!isInfoTooltip)
		result&&router.push('/home')
	}

	function handleSubmit(e){
		
		e.preventDefault()
      fetch('https://brave-test.herokuapp.com/operator',{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: name,
				link: link,
				id: name
			})
		})
		.then(res => {
			if (res.ok) {
				setIsInfoTooltip(true)
				setResult(true)
				return res.json();
			}
			setResult(false)
			return Promise.reject(`Ошибка: ${res.status}`);
		})
	}
	
	return(
		<>
		<InfoTooltip open={isInfoTooltip} result={result} handleClosePopup={handleClosePopup}/>
		<form name={`payOperator__form`} className={style.payOperator__form} onSubmit={handleSubmit}>
			<span>Название оператора</span>
			<input type="string" required placeholder="Название оператора" className={style.payOperator__input} value={name} onChange={handleEditName}/>
			<span>Картинка оператора</span>
			<input type="link"  required placeholder="Ссылка на картинку" pattern="https?:\/\/(www.)?(\w*\W*)*" title="Вставьте ссылку на изображение" className={style.payOperator__input} value={link} onChange={handleEditLink} />
			<button type="submit" className={style.payOperator__button}>Создать</button>
		</form>
		</>
	)
}