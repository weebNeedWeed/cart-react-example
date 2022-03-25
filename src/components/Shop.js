import React, { Component } from "react";
import ShopItem from "./ShopItem";

class Shop extends Component {
	render() {
		const { shopItems, handleAddItemToCart } = this.props;

		return (
			<div>
				<h1 className="h1">shop</h1>

				<div className="shop-item-list">
					{shopItems.map((elm) => (
						<ShopItem
							key={elm.id}
							shopItem={elm}
							handleAddItemToCart={handleAddItemToCart}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Shop;
