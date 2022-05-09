import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import MemberList from '../memberList/MemberList';
import { addArgonaute } from '../../features/argonaute/argonautesSlice';
import './main.scss';

const Main = () => {
  // setError est utilisé pour afficher le message d'erreur si un nom existe déjà
  const [error, setError] = useState(false);
  // setName est utilisé pour récupérer le nom dans le formulaire
  const [name, setName] = useState("");
  // useDispatch vient de la bibliothèque react-redux pour incrémenter le store
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleSubmit = async (e) => {
    // preventDefault permet de ne pas rafraichir la page après l'envoi du formulaire
    e.preventDefault();
    // La "data" envoyé dans la db contient name qui est récupéré du formulaire avec setName
    const data = {
      name
    };
    // Envoie de la data avec post en utilisant addArgonaute du Slice pour passer par redux
    try {
      // await axios.post('http://localhost:5000/argonautes', data)
      await axios.post('https://argonaute-challenge.herokuapp.com/argonautes', data)
      .then((res) => {
        dispatch(addArgonaute(res.data));
      })
    } catch {
      // Si le nom existe déjà dans la base de donné, un message d'erreur s'affichera
      setError(true);
    };
    // reset permet de remettre le formulaire vide après l'envoi de données
    formRef.current.reset();
  };

  const handleClick= () => {
    document.getElementById("errorDiv").style.display="none";
  }

  return (
    <div className='main'>
      <h2>Ajouter un(e) Argonaute</h2>
        <form id='form' className="main__form" onSubmit={handleSubmit} ref={formRef}>
          <div className="main__top-form">
            <label>Nom de l'Argonaute</label>
            <input data-testid="name" id="name" name="name" type="text" placeholder="Charalampos" onChange={(e) => setName(e.target.value)}/>
            <button type="submit">Envoyer</button>
          </div>
          <div id='errorDiv' data-testid="error" className='main__error' style={{visibility: error ? "visible" : "hidden"}}>
            <span>Ce nom existe déjà</span>
            <button onClick={handleClick}>Ok</button>
          </div>
        </form>
        <MemberList />
    </div>
  );
};

export default Main;
