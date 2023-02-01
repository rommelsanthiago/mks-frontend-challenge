import React, { useState } from 'react';
import Image from 'next/image';
import {toast} from 'react-toastify';
import { ShoppingBag } from 'react-feather';
import {useDispatch, useSelector} from 'react-redux';

import * as S from './styles';
import {RootState} from '../../store';
import CardInterface from '../../interface/card.interface';
import {addToCart, keepAdding} from '../../store/Stock.store';
import ProductInterface from '../../interface/product.interface';

const Card = ({ id, photo, price, name, description }: CardInterface) => {
    const [showButton, setShowButton] = useState(false);
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart);

	const onClick = () => {
		toast.success('Produto adicionado com sucesso!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		const allProducts: ProductInterface[] = cart.products;
		const allProductsSelected: ProductInterface[] = cart.productsSelected;
		const filterProduct = allProducts.find(item => item.id === id);
		if (!filterProduct) {
			return [];
		}

		const product = {...filterProduct, quantity: 1};

		const verifyIfExist = allProductsSelected.find(item => item.id === filterProduct.id);
		if (!verifyIfExist) {
			return dispatch(addToCart(product));
		}

		const productExtra = allProductsSelected.map(item => {
			if (item.id === verifyIfExist.id) {
				const increment =	{...verifyIfExist, quantity: Number(verifyIfExist.quantity) + 1};
				return increment;
			}

			return item;
		});
		return dispatch(keepAdding(productExtra));
	};

	return (
        <S.Container>
            <S.Card 
                onMouseOver={() => setShowButton(true)}
                onMouseOut={() => setShowButton(false)}
                className="reveal"
            >     
                <Image
                    src={photo}
                    alt={`imagem do produto: ${name}`}
                    data-testid='img-card'
                    width={140}
                    height={140}
                />
                <S.Text>
                    <div>
                        <h1 data-testid='name-card'>{name}</h1>
                        <span data-testid='price-card'>R${price}</span>
                    </div>
                    <p data-testid='description-card'>{description}</p>
                </S.Text>
                <S.ButtonCard
                    onClick={onClick}
                    data-testid={`button-card-${id}`}
                >
                    <ShoppingBag color="#fff" size={26} />
                    <span>Comprar</span>
                </S.ButtonCard>
            </S.Card>
        </S.Container>
	);
};

export default Card;
