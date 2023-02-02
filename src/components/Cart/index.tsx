import React from 'react';
import {toast} from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import ItemCart from '../ItemCart';
import {RootState} from '../../store';
import {closeCart} from '../../store/Stock.store';

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart);

	const cartClose = () => dispatch(closeCart());

	const getTotalValores = () => {
		if (cart.productsSelected.length > 0) {
			const totalArray = cart.productsSelected.map(obj => Number(obj.price) * Number(obj.quantity));
			const soma = totalArray.reduce((acc, curl) => acc + curl);
			return soma.toFixed(2);
		}

		return '0.00';
    };
    
    const checkout = () => {
        toast.success('Compra finalizada com sucesso!', {
			position: 'top-right',
			autoClose: 2500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
        })

        setTimeout(() => {
            cartClose()
        }, 2500)
    }

	return (
        <S.DisplayCart display={cart.cartOpen} >
			<S.Container>
				<S.Content>
					<S.Header>
						<h1>Carrinho de compras</h1>
						<button
							onClick={() => cartClose()}
						>
							&#x02A2F;
						</button>
					</S.Header>
					<S.List className='paddingLast'>
						{cart.productsSelected.map(({id, name, photo, quantity, price}, index) => (
							<ItemCart
								key={index}
								name={name}
								id={id}
								photo={photo}
								quantity={quantity}
								price={price}
							/>
						))}
					</S.List>
				</S.Content>
			</S.Container>
			<S.TotalPrice>
				<h1>Total:</h1>
				<h1>R${getTotalValores()}</h1>
			</S.TotalPrice>
            <S.Finality
                onClick={() => checkout()}
            >
				<h1>Finalizar Compra</h1>
			</S.Finality>
		</S.DisplayCart>
	);
};

export default Cart;
