import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './memberList.scss';
import { setArgonautesData } from '../../features/argonaute/argonautesSlice';

const MemberList = () => {
  // useSelector permet de récupérer la data dans le store
  const argonautes = useSelector((state) => state.argonautes.argonautes);
	// useDispatch vient de la bibliothèque react-redux pour incrémenter le store
	const dispatch = useDispatch();
	// Au lancement du composant, axios ira récupérer la data grâce à useEffect
	useEffect(() => {
    // La data est récupéré avec get et setArgonautesData de Redux
    axios.get('http://localhost:5000/argonautes')
    .then((res) => dispatch(setArgonautesData(res.data)));
  }, [dispatch]);

	return (
		<div className="memberList">
			<h2>Membres de l'équipage</h2>
			<section className="memberList__list">
				{argonautes?.map(argonaute => (
					<div className="memberList__item">{argonaute.name}</div>
				))}
			</section>
		</div>
	);
};

export default MemberList;
