import {useState} from 'react';
import styles from '../styles/InfoTooltip/InfoTooltip.module.css';

export  function InfoTooltip(props) {		

	
	return(
		<>		
		<section className={props.open?styles.popupActive:styles.popup} >
			<input className={styles.popup__overlay} onClick={props.handleClosePopup} />
			<div className={styles.popup__container} >
				<button type="button" className={styles.popup__closeImage} onClick={props.handleClosePopup}> </button>
				{props.result?<>
				<img className={styles.popup__imageResult} src='/succes.png' alt="success"/>
				<h3 className={styles.popup__txt}>Операция прошла успешно!</h3>
				</>:
				<>
				<img className={styles.popup__imageResult} src='/fail.png' alt="fail"/>
				<h3 className={styles.popup__txt}>Что-то пошло не так! Попробуйте еще раз.</h3>
				</>}	
			</div>
		</section>
		</>
	)
	
}
