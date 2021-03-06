const showData = (data) => {
  {
    data.map((car) => (
      <div className='pack-term'>
        <div
          className='pack-term__wrapper'
          style={{
            backgroundImage: `url(${car.img})`,
          }}
        >
          <div className='overlay'>
            <div className='itemDataContainer' key={car.id}>
              <img src={car.logo} alt='logo' />
              <div className='car-name-container'>
                <h3>{car.model}</h3>
              </div>
              <h4>{car.year}</h4>
              <h2>Max Speed is</h2>
              <h2 style={{ color: "var(--magenta)" }}>
                {car.speed}km/h
              </h2>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  <>
    
  </>
};

export const EvenFile = (data) => <>{showData(data)}</>;

