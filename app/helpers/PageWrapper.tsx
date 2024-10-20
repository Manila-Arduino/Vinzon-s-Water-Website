import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import MainPage from "../custom/MainPage";
//! /* Add Pages Here */
import LogsPage from "../custom/LogsPage";
import Overlay from "@/components/templates/Overlay";
import Footer from "@/components/templates/Footer";
import DashboardIcon from "@/components/custom/DashboardIcon";
import LogsIcon from "@/components/custom/LogsIcon";

//? ----------------------
//? PAGES
//? BOTTOM SHEETS
//? ----------------------

export const enum Pages {
  Main,
  Logs,
}

export const PageWrapperContext = createContext({
  page: Pages.Main,
  setPage: {} as Dispatch<SetStateAction<Pages>>,
  overlay: null as ReactNode | null,
  setOverlay: {} as Dispatch<SetStateAction<ReactNode | null>>,
});

interface PageWrapperProps {}

const PageWrapper: React.FC<PageWrapperProps> = ({}) => {
  //! OVERLAY
  const [overlay, setOverlay] = useState<ReactNode | null>(null);

  //! Page
  const [page, setPage] = useState<Pages>(Pages.Main);

  return (
    <PageWrapperContext.Provider
      value={{
        page,
        setPage,
        overlay,
        setOverlay,
      }}
    >
      <Footer
        className=""
        pages={{
          [Pages.Main]: <DashboardIcon />,
          [Pages.Logs]: <LogsIcon />,
        }}
      />

      <div className="w-full h-full overflow-y-auto">
        {page === Pages.Main && <MainPage />}
        {/*//! Add Page Mapping Here */}
        {page === Pages.Logs && <LogsPage />}
      </div>
      {overlay && <Overlay setOverlay={setOverlay}>{overlay}</Overlay>}
    </PageWrapperContext.Provider>
  );
};

export default PageWrapper;
