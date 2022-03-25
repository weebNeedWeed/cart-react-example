import React, { Component } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";

class CartItem extends Component {
	handleClickDelete = () => {
		const { id } = this.props.cartItem;

		this.props.handleDeleteCartItem(id);
	};

	handleIncreaseQuantity = () => {
		const { id } = this.props.cartItem;

		this.props.handleChangeQuantity(id, 1);
	};

	handleDecreaseQuantity = () => {
		const { id } = this.props.cartItem;

		this.props.handleChangeQuantity(id, -1);
	};

	render() {
		const { cartItem } = this.props;

		const { name, quantity } = cartItem;

		return (
			<tr>
				<td>{name}</td>
				<td style={{ display: "flex", gap: "10px" }}>
					<button onClick={this.handleIncreaseQuantity}>
						<AiOutlinePlus />
					</button>
					<span>{quantity}</span>
					<button onClick={this.handleDecreaseQuantity}>
						<AiOutlineMinus />
					</button>

					<button onClick={this.handleClickDelete}>
						<AiOutlineDelete />
					</button>
				</td>
			</tr>
		);
	}
}

export default CartItem;
