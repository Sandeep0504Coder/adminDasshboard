import { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { OrderItemType, OrderType } from '../../types'
import { Link } from 'react-router-dom';

const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvP-SlcSH3njZfK2K7VGUebWblS4W-eJ4Aw&s"

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    price: 2000,
    _id: 'sgsgsss',
    quantity: 4
  },
];
const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Sandeep Mandal",
    address: "77 Black Street",
    city: "NeyWord",
    state: "West Bengal",
    country: "India",
    pinCode: 743504,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id:"stggsgererr",
  })

  const {name, address, city, country, state, pinCode, subtotal, shippingCharges, tax, discount, total, status} = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status:  prev.status === 'Processing'? 'Shipped' : 'Delivered'
    }));
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar/>
      {/* Main */}
      <main className="product-management">
        <section style={{
          padding:"2rem"
        }}>
          <h2>Order Items</h2>
          {order.orderItems.map((item)=>(
            <ProductCard name={item.name} photo={item.photo} price={item.price} quantity={item.quantity} _id={item._id}/>
          ))}
        </section>
        <article className='shipping-info-card'>
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}</p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>
          <h5>Status Info</h5>
          <p>
            Status:
            <span className={status === 'Delivered' ? "purple" : status === 'Shipped' ? 'green' : 'red'}> {status}</span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  )
}

const ProductCard = ({name, photo, price, quantity, _id}: OrderItemType) =>(
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>${price} x {quantity} = ${price*quantity}</span>
  </div>
)

export default TransactionManagement