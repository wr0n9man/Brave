import { NextPageContext } from 'next';
import {Main} from '../../components/Main';
import {PayOperator} from '../../components/PayOperator'
import { MyOperator } from '../../interfaces/operator';
import styles from '../../styles/operator/Operator.module.css'
export default function Operator({operator}){


	return(
		<Main>
			<img className={styles.operator__imgPay} src={operator.link} alt={operator.name}/>
			<PayOperator/>
		</Main>
	)
}

interface OperatorsNextPageContext extends NextPageContext{
	query:{
		id: string
	}
}
Operator.getInitialProps  = async ({query}:OperatorsNextPageContext) =>{
	const response = await fetch(`https://brave-test.herokuapp.com/operator/${query.id}`)
	const operator: MyOperator = await response.json()
	return{
		operator		
	}
}
