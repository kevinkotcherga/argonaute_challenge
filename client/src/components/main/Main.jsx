import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import MemberList from '../memberList/MemberList';
import { addArgonaute } from '../../features/argonaute/argonautesSlice';
import './main.scss';

const Main = () => {
  // useState est utilisé pour récupérer le nom dans le formulaire
  const [name, setName] = useState("");
  // useDispatch vient de la bibliothèque react-redux pour incrémenter le store
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleSubmit = (e) => {
    // preventDefault permet de ne pas rafraichir la page après l'envoi du formulaire
    e.preventDefault();
    // La "data" envoyé dans la db contient name qui est récupéré du formulaire avec setName
    const data = {
      name
    };
    // Envoie de la data avec post en utilisant addArgonaute du Slice pour passer par redux
    axios.post('http://localhost:5000/argonautes', data).then((res) => {
			dispatch(addArgonaute(res.data));
		});
    // reset permet de remettre le formulaire vide après l'envoi de données
    formRef.current.reset();
  };

  return (
    <div className='main'>
      <h2>Ajouter un(e) Argonaute</h2>
        <form className="main__form" onSubmit={handleSubmit} ref={formRef}>
          <label>Nom de l'Argonaute</label>
          <input id="name" name="name" type="text" placeholder="Charalampos" onChange={(e) => setName(e.target.value)}/>
          <button type="submit">Envoyer</button>
        </form>
        <MemberList />
    </div>
  );
};

export default Main;
