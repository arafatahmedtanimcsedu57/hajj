import { Button, Timeline, Typography, Spin } from "antd";
import { TIMELINE_ITEMS } from "./constants";
import { selectUser } from "../../store/features/userSlice";
import { useAppSelector } from "../../store";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAppSelector(selectUser);

  const handleSearch = (value: string) => {
    const capitalizedValue = value.toUpperCase();
    const url = `https://prp.pilgrimdb.org/web/pilgrim-search?q=${capitalizedValue}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setTrackingNumber(parsedUserData.tracking_number);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin spinning={loading} size="large" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full p-4 align-middle gap-y-6 md:w-3/4 lg:w-1/2 md:p-6 lg:p-8">
        <Typography.Title level={4}>
          আপনার ট্র্যাকিং ID
          <Button
            size="large"
            className="px-2 text-xl"
            type="link"
            onClick={() => handleSearch(trackingNumber || "")}
          >
            {trackingNumber}
          </Button>
        </Typography.Title>

        <Timeline mode="left" items={TIMELINE_ITEMS} />
      </div>
    </div>
  );
}
