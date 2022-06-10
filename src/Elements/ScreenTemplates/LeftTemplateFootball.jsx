const showData = (data) => (
  <>
    {data.map((item, index) => (
      <div
        className='itemContainer'
        id='item1'
        key={index + 1}
        style={{
          backgroundImage: `url(${item.team.logo})`,
        }}
      >
        <div className='overlay'>
          <div className='itemDataContainer'>
            <h2>Premier League 2020/2021</h2>
            <img src={item.team.logo} alt='logo' />
            <div className='item-name-container'>
              <h3>{item.team.name}</h3>
            </div>
            <h2>was on on the position</h2>
            <h2 style={{ color: "var(--magenta)" }}>{item.rank}</h2>
            <h2>in the league</h2>
          </div>
        </div>
      </div>
    ))}
  </>
);

export const LeftTemplateFootball = (data) => (
  <>{showData(data)}</>
);



