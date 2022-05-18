import CartItem from "../components/CartItem";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  return (
    <>
      <Heading>
        <h1>
          Shopping Cart
          <span>({cartItems.length})</span>
        </h1>
      </Heading>

      {checkout && (
        <CheckoutMsg>
          <h4>Thank you for your purchase!</h4>
          <p>
            Your order has been placed and will be delivered to you within 24
            hours.
          </p>
          <Link to="/">
            <button onClick={clearCart}>Continue Shopping</button>
          </Link>
        </CheckoutMsg>
      )}

      <Layout>
        <div>
          {
            <CartItemWrapper>
              {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}
              {cartItems.length === 0 ? (
                <h4 style={{}}>Cart is empty</h4>
              ) : (
                <ul>
                  {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </ul>
              )}
            </CartItemWrapper>
          }
        </div>

        <div>
          {/* Checkout component  */}
          {cartItems.length > 0 && <Checkout />}
        </div>
      </Layout>
    </>
  );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: auto;
  width: 85%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    &:nth-child(2) {
      margin-top: 3rem;
    }
  }
`;

const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const CheckoutMsg = styled.div`
  color: green;
  text-align: center;
  padding: 1.5rem;
`;
export default CartPage;
