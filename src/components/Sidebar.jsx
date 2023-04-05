import React from 'react'

function Sidebar() {
  return (
    <div className='Sidebar'>


      <div className="logodiv">
        <img src="data:image/png;base64,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" alt="" />
        <h1>Planti.</h1>
      </div>

      <div className="sidebartopdiv">
        <h2>QUICK MENU</h2>

        <div className="menudivs">
          <span class="material-symbols-outlined">
            space_dashboard
          </span>
          <p>Dashboard</p>
        </div>

        <div className="menudivs"><span class="material-symbols-outlined">
          draft_orders
        </span>
          <p>My Orders</p>
        </div>

        <div className="menudivs"><span class="material-symbols-outlined">
          explore
        </span>
          <p>Explore</p>
        </div>

        <div className="menudivs"><span class="material-symbols-outlined">
          inventory_2
        </span>
          <p>Products</p>
        </div>
      </div>

      <div className="sidebarmiddiv">
        <h2>SETTINGS</h2>
        <div className="menudivs"><span class="material-symbols-outlined">
          monitoring
        </span>
          <p>Charts</p>
        </div>

        <div className="menudivs"><span class="material-symbols-outlined">
          trending_up
        </span>
          <p>Trends</p>
        </div>

        <div className="menudivs"><span class="material-symbols-outlined">
          contact_mail
        </span>
          <p>Contact</p>
        </div>

        <div className="menudivs"><span class="material-symbols-outlined">
          payments
        </span>
          <p>Billing</p>
        </div>
      </div>

      <div className="sidebarbottomdiv">
        <h3>Help Center</h3>
        <p>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus?
        </p>
        <button>Go to help center</button>
      </div>

    </div>
  )
}

export default Sidebar