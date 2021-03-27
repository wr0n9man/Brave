import {useRouter} from 'next/router'


import styles from '../styles/main/Main.module.css'
import Link from 'next/link'
import Head from 'next/head'

export  function Main({children}){
	const router = useRouter()

	return(
		
		<div className={styles.main} >
			<Head>
				<title>Пополнение баланса</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main__container} >
				<h1 className={styles.main__title}>
					{router.route!=="/add"?`Пополнение баланса ${router.query.id==undefined?'':router.query.id}`:`Добавление оператора`}
				</h1>	
				{children}	
				<div className={styles.main__slider}>
					<Link href={'/home'}>
						<a className={router.route=="/home"? styles.main__sliderElement_active :styles.main__sliderElement}/> 
						
					
					</Link>
					<Link href={'/add'}>
						<a className={router.route=="/add"? styles.main__sliderElement_active  :styles.main__sliderElement}/>
					</Link>					
					<Link href={'/operator/Megafon'}>
						<a className={router.query.id!==undefined?styles.main__sliderElement_active  :styles.main__sliderElement}/>
					</Link>
				</div>
				<Link  href={`/add`}>
					<a className={styles.main__add}>
						<img className={styles.main__addImg} src='/plus.svg' alt="добавить"/>
					</a>
				</Link>
			</main>
		</div>
		
	)
}

