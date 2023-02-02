import React from 'react';
import Image from 'next/image';
import {toast} from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './styles';
import {RootState} from '../../store';
import ItemCartInterface from '../../interface/itemCart.interface';
import ProductInterface from '../../interface/product.interface';
import {keepAdding, removeFromCart} from '../../store/Stock.store';

const ItemCart = ({id, name, photo, quantity, price}: ItemCartInterface) => {
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart);

	const addItem = () => {
		const allProductsSelected: ProductInterface[] = cart.productsSelected;
		const addExtra = allProductsSelected.map(obj => {
			if (obj.id === id) {
				const increment =	{...obj, quantity: Number(obj.quantity) + 1};
				return increment;
			}

			return obj;
		});
		return dispatch(keepAdding(addExtra));
	};

    const removeItem = () => {
		const allProductsSelected: ProductInterface[] = cart.productsSelected;
		const addExtra = allProductsSelected.map(obj => {
			if (obj.id === id && Number(obj.quantity) > 0) {
				const decrement =	{...obj, quantity: Number(obj.quantity) - 1};
				return decrement;
			}

			return obj;
		});
		return dispatch(removeFromCart(addExtra));
	};

    const removeItemCart = () => {
        toast.warn('Produto removido com sucesso!', {
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		const allProductsSelected: ProductInterface[] = cart.productsSelected;
		const addExtra = allProductsSelected.filter(obj => obj.id !== id);
		return dispatch(removeFromCart(addExtra));
	};

	return (
		<S.Container>
			<Image src={photo!} alt={name!} height={57} width={57} />
			<h1>{name}</h1>
			<S.ContainerQuantity>
				<S.Quantity>
					<span>Qtd:</span>
					<div>
						<button onClick={removeItem}>-</button>
						<span>{quantity}</span>
						<button onClick={addItem}>+</button>
					</div>
				</S.Quantity>
				<S.Price>R${price}</S.Price>
			</S.ContainerQuantity>
			<S.Button onClick={removeItemCart}>&#x02A2F;</S.Button>
		</S.Container>
	);
};

export default ItemCart;
