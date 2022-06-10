const showData = (data) => (
  <>
    {data.map((item, index) => (
      <div
        className='itemContainer'
        id='item2'
        key={index + 1}
        style={{
          backgroundImage: `url(${item.team.logo})`,
        }}
      >
        <div className='overlay'>
          <div className='itemDataContainer'>
            <img src={item.team.logo} alt='logo' />
            <div className='item-name-container'>
              <h3>{item.team.name}</h3>
            </div>
            <h2>was in the league</h2>
          </div>
        </div>
      </div>
    ))}
  </>
);

export const RightTemplateFootball = (data) => (
  <>{showData(data)}</>
);


