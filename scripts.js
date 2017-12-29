function getTriangleArea (a, h) {
	if ((a > 0) & (h > 0)) {
		return ((a * h) / 2);
	} else {
		return 'Nieprawidłowe dane';
	}	
};

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 3);
var triangle3Area = getTriangleArea(15, 4);

console.log(triangle1Area, triangle2Area, triangle3Area);



// Stwórz funkcję, która przyjmuje dwa parametry i nazwij ją getTriangleArea - function getTriangleArea(a, h) {}.
// Za pomocą instrukcji warunkowej sprawdź, czy przekazane parametry a oraz h mają wartość większą od zera. Jeśli któryś z parametrów nie spełni tego warunku (będzie mniejszy bądź równy zero), zwróć wartość 'Nieprawidłowe dane'.
// Jeśli oba parametry są dodatnie, to poniżej instrukcji warunkowej dodaj polecenie return, aby funkcja zwracała wynik działania a*h/2.
// Poniżej deklaracji funkcji wywołaj następujące polecanie: console.log(getTriangleArea(10, 6)). Jeśli wszystko zrobiłeś prawidłowo, w konsoli powinien pojawić się wynik działania.
// Zrób trzy zmienne, które będą przechowywały pole trójkąta, za każdym razem przekazując różne liczby w parametrze. Podpowiedź: var triangle1Area = getTriangleArea(10, 15);
// Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej. Pamiętaj o udostępnieniu repozytorium swojemu mentorowi.