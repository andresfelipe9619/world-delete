import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { dateFormatter } from "../../utils";
import { renderCell } from "./renders";

export default function PerformancesTable({ data, handleView }) {
  const columns = [
    {
      field: "actions",
      type: "actions",
      getActions: (params) =>
        params?.row?.document
          ? [
              <GridActionsCellItem
                icon={<FilePresentIcon />}
                onClick={handleView(params?.row?.document?.id)}
                label="View"
              />,
            ]
          : [],
    },
    {
      field: "date",
      headerName: "Fecha Actuación",
      type: "dateTime",
      valueFormatter: dateFormatter,
      valueGetter: ({ value }) => value && new Date(value),
      width: 200,
    },
    { field: "title", headerName: "Actuación", width: 250 },
    {
      field: "note",
      headerName: "Anotación",

      width: 420,
    },
    {
      field: "startDate",
      headerName: "Fecha Inicial",
      type: "dateTime",
      valueFormatter: dateFormatter,
      valueGetter: ({ value }) => value && new Date(value),
      width: 200,
    },
    {
      field: "endDate",
      headerName: "Fecha Final",
      type: "dateTime",
      valueFormatter: dateFormatter,
      valueGetter: ({ value }) => value && new Date(value),
      width: 200,
    },
    {
      field: "registerDate",
      headerName: "Fecha Registro",
      type: "dateTime",
      valueFormatter: dateFormatter,
      valueGetter: ({ value }) => value && new Date(value),
      width: 200,
    },
  ];

  return (
    <div style={{ height: 680, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns.map((c) => ({
          ...c,
          ...(c.type !== "actions" ? { renderCell } : null),
        }))}
      />
    </div>
  );
}
