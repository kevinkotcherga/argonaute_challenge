import axios from 'axios';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import MemberList from '../memberList/MemberList';
import { addArgonaute } from '../../features/argonaute/argonautesSlice';
import './main.scss';

const Main = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name
    };
    console.log(data);
    axios.post('http://localhost:5000/argonautes', data).then((res) => {
			dispatch(addArgonaute(res.data));
		});
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
