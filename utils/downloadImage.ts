import { DownloadImage } from "@/types";
import FileSaver from "file-saver";

export const downloadImage = ({ _id, photo }: DownloadImage) => {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
};
