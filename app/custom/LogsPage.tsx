import FH from "@/classes/FH";
import DateHelper from "@/classes/templates/DateHelper";
import ChevronLeft from "@/components/svg/icon/ChevronLeft";
import ChevronRight from "@/components/svg/icon/ChevronRight";
import PageContainer from "@/components/templates/PageContainer";
import Txt from "@/components/templates/Txt";
import { useFHPagination } from "@/hooks/useFHPagination";
import { createContext, useState } from "react";

export const LogsPageContext = createContext({
  //
});

interface LogsPageProps {}

const LogsPage: React.FC<LogsPageProps> = ({}) => {
  const logsPagination = useFHPagination(FH.Log, "id", "desc", 20, []);

  return (
    <LogsPageContext.Provider value={{}}>
      <PageContainer className="px-5 items-center">
        <div className="w-full flex flex-col items-center">
          {/*//! Logs Title */}
          <p className="text-xl font-semibold mb-4">Logs</p>

          <div className="flex flex-col gap-3">
            {/*//! Table */}
            <div
              className="w-full flex flex-col gap-1 bg-gray rounded-xl pr-3"
              style={{
                minWidth: "320px",
                maxWidth: "400px",
              }}
            >
              {/*//! Title */}
              <div className="w-full flex flex-row text-text_dark text-center font-semibold">
                <p className="opacity-0" style={{ width: "6rem" }}>
                  Date
                </p>
                <p className="opacity-50 w-32">Before Filter</p>
                <p className="opacity-0 w-5"> </p>
                <p className="opacity-50 w-32">After Filter</p>
              </div>

              {/*//! Subtitle */}
              <div className="w-full flex flex-row text-text_dark text-center font-semibold text-xs">
                <p style={{ width: "6rem" }}>Date</p>
                <p className="w-8">pH</p>
                <p className="w-8">Temp</p>
                <p className="w-8">Turb</p>
                <p className="w-8">TDS</p>
                <p className="w-5"></p>
                <p className="w-8">pH</p>
                <p className="w-8">Temp</p>
                <p className="w-8">Turb</p>
                <p className="w-8">TDS</p>
              </div>

              {/*//! DATA */}
              {logsPagination.data.map((log) => (
                <div
                  className="w-full flex flex-row text-text_dark text-center font-light text-xs"
                  key={log.id}
                >
                  <p style={{ width: "6rem", fontSize: "0.6rem" }}>
                    {DateHelper.epochSecondsToDate(Number(log.id))}
                  </p>
                  <p className="w-8">{log.ph_1}</p>
                  <p className="w-8">{log.temp_1}</p>
                  <p className="w-8">{log.turb_1}</p>
                  <p className="w-8">{Math.floor(log.tds_1 ?? 0)}</p>
                  <p className="w-5"></p>
                  <p className="w-8">{log.ph_2}</p>
                  <p className="w-8">{log.temp_2}</p>
                  <p className="w-8">{log.turb_2}</p>
                  <p className="w-8">{Math.floor(log.tds_2 ?? 0)}</p>
                </div>
              ))}

              {/*//! Next Page Number */}
              <div className="flex gap-4 items-center mt-10 m-auto pb-4">
                <ChevronLeft
                  color="#004382"
                  onClick={logsPagination.prev}
                  disabled={!logsPagination.hasPrev || logsPagination.loading}
                />
                <p className="text-text_dark">{logsPagination.pageNum}</p>
                <ChevronRight
                  color="#004382"
                  onClick={logsPagination.next}
                  disabled={!logsPagination.hasNext || logsPagination.loading}
                />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </LogsPageContext.Provider>
  );
};

export default LogsPage;
