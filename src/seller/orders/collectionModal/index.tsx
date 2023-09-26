import { TextField } from "@mui/material";
import Uploader from "../../../utilites/imageUploader";

const CollectionModal = ({
  data,
  setData,

  file,
  setFile,
}: any) => {
  return (
    <div className="grid grid-cols-2 px-4 gap-4">
      <TextField
        variant="filled"
        value={data?.title}
        label="نام "
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />

      <div className="col-span-2 flex justify-center">
        <Uploader files={file} setFiles={setFile} />{" "}
      </div>
    </div>
  );
};

export default CollectionModal;
