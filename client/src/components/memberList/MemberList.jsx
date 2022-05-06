import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './memberList.scss';
import { setArgonautesData } from '../../features/argonaute/argonautesSlice';

const MemberList = () => {
  // selectArgonautes est récupéré dans store.ts
  const argonautes = useSelector((state) => state.argonautes.argonautes);
	// useDispatch déclenche l'action, la logique du reducer
	const dispatch = useDispatch();
	// use Effect = au lancement du composant, axios ira récupérer la data
	useEffect(() => {
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
