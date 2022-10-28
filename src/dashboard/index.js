import DashboardControl from "devexpress-dashboard-react";
import React from "react";
import { useSearchParams } from "react-router-dom";

export const DashboardPage = () => {
  let docEntry = 10;
  let dashboardId = 1;
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
      }}
    >
      <DashboardControl
        workingMode="ViewerOnly"
        dashboardId={`${docEntry};${dashboardId}`}
        style={{ height: "100%" }}
        endpoint="https://172.16.18.169:44307/api/dashboard"
        ajaxRemoteService={{
          beforeSend: (jqXHR, settings) => {
            jqXHR.setRequestHeader("DocEntry", `${docEntry}`);
            jqXHR.setRequestHeader("DashboardId", `${dashboardId}`);
            jqXHR.setRequestHeader("UserCode", "pro61");
            jqXHR.setRequestHeader(
              "SessionId",
              "23c759a6-56a2-11ed-8000-000c29eaa296"
            );
          },
        }}
      ></DashboardControl>
    </div>
  );
};
