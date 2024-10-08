import { useNavigate } from "react-router-dom";
import { Input, Timeline } from "antd";

import { TIMELINE_ITEMS } from "./constants";

export default function Dashboard() {
  const handleSearch = (value: string) => {
    const capitalizedValue = value.toUpperCase();
    const url = `https://prp.pilgrimdb.org/web/pilgrim-search?q=${capitalizedValue}`;
    window.location.href = url;
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col w-full h-full p-4 align-middle gap-y-6 md:w-3/4 lg:w-1/2 md:p-6 lg:p-8">
        <Input.Search
          allowClear
          className="mb-8"
          placeholder="অনুসন্ধান করুন"
          onSearch={handleSearch}
        />

        <Timeline mode="left" items={TIMELINE_ITEMS} />
      </div>
    </div>
  );
}
