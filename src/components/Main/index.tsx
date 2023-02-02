import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../Card';
import * as S from './styles';
import {RootState} from '../../store';
import {asyncGetProducts} from '../../store/Stock.store';

const List = () => {
	const dispatch = useDispatch();
	const carrinho = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		const getProduct = () => dispatch(asyncGetProducts());
		getProduct();
	}, [dispatch]);

	return (
		<S.Container>
			{carrinho.products.map(({id, photo, name, price, description}, index) => (
				<Card
					key={id}
					id={id}
					photo={photo}
					name={name}
					price={price}
					description={description}
				/>
			))}
		</S.Container>
	);
};

export default List;
