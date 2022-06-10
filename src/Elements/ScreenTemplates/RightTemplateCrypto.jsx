const showData = (data) => (
  <>
    {data.map((item, index) => (
      <div className='itemContainer' id="item2" key={index + 1} style={{ backgroundImage: 
        `url(${item.image})`
      }}>
        <div className='overlay'>
          <div className='itemDataContainer'>
            <img src={item.image} alt='logo' />
            <div className='item-name-container'>
              <h3>{item.name}</h3>
            </div>
            <h2>Market Cap Value is...</h2>
            {/* <h2 style={{ color:"var(--magenta)" }}>{item.market_cap_rank}</h2> */}
          </div>
        </div>
      </div>
    ))}
  </>
);

export const RightTemplateCrypto = (data) => <>{showData(data)}</>;
