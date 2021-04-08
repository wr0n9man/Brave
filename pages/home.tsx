
import styled from 'styled-components';
import Link from 'next/link'
import {Main} from '../components/Main';
import {Operator} from '../components/Operator';
import {MyOperator} from '../interfaces/operator'
import { NextPageContext } from 'next';

interface OperatorProps{
   operators: MyOperator[]
}

const MainContainer = styled.div`
	display:	grid; 
	max-width: 40%;
	gap: 10px;
   max-height: 80%;
	grid-template-columns: repeat(2,1.6fr); 
	grid-template-rows: repeat(3,0.5fr); 
	grid-auto-rows:  0.8fr ;
	grid-auto-columns: 1.6fr;

@media (max-width: 1023px) {
   background-color: white;    
	max-width: calc(80% + 20px);  
   max-height: 80%; 
   padding: 20px;
   border-radius: 15px;
	
}

@media (max-width: 767px) {
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   max-height: 95%;
   max-width: 100%;
   padding: 0;
   width: 100%;
   margin-bottom: 35px;}

`;

export default function Home({operators:operator}:OperatorProps) {

  return (
    <Main>    
      <MainContainer >
      {     
         operator.map((operator)=>(         
            <Link href={`/operator/${operator.id}`} key={operator.id}>
               <a>
                  <Operator name={operator.name} link={operator.link} />
               </a>
            </Link>
         ))
      }
      </MainContainer>    
    </Main>
  )
}

Home.getInitialProps  = async ({req}: NextPageContext) =>{
  
	const response = await fetch('https://brave-test.herokuapp.com/operator')
	const operators:MyOperator[] = await response.json()
	return{
		operators		
	}
}
