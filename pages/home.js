import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Main} from '../components/Main';
import {Operator} from '../components/Operator';

export default function Home({operators}) {
  return (
    <Main>    
      <div className={styles.home__grid}>
      {        
         operators.map((operator)=>(         
            <Link href={`/operator/${operator.id}`} key={operator.id}>
               <a>
                  <Operator name={operator.name} link={operator.link} />
               </a>
            </Link>
         ))
      }
      </div>    
    </Main>
  )
}

Home.getInitialProps  = async () =>{
	const response = await fetch('https://brave-test.herokuapp.com/operator')
	const operators = await response.json()
	return{
		operators		
	}
}
