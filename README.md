## Тестовое задание
https://test-puce-psi.vercel.app/home


навигация справа

function​ func(s​​, ​a​, ​b)​ { 
 
	​if​ (​s.match(​​/​^$/​​)) { 
		r​eturn​ -​​1​; 
	} 
		
	v​ar​ i ​=​ s.​length ​​-​1;​ 
	​var ​aIndex ​=​ ​-1​​; 
	​var​ bIndex ​=​ ​-1​​; 
		
	w​hile ​((aIndex ​==​ ​-1​​) ​&&​ (bIndex =​=​ ​-1​​) ​&&​ (i ​> ​​0​)) { 
	​	if​ (​s.substr(​i, 1) =​=​ a) { 
			aIndex ​= ​i; 
		} 
		i​f ​(s​.substr(​i, ​1​) =​=​ b) { 
			bIndex ​=​ i; 
		} 
		i--; 
	} 

	return ((aIndex ​!=​ -​​1​)&& (bIndex ==-1? aIndex: ​​Math.​max(​aIndex, bIndex)));  
	return ​bIndex ​	;
	} 
} 