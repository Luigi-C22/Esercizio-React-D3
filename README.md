# Esercizio REACT M5-D3
Riprende l'esercizo D2 con ulteriori implementazioni.

1. Crea un componente di nome SingleBook come classe. Questo componente riceverà un libro come prop, e renderizzerà la sua copertina e il suo titolo. Utilizza il componente Card di
   react-bootstrap
   (la struttura dell'oggetto del libro sara' quella dei libri dell'ultimo esercizio!)
2. Modifica il componente LatestRelease in modo che il .map() renderizzi non delle immagini isolate, ma una lista di componenti SingleBook
3. Crea un input controllato all'interno del componente LatestRelease;
   II componente deve utilizzare il valore di questo input come filtro e mostrare solamente i libr che contengono nel titolo il testo cercato.
   (Suggerimento: salva il contenuto del campo di testo nello stato del componente e utilizzalo insieme a filter, includes e .map)

EXTRA: Crea lo stato all'interno di SingleBook e inserisci una proprietà booleana di nome selected.
Cliccando sulla copertina di un libro, la proprieta' selecteoleve cambiare valore.
Se selected ha valore true, la copertina del libro deve aggiungere un bordo rosso.
