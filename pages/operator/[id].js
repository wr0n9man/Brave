import {Main} from '../../components/Main';
import {PayOperator} from '../../components/PayOperator'
import styles from '../../styles/operator/Operator.module.css'
export default function Operator({operator}){

	return(
		<Main>
			<img className={styles.operator__imgPay} src={operator.link} alt={operator.name}/>
			<PayOperator/>
		</Main>
	)
}

Operator.getInitialProps  = async (ctx) =>{
	const response = await fetch(`http://localhost:4000/operator/${ctx.query.id}`)
	const operator = await response.json()
	return{
		operator		
	}
}
