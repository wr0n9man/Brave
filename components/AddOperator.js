import {useState} from 'react'
import React from 'react';
import {InfoTooltip} from './InfoTooltip';
import style from '../styles/payOperator/PayOperator.module.css';


export  function AddOperator(){
	const [isInfoTooltip, setIsInfoTooltip]= useState(false);
	const [result, setResult]= useState(false);
	const [name , setName] = useState('')
	const [link, setLink] = useState('')

	function handleEditName(values){
		setName(values.target.value)
	}

	
	function handleEditLink(values){
		setLink(values.target.value)
	}

	function handleClosePopup(){
		setIsInfoTooltip(!isInfoTooltip)
		result&&router.push('/main')
	}

	function handleSubmit(e){
		
		e.preventDefault()
		fetch('http://localhost:4000/operator',{
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
			<input type="string" minLength="2" maxLength="15" required placeholder="Название оператора" className={style.payOperator__input} value={name} onChange={handleEditName}/>
			<span>Картинка оператора</span>
			<input type="link"  required placeholder="Ссылка на картинку" pattern="https?:\/\/(www.)?(\w*\W*)*" title="Вставьте ссылку на изображение" className={style.payOperator__input} value={link} onChange={handleEditLink} />
			<button type="submit" className={style.payOperator__button}>Создать</button>
		</form>
		</>
	)
}