import React, { Component } from "react";

class ShopItem extends Component {
	render() {
		const { shopItem, handleAddItemToCart } = this.props;

		const { name, price } = shopItem;

		return (
			<div className="shop-item">
				<p>{name}</p>
				<p>Price: {price}</p>

				<button
					className="shop-item-button"
					onClick={() => handleAddItemToCart(shopItem)}
				>
					Add to cart
				</button>
			</div>
		);
	}
}

export default ShopItem;
