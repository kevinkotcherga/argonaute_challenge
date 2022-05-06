import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectArgonautes, setArgonautesData } from '../../store';
import './memberList.scss'
import store, {
	selectArgonautes,
	setArgonautesData
} from '../../store';

const MemberList = () => {
  // selectArgonautes est récupéré dans store.ts
  const argonautes = useSelector(selectArgonautes);
	// useDispatch déclenche l'action, la logique du reducer
	const dispatch = useDispatch();
	// use Effect = au lancement du composant, axios ira récupérer la data
	useEffect(() => {
    axios.get('http://localhost:5000/argonautes')
    .then((res) => dispatch(setArgonautesData(res.data)));
  }, []);

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
}

export default MemberList