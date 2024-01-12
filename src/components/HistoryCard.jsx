const HistoryCard = ({ data, selectedMonth }) => {
  const month = selectedMonth.toLowerCase();
  return (
    <div>
      <div className={selectedMonth}>
        <div className="bg-[#1D1D1D] p-4 rounded-lg mt-6">
          <div className="historyCard flex justify-between ">
            <div className="month flex space-x-4 item-center my-auto ">
              <h1 className="text-xl font-semibold">{selectedMonth}</h1>

              <div className="div flex gap-x-[0.30rem] mt-1">
                <h2 className="my-auto text-xs ">
                  {`${month}_date` !== "" || `${month}_date` !== null
                    ? data[`${month}_date`]
                    : null}
                </h2>

                {/* <div className="paidVia text-xs my-auto mb-1">Cash</div> */}
                {data[`${month}_paid_via`] &&
                  (data[`${month}_date`] !== null &&
                  data[`${month}_date`] !== "" ? (
                    data[`${month}_paid_via`] === "cash" ? (
                      <>
                        <div className="paidVia text-[0.9rem]">.</div>
                        <img
                          className="h-3 my-auto rounded-sm"
                          src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/6597de0b66025cd6d30e9f00_cash.png"
                          alt="paidVia"
                        />
                      </>
                    ) : (
                      <>
                        <div className="paidVia text-[0.9rem]">.</div>
                        <img
                          className="h-3 my-auto rounded-sm"
                          src="https://assets-global.website-files.com/64c4b66a44c38c5fa4309e5a/6597de0b92f6d5d91068a123_gPay.png"
                          alt="paidVia"
                        />
                      </>
                    )
                  ) : null)}
              </div>
            </div>
            <div className="status flex">
              {data[month] === "" || null ? (
                <div className="btn bg-red-500 text-lg text-white px-4 py-1 rounded-lg">
                  UNPAID
                </div>
              ) : (
                <div className="btn bg-green-500 text-lg text-white px-4 py-1 rounded-lg">
                  ₹&nbsp;{data[month]}
                </div>
              )}
            </div>
          </div>
          <div className="BalORAdv flex mt-2">
            {data[`${month}_advance`] && data[`${month}_advance`] !== "" ? (
              <div className="advance">
                <span className="text-green-500">Advance:</span>&nbsp; ₹
                {data[`${month}_advance`]}
              </div>
            ) : data[`${month}_balance`] && data[`${month}_balance`] !== "" ? (
              <div className="balance">
                <span className="text-red-500">Balance:</span>&nbsp; ₹
                {data[`${month}_balance`]}
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
