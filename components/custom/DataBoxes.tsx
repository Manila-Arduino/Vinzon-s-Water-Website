import { FHContext } from "@/app/templates/FH_Wrapper";
import { useContext } from "react";
import HorizontalDataBox from "../templates/HorizontalDataBox";
import TemperatureIcon from "./TemperatureIcon";
import PhIcon from "./PhIcon";
import TDSIcon from "./TDSIcon";
import TurbidityIcon from "./TurbidityIcon";

interface DataBoxesProps {
  ph: number | undefined;
  temperature: number | undefined;
  turbidity: number | undefined;
  tds: number | undefined;
}

const DataBoxes: React.FC<DataBoxesProps> = ({
  ph,
  temperature,
  turbidity,
  tds,
}) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex gap-6">
        <HorizontalDataBox
          title="pH"
          data={ph ?? 0}
          unit=""
          icon={<PhIcon />}
        />
        <HorizontalDataBox
          title="Temperature"
          data={temperature ?? 0}
          unit="°C"
          icon={<TemperatureIcon />}
        />
      </div>
      <div className="flex gap-6">
        <HorizontalDataBox
          title="Turbidity"
          data={turbidity ?? 0}
          unit="ntu"
          icon={<TurbidityIcon />}
        />
        <HorizontalDataBox
          title="TDS"
          data={tds ?? 0}
          unit="ppm"
          icon={<TDSIcon />}
        />
      </div>
    </div>
  );
};

export default DataBoxes;
