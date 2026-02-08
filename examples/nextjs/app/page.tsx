
'use client'
import { useState } from "react";

export default function MikeysMovieTheaterSupplies() {
  const [view, setView] = useState("home");
  const [cart, setCart] = useState<string[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  const timestamp = new Date().toLocaleString();

  const inventory = {
    popcorn: 128,
    drinks: 256,
    candy: 512,
    gummies: 342,
    pretzels: 221,
  };

  const addToCart = (item: string) => setCart((prev) => [...prev, item]);

  const handleLogoClick = () => {
    const clicks = logoClicks + 1;
    setLogoClicks(clicks);
    if (clicks >= 5) {
      setView("secret");
      setLogoClicks(0);
    }
  };

  const products = [
    { name: "Fresh Butter Popcorn 🍿", stock: inventory.popcorn },
    { name: "Fizzy Fountain Drinks 🥤", stock: inventory.drinks },
    { name: "Chocolate Candy Bars 🍫", stock: inventory.candy },
    { name: "Gummy Snacks 🍬", stock: inventory.gummies },
    { name: "Salty Pretzels 🧂", stock: inventory.pretzels },
  ];

  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
      <div style={{position:'fixed', right:20, top:20, border:'1px solid #ccc', padding:10, width:220}}>
        <h3>🛒 Cart</h3>
        {cart.length === 0 ? <p>Empty</p> :
          <ul>{cart.map((c,i)=><li key={i}>{c}</li>)}</ul>}
        <button onClick={()=>setView('checkout')}>Checkout</button>
      </div>

      <div style={{textAlign:'center'}} onClick={handleLogoClick}>
        <div style={{fontSize:50}}>🍿🎞️</div>
        <h1>Mikey's Movie Theater Supplies</h1>
        <p>System Time: {timestamp}</p>
        <p>🎟️ For Theater Owners Only</p>
      </div>

      <nav style={{textAlign:'center', margin:20}}>
        {["home","products","reviews","orderform","tracker","login","contact"].map(v=>
          <button key={v} onClick={()=>setView(v)} style={{margin:5}}>{v}</button>
        )}
      </nav>

      {view==="home" && <p style={{textAlign:'center'}}>Welcome, Theater Owner!</p>}

      {view==="products" &&
        <div>
          {products.map(p=>
            <div key={p.name} style={{margin:10, border:'1px solid #ddd', padding:10}}>
              {p.name} — In stock: {p.stock}
              <button onClick={()=>addToCart(p.name)} style={{marginLeft:10}}>Order Now</button>
            </div>
          )}
        </div>
      }

      {view==="checkout" &&
        <div style={{textAlign:'center'}}>
          <h2>Order #{orderNumber}</h2>
          <button onClick={()=>alert("Invisible truck dispatched!")}>Place Order</button>
        </div>
      }

      {view==="reviews" && <p>⭐⭐⭐⭐⭐ Best pretend supplier ever!</p>}

      {view==="orderform" &&
        <div>
          <p>Order Form #{orderNumber}</p>
          <button onClick={()=>window.print()}>Print</button>
        </div>
      }

      {view==="tracker" &&
        <p>🚚 Truck crossing Candy Cane Bridge. Arrival in 7 pretend minutes.</p>
      }

      {view==="login" &&
        <div>
          {!loggedIn ?
            <button onClick={()=>setLoggedIn(true)}>Login as Snack Manager</button>
            :
            <p>✅ Logged in. Popcorn inventory: {inventory.popcorn}</p>
          }
        </div>
      }

      {view==="contact" &&
        <p>📞 555‑MikeyMovie</p>
      }

      {view==="secret" &&
        <div style={{textAlign:'center', marginTop:40}}>
          <h2>🎉 SECRET OWNER PANEL 🎉</h2>
          <button onClick={()=>setView('home')}>Return</button>
        </div>
      }
    </div>
  );
}

