const inputs = document.querySelectorAll('.controls input'); //1.
//NodeLists and Arrays to dwie różne rzeczy, ponieważ 
//NodeLists w rzeczywistości nie są JavaScript API, ale API przeglądarki.
//Rzeczy takie jak querySelectorAll () i 1getElementsByTagName () `
//nie są metodami JavaScript, są interfejsami API przeglądarki, które umożliwiają 
//dostęp do elementów DOM. Następnie możesz manipulować nimi za pomocą JavaScript.
//NodeLists różnią się także od Arrays w inny znaczący sposób.
//Często są to (ale nie zawsze) listy na żywo, co oznacza, że ​​jeśli elementy zostaną 
//usunięte lub dodane do DOM, lista aktualizuje się automatycznie. querySelector () 
//i querySelectorAll () zwracają statyczną listę (która nie aktualizuje się), 
//Kluczowy sposób myślenia o NodeLists vs. Arrays: NodeLists są agnostycznym sposobem 
//na dostęp do elementów DOM, a tablice są obiektem JavaScript, który można wykorzystać do 
//przechowywania kolekcji rzeczy. Każda z nich ma swoje własne metody i właściwości, 
//i możesz przekonwertować NodeList na Array, jeśli musisz (ale nie na odwrót).
function handleUpdate() { //2.
	// console.log(this.value);//2.
	const suffix = this.dataset.sizing || ''; //6. albo rozmiar albo nic, bo pierwszych dwóch 
	//elementach input jest sizing ale w trzecim jest color. Zostawiając same sizing przy tzecim 
	//wyskoczy undefined stąd tworzy założenie lub nic bo nie ma przedrostka dla hex code
	// console.log(this.dataset); //5. sprawdzenie objektu dataset
	//dataset jest obiektem, która zawiera wszystkie 
	//atrybuty danych określonego elementu. Obiekt jets powiązany z elementami input w HTML
	//za pomocą atrybutów data-sizing i value i css --base, --spacing, -- blur
	//każdy atrybut w pisany w elemencie HTML zostanie wydrukowany w consoli te atrybuty jako elementy objektu
	// console.log(suffix); //7.
	// console.log(this.name); //8.
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //9. UZYWAĆ ZNAKU GRAVISA --spacing

}	

inputs.forEach(input => input.addEventListener('change', handleUpdate)); //3.
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //4.