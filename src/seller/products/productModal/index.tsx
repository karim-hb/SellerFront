import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Uploader from "../../../utilites/imageUploader";

const ProductModal = ({ data, setData, allColloceton, file, setFile }: any) => {
  return (
    <div className="grid grid-cols-2 px-4 gap-4">
      <TextField
        variant="filled"
        value={data?.title}
        label="نام غذا"
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <FormControl className="filled_selectTag" fullWidth>
        <InputLabel id="category-store"> دسته بندی</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label=" دسته بندی "
          variant="filled"
          value={data?.collection}
          onChange={(e) => setData({ ...data, collection: e.target.value })}
        >
          {allColloceton?.map((item: any) => (
            <MenuItem value={item?.id}> {item?.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        variant="filled"
        value={data?.price}
        label="قیمت پس از تخفیف"
        onChange={(e) => setData({ ...data, price: Number(e.target.value) })}
      />
      <TextField
        variant="filled"
        value={data?.unit_price}
        label="قیمت"
        onChange={(e) =>
          setData({ ...data, unit_price: Number(e.target.value) })
        }
      />
      <TextField
        variant="filled"
        value={data?.inventory}
        label="موجودی"
        onChange={(e) =>
          setData({ ...data, inventory: Number(e.target.value) })
        }
      />
      <TextField
        variant="filled"
        value={data?.max_buy}
        label="حداکثر تعداد خرید"
        onChange={(e) => setData({ ...data, max_buy: Number(e.target.value) })}
      />
      <div className="col-span-2">
        <TextField
          variant="filled"
          value={data?.description}
          label="توضیحات"
          multiline
          rows={3}
          fullWidth
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
      </div>{" "}
      <div className="col-span-2 flex justify-center">
        <Uploader files={file} setFiles={setFile} />{" "}
      </div>
    </div>
  );
};

export default ProductModal;
