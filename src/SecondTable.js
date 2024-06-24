import { Table } from "@mantine/core";
import { data } from "./data";

function SecondTable() {
  const cropAverages = {};

  data.forEach((crop) => {
    if (!cropAverages[crop["Crop Name"]]) {
      cropAverages[crop["Crop Name"]] = { yieldSum: 0, areaSum: 0, count: 0 };
    }
    cropAverages[crop["Crop Name"]].yieldSum +=
      Number(crop["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0;
    cropAverages[crop["Crop Name"]].areaSum +=
      Number(crop["Area Under Cultivation (UOM:Ha(Hectares))"]) || 0;
    cropAverages[crop["Crop Name"]].count += 1;
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Crop</Table.Th>
          <Table.Th>Average Yield 1950-2020</Table.Th>
          <Table.Th>Average Cultivation Area 1950-2020</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {Object.entries(cropAverages).map(([cropName, data]) => (
          <Table.Tr key={cropName}>
            <Table.Td>{cropName}</Table.Td>
            <Table.Td>{(data.yieldSum / data.count).toFixed(3)}</Table.Td>
            <Table.Td>{(data.areaSum / data.count).toFixed(3)}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export default SecondTable;
