
export default function CartItem ({item,value}) {
    const {id, title, img, price, total, count} = item;
    const {increment,decrement,removeItem} = value;
    return (
       
        <div className="row my-2 text-capitalize text-center mt-2">
            <hr />
           <div className="col-10 mx-auto col-lg-2">
              <img src={img} style={{width:"14rem" , height:"5rem",marginTop:"-17px"}}className="img-fluid" alt="product"/>
           </div>
           <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">product : </span>{title}
           </div>
           <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>{price}
           </div>
           <div className="col-10 mx-auto col-lg-2 my-2 my-lg-2-0">
             <div className="d-flex justify-content-center">
                 <div>
                    <span className="btn btn-dark mx-1" onClick={()=>decrement(id)}>-</span>
                    <span className="btn btn-secondary mx-1">{count}</span>
                    <span className="btn btn-dark mx-1" onClick={() => increment(id)}>+</span>
                 </div>
             </div> 
           </div>
            {/**/} 
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <button className="btn btn-dark">Remove</button>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total : $ {total}</strong>
            </div>
            <hr />
        </div>
    )
}
