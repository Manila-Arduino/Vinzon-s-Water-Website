import { Device } from "../../classes/Device";
import { Log } from "../../classes/Log";
import Doc from "./classes/Doc";
// import updateChart from "./custom/updateChart";
// import updateLogs from "./custom/updateLogs";
import initialize from "./functions/initialize";
import { setDoc } from "./functions/setDoc";

initialize();

const deviceDoc = new Doc("device/readings", {} as Device);

exports.deviceDocUpdated = deviceDoc.updated(
  async (oldData, newData, params) => {
    if (oldData.timestamp === newData.timestamp) return;

    setDoc<Log>(`logs/${newData.timestamp}`, {
      id: String(newData.timestamp),
      isActivated: newData.isActivated,
      ph_1: newData.ph_1,
      temp_1: newData.temp_1,
      turb_1: newData.turb_1,
      tds_1: newData.tds_1,
      ph_2: newData.ph_2,
      temp_2: newData.temp_2,
      turb_2: newData.turb_2,
      tds_2: newData.tds_2,
    });

    // updateChart(oldData, newData);
    // updateLogs(oldData, newData);
  }
);
