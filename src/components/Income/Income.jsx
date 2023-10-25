
const Income = () => {
  return (
    <div>
      <h2>Income</h2>
      <p>
        Last <span>30 days</span>
      </p>
      <p>$2,260</p>
      <div>
        <img src="/images/income-chart.svg" alt="" />
      </div>
      <div>
        <div>
          <h3>Your transactions (3)</h3>
          <p>
            Last <span>30 days</span>
          </p>
        </div>
        <div>
          <div>
            <p>$720</p>
            <p>1/12/22</p>
          </div>
          <div>
            <p>$560</p>
            <p>10/11/22</p>
          </div>
          <div>
            <p>$980</p>
            <p>23/11/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Income}
