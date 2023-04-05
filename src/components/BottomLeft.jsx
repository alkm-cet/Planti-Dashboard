import React from 'react'

function BottomLeft() {

  const handlelike = (e) => {
    e.target.classList.toggle("liked");
  }

  return (
    <div className='BottomLeft'>

      <div className="bottomlefttop">
        <h2>My Listings</h2>

        <div>
          See All
          <span class="material-symbols-outlined">
            arrow_forward
          </span>
        </div>
      </div>

      <div className="bottomleftmid">

        <div className="card">
          <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/37514068/3106723992.jpg" alt="" />
          <h4>Annual Vince</h4>
          <span onClick={handlelike} class="material-symbols-outlined">
            favorite
          </span>
        </div>

        <div className="card">
          <img src="https://media.bouclair.com/image/upload/w_auto,q_auto,dpr_auto/products/images/highres/9399308" alt="" />
          <h4>Coffee Plant</h4>
          <span onClick={handlelike} class="material-symbols-outlined">
            favorite
          </span>
        </div>

        <div className="card">
          <img src="https://media.prod.bunnings.com.au/api/public/content/3086d1d2baa744f1a7e7fef587f23400?v=73182405&t=w500dpr1" alt="" />
          <h4>Button Fern</h4>
          <span onClick={handlelike} class="material-symbols-outlined">
            favorite
          </span>
        </div>

        <div className="card">
          <img src="http://sc04.alicdn.com/kf/Heab4f398a462406e91d4afd3e23eb1e7W.png" alt="" />
          <h4>Spider Plant</h4>
          <span onClick={handlelike} class="material-symbols-outlined">
            favorite
          </span>
        </div>

      </div>


      <div className="bottomleftbottom">

        <div className="topsellerscontainer">

          <div className="topsellerstop">
            <h3>Top Sellers</h3>

            <div style={{cursor:'pointer'}}>
              See All
              <span class="material-symbols-outlined" >
                arrow_forward
              </span>
            </div>
          </div>

          <div className="topsellersbottom">
            <div className="right">
              <img src="https://picsum.photos/200" alt="" />
              <img src="https://picsum.photos/300" alt="" />
              <img src="https://picsum.photos/400" alt="" />
              <img src="https://picsum.photos/500" alt="" />
            </div>
            <hr />
            <div className="left">
              <p>14.556 Plant Sold</p>
              <div>
                <p>21 Sellers</p>
                <p>7 Days</p>
              </div>
            </div>
          </div>

        </div>


        <div className="featuredsellerscontainer">

          <div className="topsellerstop">
            <h3>Featured Sellers</h3>

            <div style={{cursor:'pointer'}}>
              See All
              <span class="material-symbols-outlined" >
                arrow_forward
              </span>
            </div>
          </div>

          <div className="topsellersbottom">
            <div className="right">
              <img src="https://picsum.photos/200" alt="" />
              <img src="https://picsum.photos/300" alt="" />
              <img src="https://picsum.photos/400" alt="" />
              <img src="https://picsum.photos/500" alt="" />
            </div>
            <hr />
            <div className="left">
              <p>28.556 Plant Sold</p>
              <div>
                <p>26 Sellers</p>
                <p>30 Days</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div >
  )
}

export default BottomLeft