import { useNavigate } from "react-router-dom"


const CardProduct = ({ product }) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
   navigate(`/product/${product.id}`)
  }

  const handleAddCart = e => { e.stopPropagation()
  }

  return (
    <article onClick={handleNavigate}>
        <header>
            <img src={product.images[0].url} alt="" />
        </header>
        <section>
        <h4>{product.brand}</h4>
        <h3>{product.title}</h3>
        <article>
            <h3>Price</h3>
            <span>{product.price}</span>
        </article>
        <button onClick={handleAddCart}>
        <i className='bx bxs-cart-add' ></i>
        </button>
        </section>
    </article>
  )
}

export default CardProduct