import styles from '../styles/operator/Operator.module.css'

export  function Operator(props){
	return(
		<div className ={styles.operator}>
			<img className={styles.operator__img} src={props.link} alt={props.name}/>
			<h2 className={styles.operator__name} >{props.name}</h2>
		</div>
	)
}

