import { useState } from 'react'
import BookCard from './components/BookCard';


function App(){
  const [livres, setLivres] = useState([
    {id: 1, titre: "Une si longue lettre", auteur: "Mariama Ba", estDisponible: true},
    {id: 2, titre: "L'Aventure ambigue", auteur:"Chaikh Hamidou Kane", estDisponible: false},
    {id: 3, titre: "Le Ventre de l'Atlantique", auteur: "Fatou Diome", estDisponible: true},
    {id: 4, titre: "Les Bouts de bois de Dieu", auteur: "Ousmane Sembène", estDisponible: false},
    {id: 5, titre: "Xala", auteur: "Ousmane Sembène", estDisponible: true}
  ]);

  const changerStatut = (idLivre) => {
    const nouveauxLivres = livres.map((l) => {
      if (l.id === idLivre){
        return { ...l, estDisponible: !l.estDisponible};
      }
      return l;
    });
  setLivres(nouveauxLivres);
  };

return(
  <div style={{ padding: "10px"}}>
    <h2>Catalogue de la bibliothèque</h2>
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap"}}>
      {livres.map((l) => (
        <BookCard
        key={l.id}
        titre={l.titre}
        auteur={l.auteur}
        estDisponible={l.estDisponible}
        onClickEmprunt={() => changerStatut(l.id)}
        />

      ))}
    </div>
  </div>
);
};

export default App;
 