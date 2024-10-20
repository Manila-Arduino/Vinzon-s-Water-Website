import DataBoxes from "@/components/custom/DataBoxes";
import HomeSection from "@/components/custom/HomeSection";
import MiniIcon from "@/components/custom/MiniIcon";
import Maps from "@/components/templates/Maps";
import PageContainer from "@/components/templates/PageContainer";
import Txt from "@/components/templates/Txt";
import { useContext } from "react";
import { FHContext } from "../templates/FH_Wrapper";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = ({}) => {
  const { device } = useContext(FHContext);
  return (
    <PageContainer>
      <div className="flex flex-col items-center gap-14">
        {/*//! BEFORE */}
        <HomeSection title="Before Filter">
          <DataBoxes
            ph={device?.ph_1}
            temperature={device?.temp_1}
            turbidity={device?.turb_1}
            tds={Math.floor(device?.tds_1 ?? 0)}
          />
        </HomeSection>

        {/*//! AFTER */}
        <HomeSection title="After Filter">
          <DataBoxes
            ph={device?.ph_2}
            temperature={device?.temp_2}
            turbidity={device?.turb_2}
            tds={Math.floor(device?.tds_2 ?? 0)}
          />
        </HomeSection>
      </div>
    </PageContainer>
  );
};

export default MainPage;
