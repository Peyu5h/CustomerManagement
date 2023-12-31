const HistoryCard = ({ data }) => {
  return (
    <div>
      <div className="January">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">January</h1>
              <h2 className="my-auto text-sm mt-1">29/1/2023</h2>
            </div>
            {data.january == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.january}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.january_adv && data.january_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.january_adv}
              </div>
            ) : data.january_bal && data.january_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.january_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="February">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">February</h1>
              <h2 className="my-auto text-sm mt-1">28/2/2023</h2>
            </div>
            {data.february == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.february}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.february_adv && data.february_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.february_adv}
              </div>
            ) : data.february_bal && data.february_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.february_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="March">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">March</h1>
              <h2 className="my-auto text-sm mt-1">31/3/2023</h2>
            </div>
            {data.march == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.march}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.march_adv && data.march_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.march_adv}
              </div>
            ) : data.march_bal && data.march_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.march_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="April">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">April</h1>
              <h2 className="my-auto text-sm mt-1">30/4/2023</h2>
            </div>
            {data.april == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.april}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.april_adv && data.april_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.april_adv}
              </div>
            ) : data.april_bal && data.april_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.april_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="May">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">May</h1>
              <h2 className="my-auto text-sm mt-1">31/5/2023</h2>
            </div>
            {data.may == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.may}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.may_adv && data.may_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.may_adv}
              </div>
            ) : data.may_bal && data.may_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.may_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="June">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">June</h1>
              <h2 className="my-auto text-sm mt-1">30/6/2023</h2>
            </div>
            {data.june == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.june}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.june_adv && data.june_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.june_adv}
              </div>
            ) : data.june_bal && data.june_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.june_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="July">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">July</h1>
              <h2 className="my-auto text-sm mt-1">31/7/2023</h2>
            </div>
            {data.july == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.july}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.july_adv && data.july_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.july_adv}
              </div>
            ) : data.july_bal && data.july_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.july_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="August">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">August</h1>
              <h2 className="my-auto text-sm mt-1">31/8/2023</h2>
            </div>
            {data.august == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.august}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.august_adv && data.august_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.august_adv}
              </div>
            ) : data.august_bal && data.august_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.august_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="September">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">September</h1>
              <h2 className="my-auto text-sm mt-1">30/9/2023</h2>
            </div>
            {data.september == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.september}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.september_adv && data.september_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.september_adv}
              </div>
            ) : data.september_bal && data.september_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.september_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="October">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">October</h1>
              <h2 className="my-auto text-sm mt-1">31/10/2023</h2>
            </div>
            {data.october == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.october}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.october_adv && data.october_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.october_adv}
              </div>
            ) : data.october_bal && data.october_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.october_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="November">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">November</h1>
              <h2 className="my-auto text-sm mt-1">30/11/2023</h2>
            </div>
            {data.november == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.november}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.november_adv && data.november_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.november_adv}
              </div>
            ) : data.november_bal && data.november_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.november_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------- */}
      <div className="December">
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">December</h1>
              <h2 className="my-auto text-sm mt-1">31/12/2023</h2>
            </div>
            {data.december == "" || null ? (
              <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                UNPAID
              </div>
            ) : (
              <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                ₹&nbsp;{data.december}
              </div>
            )}
          </div>
          <div className="BalORAdv flex mt-2">
            {data.december_adv && data.december_adv !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data.december_adv}
              </div>
            ) : data.december_bal && data.december_bal !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data.december_bal}
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
